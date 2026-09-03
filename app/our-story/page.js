"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Award, 
  Globe, 
  Sparkles,
  Layers,
  Workflow,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Clock,
  Compass,
  Zap,
  Activity,
  ChevronRight
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";

export default function OurStoryPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [activeEra, setActiveEra] = useState("1980s");

  const eras = {
    "1980s": {
      era: "1982 — 1999",
      title: "The Finite Element Genesis",
      subtitle: "Pioneering Numerical Simulation in Mechanical Engineering",
      desc: "Founded in 1982, SimuTech emerged during the dawn of computerized engineering. When traditional product development relied entirely on costly, slow physical trial-and-error prototyping, our founders championed Finite Element Analysis (FEA) to predict structural stress and thermal behavior directly from mathematical physics.",
      milestone: "Established as one of the world's earliest dedicated simulation engineering practices.",
      tag: "FEA FOUNDATIONS",
    },
    "2000s": {
      era: "2000 — 2014",
      title: "The Multiphysics Era & Ansys Elite Alliance",
      subtitle: "Expanding from Structures to Coupled Fluids, Electromagnetics & Optics",
      desc: "As industrial systems became exponentially more complex, isolated structural analysis was no longer enough. SimuTech became an Ansys Elite Channel Partner and expanded into Computational Fluid Dynamics (CFD), high-frequency electromagnetics, and system-level modeling, supporting aerospace and automotive leaders across Asia-Pacific.",
      milestone: "Formed the TechNet Alliance network and expanded cross-border engineering services.",
      tag: "MULTI-PHYSICS SCALE",
    },
    "2010s": {
      era: "2015 — 2022",
      title: "PyAnsys, Automation & Cloud HPC",
      subtitle: "Transforming Manual Simulation Loops into High-Speed Automated Pipelines",
      desc: "Recognizing that engineering speed is the ultimate competitive moat, SimuTech pioneered custom Python workflow automation, cloud supercomputing clusters, and reduced-order modeling (ROM). We enabled clients to run thousands of design iterations overnight rather than over weeks.",
      milestone: "Launched custom automation development and esocaet academic simulation training.",
      tag: "AUTOMATION & SPEED",
    },
    "2020s": {
      era: "2023 — Present & Beyond",
      title: "AI-Augmented Digital Twins & APAC Leadership",
      subtitle: "Real-Time Operational Intelligence for Hypersonics, EVs, & Clean Energy",
      desc: "Today, SimuTech APAC operates across 8 regional hubs with over 600 simulation specialists. We combine neural AI surrogates, real-time sensor streams, and full-physics 3D digital twins to predict product performance during design and throughout active operational life.",
      milestone: "Serving 5,700+ enterprise clients across defense, semiconductors, and green energy.",
      tag: "NEXT-GEN DIGITAL TWINS",
    },
  };

  const currentEra = eras[activeEra];

  const pillars = [
    {
      icon: Cpu,
      title: "Physics Without Compromise",
      desc: "We believe simulation is only as valuable as its empirical fidelity. Every solver model we build is validated with rigorous numerical standards and correlation to physical reality.",
    },
    {
      icon: Workflow,
      title: "Embedded Co-Engineering",
      desc: "We operate as an extension of your engineering team. Whether developing proprietary PyAnsys scripts or executing critical multi-physics simulations, we work shoulder-to-shoulder with your R&D leaders.",
    },
    {
      icon: GraduationCap,
      title: "Democratizing CAE Knowledge",
      desc: "Through our esocaet academy, university partnerships, and specialized corporate training courses, we continuously upskill the next generation of Asia-Pacific simulation engineers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#001738] font-['Montserrat']">
      <TopNavBar
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section (Matching Home Page Style with 3D Spacecraft/Turbine Visual) */}
        <section className="relative w-full bg-[#000d24] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/10 overflow-hidden">
          {/* Subtle Ambient Volumetric Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0057b8]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#38bdf8]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Hero Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#38bdf8] backdrop-blur-md">
                  <Clock className="w-3.5 h-3.5" />
                  <span>OUR STORY &bull; 40+ YEARS OF EXCELLENCE</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Where Engineering Vision Meets <br />
                  <span className="text-[#38bdf8]">
                    Computational Power.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  From pioneering early finite element methods in 1982 to engineering real-time digital twins for hypersonic aerospace, electric mobility, and clean energy across the Asia-Pacific region.
                </p>

                {/* Accreditations Chip Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                    <span>Ansys Elite Partner</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#38bdf8]" />
                    <span>8 Regional APAC Hubs</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#38bdf8]" />
                    <span>5,700+ Global Accounts</span>
                  </div>
                </div>

                {/* Dual Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setTrialOpen(true)}
                    className="bg-[#0057b8] hover:bg-[#004493] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full flex items-center gap-2.5 transition-all shadow-lg shadow-[#0057b8]/30 active:scale-95 cursor-pointer font-['Montserrat']"
                  >
                    <span>Partner With Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#timeline"
                    className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all font-['Montserrat']"
                  >
                    Explore Our Timeline ↓
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Holographic Aerospace Turbine & Spacecraft Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-[#00122e] p-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                    <img
                      src="/our-story-hero.jpg"
                      alt="SimuTech 3D multi-physics aerospace simulation model with FEA mesh and aerodynamic CFD streamlines"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000d24]/90 via-transparent to-[#000d24]/30" />

                    {/* Floating Top Badge */}
                    <div className="absolute top-4 left-4 bg-[#001738]/85 border border-[#38bdf8]/40 rounded-full px-3.5 py-1.5 text-[11px] font-mono text-[#38bdf8] backdrop-blur-md flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-[#38bdf8]" />
                      <span>3D MULTI-PHYSICS SIMULATION</span>
                    </div>

                    {/* Floating Bottom Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#001738]/90 border border-white/15 backdrop-blur-md">
                      <div className="text-[10px] font-mono text-[#38bdf8] font-bold uppercase tracking-wider mb-1">
                        AEROTHERMAL &amp; STRUCTURAL COUPLING
                      </div>
                      <div className="text-sm font-bold text-white leading-snug">
                        Simulating extreme multi-physics regimes before the first physical prototype is built.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro KPI Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-white/10">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] mb-1 font-['Montserrat']">1982</div>
                <div className="text-sm font-bold text-white mb-0.5">Year Founded</div>
                <div className="text-xs text-slate-400">40+ Years of Simulation Mastery</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] mb-1 font-['Montserrat']">5,700+</div>
                <div className="text-sm font-bold text-white mb-0.5">Active Clients</div>
                <div className="text-xs text-slate-400">Across APAC &amp; Worldwide</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] mb-1 font-['Montserrat']">600+</div>
                <div className="text-sm font-bold text-white mb-0.5">CAE Engineers</div>
                <div className="text-xs text-slate-400">Multi-Disciplinary Specialists</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] mb-1 font-['Montserrat']">8 Hubs</div>
                <div className="text-sm font-bold text-white mb-0.5">Regional Footprint</div>
                <div className="text-xs text-slate-400">Dedicated APAC Presence</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Four Decades of Evolution: Interactive Timeline Showcase */}
        <section id="timeline" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8] mb-3">
                <Clock className="w-4 h-4" />
                <span>CHRONOLOGICAL EVOLUTION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight mb-4">
                Four Decades of Simulation Leadership
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Click across the eras below to explore how SimuTech evolved alongside the rapid transformation of computational science.
              </p>
            </div>

            {/* Era Tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1.5 bg-white rounded-2xl border border-[#e2e8f0] shadow-2xs gap-1 sm:gap-2">
                {Object.keys(eras).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveEra(key)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-['Montserrat'] ${
                      activeEra === key
                        ? "bg-[#001738] text-white shadow-md"
                        : "text-slate-500 hover:text-[#001738] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Era Detail Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e8f0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#0057b8]/10 text-[#0057b8] rounded-md text-xs font-mono font-bold">
                    {currentEra.era}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    {currentEra.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001738] tracking-tight leading-tight">
                  {currentEra.title}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-[#0057b8]">
                  {currentEra.subtitle}
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {currentEra.desc}
                </p>

                <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#0057b8] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-bold text-[#001738]">
                    {currentEra.milestone}
                  </div>
                </div>
              </div>

              {/* Right Side Era Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] group">
                  <img
                    src="/story-evolution.jpg"
                    alt="Evolution of Simulation at SimuTech"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001738]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold font-mono">
                    CHRONOLOGICAL SIMULATION ROADMAP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 3 Core Pillars of Our DNA */}
        <section className="py-20 lg:py-28 bg-white border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>CORE PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight mb-4">
                The Three Pillars of SimuTech&apos;s DNA
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Why the world&apos;s leading engineering enterprises trust SimuTech with their most critical virtual testing programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-3xl border border-[#e2e8f0] p-8 bg-white hover:border-[#0057b8] hover:shadow-xl transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#00122e] text-[#38bdf8] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          PILLAR 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#001738] mb-3">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-bold text-[#0057b8]">
                      <span>Guaranteed Rigor</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Bottom CTA Banner */}
        <section className="py-20 bg-[#000d24] text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-['Montserrat'] tracking-tight">
              Ready to Write the Next Chapter of Your Product?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              Connect with SimuTech APAC simulation engineers for a technical scoping discussion, PyAnsys automation pilot, or 30-day Ansys software evaluation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setTrialOpen(true)}
                className="bg-[#0057b8] hover:bg-[#004493] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-[#0057b8]/40 active:scale-95 cursor-pointer font-['Montserrat']"
              >
                <span>Request Free Trial / Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/products"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all font-['Montserrat']"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
      />
    </div>
  );
}
