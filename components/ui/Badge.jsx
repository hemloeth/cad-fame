import React from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  dot = false,
  icon: Icon,
}) {
  const base = "inline-flex items-center font-medium rounded-full select-none";

  const variants = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/70",
    sky: "bg-sky-500/10 text-sky-400 border border-sky-500/25 shadow-[0_0_12px_rgba(56,189,248,0.15)]",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    amber: "bg-amber-500/10 text-amber-400 border border-amber-500/25",
    rose: "bg-rose-500/10 text-rose-400 border border-rose-500/25",
    mono: "bg-slate-900 text-slate-300 border border-slate-700 font-mono",
    stitch: "bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 text-sky-300 border border-sky-400/30",
  };

  const sizes = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3.5 py-1.5 gap-2",
  };

  const dotColors = {
    default: "bg-slate-400",
    sky: "bg-sky-400 animate-pulse",
    emerald: "bg-emerald-400 animate-pulse",
    amber: "bg-amber-400",
    rose: "bg-rose-400",
    mono: "bg-sky-400",
    stitch: "bg-sky-400 animate-ping",
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant] || "bg-sky-400")} />}
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      {children}
    </span>
  );
}
