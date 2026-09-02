"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Layers, 
  Cpu, 
  Activity, 
  Radio, 
  Eye, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  DownloadCloud,
  FileCode,
  ShieldCheck
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";

export default function ProductsPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [trialOpen, setTrialOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState("Ansys Mechanical");

  const domains = [
    { id: "all", label: "All Products" },
    { id: "structures", label: "Structures & FEA" },
    { id: "fluids", label: "Fluids & CFD" },
    { id: "electronics", label: "Electronics & EM" },
    { id: "optics", label: "Optics & Photonics" },
    { id: "mission", label: "Digital Mission / STK" },
    { id: "addons", label: "CADFEM Extensions" },
  ];

  const products = [
    {
      id: "mechanical",
      name: "Ansys Mechanical",
      domain: "structures",
      badge: "Flagship FEA",
      desc: "Comprehensive finite element analysis software for structural integrity, nonlinear contact, explicit crash dynamics, and thermal analysis.",
      features: ["Linear & Nonlinear Statics", "Modal & Vibration Analysis", "Composite Materials & Fracture"],
    },
    {
      id: "fluent",
      name: "Ansys Fluent",
      domain: "fluids",
      badge: "Industry Standard CFD",
      desc: "Advanced computational fluid dynamics (CFD) solver with validated turbulence, multiphase flows, reacting flows, and aerodynamics.",
      features: ["GPU Accelerated Solver", "Multiphase & Combustion", "Aeroacoustics Modeling"],
    },
    {
      id: "hfss",
      name: "Ansys HFSS",
      domain: "electronics",
      badge: "3D High-Frequency EM",
      desc: "Gold standard 3D full-wave electromagnetic solver for antennas, RF/microwave components, PCB signal integrity, and EMI/EMC compliance.",
      features: ["Automatic Adaptive Meshing", "Array Antenna Synthesis", "Radar Cross Section (RCS)"],
    },
    {
      id: "stk",
      name: "Ansys STK / Perceive EM",
      domain: "mission",
      badge: "Mission Engineering",
      desc: "Digital mission engineering environment for space orbit trajectories, radar range-Doppler analysis, and multi-domain defense scenarios.",
      features: ["Astrodynamics & Orbit Propagation", "RF Communication Links", "Tactical Radar Coverage"],
    },
    {
      id: "speos",
      name: "Ansys Speos",
      domain: "optics",
      badge: "Optical & HUD",
      desc: "Optical system design and human vision simulation for automotive headlights, head-up displays (HUD), and sensor perception.",
      features: ["Photometric Radiometry", "Camera & LiDAR Simulation", "Material Texture Perception"],
    },
    {
      id: "motor-cad",
      name: "Ansys Motor-CAD",
      domain: "electronics",
      badge: "E-Mobility",
      desc: "Dedicated electric machine design tool for multi-physics performance across torque-speed operating envelopes.",
      features: ["Electromagnetic FEA", "Thermal Network Solver", "Drive Cycle Efficiency"],
    },
    {
      id: "cadfem-bolt",
      name: "CADFEM Bolt Assessment Inside Ansys",
      domain: "addons",
      badge: "CADFEM Extension",
      desc: "Automated structural bolt assessment according to VDI 2230 standards directly integrated into Ansys Workbench.",
      features: ["VDI 2230 Verification", "Multi-Bolt Mass Processing", "Automated Report Export"],
    },
    {
      id: "rocky-dem",
      name: "Ansys Rocky DEM",
      domain: "fluids",
      badge: "Particle Dynamics",
      desc: "Discrete Element Method (DEM) particle simulation for bulk materials, slurry flows, grinding mills, and pharmaceutical coatings.",
      features: ["Non-Spherical Particles", "CFD-DEM Fully Coupled", "Breakage & Wear Modeling"],
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesDomain = selectedDomain === "all" || p.domain === selectedDomain;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#181c20]">
      <TopNavBar
        onOpenTrial={() => {
          setActiveProduct("Ansys Product Trial");
          setTrialOpen(true);
        }}
        onOpenContact={() => {
          setActiveProduct("Product Pricing Inquiry");
          setTrialOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Products Hero */}
        <section className="bg-[#00408b] text-white py-20 px-4 sm:px-8 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase font-bold tracking-wider font-mono text-[#adc7ff] bg-white/10 px-3 py-1 rounded-sm border border-white/20">
                  Ansys Elite Channel Partner
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-['Montserrat'] mb-6 leading-tight text-white">
                Explore Our Full Product Range
              </h1>
              <p className="text-base text-[#d8e2ff] mb-8 max-w-xl leading-relaxed">
                Discover SimuTech&apos;s complete portfolio of Ansys simulation software — from structural and fluid dynamics to electromagnetics, optics, and mission engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setActiveProduct("General Free Trial");
                    setTrialOpen(true);
                  }}
                  className="bg-white text-[#00408b] text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-8 py-3.5 rounded hover:bg-[#f1f4f9] transition-all shadow-md active:scale-95"
                >
                  Request Software Trial
                </button>
                <a
                  href="#catalog"
                  className="border border-white text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-8 py-3.5 rounded hover:bg-white/10 transition-colors"
                >
                  Browse Catalog
                </a>
              </div>
            </div>

            {/* Elite Stats Card */}
            <div className="hidden lg:block bg-white text-[#181c20] rounded p-8 shadow-xl max-w-sm w-full border border-[#c2c6d4]/40">
              <div className="font-bold text-base text-[#0057b8] mb-1 font-['Montserrat'] uppercase tracking-wider text-xs">
                SimuTech Group Benchmark
              </div>
              <div className="text-sm font-semibold text-[#181c20] mb-6">
                40+ Years Ansys Simulation Excellence
              </div>
              <div className="grid grid-cols-2 gap-6 text-center border-t border-[#ebeef3] pt-6">
                <div>
                  <div className="text-3xl font-extrabold text-[#0057b8] mb-1 font-['Montserrat']">
                    40+
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#727784]">
                    Years Exp
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#0057b8] mb-1 font-['Montserrat']">
                    5.7k+
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#727784]">
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Explorer */}
        <section id="catalog" className="py-16 px-4 sm:px-8 max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Filter Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 space-y-8">
              {/* Search */}
              <div className="bg-white p-5 rounded border border-[#c2c6d4]/50 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] mb-3 text-[#181c20]">
                  Search Products
                </h3>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-[#727784]" />
                  <input
                    type="text"
                    placeholder="Search software..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-[#c2c6d4] rounded text-[#181c20] focus:outline-none focus:border-[#0057b8]"
                  />
                </div>
              </div>

              {/* Physics Domains */}
              <div className="bg-white p-5 rounded border border-[#c2c6d4]/50 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] mb-3 text-[#181c20]">
                  Physics Domain
                </h3>
                <div className="flex flex-col space-y-1">
                  {domains.map((dom) => {
                    const isSelected = selectedDomain === dom.id;
                    return (
                      <button
                        key={dom.id}
                        onClick={() => setSelectedDomain(dom.id)}
                        className={`text-left px-3 py-2 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#0057b8] text-white font-bold"
                            : "text-[#424752] hover:bg-[#F5F7FA] hover:text-[#0057b8]"
                        }`}
                      >
                        <span>{dom.label}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Right Product Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center border-b border-[#c2c6d4]/40 pb-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#181c20] font-['Montserrat']">
                    Simulation Software Catalog
                  </h2>
                  <p className="text-xs text-[#424752] mt-0.5">
                    Showing {filteredProducts.length} verified engineering tools
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white p-6 rounded border border-[#c2c6d4]/50 hover:border-[#0057b8]/50 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase bg-[#f1f4f9] text-[#0057b8] px-2.5 py-1 rounded">
                          {prod.badge}
                        </span>
                        <span className="text-[10px] font-mono text-[#727784] uppercase">
                          {prod.domain}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#181c20] mb-2 font-['Montserrat'] group-hover:text-[#0057b8] transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-[#424752] leading-relaxed mb-5">
                        {prod.desc}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-[#ebeef3] mb-6">
                        {prod.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#181c20]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0057b8] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#ebeef3] flex items-center justify-between">
                      <button
                        onClick={() => {
                          setActiveProduct(prod.name);
                          setTrialOpen(true);
                        }}
                        className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] group-hover:text-[#004493] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Request License Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        defaultService={activeProduct}
      />
    </div>
  );
}
