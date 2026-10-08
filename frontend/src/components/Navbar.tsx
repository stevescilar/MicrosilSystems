"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { brandConfig } from "@/lib/brandConfig";
import { Menu, X, ChevronDown, Calculator, Phone, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export function Navbar({ onOpenEstimator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-44 sm:h-11 sm:w-48">
              <Image
                src="/brand/MIcrosil Logo_.png"
                alt="Microsil System Logo"
                fill
                sizes="(max-width: 640px) 176px, 192px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#03A63D] transition-colors rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#03A63D] transition-colors rounded-lg hover:bg-slate-50"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#03A63D]" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Core Engineering Capabilities
                  </div>
                  {brandConfig.services.map((service) => (
                    <a
                      key={service.id}
                      href={`#service-${service.id}`}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:text-[#03A63D] hover:bg-[#EEFFF8] transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-semibold text-xs text-[#2F3D58]">{service.title}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {service.description}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#03A63D] transition-colors rounded-lg hover:bg-slate-50"
            >
              Case Studies
            </a>

            <a
              href="#estimator"
              className="px-3 py-2 text-sm font-medium text-[#03A63D] hover:text-[#028A32] font-semibold transition-colors rounded-lg hover:bg-[#EEFFF8] flex items-center gap-1"
              onClick={(e) => {
                if (onOpenEstimator) {
                  e.preventDefault();
                  onOpenEstimator();
                }
              }}
            >
              <Calculator className="w-3.5 h-3.5" />
              Estimator
            </a>

            <a
              href="#about"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#03A63D] transition-colors rounded-lg hover:bg-slate-50"
            >
              About
            </a>

            <a
              href="#contact"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#03A63D] transition-colors rounded-lg hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${brandConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#2F3D58] px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#03A63D]" />
              <span>{brandConfig.phone}</span>
            </a>

            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 bg-[#03A63D] hover:bg-[#028A32] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#03A63D] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1.5">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-[#EEFFF8] hover:text-[#03A63D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#services"
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-[#EEFFF8] hover:text-[#03A63D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-[#EEFFF8] hover:text-[#03A63D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </a>
              <a
                href="#estimator"
                className="px-3 py-2 rounded-md text-base font-medium text-[#03A63D] bg-[#EEFFF8] flex items-center justify-between"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator?.();
                }}
              >
                <span>Interactive Cost Estimator</span>
                <Calculator className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-[#EEFFF8] hover:text-[#03A63D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-[#EEFFF8] hover:text-[#03A63D]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimator?.();
                  }}
                  className="w-full py-3 bg-[#03A63D] hover:bg-[#028A32] text-white text-center font-semibold rounded-lg shadow-sm"
                >
                  Estimate Your Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

