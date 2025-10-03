"use client";

import HeroShowcase from "../components/HeroShowcase";
import ServicesShowcase from "../components/ServicesShowcase";
import ProjectsCarousel from "../components/ProjectsCarousel";
import FAQ from "../components/FAQ";
import WaterPipeScrollIndicator from "../components/WaterPipeScrollIndicator";
import WaterDropCursor from "../components/effects/WaterDropCursor";
import ScrollProgress from "../components/effects/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <WaterDropCursor />
      <WaterPipeScrollIndicator />
      <HeroShowcase />
      <ServicesShowcase />
      
      {/* Before/After Showcase */}
      <ProjectsCarousel />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}