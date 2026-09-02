"use client";

import React from "react";
import { 
  Box, 
  Sparkles, 
  ArrowRight, 
  DownloadCloud, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Layers,
  ChevronRight
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function HeroSection({ onOpenStudio, onOpenExport, onOpenQuote }) {
  const cadFormats = [
    { name: "STEP AP242", color: "text-sky-400" },
    { name: "AutoCAD DXF", color: "text-cyan-400" },
    { name: "IFC4 BIM", color: "text-emerald-400" },
    { name: "DSTV NC", color: "text-amber-400" },
    { name: "SolidWorks", color: "text-rose-400" },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Radial Lights & Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-radial-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 shadow-[0_0_20px_rgba(56,189,248,0.2)] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-slate-200">CAD FAMES Structural Kernel v2.4</span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Stitch AI Enabled
            </span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
          Parametric 3D CAD Framing &{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Automated Fabrication
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Design, analyze, and export production-ready steel and aluminum structural frameworks in seconds. Real-time FEA deflection, Eurocode 3 compliance, and direct CNC toolpath generation.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#studio">
            <Button
              variant="glow"
              size="lg"
              iconRight={ArrowRight}
              className="text-slate-950 px-7"
            >
              Launch 3D CAD Studio
            </Button>
          </a>

          <Button
            variant="outline"
            size="lg"
            icon={DownloadCloud}
            onClick={onOpenExport}
          >
            Instant STEP / DXF Export
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={Cpu}
            onClick={onOpenQuote}
          >
            Request Fabrication Quote
          </Button>
        </div>

        {/* CAD Format Compatibility Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
            Zero-Loss Interoperability With Leading CAD & BIM Ecosystems
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {cadFormats.map((fmt) => (
              <div
                key={fmt.name}
                className="flex items-center gap-2 text-xs font-mono font-medium text-slate-300 bg-slate-900/60 px-3.5 py-1.5 rounded-lg border border-slate-800"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${fmt.color.replace('text-', 'bg-')}`} />
                <span>{fmt.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
