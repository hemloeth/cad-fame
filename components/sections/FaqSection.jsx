"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { FAQS } from "@/lib/cad-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Badge variant="sky" size="md" icon={HelpCircle} className="mb-3">
            Knowledge Base & FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Everything you need to know about our CAD kernel, structural validation, export formats, and Stitch AI MCP integration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-slate-900/90 border-sky-500/40 shadow-[0_0_25px_rgba(56,189,248,0.1)]"
                    : "bg-[#0d1017]/70 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-semibold text-slate-100">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-400 bg-sky-500/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
