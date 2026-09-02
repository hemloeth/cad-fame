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
  Building2 
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import TrialModal from "@/components/modals/TrialModal";

export default function AboutPage() {
  const [trialOpen, setTrialOpen] = useState(false);

  const countries = [
    "India",
    "Indonesia",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam",
    "Japan",
    "Australia",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#181c20]">
      <TopNavBar
        onOpenTrial={() => setTrialOpen(true)}
        onOpenContact={() => setTrialOpen(true)}
      />

      <main className="flex-1">
        {/* About Hero */}
        <section className="w-full bg-[#F5F7FA] py-16 md:py-24 border-b border-[#c2c6d4]/50">
          <div className="px-4 sm:px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0057b8] mb-3 block">
                  About CADFEM APAC
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#00408b] mb-6 font-['Montserrat'] leading-tight">
                  Pioneers of Simulation Excellence.
                </h1>
                <p className="text-sm sm:text-base text-[#424752] leading-relaxed mb-8 max-w-xl">
                  Founded on decades of expertise, the CADFEM Group has been delivering Finite Element Method (FEM) and numerical simulation solutions since 1982. We empower engineers, designers, and researchers across the Asia-Pacific region to harness the full potential of simulation.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setTrialOpen(true)}
                    className="bg-[#0057b8] text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-6 py-3 rounded hover:bg-[#004493] transition-all"
                  >
                    Partner With Us
                  </button>
                </div>
              </div>

              <div className="relative h-64 md:h-96 w-full rounded overflow-hidden shadow-md border border-[#c2c6d4]/40">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="CADFEM engineers collaborating on simulation models"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-UuPR1ifP8daBovjpHUSIPrXifq9gQdf1IVjLoZb21V02UQl0DiLOp1d_ga-2TMmqH_w4tprE3Zc6ytRXTEvKvL27LVOASdR42eXHcsGCaCsO4pIifrZWR6c4zEk845M2NVPk6Fk3cdQR55JimbadJKAzgHaZ_-SEdgpop4lKwEWockS7gowutYTv9j2-HJX1m3QwWk893fIwSVztYI5xCYb3L0ehQQDKx3LvUbuLWtM_0KvSPM4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ansys Elite Partner Bento */}
        <section className="py-20 md:py-28 px-4 sm:px-8 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#181c20] mb-4 font-['Montserrat']">
              Ansys Elite Channel Partner
            </h2>
            <p className="text-sm text-[#424752] max-w-2xl mx-auto leading-relaxed">
              Recognized globally as a leading technology provider of engineering simulation solutions and consulting services in the Asia-Pacific region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#c2c6d4]/40 rounded p-8 flex flex-col items-start bg-white hover:border-[#0057b8]/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-[#00408b]/10 text-[#00408b] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#181c20] mb-2 font-['Montserrat']">
                Elite Status
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed">
                Top-tier partner recognition ensuring deep multi-physics knowledge, validated methodologies, and industry-specific best practices.
              </p>
            </div>

            <div className="border border-[#c2c6d4]/40 rounded p-8 flex flex-col items-start bg-white hover:border-[#0057b8]/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-[#00408b]/10 text-[#00408b] flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#181c20] mb-2 font-['Montserrat']">
                TechNet Alliance
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed">
                Active members collaborating with a global network of over 450+ simulation specialists to drive CAE innovation and knowledge exchange.
              </p>
            </div>

            <div className="border border-[#c2c6d4]/40 rounded p-8 flex flex-col items-start bg-white hover:border-[#0057b8]/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-12 h-12 rounded bg-[#00408b]/10 text-[#00408b] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#181c20] mb-2 font-['Montserrat']">
                Training Hub & esocaet
              </h3>
              <p className="text-xs text-[#424752] leading-relaxed">
                Providing comprehensive academic and corporate simulation trainings, eSeminars, and specialized esocaet Master&apos;s programs.
              </p>
            </div>
          </div>
        </section>

        {/* APAC Reach Section */}
        <section className="py-20 md:py-28 bg-[#F5F7FA] border-y border-[#c2c6d4]/50">
          <div className="px-4 sm:px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 md:h-[400px] w-full rounded overflow-hidden shadow-md border border-[#c2c6d4]/40">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Asia-Pacific Regional Network Map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqwdyYUqNcgzFla5Z83kEGybybexOboEwsIzTBp2AGaPPyhs6CUBM8Mm_z4Xlo6MPgumDGatQtxeTPfG_EsN6FN7TkHdtg4xgDCVneMB8MF1L5f1oKsWfDH_4mcJh7t7UGBLwIGUk7C0DL3GWrd0avYf2QXRBjJ6LXfepJOhR4BpTrfx2iiVQpFq9mizQVlF1oVKbzs68Ne_gIDEYxGaR9oTQBJqiN_SFCZXPrKvuqQdWhqwPYYj3Y"
                />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0057b8] mb-2 block">
                  Regional Footprint
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181c20] mb-6 font-['Montserrat']">
                  Driving Innovation Across APAC
                </h2>
                <p className="text-sm text-[#424752] mb-8 leading-relaxed">
                  Our regional presence ensures localized engineering support, software licensing, and specialized consulting services tailored to the unique demands of ambitious engineering teams across Asia.
                </p>

                <div className="grid grid-cols-2 gap-3.5 font-['Montserrat'] text-xs font-bold text-[#0057b8]">
                  {countries.map((c) => (
                    <div key={c} className="flex items-center gap-2 bg-white p-3 rounded border border-[#c2c6d4]/40">
                      <MapPin className="w-4 h-4 text-[#0057b8] shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        defaultService="CADFEM Partnership Inquiry"
      />
    </div>
  );
}
