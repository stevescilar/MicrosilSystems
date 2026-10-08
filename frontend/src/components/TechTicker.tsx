"use client";

export function TechTicker() {
  const technologies = [
    { name: "Laravel 11", type: "Backend & API" },
    { name: "Next.js 15", type: "Modern Web / SSR" },
    { name: "Flutter", type: "iOS & Android" },
    { name: "Python", type: "ETL & Automation" },
    { name: "PostgreSQL", type: "Enterprise DB" },
    { name: "Daraja M-Pesa", type: "Fintech Payments" },
    { name: "Power BI", type: "Business Analytics" },
    { name: "Redis", type: "High-Speed Queues" },
    { name: "Docker", type: "Containerization" },
    { name: "Tailwind CSS", type: "Design System" },
  ];

  return (
    <div className="py-8 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Built on Proven, Scalable Engineering Stacks
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-5xl mx-auto px-4">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#89D9A4] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#03A63D]" />
            <span className="text-xs font-bold text-[#2F3D58]">{tech.name}</span>
            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">&bull; {tech.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

