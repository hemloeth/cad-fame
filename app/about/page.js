"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  Globe2, 
  GraduationCap, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Building2,
  Sparkles,
  Cpu,
  Layers,
  Wrench,
  Workflow,
  Compass,
  ArrowUpRight,
  TrendingUp,
  HeartHandshake,
  Activity,
  Play,
  Flame,
  Radio,
  Maximize2
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";

export default function AboutPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [activeDomain, setActiveDomain] = useState("structures");

  const domains = [
    { id: "structures", label: "Structural Mechanics", solver: "Ansys Mechanical", metric: "124.5 kN Yield Stress" },
    { id: "fluids", label: "Fluids & Aerodynamics", solver: "Ansys Fluent / CFX", metric: "Mach 5.2 Shock Flow" },
    { id: "em", label: "Electromagnetics & RF", solver: "Ansys HFSS / Maxwell", metric: "77 GHz Radar Array" },
    { id: "digital-twins", label: "AI & Digital Twins", solver: "Ansys Twin Builder", metric: "Real-time ROM (99.9%)" },
  ];

  const stats = [
    { value: "40+", label: "Years of Experience", sub: "Founded in 1982" },
    { value: "5,700+", label: "Active Customers", sub: "Enterprise & SMEs" },
    { value: "600+", label: "Employees Globally", sub: "Top CAE Specialists" },
    { value: "35+", label: "Global & APAC Offices", sub: "Local Engineering Teams" },
  ];

  const apacHubs = [
    { country: "India", city: "Bengaluru, Pune, Hyderabad", role: "R&D & Engineering Hub" },
    { country: "Singapore", city: "Singapore", role: "Regional HQ & Finance" },
    { country: "Malaysia", city: "Kuala Lumpur", role: "Consulting & Automotive Support" },
    { country: "Indonesia", city: "Jakarta", role: "Energy & Infrastructure Services" },
    { country: "Thailand", city: "Bangkok", role: "Electronics & EV Manufacturing" },
    { country: "Vietnam", city: "Ho Chi Minh City", role: "Semiconductors & High Tech" },
    { country: "Japan", city: "Tokyo", role: "Advanced Robotics & Materials" },
    { country: "Australia", city: "Melbourne & Sydney", role: "Aerospace & Defense Consulting" },
  ];

  const values = [
    {
      icon: Cpu,
      title: "Physics-First Precision",
      desc: "Every recommendation is backed by validated numerical methods, empirical testing, and high-fidelity multi-physics rigor.",
    },
    {
      icon: Sparkles,
      title: "AI & PyAnsys Automation",
      desc: "We supercharge traditional simulation loops with custom Python automation, neural surrogates, and cloud HPC pipelines.",
    },
    {
      icon: HeartHandshake,
      title: "Co-Engineering Partnership",
      desc: "We don't just sell software licenses — we embed our specialists within your R&D teams to de-risk complex product launches.",
    },
    {
      icon: GraduationCap,
      title: "Lifelong Knowledge Transfer",
      desc: "Through our esocaet academy and certified training courses, we empower your internal engineers with state-of-the-art CAE skills.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#001738] font-['Montserrat']">
      <TopNavBar
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Ultra-Modern Premium Hero Section */}
        <section className="relative w-full bg-[#010816] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-white/10">
          {/* Futuristic Background Grid & Ambient Volumetric Glows */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#0057b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px"
            }}
          />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0057b8]/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#38bdf8]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
            {/* Top Row: Hero Text & 3D Hologram Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Vision & Action */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#001f4d]/80 border border-[#0057b8]/50 text-xs font-bold text-[#38bdf8] backdrop-blur-md shadow-lg shadow-[#0057b8]/20">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                  <span>ANSYS ELITE CHANNEL PARTNER APAC</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
                  Pioneering the Science of <br />
                  <span className="bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                    Virtual Engineering.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  For over four decades, <strong className="text-white font-semibold">SimuTech APAC</strong> has empowered ambitious aerospace, automotive, energy, and high-tech leaders to transform complex multi-physics challenges into decisive market advantages.
                </p>

                {/* Physics Domain Selector Pills */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Multi-Physics Domains
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domains.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setActiveDomain(d.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activeDomain === d.id
                            ? "bg-[#0057b8] text-white border border-[#38bdf8] shadow-md shadow-[#0057b8]/40"
                            : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setTrialOpen(true)}
                    className="bg-[#0057b8] hover:bg-[#004493] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full flex items-center gap-2.5 transition-all shadow-xl shadow-[#0057b8]/40 active:scale-95 cursor-pointer"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setTrialOpen(true)}
                    className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Watch Overview</span>
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Holographic Stage with Live HUD Telemetry */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-2 group">
                  {/* Holographic Aerothermal Simulation Visual */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                    <img
                      src="/about-hero-hologram.jpg"
                      alt="SimuTech 3D Holographic Aerothermal Multi-Physics Engine Simulation"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000d24]/90 via-transparent to-[#000d24]/40" />

                    {/* Floating Top-Left Status Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#001738]/85 border border-[#38bdf8]/40 rounded-full px-3.5 py-1.5 text-[11px] font-mono text-[#38bdf8] backdrop-blur-md shadow-lg">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-[#38bdf8]" />
                      <span>LIVE SOLVER RUNNING</span>
                    </div>

                    {/* Floating Top-Right Solver Pill */}
                    <div className="absolute top-4 right-4 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-[11px] font-mono text-white backdrop-blur-md">
                      {domains.find(d => d.id === activeDomain)?.solver}
                    </div>

                    {/* Floating Bottom HUD Panel */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#00122e]/90 border border-white/15 backdrop-blur-md flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-bold">
                          Selected Physics Benchmark
                        </div>
                        <div className="text-sm font-bold text-white">
                          {domains.find(d => d.id === activeDomain)?.metric}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 font-mono">Convergence</div>
                        <div className="text-xs font-bold text-emerald-400">99.99% Rigor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 4 Modern KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-white/10">
              {stats.map((s) => (
                <div 
                  key={s.label} 
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/40 hover:bg-white/10 transition-all backdrop-blur-sm group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left">
                    {s.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-0.5">{s.label}</div>
                  <div className="text-xs text-slate-400 font-normal">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Our Story & Engineering Heritage */}
        <section id="story" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e2e8f0] group">
                  <img
                    src="/about-cadfem-team.jpg"
                    alt="SimuTech engineers collaborating on simulation models"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000d24]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider mb-1">
                      Multi-Physics Center of Excellence
                    </div>
                    <div className="text-base sm:text-lg font-bold">
                      Over 600 CAE simulation specialists across 35 locations worldwide.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8]">
                  <Layers className="w-4 h-4" />
                  <span>OUR HERITAGE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight leading-tight">
                  From Finite Element Pioneers to Asia-Pacific&apos;s CAE Authority.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Founded in 1982 during the dawn of numerical engineering simulation, SimuTech was among the earliest organizations to recognize the transformational power of FEA and CFD in accelerating physical product development.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Today, SimuTech APAC serves as the trusted simulation partner for Fortune 500 defense contractors, cutting-edge EV startups, semiconductor fabs, and academic institutions across the Asia-Pacific region. We provide everything from software licensing and workflow automation to custom PyAnsys script engineering and enterprise training.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Ansys Elite Channel Partner with premier technical accreditations",
                    "Over 40 years of continuous numerical simulation leadership",
                    "Comprehensive multidisciplinary engineering support in your local time zone",
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0057b8] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[#001738]">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Ansys Elite Partner & TechNet Alliance */}
        <section id="partners" className="py-20 lg:py-28 bg-white border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>GLOBAL RECOGNITION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight mb-4">
                Ansys Elite Channel Partner &amp; TechNet Alliance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our Elite status is reserved for partners demonstrating the highest tier of engineering competencies, customer satisfaction, and multi-physics expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-2xl border border-[#e2e8f0] p-8 bg-white hover:border-[#0057b8] hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00122e] text-[#38bdf8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001738] mb-3">
                    Ansys Elite Channel Partner
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Direct access to Ansys product development roadmaps, dedicated technical escalation channels, and certified simulation methodologies across all disciplines.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-bold text-[#0057b8]">
                  <span>Verified Channel Status</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-[#e2e8f0] p-8 bg-white hover:border-[#0057b8] hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00122e] text-[#38bdf8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001738] mb-3">
                    TechNet Alliance Network
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Member of a global network of over 450+ independent CAE companies, enabling seamless cross-border collaboration and specialized domain problem solving.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-bold text-[#0057b8]">
                  <span>450+ CAE Specialists</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 3 */}
              <div id="training" className="rounded-2xl border border-[#e2e8f0] p-8 bg-white hover:border-[#0057b8] hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00122e] text-[#38bdf8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001738] mb-3">
                    esocaet Training Academy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Accredited European Simulation Online Academy offering university-certified Master&apos;s degrees, eSeminars, and tailored enterprise engineering workshops.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-bold text-[#0057b8]">
                  <span>Academic Certification</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. APAC Regional Footprint */}
        <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8]">
                  <MapPin className="w-4 h-4" />
                  <span>REGIONAL FOOTPRINT</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight leading-tight">
                  Local Engineering Support Across 8 APAC Hubs.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Our regional presence ensures that your engineering team receives native-language simulation support, local currency licensing, on-site consulting, and fast response times across all time zones.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setTrialOpen(true)}
                    className="bg-[#000d24] hover:bg-[#001738] text-white text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Contact Your Regional Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Hubs Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {apacHubs.map((hub) => (
                  <div key={hub.country} className="p-5 rounded-xl bg-white border border-[#e2e8f0] shadow-2xs hover:border-[#0057b8] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-[#001738] font-['Montserrat'] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0057b8]" />
                        <span>{hub.country}</span>
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f1f5f9] text-[#0057b8]">
                        Active
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">{hub.city}</div>
                    <div className="text-[11px] text-slate-500">{hub.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Innovation Lab & Supercomputing */}
        <section id="culture" className="py-20 lg:py-28 bg-white border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8]">
                  <Workflow className="w-4 h-4" />
                  <span>INNOVATION &amp; INFRASTRUCTURE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight leading-tight">
                  High Performance Computing &amp; Cloud Digital Twins.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  SimuTech operates state-of-the-art supercomputing research labs to benchmark new Ansys solvers, train ROMs (Reduced Order Models), and simulate massive multi-physics assemblies with billions of degrees of freedom.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                    <div className="text-xl font-bold text-[#001738] mb-1">10,000+ Cores</div>
                    <div className="text-xs text-slate-500">HPC Cluster Testing Capacity</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                    <div className="text-xl font-bold text-[#001738] mb-1">99.9% Accuracy</div>
                    <div className="text-xs text-slate-500">Empirically Validated Solvers</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e2e8f0] group">
                  <img
                    src="/about-cadfem-innovation.jpg"
                    alt="SimuTech Innovation and Supercomputing Lab"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000d24]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider mb-1">
                      SUPERCOMPUTING RESEARCH LAB
                    </div>
                    <div className="text-base sm:text-lg font-bold">
                      Accelerating engineering simulation through AI, Cloud, and HPC.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Core Engineering Values */}
        <section id="careers" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0057b8] mb-3">
                <Users className="w-4 h-4" />
                <span>HOW WE WORK</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001738] tracking-tight mb-4">
                Our Core Engineering Values
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Guided by physics, empowered by innovation, and committed to long-term client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const IconComp = v.icon;
                return (
                  <div key={v.title} className="p-6 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#0057b8] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#00122e] text-[#38bdf8] flex items-center justify-center mb-5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#001738] mb-2 font-['Montserrat']">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Bottom CTA Banner */}
        <section className="py-20 bg-[#000d24] text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-['Montserrat'] tracking-tight">
              Ready to Accelerate Your Simulation Workflows?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              Connect with SimuTech APAC simulation specialists for a tailored technical consultation, custom PyAnsys proof-of-concept, or 30-day Ansys evaluation license.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setTrialOpen(true)}
                className="bg-[#0057b8] hover:bg-[#004493] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-[#0057b8]/40 active:scale-95 cursor-pointer font-['Montserrat']"
              >
                <span>Request Free Trial</span>
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
