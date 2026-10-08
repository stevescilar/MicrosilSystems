"use client";

import { useState } from "react";
import { brandConfig } from "@/lib/brandConfig";
import { submitInquiry } from "@/lib/api";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("web-software");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    await submitInquiry({
      name,
      email,
      phone,
      service,
      message,
    });
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Microsil System team! I'm reaching out from your website to inquire about ${service} services.`
    );
    window.open(`https://wa.me/${brandConfig.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEFFF8] border border-[#89D9A4]/60 text-[#03A63D] text-xs font-bold uppercase tracking-wider mb-3">
            Let&apos;s Build Together
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58]">
            Start Your Project Consultation
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Reach out directly to discuss your engineering needs, request an onsite assessment, or schedule a technical review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 bg-[#2F3D58] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#89D9A4]">
                Microsil System Ltd
              </div>
              <h3 className="text-2xl font-bold mt-1 text-white">Nairobi Headquarters</h3>
              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                Operating across Kenya and East Africa. Deploying scalable cloud systems, mobile platforms, and physical security infrastructures.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <a
                href={`tel:${brandConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#03A63D] text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white/50 text-[11px]">Direct Telephone</div>
                  <div className="font-bold text-white text-sm">{brandConfig.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${brandConfig.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#03A63D] text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white/50 text-[11px]">Official Email</div>
                  <div className="font-bold text-white">{brandConfig.email}</div>
                  <div className="text-[11px] text-white/50">{brandConfig.altEmail}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-[#03A63D] text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white/50 text-[11px]">Office Location</div>
                  <div className="font-bold text-white">{brandConfig.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-[#03A63D] text-white">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white/50 text-[11px]">Working Hours</div>
                  <div className="font-medium text-white/90">{brandConfig.officeHours}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={handleDirectWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#03A63D] hover:bg-[#028A32] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#2F3D58] mb-2">Send an Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6">
              Our engineering team responds promptly with technical insights and scope feasibility.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kelvin Mwangi"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#03A63D] focus:ring-1 focus:ring-[#03A63D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +254 705 000 000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#03A63D] focus:ring-1 focus:ring-[#03A63D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. kelvin@company.co.ke"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#03A63D] focus:ring-1 focus:ring-[#03A63D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Domain
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#03A63D] focus:ring-1 focus:ring-[#03A63D]"
                    >
                      <option value="web-software">Web &amp; Enterprise Software (Laravel/Next)</option>
                      <option value="mobile-apps">Mobile App Development (Flutter)</option>
                      <option value="automation">Process Automation &amp; Security</option>
                      <option value="data-bi">Data Consultancy &amp; Power BI</option>
                      <option value="security">CCTV, Biometrics &amp; Networking</option>
                      <option value="hardware">Enterprise Hardware Procurement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Overview or Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you're looking to build or solve..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#03A63D] focus:ring-1 focus:ring-[#03A63D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#03A63D] hover:bg-[#028A32] text-white text-xs sm:text-sm font-bold shadow transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Message</span>
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-[#EEFFF8] border border-[#89D9A4]/60 text-center">
                <div className="w-12 h-12 rounded-full bg-[#03A63D] text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#2F3D58]">Inquiry Received</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, {name}. A member of our technical team will reach out to {email || phone} within 2 business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

