"use client";

import React, { useState } from "react";
import { 
  Settings, 
  Layers, 
  Cpu, 
  Wind, 
  Boxes, 
  Thermometer, 
  Zap, 
  Radio, 
  Activity, 
  ShieldCheck, 
  Sun, 
  Waves, 
  Car, 
  Server, 
  FileCheck2, 
  GitFork, 
  Workflow, 
  Sliders, 
  Database, 
  Globe, 
  Box,
  CheckCircle2
} from "lucide-react";

export default function PhysicsExpertiseSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Disciplines" },
    { id: "structures", label: "Structures & Dynamics" },
    { id: "fluids", label: "Fluids & Thermal" },
    { id: "electromagnetics", label: "Electromagnetics" },
    { id: "systems", label: "Systems & Process" },
  ];

  const disciplines = [
    // Row 1
    {
      id: "struct-mech",
      icon: Settings,
      category: "structures",
      title: "Structural Mechanics",
      desc: "Linear, nonlinear, contact, fatigue.",
      highlight: false,
    },
    {
      id: "explicit-dyn",
      icon: Layers,
      category: "structures",
      title: "Explicit Dynamics",
      desc: "LS-DYNA, crash, impact, drop.",
      highlight: false,
    },
    {
      id: "additive",
      icon: Boxes,
      category: "structures",
      title: "Additive Solutions",
      desc: "Distortion, support, calibration.",
      highlight: true, // blue icon background in screenshot
    },
    {
      id: "cfd",
      icon: Wind,
      category: "fluids",
      title: "Computational Fluid Dynamics",
      desc: "External & internal flow, multiphase.",
      highlight: false,
    },

    // Row 2
    {
      id: "granular",
      icon: Boxes,
      category: "fluids",
      title: "Granular Dynamics",
      desc: "Rocky DEM, conveyors, mixing.",
      highlight: false,
    },
    {
      id: "electronics-thermal",
      icon: Thermometer,
      category: "fluids",
      title: "Electronics/Thermal Reliability",
      desc: "Board-level thermal, Sherlock.",
      highlight: false,
    },
    {
      id: "low-freq-em",
      icon: Zap,
      category: "electromagnetics",
      title: "Low Frequency Electromagnetics",
      desc: "Maxwell, motors, transformers.",
      highlight: false,
    },
    {
      id: "rf-microwave",
      icon: Radio,
      category: "electromagnetics",
      title: "RF & Microwave",
      desc: "HFSS, antennas, radomes, links.",
      highlight: false,
    },

    // Row 3
    {
      id: "signal-integrity",
      icon: Cpu,
      category: "electromagnetics",
      title: "Signal & Power Integrity",
      desc: "SIwave, HFSS-3D, IBIS.",
      highlight: false,
    },
    {
      id: "emi-emc",
      icon: ShieldCheck,
      category: "electromagnetics",
      title: "EMI / EMC",
      desc: "Compliance, shielding, filters.",
      highlight: false,
    },
    {
      id: "optics",
      icon: Sun,
      category: "electromagnetics",
      title: "Optics",
      desc: "Speos, illumination, imaging.",
      highlight: false,
    },
    {
      id: "photonics",
      icon: Waves,
      category: "electromagnetics",
      title: "Photonics",
      desc: "Lumerical FDTD, MODE, Interconnect.",
      highlight: false,
    },

    // Row 4
    {
      id: "adas",
      icon: Car,
      category: "systems",
      title: "ADAS / AD",
      desc: "AVxcelerate, sensor sims.",
      highlight: false,
    },
    {
      id: "hpc",
      icon: Server,
      category: "systems",
      title: "High Performance Computing",
      desc: "HPC, GPU, cloud bursting.",
      highlight: false,
    },
    {
      id: "safety-analysis",
      icon: FileCheck2,
      category: "systems",
      title: "Model Based Safety Analysis",
      desc: "medini, ISO 26262, EN 50128.",
      highlight: false,
    },
    {
      id: "mbse",
      icon: GitFork,
      category: "systems",
      title: "Model Based Systems Engineering (MBSE)",
      desc: "Architecture to verification.",
      highlight: false,
    },

    // Row 5
    {
      id: "mbd",
      icon: Workflow,
      category: "systems",
      title: "Model Based Development",
      desc: "Twin Builder, system-of-systems.",
      highlight: false,
    },
    {
      id: "pido",
      icon: Sliders,
      category: "systems",
      title: "Process Integration and Design Optimization (PIDO)",
      desc: "optiSLang, robust design.",
      highlight: false,
    },
    {
      id: "spdm",
      icon: Database,
      category: "systems",
      title: "Simulation Process Data Management (SPDM)",
      desc: "Data, traceability, configuration.",
      highlight: true, // blue icon background in screenshot
    },
    {
      id: "mission-eng",
      icon: Globe,
      category: "systems",
      title: "Mission Engineering",
      desc: "STK, mission analysis, links.",
      highlight: false,
    },

    // Row 6
    {
      id: "interposer",
      icon: Box,
      category: "electromagnetics",
      title: "Interposer Analysis",
      desc: "Multi-die packaging, RDL routing.",
      highlight: false,
    },
  ];

  const filteredDisciplines = disciplines.filter(
    (d) => activeFilter === "all" || d.category === activeFilter
  );

  return (
    <section className="py-24 bg-[#f7f9ff] border-t border-[#c2c6d4]/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-[3px] h-4 bg-[#0057b8] rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest font-mono text-[#0057b8] uppercase">
              OUR EXPERTISE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <h2 className="lg:col-span-7 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#181c20] leading-[1.18] font-['Montserrat'] tracking-tight">
              Deep simulation expertise across every physics domain.
            </h2>
            <p className="lg:col-span-5 text-sm sm:text-base text-[#424752] leading-relaxed pt-1">
              Our engineers cover the full breadth of physics — structural, fluid, electromagnetic, multi-body, and the systems-level integration that ties them together.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold font-['Montserrat'] tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#00132b] text-white shadow-sm"
                    : "bg-white text-[#424752] hover:bg-[#ebeef3] hover:text-[#181c20] border border-[#c2c6d4]/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Disciplines (Matching Screenshot Design) */}
        <div className="bg-white rounded-2xl border border-[#c2c6d4]/50 shadow-xs overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e2e8f0]/80">
          {filteredDisciplines.map((item, idx) => {
            const IconComp = item.icon;
            const isHighlighted = item.highlight;

            return (
              <div
                key={item.id}
                className={`p-6 flex items-start gap-4 transition-colors hover:bg-[#f8fafc] border-b border-[#e2e8f0]/80 ${
                  isHighlighted ? "bg-[#f0f7ff]/70" : "bg-white"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    isHighlighted
                      ? "bg-[#0066ff] text-white border-[#0057b8] shadow-sm"
                      : "bg-[#f8fafc] text-[#424752] border-[#e2e8f0]"
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#181c20] font-['Montserrat'] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#0066d6] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
