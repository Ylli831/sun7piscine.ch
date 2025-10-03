"use client";

import { motion } from "framer-motion";
import ProjectsCarousel from "../../components/ProjectsCarousel";
import ImageGallery from "../../components/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";
import WaterDropCursor from "../../components/effects/WaterDropCursor";
import ScrollProgress from "../../components/effects/ScrollProgress";
import MagneticButton from "../../components/effects/MagneticButton";
import RippleEffect, { useRipple } from "../../components/effects/RippleEffect";
import AnimatedCounter from "../../components/effects/AnimatedCounter";

const portfolioCategories = [
  {
    title: "Rénovations",
    description: "Transformation complète de piscines existantes",
    images: [
      "/sun7piscine-images/pool22-cool.jpg",
      "/sun7piscine-images/pool23-cool.jpg",
      "/sun7piscine-images/pool27.jpg"
    ]
  },
  {
    title: "Constructions Nouvelles",
    description: "Création de piscines sur mesure",
    images: [
      "/sun7piscine-images/pool31-cool.jpg",
      "/sun7piscine-images/pool32-cool.jpg",
      "/sun7piscine-images/pool33-cool.jpg"
    ]
  },
  {
    title: "Piscines Couvertes",
    description: "Solutions d'intérieur et de protection",
    images: [
      "/sun7piscine-images/pool-covered2.jpg",
      "/sun7piscine-images/pool-covered3.jpg",
      "/sun7piscine-images/pool-covered4.jpg"
    ]
  },
  {
    title: "Spas & Jacuzzis",
    description: "Espaces de détente exclusifs",
    images: [
      "/sun7piscine-images/pool-jacuzzi.jpg",
      "/sun7piscine-images/pool-inside1.jpg",
      "/sun7piscine-images/pool-inside2.jpg"
    ]
  }
];

export default function PortfolioPage() {
  const { ripples: devisRipples, createRipple: createDevisRipple } = useRipple();
  const { ripples: phoneRipples, createRipple: createPhoneRipple } = useRipple();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <WaterDropCursor />
      <WaterPipeScrollIndicator />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-sky/30 to-white py-28 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute -top-24 right-8 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-16 h-72 w-72 rounded-full bg-brand-gold-dark/10 blur-[140px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-navy/70 mb-6">
              Nos projets
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-navy">
              Nos{" "}
              <span style={{ color: '#fed700' }}>
                Réalisations
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-brand-navy/80">
              Plus de 20 ans d&apos;expérience dans la création et rénovation de piscines en Suisse Romande
            </p>
            <div className="inline-flex items-center space-x-8 text-sm text-brand-navy/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>200+ Projets Réalisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fed700', boxShadow: '0 0 8px rgba(254, 215, 0, 0.5)' }}></div>
                <span>98% Satisfaction Client</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fed700', boxShadow: '0 0 8px rgba(254, 215, 0, 0.5)' }}></div>
                <span>Suivi personnalisé continu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Carousel */}
      <ProjectsCarousel />

      {/* Full Image Gallery */}
      <ImageGallery />

      {/* Categories Grid */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
              Nos <span style={{ color: '#fed700' }}>Spécialités</span>
            </h2>
            <p className="text-xl text-[#112A46] opacity-80 max-w-3xl mx-auto">
              Chaque projet est unique. Découvrez nos différentes expertises et réalisations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-[#112A46]/10 rounded-2xl overflow-hidden shadow-precise hover:shadow-precise-lg card-hover-lift relative corner-decoration"
              >
                <div className="grid grid-cols-3 gap-1 h-48">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative overflow-hidden image-overlay-reveal">
                      <Image
                        src={image}
                        alt={`${category.title} ${imgIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#112A46] mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[#112A46] opacity-80">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Nos Chiffres</h2>
            <p className="text-xl opacity-90 text-white">La confiance de nos clients en chiffres</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 200, suffix: "+", label: "Projets Réalisés" },
              { number: 20, suffix: "+", label: "Années d'Expérience" },
              { number: 98, suffix: "%", label: "Satisfaction Client" },
              { number: 50, suffix: "+", label: "Rénovations Annuelles" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  <AnimatedCounter to={stat.number} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-sm opacity-90 text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Prêt à Transformer Votre Espace ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white opacity-90">
              Contactez-nous pour un devis gratuit et personnalisé. 
              Notre équipe d&apos;experts vous accompagne de A à Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.4}>
                <Link
                  href="/#contact"
                  onClick={createDevisRipple}
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-[#112A46] font-semibold py-4 px-8 rounded-full transition-colors duration-200 shimmer-effect relative overflow-hidden"
                >
                  <RippleEffect ripples={devisRipples} color="rgba(255, 255, 255, 0.6)" />
                  Demander un Devis
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a
                  href="tel:+41793463200"
                  onClick={createPhoneRipple}
                  className="inline-block border-2 border-white/30 hover:bg-white/10 hover:border-brand-gold text-white hover:text-brand-gold font-semibold py-4 px-8 rounded-full transition-colors duration-200 relative overflow-hidden"
                >
                  <RippleEffect ripples={phoneRipples} color="rgba(254, 215, 0, 0.3)" />
                  +41 79 346 32 00
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}