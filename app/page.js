"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Hub, 
  Engineering, 
  School, 
  Memory, 
  Sparkles,
  Layers, 
  Wrench, 
  GraduationCap, 
  Server,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";
import HeroSlider from "@/components/home/HeroSlider";
import AboutIntroSection from "@/components/home/AboutIntroSection";
import PhysicsExpertiseSection from "@/components/home/PhysicsExpertiseSection";
import WebinarsSection from "@/components/home/WebinarsSection";

export default function HomePage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#181c20]">
      {/* TopNavBar */}
      <TopNavBar
        onOpenTrial={() => setTrialModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main className="flex-1">
        {/* Multi-Slide Fade Hero Section & Bottom Tabs */}
        <HeroSlider onOpenContact={() => setContactModalOpen(true)} />

        {/* CADFEM APAC — Technology Leader & Ansys Elite Partner Section */}
        <AboutIntroSection onOpenContact={() => setContactModalOpen(true)} />

        {/* Four Pillars Section */}
        <section className="py-24 px-4 sm:px-8 max-w-[1280px] mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] mb-2 block border-l-2 border-[#0057b8] pl-2">
              What We Do
            </span>
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181c20] max-w-lg font-['Montserrat']">
                Four pillars that take simulation from idea to outcome.
              </h2>
              <p className="text-sm text-[#424752] leading-relaxed">
                From software licensing to engineering services, training programs and high-performance computing — everything your simulation team needs, under one roof.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Products */}
            <div className="bg-[#F5F7FA] p-8 rounded border border-[#c2c6d4]/40 hover:border-[#0057b8]/50 transition-all group flex flex-col h-full hover:shadow-md">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-[#0057b8] mb-6 shadow-xs border border-[#c2c6d4]/30">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#181c20] mb-3 font-['Montserrat']">
                Products
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed mb-8 flex-1">
                Full-suite Ansys simulation software across structures, fluids, electromagnetics, optics, and embedded code with local licensing and dedicated technical support.
              </p>
              <Link
                href="/products"
                className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: Services */}
            <div className="bg-[#F5F7FA] p-8 rounded border border-[#c2c6d4]/40 hover:border-[#0057b8]/50 transition-all group flex flex-col h-full hover:shadow-md">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-[#0057b8] mb-6 shadow-xs border border-[#c2c6d4]/30">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#181c20] mb-3 font-['Montserrat']">
                Services
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed mb-8 flex-1">
                End-to-end engineering simulation consulting, custom automation apps via PyAnsys, methodology verification, and digital twin implementations.
              </p>
              <Link
                href="/services"
                className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3: Learning */}
            <div className="bg-[#F5F7FA] p-8 rounded border border-[#c2c6d4]/40 hover:border-[#0057b8]/50 transition-all group flex flex-col h-full hover:shadow-md">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-[#0057b8] mb-6 shadow-xs border border-[#c2c6d4]/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#181c20] mb-3 font-['Montserrat']">
                Learning
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed mb-8 flex-1">
                Certified training courses, hands-on workshops, and self-paced e-learning designed by simulation practitioners to build team competency fast.
              </p>
              <button
                onClick={() => setTrialModalOpen(true)}
                className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-2 group-hover:translate-x-1 transition-transform text-left cursor-pointer"
              >
                <span>View Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 4: Hardware & IT */}
            <div className="bg-[#F5F7FA] p-8 rounded border border-[#c2c6d4]/40 hover:border-[#0057b8]/50 transition-all group flex flex-col h-full hover:shadow-md">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-[#0057b8] mb-6 shadow-xs border border-[#c2c6d4]/30">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#181c20] mb-3 font-['Montserrat']">
                Hardware &amp; IT
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed mb-8 flex-1">
                Optimized workstations, HPC cluster sizing, and cloud simulation infrastructure configured specifically for demanding Ansys solver workloads.
              </p>
              <button
                onClick={() => setContactModalOpen(true)}
                className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-2 group-hover:translate-x-1 transition-transform text-left cursor-pointer"
              >
                <span>Consult Hardware</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Insights / Blog Section */}
        <section className="py-24 px-4 sm:px-8 bg-[#F5F7FA] border-t border-[#c2c6d4]/40" id="insights">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] mb-2 block border-l-2 border-[#0057b8] pl-2">
                  From Our Blog
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181c20] max-w-lg font-['Montserrat']">
                  Insights, tutorials and engineering perspectives.
                </h2>
              </div>
              <a
                href="#insights"
                className="hidden md:flex text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] items-center gap-1 hover:underline"
              >
                <span>Explore All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Blog 1 */}
              <div className="bg-white rounded border border-[#c2c6d4]/40 overflow-hidden group hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-52 overflow-hidden relative bg-[#090b10]">
                    <div className="absolute top-4 left-4 bg-white/95 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider z-10 text-[#181c20] font-mono shadow-xs">
                      DME
                    </div>
                    <img
                      alt="Radar Range-Doppler Mapping Workflow"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://cadfem.ai/blog-images/article-integrated-workflow/banner.webp"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2.5 text-[11px] font-mono text-[#424752] mb-3 uppercase tracking-wider">
                      <span className="text-[#0057b8] font-bold">Article</span>
                      <span>•</span>
                      <span>7 min read</span>
                      <span>•</span>
                      <span>Aug 28</span>
                    </div>
                    <h3 className="text-base font-bold text-[#181c20] mb-2.5 group-hover:text-[#0057b8] transition-colors line-clamp-2 font-['Montserrat']">
                      An Integrated Workflow for Radar Range-Doppler Mapping
                    </h3>
                    <p className="text-xs text-[#424752] leading-relaxed line-clamp-3">
                      Modern radar simulation requires accurate flight path design, realistic scenario modeling, and detailed electromagnetic representation of radar systems. Integrating STK with Perceive EM establishes a seamless workflow.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#"
                    className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Blog 2 */}
              <div className="bg-white rounded border border-[#c2c6d4]/40 overflow-hidden group hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-52 overflow-hidden relative bg-[#090b10]">
                    <div className="absolute top-4 left-4 bg-white/95 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider z-10 text-[#181c20] font-mono shadow-xs">
                      General
                    </div>
                    <img
                      alt="The Invisible Simulations Behind Products"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://cadfem.ai/blog-images/article-the-invisible-simulations-behind-products-you-use/banner.webp"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2.5 text-[11px] font-mono text-[#424752] mb-3 uppercase tracking-wider">
                      <span className="text-[#0057b8] font-bold">Blog</span>
                      <span>•</span>
                      <span>4 min read</span>
                      <span>•</span>
                      <span>Jun 26</span>
                    </div>
                    <h3 className="text-base font-bold text-[#181c20] mb-2.5 group-hover:text-[#0057b8] transition-colors line-clamp-2 font-['Montserrat']">
                      The Invisible Simulations Behind Products You Use
                    </h3>
                    <p className="text-xs text-[#424752] leading-relaxed line-clamp-3">
                      Modern engineering simulation helps teams test products virtually before they are built, improving safety, performance, and reliability. From washing machines to electric vehicles, SimuTech enables smarter design.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#"
                    className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Blog 3 (New) */}
              <div className="bg-white rounded border border-[#c2c6d4]/40 overflow-hidden group hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-52 overflow-hidden relative bg-[#090b10]">
                    <div className="absolute top-4 left-4 bg-white/95 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider z-10 text-[#181c20] font-mono shadow-xs">
                      AI / CFD
                    </div>
                    <img
                      alt="AI and Python Automation in Ansys Fluent Workflows"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/blog-ai-pyfluent.jpg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2.5 text-[11px] font-mono text-[#424752] mb-3 uppercase tracking-wider">
                      <span className="text-[#0057b8] font-bold">Tutorial</span>
                      <span>•</span>
                      <span>6 min read</span>
                      <span>•</span>
                      <span>Sep 01</span>
                    </div>
                    <h3 className="text-base font-bold text-[#181c20] mb-2.5 group-hover:text-[#0057b8] transition-colors line-clamp-2 font-['Montserrat']">
                      AI &amp; Python Automation in Ansys Fluent Workflows
                    </h3>
                    <p className="text-xs text-[#424752] leading-relaxed line-clamp-3">
                      Learn how coupling PyFluent APIs with neural network surrogates accelerates aerodynamic optimization by 10x, enabling automated parametric sweeps and real-time CFD prediction.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#"
                    className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-[#0057b8] flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise across Physics Domains Section */}
        <PhysicsExpertiseSection />

        {/* Stay Ahead with CADFEM Webinars Section */}
        <WebinarsSection onOpenRegister={() => setTrialModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        defaultService="Ansys Software Free Trial"
      />

      <TrialModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService="Expert Engineering Consultation"
      />
    </div>
  );
}
