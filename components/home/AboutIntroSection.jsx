"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function AboutIntroSection({ onOpenContact }) {
  const stats = [
    { value: "40+", label: "Years of Excellence" },
    { value: "5,700+", label: "Clients Worldwide" },
    { value: "600+", label: "Employees" },
    { value: "35+", label: "Locations" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#002e6e] via-[#003d8f] to-[#00479e] text-white py-20 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-[3px] h-4 bg-[#38bdf8] rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest font-mono text-[#38bdf8] uppercase">
              ENGINEERING SIMULATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.18] font-['Montserrat'] tracking-tight text-white">
            CADFEM APAC — Technology Leader and Pioneer Of{" "}
            <span className="text-[#38bdf8] block mt-1">Simulation Solution</span>
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#d8e2ff]/90 leading-relaxed font-normal max-w-2xl">
            <p>
              CADFEM APAC is an <strong className="text-white font-semibold">Ansys Elite Channel Partner</strong> and one of the leading technology providers of engineering simulation solutions in the Asia-Pacific region. We empower engineers, designers and researchers to harness the full potential of simulation in product development.
            </p>
            <p>
              Founded on decades of expertise, the CADFEM Group has been delivering Finite Element Method (FEM) simulations since 1982. Our team brings together deep multi-physics knowledge with industry-specific best practices to solve the toughest engineering problems.
            </p>
            <p>
              As an active member of the <strong className="text-white font-semibold">TechNet Alliance</strong>, we collaborate with a global network of simulation specialists to drive innovation in CAE, software development and engineering services worldwide.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-white text-[#003882] text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-7 py-3.5 rounded hover:bg-[#f1f4f9] transition-all active:scale-95 shadow-lg"
            >
              Explore Solutions
            </Link>
            <button
              onClick={onOpenContact}
              className="border border-white text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-7 py-3.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              Talk to an Expert
            </button>
          </div>
        </div>

        {/* Right Column: Ansys Elite Partner Card */}
        <div className="lg:col-span-5">
          <div className="bg-white text-[#181c20] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#c2c6d4]/40">
            {/* Ansys Elite Channel Partner Header */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0]">
              <div>
                <div className="flex items-center gap-1.5 font-extrabold text-2xl tracking-tighter font-['Montserrat']">
                  <span className="text-[#ffb71b]">/</span>
                  <span className="text-[#181c20]">Ansys</span>
                </div>
                <div className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase font-mono">
                  part of <span className="text-[#495e8a] font-bold">SYNOPSYS</span>
                </div>
              </div>

              <div className="h-10 w-[1px] bg-[#cbd5e1]" />

              <div className="text-right">
                <div className="text-xs font-extrabold tracking-widest uppercase font-mono text-[#181c20]">
                  ELITE
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase font-mono text-[#64748b]">
                  CHANNEL PARTNER
                </div>
              </div>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0057b8] font-['Montserrat'] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#424752] font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
