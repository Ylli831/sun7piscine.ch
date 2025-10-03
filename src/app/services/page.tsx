"use client";

import { motion } from "framer-motion";
import { Wrench, Hammer, Settings, Award, Shield, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";
import WaterDropCursor from "../../components/effects/WaterDropCursor";
import ScrollProgress from "../../components/effects/ScrollProgress";
import TiltCard from "../../components/effects/TiltCard";
import MagneticButton from "../../components/effects/MagneticButton";
import RippleEffect, { useRipple } from "../../components/effects/RippleEffect";
import HoverGlow from "../../components/effects/HoverGlow";

const services = [
  {
    icon: Hammer,
    title: "Construction de Piscines",
    description: "Conception et construction de piscines sur mesure, adaptées à vos besoins et à votre terrain.",
    features: [
      "Étude personnalisée de votre projet",
      "Piscines en béton armé",
      "Intégration paysagère",
      "Équipements haut de gamme",
      "Accompagnement structurel durable"
    ],
    images: [
      "/sun7piscine-images/pool31-cool.jpg",
      "/sun7piscine-images/pool32-cool.jpg",
      "/sun7piscine-images/pool33-cool.jpg"
    ]
  },
  {
    icon: Wrench,
    title: "Rénovation de Piscines",
    description: "Remise à neuf complète de votre piscine existante pour lui redonner tout son éclat.",
    features: [
      "Réfection de l'étanchéité",
      "Changement du revêtement",
      "Mise aux normes sécurité",
      "Modernisation des équipements",
      "Amélioration esthétique"
    ],
    images: [
      "/sun7piscine-images/pool-after1.jpg",
      "/sun7piscine-images/pool-after2.jpg",
      "/sun7piscine-images/pool-after3.jpg"
    ]
  },
  {
    icon: Settings,
    title: "Entretien & Maintenance",
    description: "Service complet d'entretien pour maintenir votre piscine en parfait état toute l'année.",
    features: [
      "Nettoyage régulier",
      "Équilibrage chimique",
      "Maintenance des équipements",
      "Hivernage et remise en service",
      "Intervention d'urgence"
    ],
    images: [
      "/sun7piscine-images/pool34-cool.jpg",
      "/sun7piscine-images/pool35.jpg",
      "/sun7piscine-images/pool36.jpg"
    ]
  }
];

export default function ServicesPage() {
  const { ripples: ctaRipples, createRipple: createCtaRipple } = useRipple();
  const { ripples: phoneRipples, createRipple: createPhoneRipple } = useRipple();

  return (
    <div className="min-h-screen relative">
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-navy/70 mb-6"
            >
              <Award className="w-4 h-4" style={{ color: '#fed700' }} />
              Excellence Suisse
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-navy">
              Nos{" "}
              <span className="gold-text">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-navy/80 leading-relaxed">
              Solutions complètes pour vos piscines et spas en Suisse Romande avec plus de 20 ans d&apos;expérience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-spacing py-20 bg-gradient-to-b from-white via-brand-sky/10 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center" style={{ boxShadow: '0 4px 20px rgba(254, 215, 0, 0.3)' }}>
                      <service.icon className="w-8 h-8 text-brand-navy" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-brand-navy/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-brand-navy/10">
                        <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(254, 215, 0, 0.6)' }}></div>
                        <span className="text-brand-navy font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <MagneticButton strength={0.4}>
                    <Link
                      href="/contact"
                      onClick={createCtaRipple}
                      className="inline-flex items-center gap-2 shimmer-effect bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold py-4 px-8 rounded-full transition-all duration-300 hover-scale relative overflow-hidden"
                    >
                      <RippleEffect ripples={ctaRipples} color="rgba(255, 255, 255, 0.6)" />
                      <span className="relative z-10">Demander un devis</span>
                      <ArrowRight className="w-5 h-5 relative z-10" />
                    </Link>
                  </MagneticButton>
                </div>

                {/* Images */}
                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {service.images.slice(0, 3).map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.3, delay: imageIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`group relative rounded-xl overflow-hidden shadow-precise ${
                        imageIndex === 0 ? 'col-span-2 h-64' : 'h-48'
                      }`}
                      style={{ position: 'relative' }}
                    >
                      <Image
                        src={image}
                        alt={`${service.title} ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300"
                        loading={imageIndex === 0 ? "eager" : "lazy"}
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing py-20 bg-white/60 relative">
        <div className="absolute inset-0 swiss-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Pourquoi Choisir{" "}
              <span className="gold-text">
                SUN7
              </span>{" "}
              ?
            </h2>
            <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto leading-relaxed">
              Notre expertise et notre engagement qualité font de nous le partenaire idéal pour votre projet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "20+ Années d'Expérience",
                description: "Une expertise reconnue dans le domaine des piscines et spas"
              },
              {
                icon: Shield,
                title: "Suivi Personnalisé Continu",
                description: "Contrôles réguliers planifiés et assistance prioritaire après la livraison"
              },
              {
                icon: Clock,
                title: "Équipe Certifiée",
                description: "Des professionnels formés aux dernières techniques et normes"
              },
              {
                icon: Award,
                title: "Matériaux Haut de Gamme",
                description: "Nous utilisons uniquement des équipements et matériaux de qualité"
              },
              {
                icon: Shield,
                title: "Garantie Tranquillité",
                description: "Un accompagnement continu avec contrôles programmés et assistance prioritaire"
              },
              {
                icon: Clock,
                title: "Service Après-Vente",
                description: "Un service client réactif pour l'entretien et les dépannages"
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TiltCard
                  tiltAmount={15}
                  scale={1.03}
                  className="group bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-2xl p-8 shadow-precise corner-decoration text-center relative overflow-hidden h-full"
                >
                  <HoverGlow intensity={0.3}>
                    <div className="mb-6 flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-brand-sky/60 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(254, 215, 0, 0.15)' }}>
                      <reason.icon className="h-8 w-8 text-brand-gold-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-brand-navy/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </HoverGlow>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing py-20 bg-gradient-to-b from-white via-brand-sky/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Notre <span className="gold-text">Processus</span>
            </h2>
            <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto leading-relaxed">
              De l&apos;étude à la réalisation, découvrez comment nous menons votre projet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "Analyse de vos besoins et étude de faisabilité"
              },
              {
                number: "02", 
                title: "Conception",
                description: "Plans détaillés et devis personnalisé"
              },
              {
                number: "03",
                title: "Réalisation", 
                description: "Construction avec suivi qualité rigoureux"
              },
              {
                number: "04",
                title: "Livraison",
                description: "Formation et mise en service complète"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-2xl p-8 shadow-precise card-hover-lift text-center overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="text-6xl font-bold mb-6 gold-text group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 0 30px rgba(254, 215, 0, 0.3)' }}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[140px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Prêt à Commencer Votre <span className="gold-text">Projet</span> ?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed text-white">
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.4}>
                <Link
                  href="/contact"
                  onClick={createCtaRipple}
                  className="inline-flex items-center justify-center gap-2 shimmer-effect bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold py-4 px-8 rounded-full transition-all duration-300 hover-scale relative overflow-hidden"
                >
                  <RippleEffect ripples={ctaRipples} color="rgba(255, 255, 255, 0.6)" />
                  <span className="relative z-10">Demander un Devis</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a
                  href="tel:+41793463200"
                  onClick={createPhoneRipple}
                  className="inline-block border-2 border-white/30 hover:bg-white/10 hover:border-brand-gold text-white hover:text-brand-gold font-semibold py-4 px-8 rounded-full transition-all duration-300 hover-scale backdrop-blur-sm relative overflow-hidden"
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