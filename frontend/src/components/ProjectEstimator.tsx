"use client";

import { useState } from "react";
import { brandConfig } from "@/lib/brandConfig";
import {
  Calculator,
  Check,
  Smartphone,
  Globe,
  Cpu,
  BarChart3,
  ShieldAlert,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Clock,
  Coins,
} from "lucide-react";

import { submitQuoteRequest } from "@/lib/api";

interface ProjectEstimatorProps {
  isOpen?: boolean;
  onClose?: () => void;
  standalone?: boolean;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  icon: typeof Globe;
  baseKES: number;
  baseWeeks: number;
  description: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "web",
    name: "Web Platform & SaaS",
    icon: Globe,
    baseKES: 85000,
    baseWeeks: 3,
    description: "Full-stack Laravel 11 API + Next.js 15 modern web application",
  },
  {
    id: "mobile",
    name: "Flutter Mobile App",
    icon: Smartphone,
    baseKES: 110000,
    baseWeeks: 4,
    description: "Production iOS & Android app with Flutter clean architecture",
  },
  {
    id: "automation",
    name: "Python Automation & Security",
    icon: Cpu,
    baseKES: 45000,
    baseWeeks: 2,
    description: "Cryptographic hashing, data salting, ETL scripts & automated bots",
  },
  {
    id: "bi",
    name: "Power BI & Data Consultancy",
    icon: BarChart3,
    baseKES: 55000,
    baseWeeks: 2,
    description: "Data modeling, warehousing & executive KPI dashboards",
  },
  {
    id: "cctv",
    name: "CCTV & Physical Infrastructure",
    icon: ShieldAlert,
    baseKES: 65000,
    baseWeeks: 1,
    description: "Commercial IP cameras, biometrics, access control & cabling",
  },
];

const SCALES = [
  { id: "starter", name: "MVP / Starter", multiplier: 1.0, weeksBonus: 0 },
  { id: "growth", name: "Growing Business", multiplier: 1.45, weeksBonus: 2 },
  { id: "enterprise", name: "Enterprise Scale", multiplier: 2.1, weeksBonus: 4 },
];

const ADDONS = [
  { id: "mpesa", name: "Daraja M-Pesa STK Push & Automated Ledger", priceKES: 25000 },
  { id: "admin", name: "Custom Admin CMS & Analytics Dashboard", priceKES: 30000 },
  { id: "auth", name: "Multi-Role Authentication & Security Auditing", priceKES: 20000 },
  { id: "realtime", name: "Real-time Push Notifications & SMS Gateway", priceKES: 18000 },
  { id: "maintenance", name: "6 Months Dedicated SLA Support & Maintenance", priceKES: 35000 },
];

export function ProjectEstimator({ standalone = true }: ProjectEstimatorProps) {
  const [selectedType, setSelectedType] = useState<string>("web");
  const [selectedScale, setSelectedScale] = useState<string>("starter");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["mpesa", "admin"]);

  // Lead capture form
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const currentScale = SCALES.find((s) => s.id === selectedScale) || SCALES[0];

  // Calculate price and time
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return acc + (addon ? addon.priceKES : 0);
  }, 0);

  const estimatedKES = Math.round((currentType.baseKES * currentScale.multiplier + addonsTotal) / 1000) * 1000;
  const estimatedUSD = Math.round(estimatedKES / 130);
  const estimatedWeeks = currentType.baseWeeks + currentScale.weeksBonus;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Microsil System! I used your Interactive Cost Estimator on your website:\n\n` +
        `• Solution: ${currentType.name}\n` +
        `• Tier: ${currentScale.name}\n` +
        `• Features: ${selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).filter(Boolean).join(", ")}\n` +
        `• Estimated Budget: KES ${estimatedKES.toLocaleString()} (~$${estimatedUSD.toLocaleString()})\n` +
        `• Estimated Timeline: ${estimatedWeeks} - ${estimatedWeeks + 2} Weeks\n\n` +
        `My Name: ${clientName || "Potential Client"}\n` +
        `Phone: ${clientPhone || "Not provided"}\n\n` +
        `I would like to discuss next steps and receive a formal technical proposal.`
    );
    window.open(`https://wa.me/${brandConfig.whatsapp}?text=${message}`, "_blank");
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    await submitQuoteRequest({
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      solution_type: selectedType,
      scale: selectedScale,
      addons: selectedAddons,
      estimated_kes: estimatedKES,
      estimated_usd: estimatedUSD,
      estimated_weeks: estimatedWeeks,
    });
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEFFF8] border border-[#89D9A4]/60 text-[#03A63D] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58]">
            Interactive Project Scope &amp; Cost Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Configure your technical requirements to receive an instant estimate based on our proven development frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Configuration Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                1. Select Solution Domain
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? "border-[#03A63D] bg-[#EEFFF8] ring-1 ring-[#03A63D]"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? "bg-[#03A63D] text-white" : "bg-slate-100 text-[#2F3D58]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#2F3D58]">{type.name}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {type.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scale */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                2. Select Business Scale
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {SCALES.map((scale) => {
                  const isSelected = selectedScale === scale.id;
                  return (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScale(scale.id)}
                      className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#03A63D] bg-[#EEFFF8] text-[#03A63D] font-bold ring-1 ring-[#03A63D]"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs"
                      }`}
                    >
                      <div className="text-xs">{scale.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Required Features / Modules */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                3. Add High-Value Capabilities
              </div>
              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#03A63D]/80 bg-[#EEFFF8]/50"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isChecked
                              ? "bg-[#03A63D] border-[#03A63D] text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">
                        +KES {addon.priceKES.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Lead Capture */}
          <div className="lg:col-span-5 bg-[#2F3D58] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#03A63D]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#89D9A4]">
                Estimated Scope
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-white/10 text-white font-medium">
                Transparent Rate
              </span>
            </div>

            <div className="my-6 space-y-4">
              <div>
                <div className="text-xs text-white/60">Estimated Investment Range</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#89D9A4] mt-1">
                  KES {estimatedKES.toLocaleString()}
                </div>
                <div className="text-xs text-white/50 mt-0.5">Approx. ${estimatedUSD.toLocaleString()} USD</div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Clock className="w-4 h-4 text-[#89D9A4]" />
                  <span>Timeline: ~{estimatedWeeks} - {estimatedWeeks + 2} Weeks</span>
                </div>
              </div>
            </div>

            <div className="py-4 border-t border-white/10 text-xs text-white/70 space-y-2">
              <div className="flex justify-between">
                <span>Selected Architecture:</span>
                <span className="font-semibold text-white">{currentType.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Scale Tier:</span>
                <span className="font-semibold text-white">{currentScale.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Modules Included:</span>
                <span className="font-semibold text-white">{selectedAddons.length} features</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#03A63D] hover:bg-[#028A32] text-white font-bold text-sm rounded-xl shadow transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp Instantly</span>
              </button>

              {!submitted ? (
                <form onSubmit={handleSubmitLead} className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-white/80">
                    Or request formal PDF proposal by email:
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name / Organization"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#89D9A4]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      placeholder="Phone (e.g. 0705...)"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#89D9A4]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#89D9A4]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg border border-white/20 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#89D9A4]" />
                    <span>Send Me Technical Scope</span>
                  </button>
                </form>
              ) : (
                <div className="p-3.5 rounded-xl bg-[#03A63D]/20 border border-[#89D9A4]/40 text-center text-xs">
                  <div className="font-bold text-[#89D9A4]">Proposal Request Received!</div>
                  <p className="text-white/80 mt-1 text-[11px]">
                    Our technical lead will review your scope and get in touch within 2 business hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

