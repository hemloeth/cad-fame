"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  ArrowRight,
  Users,
  Briefcase,
  BookOpen,
  Library,
  Layers,
  Wrench,
  GraduationCap,
  Server,
  LayoutGrid,
  FileText,
  Video,
  Power,
  Sparkles,
  Box,
  Compass,
  Radio,
  Car,
  Satellite,
  Cpu,
  Wind,
  Sun,
  Handshake,
  Workflow,
  BrainCircuit,
  Cloud,
  FileCode2,
  Package,
  ShieldAlert,
  Microchip,
  Newspaper,
  PenTool,
  Monitor,
  Calendar,
  PlayCircle
} from "lucide-react";

export default function TopNavBar({ onOpenTrial, onOpenContact }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null); // 'company' | 'products' | 'informs' | null
  const [productsActiveTab, setProductsActiveTab] = useState("products-by-collection");
  const headerRef = useRef(null);

  // Close mega menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMegaMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpenMegaMenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMegaMenu = (menuName) => {
    setOpenMegaMenu((prev) => (prev === menuName ? null : menuName));
  };

  // Products by Collection full Ansys catalog list (from user screenshot)
  const ansysProductsCol1 = [
    { label: "3D Design", icon: Compass, href: "/products#3d-design" },
    { label: "Ansys Extension", icon: Radio, href: "/products#extensions" },
    { label: "Autonomous Vehicles", icon: Car, href: "/products#autonomous" },
    { label: "Connect", icon: Satellite, href: "/products#connect" },
    { label: "Electronics", icon: Cpu, href: "/products#electronics" },
    { label: "Fluids", icon: Wind, href: "/products#fluids" },
    { label: "Optics", icon: Sun, href: "/products#optics" },
    { label: "Structures", icon: Layers, href: "/products#structures" },
    { label: "Ansys Startup Program", icon: Handshake, href: "/products#startup" },
  ];

  const ansysProductsCol2 = [
    { label: "Digital Twin", icon: Workflow, href: "/products#digital-twin" },
    { label: "AI", icon: BrainCircuit, href: "/products#ai" },
    { label: "Cloud", icon: Cloud, href: "/products#cloud" },
    { label: "Digital Mission Engineering", icon: Globe, href: "/products#dme" },
    { label: "Embedded Software", icon: FileCode2, href: "/products#embedded" },
    { label: "Materials", icon: Package, href: "/products#materials" },
    { label: "Safety Analysis", icon: ShieldAlert, href: "/products#safety" },
    { label: "Semiconductors", icon: Microchip, href: "/products#semiconductors" },
  ];

  const productsSidebarTabs = [
    { id: "products-by-collection", label: "Products by Collection" },
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "hardware-it", label: "Hardware & IT" },
    { id: "learning", label: "Learning & Development" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about", icon: Users },
    { label: "Careers", href: "/about#careers", icon: Briefcase },
    { label: "Culture Book", href: "/about#culture", icon: BookOpen },
    { label: "Our Story", href: "/about#story", icon: Library },
  ];

  const informsCol1 = [
    { label: "Blogs", href: "/#insights", icon: FileText },
    { label: "News & Press Releases", href: "/#insights", icon: Newspaper },
    { label: "Editorials & Journals", href: "/#insights", icon: PenTool },
  ];

  const informsCol2 = [
    { label: "Case Studies", href: "/services#case-studies", icon: Monitor },
    { label: "Upcoming Events", href: "/#webinars", icon: Calendar },
    { label: "On Demand →", href: "/#webinars", icon: PlayCircle },
  ];

  return (
    <header ref={headerRef} className="bg-white sticky top-0 w-full z-50 border-b border-[#e2e8f0] shadow-xs">
      {/* Top Navbar Row */}
      <div className="flex justify-between items-center h-20 px-4 sm:px-8 max-w-[1280px] mx-auto relative">
        {/* Brand Logo (Left) */}
        <div className="flex items-center shrink-0">
          <Link href="/" onClick={() => setOpenMegaMenu(null)} className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-[#001738] font-['Montserrat']">
              SimuTech
            </span>
          </Link>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          {/* Company */}
          <button
            onClick={() => toggleMegaMenu("company")}
            className={`flex items-center gap-1.5 text-[13px] font-semibold font-['Montserrat'] transition-colors cursor-pointer py-2 ${
              openMegaMenu === "company" || pathname === "/about"
                ? "text-[#0057b8]"
                : "text-[#1e293b] hover:text-[#0057b8]"
            }`}
          >
            <span>Company</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
              openMegaMenu === "company" ? "rotate-180 text-[#0057b8]" : "opacity-60"
            }`} />
          </button>

          {/* Products & Services */}
          <button
            onClick={() => toggleMegaMenu("products")}
            className={`flex items-center gap-1.5 text-[13px] font-semibold font-['Montserrat'] transition-colors cursor-pointer py-2 ${
              openMegaMenu === "products" || pathname === "/products" || pathname === "/services"
                ? "text-[#0057b8]"
                : "text-[#1e293b] hover:text-[#0057b8]"
            }`}
          >
            <span>Products &amp; Services</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
              openMegaMenu === "products" ? "rotate-180 text-[#0057b8]" : "opacity-60"
            }`} />
          </button>

          {/* CADFEM Informs */}
          <button
            onClick={() => toggleMegaMenu("informs")}
            className={`flex items-center gap-1.5 text-[13px] font-semibold font-['Montserrat'] transition-colors cursor-pointer py-2 ${
              openMegaMenu === "informs"
                ? "text-[#0057b8]"
                : "text-[#1e293b] hover:text-[#0057b8]"
            }`}
          >
            <span>SimuTech Informs</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
              openMegaMenu === "informs" ? "rotate-180 text-[#0057b8]" : "opacity-60"
            }`} />
          </button>

          {/* Contact us */}
          <button
            onClick={() => {
              setOpenMegaMenu(null);
              if (onOpenContact) onOpenContact();
            }}
            className="text-[13px] font-semibold font-['Montserrat'] text-[#1e293b] hover:text-[#0057b8] transition-colors cursor-pointer py-2"
          >
            Contact us
          </button>
        </nav>

        {/* Right Actions: APAC Region Pill & Dark Free Trial Button */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          <button className="flex items-center gap-2 text-xs font-bold font-['Montserrat'] text-[#1e293b] hover:text-[#0057b8] bg-white border border-[#cbd5e1] hover:border-[#94a3b8] rounded-full px-4 py-2 transition-all cursor-pointer shadow-2xs">
            <Globe className="w-4 h-4 text-[#0057b8]" />
            <span>APAC</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            onClick={() => {
              setOpenMegaMenu(null);
              if (onOpenTrial) onOpenTrial();
            }}
            className="bg-[#000d24] hover:bg-[#001738] text-white text-xs font-bold font-['Montserrat'] px-5 py-2.5 rounded-full flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-sm"
          >
            <span>Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-[#1e293b] hover:bg-[#f1f5f9]"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-Width Mega Menu Panel */}
      {openMegaMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-[#e2e8f0] shadow-2xl z-50 min-h-[540px] lg:h-[600px] flex flex-col justify-between py-8 sm:py-10 animate-in fade-in-50 duration-200 overflow-y-auto">
          <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 flex flex-col justify-between flex-1">
            
            {/* 1. PRODUCTS & SERVICES MEGA MENU (Exact Screenshot Layout) */}
            {openMegaMenu === "products" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
                {/* Left Sidebar Tabs */}
                <div className="lg:col-span-3 space-y-2 border-r border-[#e2e8f0] pr-6">
                  {productsSidebarTabs.map((tab) => {
                    const isActive = productsActiveTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setProductsActiveTab(tab.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-xs sm:text-[13px] font-bold font-['Montserrat'] transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-[#000d24] text-white shadow-md relative"
                            : "text-[#1e293b] hover:text-[#0057b8] hover:bg-[#f8fafc]"
                        }`}
                      >
                        <span>{tab.label}</span>
                        {isActive && <span className="text-[#38bdf8] text-xs">▶</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Middle Content: 2-Column Product Grid */}
                <div className="lg:col-span-6 px-2">
                  <div className="flex items-center justify-between mb-4">
                    <Link
                      href="/products"
                      onClick={() => setOpenMegaMenu(null)}
                      className="text-sm font-bold font-['Montserrat'] text-[#001738] hover:text-[#0057b8] flex items-center gap-1.5"
                    >
                      <span>All Ansys Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs text-[#1e293b]">
                    {/* Col 1 */}
                    <div className="space-y-3">
                      {ansysProductsCol1.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenMegaMenu(null)}
                            className="flex items-center gap-2.5 hover:text-[#0057b8] group py-1"
                          >
                            <Icon className="w-4 h-4 text-[#424752] group-hover:text-[#0057b8] shrink-0" />
                            <span className="font-medium font-['Montserrat'] text-[12px]">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-3">
                      {ansysProductsCol2.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenMegaMenu(null)}
                            className="flex items-center gap-2.5 hover:text-[#0057b8] group py-1"
                          >
                            <Icon className="w-4 h-4 text-[#424752] group-hover:text-[#0057b8] shrink-0" />
                            <span className="font-medium font-['Montserrat'] text-[12px]">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Turn Challenges Into Breakthroughs Card */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#00122e] text-white flex items-center justify-center mb-4">
                      <Power className="w-5 h-5 text-[#38bdf8]" />
                    </div>

                    <h4 className="text-base font-bold text-[#001738] mb-2 font-['Montserrat'] leading-snug">
                      Turn Challenges Into Breakthroughs
                    </h4>

                    <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                      Facing engineering challenges? Our experienced, innovative team can help transform obstacles into opportunities for growth.
                    </p>

                    <button
                      onClick={() => {
                        setOpenMegaMenu(null);
                        if (onOpenTrial) onOpenTrial();
                      }}
                      className="inline-flex items-center gap-2 border border-[#001738] rounded-full px-5 py-2 text-xs font-bold text-[#001738] hover:bg-[#001738] hover:text-white transition-all font-['Montserrat'] cursor-pointer"
                    >
                      <span>Free Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. COMPANY MEGA MENU */}
            {openMegaMenu === "company" && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-auto">
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 pt-4">
                    {companyLinks.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenMegaMenu(null)}
                          className="flex items-center gap-4 group text-[#001738] hover:text-[#0057b8] transition-colors"
                        >
                          <div className="text-[#001738] group-hover:text-[#0057b8] transition-colors">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-base font-semibold font-['Montserrat']">
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="lg:col-span-5">
                    <div className="bg-white rounded-2xl border border-[#e2e8f0] p-7 sm:p-8 shadow-xs">
                      <div className="w-12 h-12 rounded-xl bg-[#00122e] text-white flex items-center justify-center mb-5">
                        <LayoutGrid className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#001738] mb-2.5 font-['Montserrat']">
                        Explore Our Full Product Range
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
                        Discover SimuTech&apos;s complete portfolio of Ansys simulation software — from structural and fluid dynamics to electromagnetics and beyond.
                      </p>
                      <Link
                        href="/products"
                        onClick={() => setOpenMegaMenu(null)}
                        className="inline-flex items-center gap-2 border border-[#001738] rounded-full px-6 py-2.5 text-xs font-bold text-[#001738] hover:bg-[#001738] hover:text-white transition-all font-['Montserrat']"
                      >
                        <span>All Products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Gray Quick-Action Bar */}
                <div className="bg-[#f1f5f9] rounded-full px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#001738] font-['Montserrat'] mt-auto">
                  <Link href="/products" onClick={() => setOpenMegaMenu(null)} className="flex items-center gap-2 hover:text-[#0057b8]">
                    <LayoutGrid className="w-4 h-4 text-[#0057b8]" />
                    <span>All Industries →</span>
                  </Link>
                  <button onClick={() => { setOpenMegaMenu(null); if (onOpenTrial) onOpenTrial(); }} className="flex items-center gap-2 hover:text-[#0057b8] cursor-pointer">
                    <Power className="w-4 h-4 text-[#0057b8]" />
                    <span>Free Trial →</span>
                  </button>
                  <Link href="/services" onClick={() => setOpenMegaMenu(null)} className="flex items-center gap-2 hover:text-[#0057b8]">
                    <Wrench className="w-4 h-4 text-[#0057b8]" />
                    <span>All Services →</span>
                  </Link>
                  <button onClick={() => { setOpenMegaMenu(null); if (onOpenContact) onOpenContact(); }} className="flex items-center gap-2 hover:text-[#0057b8] cursor-pointer">
                    <GraduationCap className="w-4 h-4 text-[#0057b8]" />
                    <span>Contact Us →</span>
                  </button>
                </div>
              </>
            )}

            {/* 3. CADFEM INFORMS MEGA MENU (Exact Screenshot Layout) */}
            {openMegaMenu === "informs" && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-auto">
                  {/* Left Section: 2 Columns of Links */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 pt-4">
                    {/* Left Col */}
                    <div className="space-y-7">
                      {informsCol1.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenMegaMenu(null)}
                            className="flex items-center gap-3.5 group text-[#001738] hover:text-[#0057b8] transition-colors"
                          >
                            <div className="text-[#001738] group-hover:text-[#0057b8] transition-colors">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold font-['Montserrat']">
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right Col */}
                    <div className="space-y-7">
                      {informsCol2.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenMegaMenu(null)}
                            className="flex items-center gap-3.5 group text-[#001738] hover:text-[#0057b8] transition-colors"
                          >
                            <div className="text-[#001738] group-hover:text-[#0057b8] transition-colors">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold font-['Montserrat']">
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Featured Product Range Card (Matching Screenshot) */}
                  <div className="lg:col-span-5">
                    <div className="bg-white rounded-2xl border border-[#e2e8f0] p-7 sm:p-8 shadow-xs">
                      <div className="w-11 h-11 rounded-xl bg-[#00122e] text-white flex items-center justify-center mb-4">
                        <LayoutGrid className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-[#001738] mb-2 font-['Montserrat']">
                        Explore Our Full Product Range
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Discover SimuTech&apos;s complete portfolio of Ansys simulation software — from structural and fluid dynamics to electromagnetics and beyond.
                      </p>
                      <Link
                        href="/products"
                        onClick={() => setOpenMegaMenu(null)}
                        className="inline-flex items-center gap-2 border border-[#001738] rounded-full px-5 py-2 text-xs font-bold text-[#001738] hover:bg-[#001738] hover:text-white transition-all font-['Montserrat']"
                      >
                        <span>All Products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Gray Quick-Action Bar */}
                <div className="bg-[#f1f5f9] rounded-full px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#001738] font-['Montserrat'] mt-auto">
                  <Link href="/products" onClick={() => setOpenMegaMenu(null)} className="flex items-center gap-2 hover:text-[#0057b8]">
                    <LayoutGrid className="w-4 h-4 text-[#0057b8]" />
                    <span>All Industries →</span>
                  </Link>
                  <button onClick={() => { setOpenMegaMenu(null); if (onOpenTrial) onOpenTrial(); }} className="flex items-center gap-2 hover:text-[#0057b8] cursor-pointer">
                    <Power className="w-4 h-4 text-[#0057b8]" />
                    <span>Free Trial →</span>
                  </button>
                  <Link href="/services" onClick={() => setOpenMegaMenu(null)} className="flex items-center gap-2 hover:text-[#0057b8]">
                    <Wrench className="w-4 h-4 text-[#0057b8]" />
                    <span>All Services →</span>
                  </Link>
                  <button onClick={() => { setOpenMegaMenu(null); if (onOpenContact) onOpenContact(); }} className="flex items-center gap-2 hover:text-[#0057b8] cursor-pointer">
                    <GraduationCap className="w-4 h-4 text-[#0057b8]" />
                    <span>Contact Us →</span>
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

      {/* Mobile Drawer (Matching exact screenshot) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-y-auto animate-in fade-in-50 duration-200">
          <div>
            {/* Mobile Top Header */}
            <div className="flex justify-between items-center h-20 px-6 border-b border-[#e2e8f0]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="font-extrabold text-2xl tracking-tighter text-[#001738] font-['Montserrat']">
                  SimuTech
                </span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#001738] hover:text-[#0057b8] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Accordion Nav Rows */}
            <div className="px-6 py-2 divide-y divide-[#e2e8f0]">
              {/* Row 1: Company */}
              <div className="py-4">
                <button
                  onClick={() => toggleMegaMenu("mobile-company")}
                  className="w-full flex items-center justify-between text-base font-semibold font-['Montserrat'] text-[#001738] cursor-pointer"
                >
                  <span>Company</span>
                  <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center text-slate-600">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      openMegaMenu === "mobile-company" ? "rotate-180 text-[#0057b8]" : ""
                    }`} />
                  </div>
                </button>

                {openMegaMenu === "mobile-company" && (
                  <div className="pt-3 pl-2 space-y-2.5 animate-in slide-in-from-top-2">
                    {companyLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-1.5 text-xs font-medium text-[#424752] hover:text-[#0057b8]"
                        >
                          <Icon className="w-4 h-4 text-[#0057b8]" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Row 2: Products & Services */}
              <div className="py-4">
                <button
                  onClick={() => toggleMegaMenu("mobile-products")}
                  className="w-full flex items-center justify-between text-base font-semibold font-['Montserrat'] text-[#001738] cursor-pointer"
                >
                  <span>Products &amp; Services</span>
                  <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center text-slate-600">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      openMegaMenu === "mobile-products" ? "rotate-180 text-[#0057b8]" : ""
                    }`} />
                  </div>
                </button>

                {openMegaMenu === "mobile-products" && (
                  <div className="pt-3 pl-2 space-y-2.5 animate-in slide-in-from-top-2">
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs font-bold text-[#0057b8]"
                    >
                      All Products →
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs font-bold text-[#0057b8]"
                    >
                      All Services →
                    </Link>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {ansysProductsCol1.slice(0, 6).map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] text-[#424752] hover:text-[#0057b8] py-1 truncate"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Row 3: CADFEM Informs */}
              <div className="py-4">
                <button
                  onClick={() => toggleMegaMenu("mobile-informs")}
                  className="w-full flex items-center justify-between text-base font-semibold font-['Montserrat'] text-[#001738] cursor-pointer"
                >
                  <span>SimuTech Informs</span>
                  <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center text-slate-600">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      openMegaMenu === "mobile-informs" ? "rotate-180 text-[#0057b8]" : ""
                    }`} />
                  </div>
                </button>

                {openMegaMenu === "mobile-informs" && (
                  <div className="pt-3 pl-2 space-y-2 animate-in slide-in-from-top-2">
                    {informsCol1.concat(informsCol2).map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs font-medium text-[#424752] hover:text-[#0057b8]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 4: Contact us */}
              <div className="py-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="w-full text-left text-base font-semibold font-['Montserrat'] text-[#001738] hover:text-[#0057b8] cursor-pointer"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Mobile Action Buttons */}
          <div className="p-6 space-y-3 border-t border-[#e2e8f0] bg-white">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTrial) onOpenTrial();
              }}
              className="w-full bg-[#000d24] hover:bg-[#001738] text-white font-bold text-sm font-['Montserrat'] py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="w-full border border-[#cbd5e1] hover:border-[#94a3b8] rounded-xl px-4 py-3 flex items-center justify-between text-xs font-bold font-['Montserrat'] text-[#001738] bg-white">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0057b8]" />
                <span>APAC</span>
              </div>
              <ChevronDown className="w-4 h-4 opacity-60" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
