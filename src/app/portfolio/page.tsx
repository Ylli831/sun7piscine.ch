"use client";

import { motion } from "framer-motion";
import ProjectsCarousel from "../../components/ProjectsCarousel";
import ImageGallery from "../../components/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";

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
    description: "Espaces de détente premium",
    images: [
      "/sun7piscine-images/pool-jacuzzi.jpg",
      "/sun7piscine-images/pool-inside1.jpg",
      "/sun7piscine-images/pool-inside2.jpg"
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <WaterPipeScrollIndicator />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-[#C3D5FD] py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Notre Portfolio
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Plus de 20 ans d&apos;expérience dans la création et rénovation de piscines en Suisse Romande
            </p>
            <div className="inline-flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>200+ Projets Réalisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>98% Satisfaction Client</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Garantie 10 ans</span>
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
              Nos Spécialités
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#C3D5FD] border border-[#112A46]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-3 gap-1 h-48">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative overflow-hidden">
                      <Image
                        src={image}
                        alt={`${category.title} ${imgIndex + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#112A46] mb-3">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Nos Chiffres</h2>
            <p className="text-xl opacity-90">La confiance de nos clients en chiffres</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projets Réalisés" },
              { number: "20+", label: "Années d'Expérience" },
              { number: "98%", label: "Satisfaction Client" },
              { number: "50+", label: "Rénovations Annuelles" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-[#C3D5FD]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Transformer Votre Espace ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et personnalisé. 
              Notre équipe d&apos;experts vous accompagne de A à Z.
            </p>
            <div className="space-x-4">
              <Link
                href="/#contact"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-[#112A46] font-semibold py-4 px-8 rounded-full transition-colors duration-200"
              >
                Demander un Devis
              </Link>
              <a
                href="tel:+41793463200"
                className="inline-block border-2 border-[#C3D5FD] hover:bg-[#C3D5FD] hover:text-[#112A46] text-[#C3D5FD] font-semibold py-4 px-8 rounded-full transition-colors duration-200"
              >
                079 346 32 00
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}