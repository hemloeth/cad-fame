"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Clock, CheckCircle2 } from "lucide-react";
import Card from "@/components/ui/Card";

export default function LiveMetrics() {
  const metrics = [
    {
      value: "±0.05 mm",
      label: "Geometric Tolerance",
      desc: "Machining & laser cutting precision standard",
      icon: Cpu,
      color: "text-sky-400",
    },
    {
      value: "< 150 ms",
      label: "Parametric Kernel Speed",
      desc: "Full 3D solid model & BOM regeneration",
      icon: Clock,
      color: "text-emerald-400",
    },
    {
      value: "100%",
      label: "BIM & IFC4 Interoperability",
      desc: "Zero-loss export to Revit, Tekla, and SolidWorks",
      icon: ShieldCheck,
      color: "text-cyan-400",
    },
    {
      value: "45,000+",
      label: "Structural Frames Generated",
      desc: "Industrial mezzanines, gantries & warehouse portals",
      icon: Zap,
      color: "text-amber-400",
    },
  ];

  return (
    <section className="py-16 bg-[#090b10] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const IconComp = m.icon;
            return (
              <Card
                key={m.label}
                hoverGlow={true}
                className="bg-slate-900/60 border-slate-800/80 p-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${m.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    CERTIFIED
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-mono font-extrabold text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {m.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {m.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
