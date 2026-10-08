"use client";

import { brandConfig } from "@/lib/brandConfig";
import { ArrowUpRight, CheckCircle2, Shield, Smartphone, Terminal, BarChart2, Video } from "lucide-react";

export function CaseStudies() {
  const getIcon = (id: string) => {
    switch (id) {
      case "the-money-circle":
        return Shield;
      case "odo-app":
        return Smartphone;
      case "enterprise-automation":
        return Terminal;
      case "power-bi-dashboards":
        return BarChart2;
      default:
        return Video;
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEFFF8] border border-[#89D9A4]/60 text-[#03A63D] text-xs font-bold uppercase tracking-wider mb-3">
              Proven Engineering Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58]">
              Featured Case Studies &amp; Architectures
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-slate-600 text-sm sm:text-base max-w-md">
            Real systems engineered for resilience, data security, and seamless user experiences across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brandConfig.projects.map((project) => {
            const Icon = getIcon(project.id);
            return (
              <div
                key={project.id}
                className="group relative bg-[#f8fafc] rounded-2xl border border-slate-200/90 hover:border-[#89D9A4] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#EEFFF8] text-[#03A63D] border border-[#89D9A4]/40">
                      {project.badge}
                    </span>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#2F3D58] group-hover:text-[#03A63D] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-slate-500">{project.category}</div>
                  <h3 className="text-xl font-bold text-[#2F3D58] mt-1 group-hover:text-[#03A63D] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200/60">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#03A63D]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

