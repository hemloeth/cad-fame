"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Wrench, 
  Cpu, 
  Layers, 
  Activity, 
  Code2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  FileText,
  BarChart3,
  Server
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";

export default function ServicesPage() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Simulation Consulting");

  const servicePillars = [
    {
      id: "consulting",
      icon: Activity,
      title: "Simulation Consulting",
      tag: "FEA, CFD & ELECTROMAGNETICS",
      desc: "Comprehensive engineering analysis for complex physics. We handle structural non-linearities, turbulent multiphase flows, high-frequency antenna design, and thermal management.",
      deliverables: ["Full 3D Simulation Reports", "Root Cause Failure Analysis", "Design Optimization Recommendations"],
    },
    {
      id: "automation",
      icon: Code2,
      title: "Custom Apps & Automation",
      tag: "PYANSYS & APIS",
      desc: "Transform repetitive simulation steps into automated one-click workflows. We build custom Ansys ACT extensions, Python automation scripts, and proprietary engineering GUIs.",
      deliverables: ["Custom PyAnsys Pipelines", "Automated Meshing & Post-Processing", "Standardized Workflow Toolbars"],
    },
    {
      id: "methodology",
      icon: ShieldCheck,
      title: "Method Development & Verification",
      tag: "STANDARDS & CODE VERIFICATION",
      desc: "Establish validated simulation methodologies compliant with international codes (ASME, Eurocode, ISO, DNV). Correlate simulation results with physical test data.",
      deliverables: ["Physical-Digital Correlation Studies", "Standard Operating Procedures (SOP)", "Regulatory Submission Packages"],
    },
    {
      id: "digital-twin",
      icon: Cpu,
      title: "Digital Twins & ROM",
      tag: "REAL-TIME IOT & PHYSICS",
      desc: "Deploy Reduced Order Models (ROM) from 3D physics to real-time operations. Connect simulation models with IoT sensors for predictive maintenance and asset optimization.",
      deliverables: ["Ansys Twin Builder Integration", "Sub-Millisecond Physics ROMs", "Cloud & Edge Deployment"],
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Technical Discovery",
      desc: "We define precise physics requirements, boundary conditions, and key performance indicators (KPIs) tailored to your engineering goals.",
    },
    {
      step: "02",
      title: "Model & Mesh Setup",
      desc: "High-fidelity geometric preparation, boundary boundary layer meshing, and non-linear material characterization.",
    },
    {
      step: "03",
      title: "Solve & Parametric Optimization",
      desc: "High-performance parallel computing execution, mesh sensitivity verification, and multi-objective design space exploration.",
    },
    {
      step: "04",
      title: "Deliver & Implementation",
      desc: "Detailed engineering report with raw simulation files, actionable design guidelines, and handover knowledge transfer.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#181c20]">
      <TopNavBar
        onOpenTrial={() => {
          setSelectedService("Engineering Services");
          setTrialOpen(true);
        }}
        onOpenContact={() => {
          setSelectedService("Engineering Consulting");
          setTrialOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Services Hero */}
        <section className="relative bg-[#F5F7FA] pt-20 pb-28 border-b border-[#c2c6d4]/40 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#ebeef3] px-3 py-1 rounded-sm mb-6 border border-[#c2c6d4]/40">
              <span className="w-2 h-2 rounded-full bg-[#0057b8] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#424752]">
                SimuTech Services Division
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#181c20] leading-tight font-['Montserrat'] mb-6">
                  Engineering Expertise, <br />
                  <span className="text-[#0057b8]">Not Just Software.</span>
                </h1>
                <p className="text-sm sm:text-base text-[#424752] leading-relaxed mb-8 max-w-xl">
                  Facing complex physics or tight product deadlines? Our specialized team of simulation engineers provides consulting, custom software automation, and digital twin services to turn engineering obstacles into breakthroughs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setSelectedService("Consulting Inquiry");
                      setTrialOpen(true);
                    }}
                    className="bg-[#0057b8] text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-8 py-3.5 rounded hover:bg-[#004493] transition-all active:scale-95 shadow-md flex items-center gap-2"
                  >
                    <span>Talk to a Simulation Engineer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#capabilities"
                    className="border border-[#727784] text-[#181c20] text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-6 py-3.5 rounded hover:bg-[#ebeef3] transition-colors"
                  >
                    Explore Capabilities
                  </a>
                </div>
              </div>

              {/* Technical Badge Matrix Box */}
              <div className="bg-white p-8 rounded border border-[#c2c6d4]/50 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#ebeef3]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0057b8]">
                    Capabilities Snapshot
                  </span>
                  <span className="text-xs text-[#424752] font-mono">ISO 9001 Certified</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-[#F5F7FA] p-3.5 rounded border border-[#c2c6d4]/30">
                    <span className="text-[#424752] block text-[10px] uppercase font-bold">Structural FEA</span>
                    <span className="text-[#181c20] font-semibold">Nonlinear, Crash, Fatigue</span>
                  </div>
                  <div className="bg-[#F5F7FA] p-3.5 rounded border border-[#c2c6d4]/30">
                    <span className="text-[#424752] block text-[10px] uppercase font-bold">Computational Fluids</span>
                    <span className="text-[#181c20] font-semibold">Turbulence, Multiphase, Aero</span>
                  </div>
                  <div className="bg-[#F5F7FA] p-3.5 rounded border border-[#c2c6d4]/30">
                    <span className="text-[#424752] block text-[10px] uppercase font-bold">Electromagnetics</span>
                    <span className="text-[#181c20] font-semibold">Antennas, EMI/EMC, Motors</span>
                  </div>
                  <div className="bg-[#F5F7FA] p-3.5 rounded border border-[#c2c6d4]/30">
                    <span className="text-[#424752] block text-[10px] uppercase font-bold">Automation</span>
                    <span className="text-[#181c20] font-semibold">PyAnsys, Custom GUIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Service Capabilities */}
        <section id="capabilities" className="py-24 max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] mb-2 block">
              Core Service Offerings
            </span>
            <h2 className="text-3xl font-extrabold text-[#181c20] font-['Montserrat']">
              Tailored Engineering Solutions For Every Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePillars.map((serv) => {
              const IconComp = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="bg-white p-8 rounded border border-[#c2c6d4]/50 hover:border-[#0057b8]/50 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-[#00408b]/10 rounded flex items-center justify-center text-[#00408b] group-hover:bg-[#00408b] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#0057b8] bg-[#f1f4f9] px-2.5 py-1 rounded">
                        {serv.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#181c20] mb-3 font-['Montserrat']">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-[#424752] leading-relaxed mb-6">
                      {serv.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#ebeef3]">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#727784] block mb-1">
                        Key Deliverables:
                      </span>
                      {serv.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#181c20]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0057b8] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => {
                        setSelectedService(serv.title);
                        setTrialOpen(true);
                      }}
                      className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] group-hover:text-[#004493] flex items-center gap-1.5"
                    >
                      <span>Inquire About {serv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4-Step Engineering Methodology */}
        <section className="py-20 bg-[#F5F7FA] border-y border-[#c2c6d4]/40">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="mb-14">
              <span className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] mb-2 block border-l-2 border-[#0057b8] pl-2">
                Our Proven Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181c20] font-['Montserrat']">
                How We Deliver Validated Engineering Results
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((m) => (
                <div key={m.step} className="bg-white p-6 rounded border border-[#c2c6d4]/40 relative">
                  <span className="font-mono text-2xl font-black text-[#0057b8]/40 mb-3 block">
                    {m.step}
                  </span>
                  <h3 className="text-base font-bold text-[#181c20] mb-2 font-['Montserrat']">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#424752] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#00408b] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 font-['Montserrat']">
              Ready to Solve Your Most Demanding Simulation Challenge?
            </h2>
            <p className="text-sm text-[#d8e2ff] mb-8 leading-relaxed">
              Connect with SimuTech APAC specialists. We will scope your project and provide a transparent timeline and technical roadmap.
            </p>
            <button
              onClick={() => {
                setSelectedService("General Services RFQ");
                setTrialOpen(true);
              }}
              className="bg-white text-[#00408b] text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-8 py-3.5 rounded hover:bg-[#f1f4f9] transition-all shadow-lg active:scale-95"
            >
              Request Project Scoping Call
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
