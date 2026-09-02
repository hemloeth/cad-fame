"use client";

import React, { useState } from "react";
import { 
  DownloadCloud, 
  CheckCircle2, 
  Boxes, 
  FileCode, 
  Building2, 
  Cpu, 
  FileText,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { EXPORT_FORMATS } from "@/lib/cad-data";
import { calculateStructuralSpecs } from "@/lib/utils";

const iconMap = {
  Boxes,
  FileCode,
  Building2,
  Cpu,
  FileText,
};

export default function ExportModal({
  isOpen,
  onClose,
  dimensions,
  profile,
  material,
}) {
  const [selectedFormat, setSelectedFormat] = useState("step");
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const specs = calculateStructuralSpecs(dimensions, profile, material);

  const handleDownload = () => {
    setIsExporting(true);
    setExportComplete(false);

    // Simulate CAD compilation & download
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);

      const formatObj = EXPORT_FORMATS.find((f) => f.id === selectedFormat) || EXPORT_FORMATS[0];
      const filename = `cadfames-frame_${dimensions.width}x${dimensions.depth}x${dimensions.height}_${profile?.id || "hea200"}${formatObj.ext}`;
      
      const fileData = `// CAD FAMES PARAMETRIC EXPORT
// Format: ${formatObj.name}
// Dimensions: Width=${dimensions.width}mm, Depth=${dimensions.depth}mm, Height=${dimensions.height}mm
// Profile: ${profile?.name} (${profile?.dimensions})
// Material: ${material?.name} (${material?.standard})
// Mass: ${specs.totalWeightKg} kg | Safe Load: ${specs.maxSafeLoadKN} kN
// Generator: CAD FAMES Cloud Kernel v2.4
// Generated at: ${new Date().toISOString()}
`;
      const blob = new Blob([fileData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Export Parametric CAD & BIM Package"
      subtitle="Universal solid models, 2D vector shop drawings, and machine toolpaths"
      maxWidth="max-w-2xl"
    >
      <div className="space-y-5">
        {/* Active Frame Summary */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-400">Target Assembly: </span>
            <span className="font-mono text-slate-100 font-semibold">
              {dimensions.width} × {dimensions.depth} × {dimensions.height} mm
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="sky" size="sm">
              {profile?.name}
            </Badge>
            <Badge variant="emerald" size="sm">
              {material?.name}
            </Badge>
          </div>
        </div>

        {/* Format Selector List */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Select Export Geometry Format:
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {EXPORT_FORMATS.map((fmt) => {
              const isSelected = selectedFormat === fmt.id;
              const IconComp = iconMap[fmt.icon] || Boxes;

              return (
                <div
                  key={fmt.id}
                  onClick={() => {
                    setSelectedFormat(fmt.id);
                    setExportComplete(false);
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? "bg-sky-500/15 border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold ${isSelected ? "text-sky-300" : "text-slate-200"}`}>
                        {fmt.name}
                      </span>
                      {fmt.popular && (
                        <Badge variant="sky" size="sm">
                          Standard
                        </Badge>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {fmt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Export Status & Actions */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            {exportComplete ? (
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Geometry package downloaded successfully!
              </span>
            ) : (
              <span>Compiled directly by CAD FAMES geometry engine</span>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={DownloadCloud}
              isLoading={isExporting}
              onClick={handleDownload}
            >
              {isExporting ? "Compiling Geometry..." : "Download CAD File"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
