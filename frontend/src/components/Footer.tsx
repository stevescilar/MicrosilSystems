"use client";

import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/lib/brandConfig";
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E283A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-11 w-48 bg-white/5 p-1 rounded-lg">
              <Image
                src="/brand/MIcrosil Logo_.png"
                alt="Microsil System Logo"
                fill
                sizes="192px"
                className="object-contain object-left brightness-200"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {brandConfig.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#03A63D]/20 text-[#89D9A4] text-xs font-semibold border border-[#03A63D]/30">
                <span className="w-2 h-2 rounded-full bg-[#03A63D]" />
                Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#service-web-software" className="hover:text-[#89D9A4] transition-colors">
                  Web &amp; SaaS Platforms
                </a>
              </li>
              <li>
                <a href="#service-mobile-apps" className="hover:text-[#89D9A4] transition-colors">
                  Flutter Mobile Apps
                </a>
              </li>
              <li>
                <a href="#service-automation" className="hover:text-[#89D9A4] transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#service-data-bi" className="hover:text-[#89D9A4] transition-colors">
                  Data &amp; Power BI
                </a>
              </li>
              <li>
                <a href="#service-security" className="hover:text-[#89D9A4] transition-colors">
                  CCTV &amp; Networking
                </a>
              </li>
              <li>
                <a href="#service-tech-shop" className="hover:text-[#89D9A4] transition-colors">
                  Hardware Tech Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#portfolio" className="hover:text-[#89D9A4] transition-colors">
                  TheMoneyCircle Case Study
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#89D9A4] transition-colors">
                  Odo Mobile Ecosystem
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#89D9A4] transition-colors">
                  Interactive Scope Calculator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#89D9A4] transition-colors">
                  Request Technical Scope
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Connect */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#89D9A4]" />
                <a href={`tel:${brandConfig.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                  {brandConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#89D9A4]" />
                <a href={`mailto:${brandConfig.email}`} className="hover:text-white">
                  {brandConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#89D9A4]" />
                <span>{brandConfig.address}</span>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${brandConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#03A63D] hover:bg-[#028A32] text-white text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {brandConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Engineering Excellence in Kenya</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
