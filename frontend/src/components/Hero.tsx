"use client";

import { brandConfig } from "@/lib/brandConfig";
import { ArrowRight, ShieldCheck, Zap, Code2, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenEstimator?: () => void;
}

export function Hero({ onOpenEstimator }: HeroProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#EEFFF8]/30 to-[#f8fafc]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#89D9A4]/25 to-[#03A63D]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFFF8] border border-[#89D9A4]/60 text-[#2F3D58] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#03A63D] animate-pulse" />
            <span>Enterprise Digital Engineering &bull; Nairobi, Kenya</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2F3D58] tracking-tight leading-[1.12]">
            High-Impact Software,{" "}
            <span className="bg-gradient-to-r from-[#03A63D] to-[#33A65B] bg-clip-text text-transparent">
              Mobile Ecosystems
            </span>{" "}
            &amp; Enterprise Tech.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl leading-relaxed">
            From bank-grade fintech platforms like <span className="font-semibold text-[#2F3D58]">TheMoneyCircle</span>{" "}
            and high-performance Flutter mobile apps like <span className="font-semibold text-[#2F3D58]">Odo</span>,{" "}
            to automated cryptographic security pipelines and smart commercial surveillance. We engineer technology that drives measurable growth.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#03A63D] hover:bg-[#028A32] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <span>Calculate Project Scope &amp; Cost</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#2F3D58] text-base font-semibold border border-slate-200 shadow-sm transition-all"
            >
              <Code2 className="w-4 h-4 text-[#03A63D]" />
              <span>Explore Verified Work</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#03A63D]" />
              <span>Full-Stack Laravel &amp; Next.js</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#03A63D]" />
              <span>Cross-Platform Flutter Apps</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#03A63D]" />
              <span>M-Pesa Daraja Integration</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#03A63D]" />
              <span>Data Protection &amp; Security</span>
            </div>
          </div>
        </div>

        {/* Live Project Teaser Showcase Card */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 p-5 sm:p-7 shadow-lg shadow-slate-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#03A63D]">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Engineering Showcase
              </div>
              <h3 className="text-xl font-bold text-[#2F3D58] mt-1">
                TheMoneyCircle &bull; Enterprise Fintech Architecture
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#EEFFF8] text-[#03A63D] border border-[#89D9A4]/40">
                Laravel 11 REST API
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700">
                Flutter Clients
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700">
                Automated Ledgers
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-medium text-slate-500">Core Architecture</div>
              <div className="text-base font-bold text-[#2F3D58] mt-1">Laravel + Flutter</div>
              <p className="text-[11px] text-slate-500 mt-0.5">High-throughput microservices</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-medium text-slate-500">Security Standard</div>
              <div className="text-base font-bold text-[#2F3D58] mt-1">Cryptographic Salt</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Multi-layer data protection</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-medium text-slate-500">Payment Gateway</div>
              <div className="text-base font-bold text-[#2F3D58] mt-1">Daraja STK Push</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Real-time settlement callbacks</p>
            </div>
            <div className="p-4 rounded-xl bg-[#EEFFF8] border border-[#89D9A4]/40">
              <div className="text-xs font-medium text-[#03A63D]">Deployment Speed</div>
              <div className="text-base font-bold text-[#03A63D] mt-1">Sub-second Sync</div>
              <p className="text-[11px] text-slate-600 mt-0.5">Optimized caching &amp; Redis</p>
            </div>
          </div>
        </div>

        {/* Company metrics row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {brandConfig.stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58]">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

