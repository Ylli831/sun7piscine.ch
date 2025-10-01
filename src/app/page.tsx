"use client";

import HeroPremium from "../components/HeroPremium";
import ServicesPremium from "../components/ServicesPremium";
import ProjectsCarousel from "../components/ProjectsCarousel";
import FAQ from "../components/FAQ";
import QuoteFormClean from "../components/QuoteFormClean";
import WaterPipeScrollIndicator from "../components/WaterPipeScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <WaterPipeScrollIndicator />
      <HeroPremium />
      <ServicesPremium />
      
      {/* Before/After Showcase */}
      <ProjectsCarousel />

      {/* FAQ Section */}
      <FAQ />

      <QuoteFormClean />
    </div>
  );
}