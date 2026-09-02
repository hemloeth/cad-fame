"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  iconRight: IconRight,
  isLoading = false,
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-[#090a0f]";

  const variants = {
    primary:
      "bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 active:bg-sky-600 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] border border-sky-400/40",
    secondary:
      "bg-slate-800/90 text-slate-100 hover:bg-slate-700/90 active:bg-slate-800 border border-slate-700 hover:border-slate-600",
    outline:
      "bg-transparent text-slate-200 border border-slate-700 hover:border-sky-500/50 hover:bg-sky-500/5 hover:text-white",
    ghost:
      "bg-transparent text-slate-300 hover:bg-slate-800/60 hover:text-white border border-transparent",
    glow:
      "bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-slate-950 font-bold hover:opacity-95 shadow-[0_0_30px_rgba(56,189,248,0.35)]",
    danger:
      "bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 hover:border-rose-500/50",
    cad:
      "bg-[#0f172a] text-sky-400 border border-sky-500/40 hover:bg-sky-950/40 hover:border-sky-400 font-mono",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3",
    icon: "p-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 mr-1 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : Icon ? (
        <Icon className={cn("shrink-0", size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4")} />
      ) : null}
      <span>{children}</span>
      {IconRight && !isLoading && (
        <IconRight className={cn("shrink-0", size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4")} />
      )}
    </button>
  );
}
