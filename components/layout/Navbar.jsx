"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Box, 
  Layers, 
  Cpu, 
  Menu, 
  X, 
  Sparkles, 
  FileCode, 
  DownloadCloud,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function Navbar({ onOpenQuote, onOpenExport }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "3D CAD Studio", href: "#studio" },
    { label: "Profiles & Catalog", href: "#profiles" },
    { label: "BIM & CNC Pipeline", href: "#workflow" },
    { label: "Engineering Specs", href: "#specs" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 p-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all">
            <div className="w-full h-full bg-[#090a0f] rounded-[11px] flex items-center justify-center">
              <Box className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold tracking-wider text-lg text-white">
                CAD<span className="text-sky-400">FAMES</span>
              </span>
              <Badge variant="stitch" size="sm" dot>
                Stitch AI MCP
              </Badge>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-slate-400">
              Structural Framing v2.4
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-800/70 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            icon={DownloadCloud}
            onClick={onOpenExport}
          >
            Export CAD
          </Button>

          <Button
            variant="primary"
            size="sm"
            iconRight={ChevronRight}
            onClick={onOpenQuote}
          >
            Request Quote
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#090a0f]/98 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 py-2 border-b border-slate-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center"
              icon={DownloadCloud}
              onClick={() => {
                setMobileOpen(false);
                if (onOpenExport) onOpenExport();
              }}
            >
              Export CAD Models
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileOpen(false);
                if (onOpenQuote) onOpenQuote();
              }}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
