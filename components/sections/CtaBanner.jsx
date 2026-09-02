"use client";

import React from "react";
import { ArrowRight, DownloadCloud, Sparkles, ShieldCheck, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function CtaBanner({ onOpenExport, onOpenQuote }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow & technical grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-950/60 via-[#0d1322] to-slate-900 border border-sky-500/30 p-8 sm:p-14 text-center overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.15)] tech-border-corners">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-cad-grid opacity-30 pointer-events-none" />

          <Badge variant="stitch" size="md" icon={Sparkles} className="mb-4">
            Stitch AI MCP Powered
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Ready to Accelerate Your Structural Framing Pipeline?
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Download production-ready STEP solids and 2D DXF cut-sheets in seconds, or connect your enterprise BIM workflow directly via our API.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#studio">
              <Button
                variant="glow"
                size="lg"
                iconRight={ArrowRight}
                className="text-slate-950 font-bold px-8"
              >
                Launch 3D Studio
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              icon={DownloadCloud}
              onClick={onOpenExport}
            >
              Export CAD File (.step)
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={Cpu}
              onClick={onOpenQuote}
            >
              Get Fabrication Estimate
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              100% SolidWorks & Revit Compatible
            </span>
            <span>•</span>
            <span>ISO 10303 STEP AP242 Certified</span>
            <span>•</span>
            <span>No Credit Card Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
