"use client";

import React, { useState } from "react";
import { 
  Sliders, 
  Activity, 
  FileSpreadsheet, 
  Cpu, 
  ArrowRight, 
  Check,
  Zap,
  Sparkles
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function WorkflowSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Sliders,
      title: "Parametric Design & Constraints",
      desc: "Specify dimensional envelopes, bay divisions, column heights, and structural cross-sections. Parametric geometry regenerates instantly with zero topology errors.",
      code: "const frame = new CadFrame({\n  span: 12000,\n  depth: 8000,\n  profile: 'HEA-200',\n  bays: { x: 4, z: 3 }\n});",
    },
    {
      num: "02",
      icon: Activity,
      title: "Real-Time FEA Stress Validation",
      desc: "Instant finite element beam solver computes axial force, bending moments, shear diagrams, and maximum mid-span deflection under Eurocode 3 load cases.",
      code: "const fea = frame.solveFEA({\n  deadLoad: 1.25,\n  liveLoad: 4.80,\n  windLoad: 0.95 // kN/m²\n});\n// Max Deflection: 5.2mm (L/600 OK)",
    },
    {
      num: "03",
      icon: FileSpreadsheet,
      title: "Automated BOM & Joint Detailing",
      desc: "Auto-generates complete bill of materials with member weights, bolt schedules, cut lists, weld specs, and linear bar stock nesting optimization.",
      code: "// BILL OF MATERIALS (BOM)\n// 12x HEA-200 Columns @ 5500mm\n// 16x IPE-240 Rafters @ 6100mm\n// 48x M20 Gr8.8 Structural Bolts",
    },
    {
      num: "04",
      icon: Cpu,
      title: "Direct CNC Saw & BIM Export",
      desc: "One-click export compiles STEP solids for SolidWorks, IFC4 for Revit BIM coordination, and DSTV NC toolpaths for automated CNC drilling and sawing.",
      code: "await frame.export({\n  formats: ['STEP', 'DXF', 'IFC4', 'DSTV_NC'],\n  tolerance: '0.05mm'\n});",
    },
  ];

  return (
    <section id="workflow" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="sky" size="md" icon={Zap} className="mb-3">
            Seamless End-to-End Pipeline
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Parametric Concept to CNC Saw in 4 Steps
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Eliminate traditional drafting bottlenecks with a direct digital thread from structural engineering algorithms to the factory floor.
          </p>
        </div>

        {/* 4 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Step Selectors */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const IconComp = step.icon;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-sky-500/10 border-sky-500/50 shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                      : "bg-[#0d1017]/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                        isSelected
                          ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {step.num}
                    </div>

                    <div className="space-y-1">
                      <h3
                        className={`text-base font-bold ${
                          isSelected ? "text-sky-300" : "text-slate-200"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Code/Telemetry Console */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#090b10] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px]">
                    cadfames-pipeline-daemon :: Step {steps[activeStep].num}
                  </span>
                </div>
                <Badge variant="stitch" size="sm">
                  Stitch MCP Sync
                </Badge>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 bg-[#07090e] text-slate-300 space-y-4">
                <div className="text-[11px] text-slate-500 pb-2 border-b border-slate-800/80">
                  // Executing {steps[activeStep].title} module...
                </div>
                <pre className="text-sky-300 leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{steps[activeStep].code}</code>
                </pre>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Validation Status: PASS
                  </span>
                  <span className="text-slate-500">Latency: 12ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
