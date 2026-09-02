"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Mail, Building, User, Phone, Sparkles } from "lucide-react";

export default function TrialModal({ isOpen, onClose, defaultService = "Ansys Simulation" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productInterest: defaultService,
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-xl rounded bg-white shadow-2xl z-10 overflow-hidden border border-[#c2c6d4]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#ebeef3] bg-[#f7f9ff]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-[#0057b8]">
              SimuTech APAC Trial & Inquiry
            </span>
            <h3 className="text-lg font-bold text-[#181c20] font-['Montserrat']">
              Request Free Trial / Consultation
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded text-[#424752] hover:text-[#181c20] hover:bg-[#ebeef3]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#0057b8]/10 text-[#0057b8] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#181c20] font-['Montserrat']">
                Request Received
              </h4>
              <p className="text-xs text-[#424752] max-w-sm mx-auto leading-relaxed">
                Thank you! A SimuTech simulation application specialist in your region will reach out within 1 business day with trial access and technical guidance.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="bg-[#0057b8] text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-6 py-2.5 rounded hover:bg-[#004493]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] text-[#424752] mb-1 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#c2c6d4] rounded text-[#181c20] focus:outline-none focus:border-[#0057b8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] text-[#424752] mb-1 block">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#c2c6d4] rounded text-[#181c20] focus:outline-none focus:border-[#0057b8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] text-[#424752] mb-1 block">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Engineering Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#c2c6d4] rounded text-[#181c20] focus:outline-none focus:border-[#0057b8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] text-[#424752] mb-1 block">
                    Solution Area
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#c2c6d4] rounded text-[#181c20] focus:outline-none focus:border-[#0057b8] bg-white cursor-pointer"
                  >
                    <option>Ansys Mechanical (Structures)</option>
                    <option>Ansys Fluent (Fluids & CFD)</option>
                    <option>Ansys HFSS (Electromagnetics)</option>
                    <option>STK / Perceive EM (Mission)</option>
                    <option>Engineering Consulting Services</option>
                    <option>Training & esocaet Master Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider font-['Montserrat'] text-[#424752] mb-1 block">
                  Project / Simulation Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your simulation challenge or specific software evaluation scope..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 text-xs border border-[#c2c6d4] rounded text-[#181c20] focus:outline-none focus:border-[#0057b8]"
                />
              </div>

              <div className="pt-3 border-t border-[#ebeef3] flex items-center justify-between">
                <span className="text-[11px] text-[#727784] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0057b8]" /> Authorized Ansys Channel Partner
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-['Montserrat'] text-[#424752] hover:bg-[#ebeef3] rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0057b8] text-white text-xs font-bold uppercase tracking-wider font-['Montserrat'] px-5 py-2 rounded hover:bg-[#004493]"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
