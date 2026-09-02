import React from "react";
import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001a41] w-full py-16 text-[#adc7ff] border-t border-[#004493]/40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-8 max-w-[1280px] mx-auto text-sm">
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="font-extrabold text-2xl text-white mb-4 tracking-tighter font-['Montserrat']">
            CADFEM
          </div>
          <p className="mb-6 opacity-80 text-xs leading-relaxed max-w-xs text-[#adc7ff]">
            A brand of the CADFEM Group.<br />
            Engineering simulation solutions, services and skills — for ambitious teams across the Asia-Pacific region.
          </p>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs text-[#d8e2ff]/80">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about#careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/services#case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/#insights" className="hover:text-white transition-colors">
                Insights & Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs text-[#d8e2ff]/80">
            <li>
              <Link href="/products" className="hover:text-white transition-colors">
                Ansys Software Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Engineering Services
              </Link>
            </li>
            <li>
              <Link href="/services#training" className="hover:text-white transition-colors">
                Learning & Development
              </Link>
            </li>
            <li>
              <Link href="/products#hardware" className="hover:text-white transition-colors">
                Hardware & HPC
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider font-['Montserrat'] text-white mb-4">
            Legal & Support
          </h4>
          <ul className="space-y-2.5 text-xs text-[#d8e2ff]/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Legal Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-white/10 px-4 sm:px-8 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
        <p>© {new Date().getFullYear()} CADFEM APAC. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" /> Asia-Pacific Region
          </span>
        </div>
      </div>
    </footer>
  );
}
