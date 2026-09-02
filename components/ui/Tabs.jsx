"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function Tabs({
  tabs = [],
  activeTab,
  onChange,
  className,
  size = "md",
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center p-1 bg-slate-900/90 border border-slate-800 rounded-xl",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer select-none",
              size === "sm" ? "text-xs px-3 py-1.5" : "text-sm px-4 py-2",
              isActive
                ? "bg-sky-500 text-slate-950 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            )}
          >
            {Icon && <Icon className="w-4 h-4 shrink-0" />}
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isActive ? "bg-slate-900/30 text-slate-950 font-bold" : "bg-slate-800 text-slate-400"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
