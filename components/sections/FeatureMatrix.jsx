"use client";

import React from "react";
import { 
  Cpu, 
  Layers, 
  Activity, 
  Share2, 
  ShieldCheck, 
  CloudLightning,
  Sparkles,
  ArrowRight,
  Boxes,
  Code2,
  FileCheck
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { FEATURE_LIST } from "@/lib/cad-data";

const iconMap = {
  Cpu,
  Layers,
  Activity,
  Share2,
  ShieldCheck,
  CloudLightning,
};

export default function FeatureMatrix() {
  return (
    <section id="features" className="py-20 bg-[#07090e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" size="md" icon={ShieldCheck} className="mb-3">
            Industrial Grade Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Structural Rigor & Speed
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From algorithmic generative joint design to automated CNC saw cut-lists, CAD FAMES eliminates manual detailing errors and compresses engineering cycles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_LIST.map((feat, idx) => {
            const IconComp = iconMap[feat.icon] || Cpu;
            return (
              <Card
                key={feat.title}
                hoverGlow={true}
                gridAccent={idx === 0 || idx === 3}
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all duration-300 mb-5 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-sky-400 transition-colors">
                  <span>SPEC MODULE #{idx + 101}</span>
                  <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
