"use client";

import { brandConfig } from "@/lib/brandConfig";
import {
  Code2,
  Smartphone,
  Cpu,
  BarChart3,
  ShieldCheck,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ServicesGridProps {
  onOpenEstimator?: () => void;
}

export function ServicesGrid({ onOpenEstimator }: ServicesGridProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "Smartphone":
        return Smartphone;
      case "Cpu":
        return Cpu;
      case "BarChart3":
        return BarChart3;
      case "ShieldCheck":
        return ShieldCheck;
      case "ShoppingBag":
        return ShoppingBag;
      default:
        return Code2;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEFFF8] border border-[#89D9A4]/60 text-[#03A63D] text-xs font-bold uppercase tracking-wider mb-3">
            Core Technology Verticals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58]">
            End-to-End Technology Capabilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From low-level data security and hardware infrastructure to modern web apps and high-scale fintech backends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brandConfig.services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#89D9A4] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EEFFF8] border border-[#89D9A4]/40 flex items-center justify-center text-[#03A63D] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#2F3D58]">{service.title}</h3>
                  <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#03A63D] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenEstimator}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#03A63D] hover:text-[#028A32] transition-colors cursor-pointer group"
                  >
                    <span>Estimate This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="#contact"
                    className="text-[11px] font-medium text-slate-400 hover:text-[#2F3D58] transition-colors"
                  >
                    Consult Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

