"use client";

import React, { useState } from "react";
import { 
  Box, 
  Sparkles, 
  Layers, 
  Zap, 
  Activity, 
  DownloadCloud, 
  Sliders, 
  Maximize2,
  CheckCircle2,
  RotateCcw
} from "lucide-react";
import CadViewport from "@/components/cad/CadViewport";
import CadControlPanel from "@/components/cad/CadControlPanel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PROFILE_TYPES, MATERIAL_GRADES, CAD_TEMPLATES } from "@/lib/cad-data";

export default function InteractiveDemoSection({ onOpenExport, onOpenQuote }) {
  const [activeTemplate, setActiveTemplate] = useState(CAD_TEMPLATES[0].id);
  const [dimensions, setDimensions] = useState({
    width: 6000,
    depth: 4000,
    height: 3200,
    baysX: 2,
    baysZ: 2,
  });
  const [selectedProfile, setSelectedProfile] = useState(PROFILE_TYPES[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIAL_GRADES[0]);
  const [viewMode, setViewMode] = useState("shaded");
  const [showLoads, setShowLoads] = useState(false);

  const handleApplyTemplate = (tmpl) => {
    setActiveTemplate(tmpl.id);
    setDimensions(tmpl.dimensions);
    const prof = PROFILE_TYPES.find((p) => p.id === tmpl.profile) || PROFILE_TYPES[0];
    const mat = MATERIAL_GRADES.find((m) => m.id === tmpl.material) || MATERIAL_GRADES[0];
    setSelectedProfile(prof);
    setSelectedMaterial(mat);
  };

  return (
    <section id="studio" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="sky" size="md" icon={Sparkles} className="mb-3">
            Real-Time 3D Parametric CAD Workbench
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Structural Framing Studio
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Adjust parametric spans, switch structural cross-sections, and run live Euler-Bernoulli deflection analysis with instant solid geometry rendering.
          </p>
        </div>

        {/* Preset Templates Selector Bar */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3 p-3 bg-slate-900/80 rounded-2xl border border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider pl-2">
              Engineering Templates:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CAD_TEMPLATES.map((tmpl) => {
              const isSelected = activeTemplate === tmpl.id;
              return (
                <button
                  key={tmpl.id}
                  onClick={() => handleApplyTemplate(tmpl)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-sky-500 text-slate-950 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                      : "bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  {tmpl.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 3D Canvas + Control Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 3D Viewport Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <CadViewport
              dimensions={dimensions}
              profile={selectedProfile}
              material={selectedMaterial}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              showLoads={showLoads}
              onToggleLoads={() => setShowLoads(!showLoads)}
            />

            {/* Viewport Feature Highlights */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">Exact STEP B-Rep Solid Topology</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Continuous Deflection & Stress Check</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">Mitre Angle & CNC Hole Nesting</span>
              </div>
            </div>
          </div>

          {/* Controls & Telemetry Column */}
          <div className="lg:col-span-5 xl:col-span-4">
            <CadControlPanel
              dimensions={dimensions}
              onDimensionChange={setDimensions}
              selectedProfile={selectedProfile}
              onProfileChange={setSelectedProfile}
              selectedMaterial={selectedMaterial}
              onMaterialChange={setSelectedMaterial}
              onOpenExport={onOpenExport}
              onOpenQuote={onOpenQuote}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
