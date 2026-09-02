"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  Building2, 
  Mail, 
  User, 
  Clock, 
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { calculateStructuralSpecs, formatNumber } from "@/lib/utils";

export default function QuoteModal({
  isOpen,
  onClose,
  dimensions,
  profile,
  material,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: "2-4 Weeks",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const specs = calculateStructuralSpecs(dimensions, profile, material);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request Certified Manufacturer Quote"
      subtitle="Direct CNC fabrication, welding, coating & delivery estimate"
      maxWidth="max-w-2xl"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Fabrication RFQ Submitted</h4>
            <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
              Our engineering team and certified fabrication partner will review your frame specs ({dimensions.width}×{dimensions.depth}×{dimensions.height}mm in {material?.name}) and send a formal cut-sheet quote within 4 business hours.
            </p>
          </div>
          <div className="pt-4">
            <Button variant="primary" size="md" onClick={handleReset}>
              Back to CAD Studio
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Engineering Snapshot Box */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Configured Specification:</span>
              <Badge variant="sky" size="sm">
                Est. ${formatNumber(specs.estimatedCost, 0)} USD
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">SPAN & PROFILE</span>
                <span className="text-slate-200">{dimensions.width}×{dimensions.height} mm</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">STEEL MASS</span>
                <span className="text-slate-200">{specs.totalWeightKg} kg</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">MATERIAL</span>
                <span className="text-slate-200 truncate">{material?.name?.split(" ")[0]}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-300 mb-1 block">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 mb-1 block">Work Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-300 mb-1 block">Company / Organization</label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Engineering & Construction Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 mb-1 block">Desired Lead Time</label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option>Urgent (1-2 Weeks)</option>
                  <option>Standard (2-4 Weeks)</option>
                  <option>Flexible (4-8 Weeks)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300 mb-1 block">Additional Engineering Notes or Tolerances</label>
            <textarea
              rows={2}
              placeholder="e.g. Hot-dip galvanizing coating required, EN 1090-2 execution class EXC2..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001 certified fabrication network
            </span>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                type="submit"
                icon={Send}
                isLoading={isSubmitting}
              >
                Submit RFQ
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
