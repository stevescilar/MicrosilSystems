"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brandConfig } from "@/lib/brandConfig";
import {
  ShoppingBag,
  ShieldCheck,
  Cpu,
  Wifi,
  Laptop,
  MessageSquare,
  Phone,
  CheckCircle2,
  ArrowLeft,
  Filter,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  priceKES: number;
  specs: string[];
  stock: string;
  popular?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "cctv-4ch-kit",
    name: "Hikvision 4-Channel 5MP ColorVu CCTV Kit",
    category: "CCTV & Security",
    priceKES: 34500,
    specs: ["4x 5MP ColorVu Cameras (24/7 Color)", "1x 4CH DVR/NVR with 1TB HDD", "Night Vision & Remote Phone Viewing", "Complete Cabling & Power Supply"],
    stock: "In Stock",
    popular: true,
  },
  {
    id: "cctv-8ch-kit",
    name: "Dahua 8-Channel 4K Ultra HD Commercial Kit",
    category: "CCTV & Security",
    priceKES: 62000,
    specs: ["8x 4K Weatherproof IP Cameras", "8-Channel PoE NVR with 2TB HDD", "Smart AI Motion & Face Detection", "Remote Live Monitoring Setup"],
    stock: "In Stock",
  },
  {
    id: "mikrotik-router",
    name: "MikroTik hEX S Enterprise Gigabit Router",
    category: "Networking",
    priceKES: 14500,
    specs: ["5x Gigabit Ethernet Ports", "1x SFP Port for Fiber Connectivity", "Dual-Core 880MHz CPU & Hardware IPsec", "RouterOS v7 Enterprise Bandwidth Control"],
    stock: "In Stock",
    popular: true,
  },
  {
    id: "ubiquiti-ap",
    name: "Ubiquiti UniFi U6+ Long-Range Wi-Fi 6 Access Point",
    category: "Networking",
    priceKES: 23000,
    specs: ["Wi-Fi 6 (802.11ax) Technology", "Up to 300+ Concurrent Devices", "PoE Powered with UniFi Cloud Controller", "High-Gain Antennas for High Wall Penetration"],
    stock: "In Stock",
  },
  {
    id: "biometric-zkteco",
    name: "ZKTeco K40 Biometric Time Attendance & Door Access",
    category: "Biometrics",
    priceKES: 19500,
    specs: ["Fingerprint + RFID Card + PIN Verification", "TCP/IP & USB Flash Drive Export", "Built-in Battery Backup", "Free Time Attendance Management Software"],
    stock: "In Stock",
  },
  {
    id: "thinkpad-e14",
    name: "Lenovo ThinkPad E14 Gen 5 (Intel Core i7, 16GB, 512GB)",
    category: "Enterprise Computers",
    priceKES: 118000,
    specs: ["13th Gen Intel Core i7-1355U", "16GB DDR4 RAM (Expandable to 40GB)", "512GB NVMe PCIe M.2 SSD", "14.0\" FHD Anti-Glare Display & Backlit Keyboard"],
    stock: "Available on Order",
    popular: true,
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "CCTV & Security", "Networking", "Biometrics", "Enterprise Computers"];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleInquire = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Microsil System! I'm interested in purchasing the following hardware item from your Tech Shop:\n\n` +
        `• Item: ${product.name}\n` +
        `• Category: ${product.category}\n` +
        `• Listed Price: KES ${product.priceKES.toLocaleString()}\n\n` +
        `Could you confirm current stock and delivery/installation details in Nairobi?`
    );
    window.open(`https://wa.me/${brandConfig.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#03A63D] hover:underline mb-3"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2F3D58]">
                Enterprise Hardware &amp; Tech Procurement
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                Genuine commercial hardware verified for enterprise deployments in Kenya. Backed by manufacturer warranties and professional installation services.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#EEFFF8] border border-[#89D9A4]/60 text-xs font-bold text-[#03A63D]">
                Verified Kenyan Hardware Suppliers
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#03A63D] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#89D9A4] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {product.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EEFFF8] text-[#03A63D]">
                      {product.stock}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#2F3D58] leading-snug">
                    {product.name}
                  </h3>

                  <div className="mt-3 text-2xl font-extrabold text-[#03A63D]">
                    KES {product.priceKES.toLocaleString()}
                  </div>

                  <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#03A63D] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => handleInquire(product)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#03A63D] hover:bg-[#028A32] text-white text-xs font-bold rounded-xl shadow transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

