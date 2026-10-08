"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechTicker } from "@/components/TechTicker";
import { CaseStudies } from "@/components/CaseStudies";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProjectEstimator } from "@/components/ProjectEstimator";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const scrollToEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar onOpenEstimator={scrollToEstimator} />
      <Hero onOpenEstimator={scrollToEstimator} />
      <TechTicker />
      <CaseStudies />
      <ServicesGrid onOpenEstimator={scrollToEstimator} />
      <ProjectEstimator />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
