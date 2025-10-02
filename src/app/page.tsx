"use client";

import HeroShowcase from "../components/HeroShowcase";
import ServicesShowcase from "../components/ServicesShowcase";
import ProjectsCarousel from "../components/ProjectsCarousel";
import FAQ from "../components/FAQ";
import WaterPipeScrollIndicator from "../components/WaterPipeScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen">
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