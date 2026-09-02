"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSlider({ onOpenContact }) {
  const slides = [
    {
      id: 0,
      category: "STARTUP PROGRAMS",
      pill: "SOLUTIONS",
      tabTitle: "Build the Future Before the Future Builds Around You",
      title: "Build the Future Before the Future Builds Around You",
      desc: "Enterprise-grade simulation technology for startups bold enough to engineer what's next.",
      tabMeta: "Startup Programs · 6 min read",
      meta: "Feb 10, 2026 · 6 min read",
      image: "https://cadfem.ai/_astro/Startup-Banner.e_VIxeiB_AercB.webp",
      ctaLink: "/services",
    },
    {
      id: 1,
      category: "INNOVATION",
      pill: "AI / ML",
      tabTitle: "When Engineering Meets Intelligence, Innovation...",
      title: "When Engineering Meets Intelligence, Innovation Accelerates",
      desc: "Transform product development with AI-driven engineering, faster decisions, and smarter innovation.",
      tabMeta: "AI / ML · 8 min read",
      meta: "Apr 24, 2026 · 8 min read",
      image: "/hero-ai-engineering.jpg",
      ctaLink: "/services",
    },
    {
      id: 2,
      category: "INDUSTRY FOCUS",
      pill: "OUR INDUSTRIES",
      tabTitle: "From Complexity to Competitive Advantage",
      title: "From Complexity to Competitive Advantage",
      desc: "Empowering industries with simulation-driven innovation to design faster, safer, and smarter systems.",
      tabMeta: "Our Industries · 7 min read",
      meta: "Mar 15, 2026 · 7 min read",
      image: "/hero-industry-simulation.jpg",
      ctaLink: "/products",
    },
    {
      id: 3,
      category: "CONFERENCE 2026",
      pill: "GLOBAL EVENT",
      tabTitle: "Where Tomorrow's Engineering Conversations Begin",
      title: "Where Tomorrow's Engineering Conversations Begin",
      desc: "Join leading CAE experts, researchers, and simulation pioneers exploring the frontier of multiphysics and AI intelligence.",
      tabMeta: "Conference 2026 · 5 min read",
      meta: "May 18, 2026 · 5 min read",
      image: "/webinar-tactical-uav.jpg",
      ctaLink: "/services",
    },
  ];

  const [current, setCurrent] = useState(3); // Start with slide 3 as highlighted in user screenshot or auto

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full bg-[#020b1e] overflow-hidden flex flex-col">
      {/* Main Hero Slider Area */}
      <section className="relative w-full min-h-[520px] lg:h-[580px] flex items-center overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = current === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-right lg:bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              />
              {/* Dark Space Navy Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e] via-[#020b1e]/90 lg:via-[#020b1e]/75 to-transparent" />

              {/* Slide Content */}
              <div className="relative z-20 w-full h-full max-w-[1280px] mx-auto px-4 sm:px-8 text-white flex items-center">
                <div
                  className={`max-w-3xl py-12 transition-all duration-700 delay-100 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {/* Category with Vertical Bar & Rounded Pill */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-[3px] h-4 bg-white rounded-full inline-block" />
                      <span className="text-xs font-bold tracking-widest font-mono text-white/90 uppercase">
                        {slide.category}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold tracking-wider font-mono text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 uppercase">
                      {slide.pill}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] mb-4 text-white leading-[1.18] font-['Montserrat'] tracking-tight max-w-2xl">
                    {slide.title}
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-slate-300 font-normal mb-8 max-w-xl leading-relaxed">
                    {slide.desc}
                  </p>

                  {/* Bottom Row: Read Time Meta & Blue CTA Button */}
                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <span className="text-xs sm:text-sm font-mono text-[#00dfc4] font-medium tracking-wide">
                      {slide.meta}
                    </span>

                    <Link
                      href={slide.ctaLink}
                      className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-7 py-3 rounded flex items-center gap-2 shadow-lg shadow-[#0d6efd]/30 transition-all active:scale-95"
                    >
                      <span>EXPLORE NOW</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Hero Bottom Navigation Tab Bar (matching user screenshot) */}
      <div className="w-full bg-[#010814] border-t border-[#ffffff]/10 border-b border-[#c2c6d4]/20 relative z-30">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {slides.map((slide, idx) => {
            const isActive = current === idx;
            return (
              <div
                key={slide.id}
                onClick={() => setCurrent(idx)}
                className={`p-4 sm:p-5 border-r border-[#ffffff]/10 last:border-r-0 cursor-pointer transition-all select-none ${
                  isActive
                    ? "bg-[#001738]/80 border-l-4 border-l-[#0066ff] pl-3.5 sm:pl-4"
                    : "bg-[#010814] hover:bg-[#00132b]/50 border-l-4 border-l-transparent"
                }`}
              >
                <h4
                  className={`text-xs sm:text-[13px] leading-snug font-bold font-['Montserrat'] line-clamp-2 transition-colors ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {slide.tabTitle}
                </h4>
                <p
                  className={`text-[11px] font-mono mt-1.5 transition-colors ${
                    isActive ? "text-[#00dfc4] font-semibold" : "text-[#727784]"
                  }`}
                >
                  {slide.tabMeta}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
