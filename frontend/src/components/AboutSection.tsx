"use client";

import { brandConfig } from "@/lib/brandConfig";
import { ShieldCheck, Target, Award, Rocket, CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Story & Ethos */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEFFF8] border border-[#89D9A4]/60 text-[#03A63D] text-xs font-bold uppercase tracking-wider">
              Engineering Mindset &bull; Nairobi, Kenya
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58] leading-tight">
              We Don&apos;t Just Build Software. We Engineer Digital Infrastructure.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <span className="font-semibold text-[#2F3D58]">Microsil System</span>, we believe African businesses deserve technology solutions that perform reliably under real-world pressure. We specialize in high-uptime web applications, cross-platform mobile apps with Flutter, secure data pipelines, and physical security systems.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether deploying high-throughput fintech ledgers for platforms like <strong>TheMoneyCircle</strong>, crafting intuitive mobile interfaces for <strong>Odo</strong>, or automating cryptographic security routines for data compliance—every line of code is purpose-built for scale and resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#03A63D] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#2F3D58]">Security First</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Data encryption, cryptographic salting, and ISO-aligned standards.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <Rocket className="w-5 h-5 text-[#03A63D] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#2F3D58]">Rapid Deployment</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Battle-tested architectures with Laravel 11 and Next.js 15.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card */}
          <div className="lg:col-span-5 bg-[#2F3D58] text-white rounded-2xl p-7 sm:p-9 shadow-xl space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#89D9A4]">
                Our Mission &amp; Promise
              </div>
              <h3 className="text-xl font-bold mt-1 text-white">
                Technology That Works for Your Business
              </h3>
            </div>

            <div className="space-y-4 text-xs text-white/80 leading-relaxed">
              <p>
                To deliver reliable, practical technology solutions that solve real business bottlenecks and create verifiable financial and operational returns.
              </p>
              <p>
                We maintain active communication throughout every build, providing transparent milestones, staging environments, and comprehensive post-launch support.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                <CheckCircle className="w-4 h-4 text-[#89D9A4]" />
                <span>Zero vendor lock-in &bull; Full source ownership</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                <CheckCircle className="w-4 h-4 text-[#89D9A4]" />
                <span>Dedicated East Africa support &amp; SLA</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                <CheckCircle className="w-4 h-4 text-[#89D9A4]" />
                <span>Tested against high network variability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

