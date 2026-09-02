"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
  className,
  description,
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-slate-300">{label}</span>
        <div className="flex items-center gap-1 font-mono text-sky-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
          <span>{value}</span>
          {unit && <span className="text-slate-500 text-[10px]">{unit}</span>}
        </div>
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 hover:accent-sky-300 focus:outline-none"
      />

      {description && (
        <p className="text-[11px] text-slate-500">{description}</p>
      )}
    </div>
  );
}
