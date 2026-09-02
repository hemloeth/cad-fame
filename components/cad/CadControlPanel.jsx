"use client";

import React from "react";
import { 
  Sliders, 
  Layers, 
  Sparkles, 
  DownloadCloud, 
  FileText, 
  CheckCircle2, 
  ShieldAlert,
  Zap,
  Weight,
  Cpu,
  DollarSign
} from "lucide-react";
import Slider from "@/components/ui/Slider";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { PROFILE_TYPES, MATERIAL_GRADES } from "@/lib/cad-data";
import { calculateStructuralSpecs, formatNumber } from "@/lib/utils";

export default function CadControlPanel({
  dimensions,
  onDimensionChange,
  selectedProfile,
  onProfileChange,
  selectedMaterial,
  onMaterialChange,
  onOpenExport,
  onOpenQuote,
}) {
  const specs = calculateStructuralSpecs(dimensions, selectedProfile, selectedMaterial);

  return (
    <div className="space-y-6">
      {/* Parametric Dimension Sliders */}
      <Card className="p-5 border-slate-800 bg-[#0c0f17]/95">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-sky-400" />
            <h3 className="text-sm font-semibold text-slate-100">Parametric Dimensions</h3>
          </div>
          <Badge variant="mono" size="sm">
            ISO Metric (mm)
          </Badge>
        </div>

        <div className="space-y-4">
          <Slider
            label="Span Width (X-Axis)"
            value={dimensions.width}
            min={2000}
            max={18000}
            step={250}
            unit="mm"
            onChange={(val) => onDimensionChange({ ...dimensions, width: val })}
            description="Clear structural portal span length"
          />

          <Slider
            label="Bay Depth (Z-Axis)"
            value={dimensions.depth}
            min={1500}
            max={12000}
            step={250}
            unit="mm"
            onChange={(val) => onDimensionChange({ ...dimensions, depth: val })}
            description="Longitudinal building depth"
          />

          <Slider
            label="Clear Height (Y-Axis)"
            value={dimensions.height}
            min={1800}
            max={8000}
            step={200}
            unit="mm"
            onChange={(val) => onDimensionChange({ ...dimensions, height: val })}
            description="Eaves clearance under primary rafter"
          />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Slider
              label="Columns (Bays X)"
              value={dimensions.baysX}
              min={1}
              max={6}
              step={1}
              onChange={(val) => onDimensionChange({ ...dimensions, baysX: val })}
            />
            <Slider
              label="Bays (Z-Axis)"
              value={dimensions.baysZ}
              min={1}
              max={5}
              step={1}
              onChange={(val) => onDimensionChange({ ...dimensions, baysZ: val })}
            />
          </div>
        </div>
      </Card>

      {/* Structural Profile Catalog */}
      <Card className="p-5 border-slate-800 bg-[#0c0f17]/95">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            <h3 className="text-sm font-semibold text-slate-100">Cross-Section Profile</h3>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            {PROFILE_TYPES.length} Standards
          </span>
        </div>

        <div className="space-y-2">
          {PROFILE_TYPES.map((prof) => {
            const isSelected = selectedProfile?.id === prof.id;
            return (
              <div
                key={prof.id}
                onClick={() => onProfileChange(prof)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-sky-500/10 border-sky-500/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold ${isSelected ? "text-sky-300" : "text-slate-200"}`}>
                    {prof.name}
                  </span>
                  <Badge variant={isSelected ? "sky" : "default"} size="sm">
                    {prof.badge}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>{prof.dimensions}</span>
                  <span className="text-slate-300">{prof.weightPerMeter} kg/m</span>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Material Grade Selection */}
      <Card className="p-5 border-slate-800 bg-[#0c0f17]/95">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-400" />
            <h3 className="text-sm font-semibold text-slate-100">Material Grade</h3>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Yield Strength</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {MATERIAL_GRADES.map((mat) => {
            const isSelected = selectedMaterial?.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => onMaterialChange(mat)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-sky-500/15 border-sky-500/60 shadow-[0_0_15px_rgba(56,189,248,0.12)]"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
                }`}
              >
                <div className="text-xs font-semibold text-slate-200 truncate">{mat.name}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{mat.yieldStrength} MPa</div>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Real-time Engineering Telemetry & Specs */}
      <Card className="p-5 border-sky-500/30 bg-gradient-to-b from-sky-950/20 to-[#0c0f17]">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-sky-400" />
            <h3 className="text-sm font-semibold text-slate-100">Live Engineering Telemetry</h3>
          </div>
          <Badge variant="emerald" size="sm" dot>
            Passed Eurocode 3
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1.5 mb-1">
              <Weight className="w-3.5 h-3.5 text-sky-400" />
              <span>Total Mass</span>
            </div>
            <div className="text-lg font-mono font-bold text-slate-100">
              {formatNumber(specs.totalWeightKg, 0)} <span className="text-xs font-normal text-slate-400">kg</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              {specs.totalLinearMeters}m structural steel
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1.5 mb-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Safe Load Capacity</span>
            </div>
            <div className="text-lg font-mono font-bold text-emerald-400">
              {specs.maxSafeLoadKN} <span className="text-xs font-normal text-slate-400">kN</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              Deflection: {specs.maxDeflectionMm}mm (L/600)
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Total Members</span>
            </div>
            <div className="text-lg font-mono font-bold text-slate-100">
              {specs.memberCount} <span className="text-xs font-normal text-slate-400">parts</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              {specs.jointCount} welded/bolted joints
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1.5 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-sky-400" />
              <span>Est. Fabrication</span>
            </div>
            <div className="text-lg font-mono font-bold text-sky-300">
              ${formatNumber(specs.estimatedCost, 0)}
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">
              Material + CNC machining
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          <Button
            variant="primary"
            size="md"
            className="w-full justify-center"
            icon={DownloadCloud}
            onClick={onOpenExport}
          >
            Export STEP / DXF / IFC
          </Button>

          <Button
            variant="outline"
            size="md"
            className="w-full justify-center"
            icon={FileText}
            onClick={onOpenQuote}
          >
            Get Manufacturer Quote
          </Button>
        </div>
      </Card>
    </div>
  );
}
