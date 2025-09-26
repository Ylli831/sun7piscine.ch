"use client";

import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustAuthority from "../components/TrustAuthority";
import Portfolio from "../components/Portfolio";
import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <div className="min-h-screen -mt-12 pt-12">
      <Hero />
      <Services />
      <TrustAuthority />
      <Portfolio />
      <QuoteForm />
    </div>
  );
}