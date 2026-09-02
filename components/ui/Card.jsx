import React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hoverGlow = true,
  gridAccent = false,
  techCorners = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-[#0f1219]/90 border border-white/[0.08] p-6 transition-all duration-300",
        hoverGlow && "hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]",
        gridAccent && "bg-cad-grid",
        techCorners && "tech-border-corners",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
