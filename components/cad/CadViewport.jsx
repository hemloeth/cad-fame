"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { 
  RotateCcw, 
  Maximize2, 
  Camera, 
  Layers, 
  Eye, 
  Activity, 
  Grid, 
  Sparkles,
  Zap,
  Info,
  Sliders
} from "lucide-react";
import Tabs from "@/components/ui/Tabs";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function CadViewport({
  dimensions,
  profile,
  material,
  viewMode = "shaded",
  onViewModeChange,
  showLoads = false,
  onToggleLoads,
  className,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // 3D Orbit Camera State
  const [rotation, setRotation] = useState({ x: 0.55, y: -0.75 });
  const [zoom, setZoom] = useState(1.0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [dragMode, setDragMode] = useState("rotate"); // 'rotate' or 'pan'
  const [copiedNotification, setCopiedNotification] = useState(false);

  const resetCamera = () => {
    setRotation({ x: 0.55, y: -0.75 });
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragMode(e.button === 2 || e.shiftKey ? "pan" : "rotate");
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    setLastMouse({ x: e.clientX, y: e.clientY });

    if (dragMode === "rotate") {
      setRotation((prev) => ({
        x: Math.max(-1.4, Math.min(1.4, prev.x + dy * 0.008)),
        y: prev.y + dx * 0.008,
      }));
    } else {
      setPan((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    setZoom((prev) => Math.max(0.4, Math.min(2.8, prev * zoomFactor)));
  };

  const captureSnapshot = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `cadfames-frame-${dimensions.width}x${dimensions.depth}x${dimensions.height}.png`;
    link.href = dataUrl;
    link.click();
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  // 3D Rendering Pipeline on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Clear background
    ctx.fillStyle = "#0a0d14";
    ctx.fillRect(0, 0, width, height);

    // Render CAD Blueprint Ground Grid
    const cx = width / 2 + pan.x;
    const cy = height / 2 + pan.y + 40;

    // 3D Projection math
    const project3D = (x, y, z) => {
      // Normalize model dimensions into viewing space [-150, 150]
      const maxDim = Math.max(dimensions.width, dimensions.depth, dimensions.height);
      const scale = (280 / maxDim) * zoom;

      // Center model
      const nx = (x - dimensions.width / 2) * scale;
      const ny = -(y - dimensions.height / 2) * scale; // Y is up in 3D
      const nz = (z - dimensions.depth / 2) * scale;

      // Rotation around X (Pitch)
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const y1 = ny * cosX - nz * sinX;
      const z1 = ny * sinX + nz * cosX;

      // Rotation around Y (Yaw)
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);
      const x2 = nx * cosY + z1 * sinY;
      const z2 = -nx * sinY + z1 * cosY;

      // Perspective projection
      const cameraDistance = 600;
      const fov = cameraDistance / (cameraDistance + z2);

      return {
        x: cx + x2 * fov,
        y: cy - y1 * fov,
        z: z2,
        scale: fov,
      };
    };

    // 1. Draw 3D Ground Shadow & Grid
    ctx.save();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
    ctx.lineWidth = 1;
    const gridSpan = 1.5;
    const gridStep = 8;
    for (let i = -gridStep; i <= gridStep; i++) {
      const gx1 = -dimensions.width * gridSpan * 0.5 + (i / gridStep) * dimensions.width * gridSpan;
      const p1 = project3D(gx1 + dimensions.width / 2, 0, -dimensions.depth * gridSpan * 0.5 + dimensions.depth / 2);
      const p2 = project3D(gx1 + dimensions.width / 2, 0, dimensions.depth * gridSpan * 0.5 + dimensions.depth / 2);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      const gz1 = -dimensions.depth * gridSpan * 0.5 + (i / gridStep) * dimensions.depth * gridSpan;
      const p3 = project3D(-dimensions.width * gridSpan * 0.5 + dimensions.width / 2, 0, gz1 + dimensions.depth / 2);
      const p4 = project3D(dimensions.width * gridSpan * 0.5 + dimensions.width / 2, 0, gz1 + dimensions.depth / 2);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Generate Structural Nodes and Beams
    const baysX = dimensions.baysX || 2;
    const baysZ = dimensions.baysZ || 2;
    const stepX = dimensions.width / baysX;
    const stepZ = dimensions.depth / baysZ;

    const beams = [];
    const nodes = [];

    // Columns
    for (let ix = 0; ix <= baysX; ix++) {
      for (let iz = 0; iz <= baysZ; iz++) {
        const x = ix * stepX;
        const z = iz * stepZ;
        nodes.push({ x, y: 0, z, isBase: true });
        nodes.push({ x, y: dimensions.height, z, isBase: false });
        beams.push({
          type: "column",
          start: { x, y: 0, z },
          end: { x, y: dimensions.height, z },
          loadIndex: 0.3,
        });
      }
    }

    // Top Perimeter & Joist Beams (X direction)
    for (let iz = 0; iz <= baysZ; iz++) {
      const z = iz * stepZ;
      for (let ix = 0; ix < baysX; ix++) {
        const x1 = ix * stepX;
        const x2 = (ix + 1) * stepX;
        beams.push({
          type: "beamX",
          start: { x: x1, y: dimensions.height, z },
          end: { x: x2, y: dimensions.height, z },
          loadIndex: iz === 0 || iz === baysZ ? 0.75 : 0.95, // Center beams carry more UDL
        });
      }
    }

    // Top Perimeter & Joist Beams (Z direction)
    for (let ix = 0; ix <= baysX; ix++) {
      const x = ix * stepX;
      for (let iz = 0; iz < baysZ; iz++) {
        const z1 = iz * stepZ;
        const z2 = (iz + 1) * stepZ;
        beams.push({
          type: "beamZ",
          start: { x, y: dimensions.height, z: z1 },
          end: { x, y: dimensions.height, z: z2 },
          loadIndex: ix === 0 || ix === baysX ? 0.6 : 0.85,
        });
      }
    }

    // Cross-bracing in rear & side bays
    beams.push({
      type: "brace",
      start: { x: 0, y: 0, z: 0 },
      end: { x: stepX, y: dimensions.height, z: 0 },
      loadIndex: 0.45,
    });
    beams.push({
      type: "brace",
      start: { x: stepX, y: 0, z: 0 },
      end: { x: 0, y: dimensions.height, z: 0 },
      loadIndex: 0.45,
    });

    if (baysX >= 2) {
      beams.push({
        type: "brace",
        start: { x: dimensions.width - stepX, y: 0, z: dimensions.depth },
        end: { x: dimensions.width, y: dimensions.height, z: dimensions.depth },
        loadIndex: 0.45,
      });
      beams.push({
        type: "brace",
        start: { x: dimensions.width, y: 0, z: dimensions.depth },
        end: { x: dimensions.width - stepX, y: dimensions.height, z: dimensions.depth },
        loadIndex: 0.45,
      });
    }

    // Sort beams by average projected Z depth (Painter's algorithm)
    const sortedBeams = beams.map((b) => {
      const p1 = project3D(b.start.x, b.start.y, b.start.z);
      const p2 = project3D(b.end.x, b.end.y, b.end.z);
      return {
        ...b,
        p1,
        p2,
        avgZ: (p1.z + p2.z) / 2,
      };
    }).sort((a, b) => b.avgZ - a.avgZ);

    // Render Beams
    sortedBeams.forEach((b) => {
      const { p1, p2, type, loadIndex } = b;

      ctx.save();

      if (viewMode === "fea") {
        // Finite Element Heatmap (Blue -> Cyan -> Yellow -> Red)
        let strokeColor = "#38bdf8";
        if (loadIndex > 0.8) strokeColor = "#ef4444";
        else if (loadIndex > 0.65) strokeColor = "#f59e0b";
        else if (loadIndex > 0.4) strokeColor = "#10b981";

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = type === "column" ? 5 * p1.scale : 4 * p1.scale;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Glow
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 10 * p1.scale;
        ctx.globalAlpha = 0.25;
        ctx.stroke();
      } else if (viewMode === "wireframe") {
        // Pure Technical Wireframe
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = type === "column" ? 2 : 1.5;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Centerline dashed style for beams
        ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      } else if (viewMode === "schematic") {
        // Technical Blueprint Mode
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2 * p1.scale;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      } else {
        // Shaded Solid Mode (realistic CAD beam extrusion appearance)
        const baseColor = material?.color || "#94a3b8";
        const isColumn = type === "column";
        
        // Outer member shadow
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = (isColumn ? 8 : 6) * p1.scale;
        ctx.lineCap = "square";
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Structural Solid Body
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        gradient.addColorStop(0, baseColor);
        gradient.addColorStop(0.5, "#e2e8f0");
        gradient.addColorStop(1, baseColor);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = (isColumn ? 6 : 4.5) * p1.scale;
        ctx.stroke();

        // Highlight stroke edge
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 1 * p1.scale;
        ctx.beginPath();
        ctx.moveTo(p1.x - 1, p1.y - 1);
        ctx.lineTo(p2.x - 1, p2.y - 1);
        ctx.stroke();
      }

      ctx.restore();
    });

    // 3. Render Joint Nodes (Gussets / Bolts)
    nodes.forEach((n) => {
      const p = project3D(n.x, n.y, n.z);
      ctx.save();
      
      if (n.isBase) {
        // Foundation Anchor Plate
        ctx.fillStyle = "#334155";
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5 * p.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        // Structural Bolted Knee Joint
        ctx.fillStyle = viewMode === "fea" ? "#f59e0b" : "#38bdf8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, (viewMode === "wireframe" ? 3 : 4) * p.scale, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow ring
        ctx.strokeStyle = "rgba(56, 189, 248, 0.6)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 7 * p.scale, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    });

    // 4. Render Dimension Callout Annotations (Blueprint style)
    if (viewMode === "schematic" || viewMode === "shaded") {
      ctx.save();
      ctx.font = "10px monospace";
      ctx.fillStyle = "#38bdf8";
      ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
      ctx.lineWidth = 1;

      // Width Dimension Callout (Front base)
      const pW1 = project3D(0, 0, dimensions.depth);
      const pW2 = project3D(dimensions.width, 0, dimensions.depth);
      const offsetW = 25;

      ctx.beginPath();
      ctx.moveTo(pW1.x, pW1.y + offsetW);
      ctx.lineTo(pW2.x, pW2.y + offsetW);
      // Ticks
      ctx.moveTo(pW1.x, pW1.y + offsetW - 4);
      ctx.lineTo(pW1.x, pW1.y + offsetW + 4);
      ctx.moveTo(pW2.x, pW2.y + offsetW - 4);
      ctx.lineTo(pW2.x, pW2.y + offsetW + 4);
      ctx.stroke();

      const midWx = (pW1.x + pW2.x) / 2;
      const midWy = (pW1.y + pW2.y) / 2 + offsetW - 4;
      ctx.fillText(`W: ${dimensions.width} mm`, midWx - 35, midWy);

      // Height Dimension Callout (Left Column)
      const pH1 = project3D(0, 0, dimensions.depth);
      const pH2 = project3D(0, dimensions.height, dimensions.depth);
      const offsetH = -25;

      ctx.beginPath();
      ctx.moveTo(pH1.x + offsetH, pH1.y);
      ctx.lineTo(pH2.x + offsetH, pH2.y);
      ctx.moveTo(pH1.x + offsetH - 4, pH1.y);
      ctx.lineTo(pH1.x + offsetH + 4, pH1.y);
      ctx.moveTo(pH2.x + offsetH - 4, pH2.y);
      ctx.lineTo(pH2.x + offsetH + 4, pH2.y);
      ctx.stroke();

      const midHx = (pH1.x + pH2.x) / 2 + offsetH - 55;
      const midHy = (pH1.y + pH2.y) / 2;
      ctx.fillText(`H: ${dimensions.height} mm`, midHx, midHy);

      // Depth Dimension Callout (Right Side)
      const pD1 = project3D(dimensions.width, 0, 0);
      const pD2 = project3D(dimensions.width, 0, dimensions.depth);
      const offsetD = 20;

      ctx.beginPath();
      ctx.moveTo(pD1.x + offsetD, pD1.y);
      ctx.lineTo(pD2.x + offsetD, pD2.y);
      ctx.stroke();
      const midDx = (pD1.x + pD2.x) / 2 + offsetD + 4;
      const midDy = (pD1.y + pD2.y) / 2;
      ctx.fillText(`D: ${dimensions.depth} mm`, midDx, midDy);

      ctx.restore();
    }

    // 5. Render Distributed Load Vectors (UDL Arrows) if enabled
    if (showLoads || viewMode === "fea") {
      ctx.save();
      ctx.fillStyle = "#ef4444";
      ctx.strokeStyle = "#ef4444";
      ctx.lineWidth = 1.5;

      const arrowCount = 5;
      for (let i = 0; i <= arrowCount; i++) {
        const xPos = (i / arrowCount) * dimensions.width;
        const ptTop = project3D(xPos, dimensions.height + 400, dimensions.depth / 2);
        const ptBeam = project3D(xPos, dimensions.height, dimensions.depth / 2);

        ctx.beginPath();
        ctx.moveTo(ptTop.x, ptTop.y);
        ctx.lineTo(ptBeam.x, ptBeam.y);
        ctx.stroke();

        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(ptBeam.x - 3, ptBeam.y - 6);
        ctx.lineTo(ptBeam.x, ptBeam.y);
        ctx.lineTo(ptBeam.x + 3, ptBeam.y - 6);
        ctx.fill();
      }

      const labelPos = project3D(dimensions.width / 2, dimensions.height + 550, dimensions.depth / 2);
      ctx.font = "10px monospace";
      ctx.fillStyle = "#ef4444";
      ctx.fillText("▼ UNIFORM LIVE LOAD (UDL: 4.8 kN/m²)", labelPos.x - 85, labelPos.y);
      ctx.restore();
    }
  }, [dimensions, profile, material, viewMode, rotation, zoom, pan, showLoads]);

  const viewTabs = [
    { id: "shaded", label: "3D Shaded", icon: Eye },
    { id: "wireframe", label: "Wireframe", icon: Layers },
    { id: "fea", label: "FEA Stress", icon: Activity, badge: "Live" },
    { id: "schematic", label: "Blueprint", icon: Grid },
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl overflow-hidden bg-[#090b10] border border-slate-800 shadow-2xl select-none group",
        className
      )}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="pointer-events-auto">
          <Tabs
            tabs={viewTabs}
            activeTab={viewMode}
            onChange={onViewModeChange}
            size="sm"
          />
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={onToggleLoads}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all flex items-center gap-1.5 cursor-pointer",
              showLoads || viewMode === "fea"
                ? "bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.2)]"
                : "bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500"
            )}
            title="Toggle Structural Load Vectors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{showLoads ? "Loads Active" : "Simulate Loads"}</span>
          </button>

          <button
            onClick={captureSnapshot}
            className="p-2 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700 hover:text-white hover:border-sky-500 transition-all cursor-pointer"
            title="Capture High-Res CAD PNG Snapshot"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={resetCamera}
            className="p-2 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700 hover:text-white hover:border-sky-500 transition-all cursor-pointer"
            title="Reset 3D Camera"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Snapshot Toast Feedback */}
      {copiedNotification && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 bg-emerald-500 text-slate-950 text-xs font-semibold px-4 py-2 rounded-full shadow-lg animate-in fade-in duration-200">
          ✓ CAD High-Res Screenshot Captured
        </div>
      )}

      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-[480px] sm:h-[540px] cursor-grab active:cursor-grabbing block"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />

      {/* Bottom Technical HUD Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Euler-Bernoulli FEA Core</span>
          <span className="text-slate-600">|</span>
          <span className="text-sky-400">
            {dimensions.width}×{dimensions.depth}×{dimensions.height} mm
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
          <span>Left-Click Drag: Rotate</span>
          <span className="text-slate-600">•</span>
          <span>Shift/Right-Drag: Pan</span>
          <span className="text-slate-600">•</span>
          <span>Scroll: Zoom</span>
        </div>
      </div>
    </div>
  );
}
