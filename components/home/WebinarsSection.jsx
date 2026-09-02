"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Video } from "lucide-react";

export default function WebinarsSection({ onOpenRegister }) {
  const webinars = [
    {
      id: 1,
      badge: "UPCOMING",
      title: "Electromagnetic Actuator Simulation: From Concept to Optimization",
      desc: "Electromagnetic actuators are widely used in automotive, industrial automation, consumer electronics, medical devices, and aerospace applications, where...",
      image: "/webinar-actuator.jpg",
    },
    {
      id: 2,
      badge: "UPCOMING",
      title: "Tactical UAV Swarms: Mitigating Co-Site Interference and EMI/EMC in High-Density Environments.",
      desc: "As tactical UAV swarms become more complex, multiple antennas, radios, navigation systems, sensors, and payloads operating in close proximity create...",
      image: "/webinar-tactical-uav.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#000d24] text-white py-24 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-[3px] h-4 bg-[#38bdf8] rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest font-mono text-[#38bdf8] uppercase">
              WEBINARS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-['Montserrat'] leading-[1.12] tracking-tight">
            Stay ahead <br />
            with CADFEM.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
            Join our live and recorded webinars — expert-led sessions on simulation trends, software demos, and real engineering challenges solved with Ansys tools.
          </p>

          <div className="pt-2 flex flex-wrap gap-3.5">
            <button
              onClick={onOpenRegister}
              className="border border-white/60 text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-6 py-3 rounded hover:bg-white/10 hover:border-white transition-colors cursor-pointer"
            >
              All Webinars
            </button>
            <button
              onClick={onOpenRegister}
              className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-6 py-3 rounded flex items-center gap-2 shadow-lg shadow-[#0d6efd]/30 transition-all active:scale-95 cursor-pointer"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: 2 Webinar Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-[#041433] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all group hover:shadow-xl"
            >
              <div>
                {/* Image with Upcoming Badge */}
                <div className="h-56 overflow-hidden relative bg-[#020b1e]">
                  <div className="absolute top-3 left-3 bg-[#001738]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider z-10 text-white font-mono flex items-center gap-1.5 border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00dfc4] inline-block animate-pulse" />
                    <span>{webinar.badge}</span>
                  </div>
                  <img
                    alt={webinar.title}
                    src={webinar.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 font-['Montserrat'] leading-snug group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {webinar.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenRegister}
                  className="bg-[#eef1f6] hover:bg-white text-[#041433] font-bold text-xs font-['Montserrat'] px-6 py-2.5 rounded-full flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
