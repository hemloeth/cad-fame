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
  Check,
  Globe,
  ChevronRight,
  Target,
  BarChart3,
  Flame,
  PhoneCall
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";

export default function AboutPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission"); // 'mission' | 'heritage' | 'network'

  const heroPillars = {
    mission: {
      tag: "THE MISSION",
      headline: "De-risking Innovation for Asia-Pacific's Engineering Pioneers.",
      body: "SimuTech bridges advanced Ansys numerical simulation software with specialized domain engineering, custom PyAnsys automation, and certified training to help engineering teams build safer, faster, and more efficient physical products.",
      stats: [
        { label: "Client Retention", val: "99.4%" },
        { label: "Active Deployments", val: "5,700+" },
      ],
      ctaText: "Schedule Technical Consultation",
      ctaHref: "#",
    },
    heritage: {
      tag: "40+ YEARS HERITAGE",
      headline: "From Finite Element Method Pioneers to Regional Authority.",
      body: "Established in 1982 during the dawn of computerized simulation, our group has spent over four decades mastering FEA, CFD, electromagnetics, and digital twin workflows alongside the world's most rigorous R&D departments.",
      stats: [
        { label: "Founded", val: "1982" },
        { label: "CAE Engineers", val: "600+" },
      ],
      ctaText: "Explore Our Full Story",
      ctaHref: "#story",
    },
    network: {
      tag: "ANSYS ELITE STATUS",
      headline: "Premier Technical Accreditations & Direct R&D Hotlines.",
      body: "As an Ansys Elite Channel Partner and core member of the global TechNet Alliance, SimuTech delivers localized engineering support across 8 Asia-Pacific hubs backed by direct access to global simulation roadmaps.",
      stats: [
        { label: "APAC Hubs", val: "8 Countries" },
        { label: "Partner Tier", val: "Elite Channel" },
      ],
      ctaText: "View Regional Network",
      ctaHref: "#partners",
    },
  };

  const timeline = [
    { year: "1982", title: "Inception & FEA", desc: "Pioneering finite element analysis for industrial manufacturing." },
    { year: "2000", title: "Ansys Elite Status", desc: "Recognized as top-tier channel partner for CAE solutions." },
    { year: "2018", title: "AI & PyAnsys", desc: "Automating simulation workflows with custom Python scripts & ROMs." },
    { year: "2026", title: "APAC Digital Twins", desc: "Delivering real-time multi-physics twins across 8 regional hubs." },
  ];

  const apacHubs = [
    { country: "India", city: "Bengaluru, Pune, Hyderabad", role: "R&D & Engineering Center" },
    { country: "Singapore", city: "Singapore", role: "APAC Regional Headquarters" },
    { country: "Malaysia", city: "Kuala Lumpur", role: "Automotive & Industrial Consulting" },
    { country: "Indonesia", city: "Jakarta", role: "Energy & Infrastructure Solutions" },
    { country: "Thailand", city: "Bangkok", role: "Electronics & EV Manufacturing" },
    { country: "Vietnam", city: "Ho Chi Minh City", role: "Semiconductors & High Tech" },
    { country: "Japan", city: "Tokyo", role: "Advanced Materials & Robotics" },
    { country: "Australia", city: "Melbourne & Sydney", role: "Aerospace & Defense Services" },
  ];

  const values = [
    {
      icon: Cpu,
      title: "Physics-First Precision",
      desc: "Every recommendation is grounded in rigorous numerical methods, validated solver physics, and empirical correlation.",
    },
    {
      icon: Workflow,
      title: "PyAnsys & Process Automation",
      desc: "We build bespoke automation apps, neural surrogates, and cloud HPC pipelines that cut engineering cycle times by up to 70%.",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Co-Engineering",
      desc: "We embed our senior simulation specialists alongside your engineering teams to solve urgent technical challenges and de-risk product launches.",
    },
    {
      icon: GraduationCap,
      title: "Accredited Knowledge Transfer",
      desc: "Through our esocaet academy and certified training courses, we upskill your internal workforce into high-performing simulation practitioners.",
    },
  ];

  const currentPillar = heroPillars[activeTab];

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#001738] font-['Montserrat']">
      <TopNavBar
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />

      <main className="flex-1">
        {/* 1. COMPLETELY REIMAGINED HERO: Architectural Magazine-Style Canvas */}
        <section className="relative w-full bg-[#f8fafc] border-b border-[#e2e8f0] pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            {/* Top Corporate Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#001738] text-white text-[11px] font-mono font-bold uppercase tracking-widest rounded-md">
                  SIMUTECH APAC
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Engineering Simulation Authority Since 1982
                </span>
              </div>
              <div className="flex items-center gap-6 text-xs font-bold text-[#0057b8]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0057b8]" />
                  Ansys Elite Partner
                </span>
                <span className="flex items-center gap-1.5 hidden sm:flex">
                  <Globe className="w-4 h-4 text-[#0057b8]" />
                  8 APAC Hubs
                </span>
              </div>
            </div>

            {/* Main Interactive Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              {/* Left Column: Interactive Tabbed Narrative Engine */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-12 border border-[#e2e8f0] shadow-sm">
                <div>
                  {/* Segmented Control Tabs */}
                  <div className="flex items-center gap-2 p-1.5 bg-[#f1f5f9] rounded-xl w-fit mb-8">
                    {[
                      { id: "mission", label: "01. Mission" },
                      { id: "heritage", label: "02. Heritage" },
                      { id: "network", label: "03. Credentials" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activeTab === tab.id
                            ? "bg-white text-[#001738] shadow-sm"
                            : "text-slate-500 hover:text-[#001738]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Active Pillar Tag */}
                  <div className="text-xs font-mono font-bold text-[#0057b8] tracking-wider uppercase mb-3">
                    {currentPillar.tag}
                  </div>

                  {/* Large Headline */}
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#001738] tracking-tight leading-[1.18] mb-6 animate-in fade-in-50 duration-300">
                    {currentPillar.headline}
                  </h1>

                  {/* Body Copy */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 animate-in fade-in-50 duration-300">
                    {currentPillar.body}
                  </p>
                </div>

                {/* Bottom Interactive Strip */}
                <div className="pt-6 border-t border-[#f1f5f9] flex flex-wrap items-center justify-between gap-6">
                  {/* Micro KPI pair */}
                  <div className="flex items-center gap-8">
                    {currentPillar.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-2xl font-extrabold text-[#001738] font-['Montserrat']">
                          {s.val}
                        </div>
                        <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setTrialOpen(true)}
                    className="bg-[#001738] hover:bg-[#00285e] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer font-['Montserrat']"
                  >
                    <span>{currentPillar.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Multi-Layered Visual & Accreditation Showcase */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                {/* Visual Card */}
                <div className="relative rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-sm group aspect-[4/3] bg-[#001738]">
                  <img
                    src="/about-cadfem-team.jpg"
                    alt="SimuTech multi-physics simulation engineers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001738]/90 via-[#001738]/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase mb-2">
                      <Users className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>600+ SIMULATION SPECIALISTS</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold leading-snug">
                      Embedded in Leading R&amp;D Teams Across 8 Asia-Pacific Countries.
                    </h3>
                  </div>
                </div>

                {/* Corporate Accreditation Pill Strip */}
                <div className="bg-white rounded-2xl p-5 border border-[#e2e8f0] shadow-xs flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] text-[#0057b8] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#001738]">Ansys Elite Partner</div>
                      <div className="text-[11px] text-slate-500">Highest Regional Channel Tier</div>
                    </div>
                  </div>
                  <Link
                    href="/products"
                    className="text-xs font-bold text-[#0057b8] hover:underline flex items-center gap-1"
                  >
                    <span>Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 4-Pillar Milestone Timeline Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {timeline.map((item, idx) => (
                <div 
                  key={item.year}
                  className="bg-white rounded-2xl p-5 border border-[#e2e8f0] shadow-2xs hover:border-[#0057b8] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[#0057b8]">
                      {item.year}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Pillar 0{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#001738] mb-1 font-['Montserrat']">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Our Story & Engineering Heritage */}
        <section id="story" className="py-20 lg:py-28 bg-[#ffffff] border-b border-[#e2e8f0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0] group">
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
        <section id="partners" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
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
        <section className="py-20 lg:py-28 bg-[#ffffff] border-b border-[#e2e8f0]">
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
        <section id="culture" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
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
                  <div className="p-4 rounded-xl bg-white border border-[#e2e8f0]">
                    <div className="text-xl font-bold text-[#001738] mb-1">10,000+ Cores</div>
                    <div className="text-xs text-slate-500">HPC Cluster Testing Capacity</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#e2e8f0]">
                    <div className="text-xl font-bold text-[#001738] mb-1">99.9% Accuracy</div>
                    <div className="text-xs text-slate-500">Empirically Validated Solvers</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0] group">
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
        <section id="careers" className="py-20 lg:py-28 bg-white border-b border-[#e2e8f0]">
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
                  <div key={v.title} className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#0057b8] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between">
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
