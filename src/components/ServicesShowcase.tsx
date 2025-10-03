"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { serviceDetails } from "../data/services";

const services = serviceDetails.map((service) => ({
  icon: service.icon,
  title: service.title,
  subtitle: service.subtitle,
  description: service.description,
  shortDesc: service.excerpt,
  image: service.image,
  features: service.features,
  link: `/services/${service.slug}`,
}));

export default function ServicesShowcase() {
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <section className="relative min-h-screen section-muted py-20 text-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Services <span style={{ color: '#fed700' }}>Signature</span>
          </h2>
          <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto leading-relaxed">
            L&apos;excellence suisse au service de vos projets aquatiques. 
            Chaque détail compte, chaque réalisation est unique.
          </p>
        </motion.div>

        {/* Services Grid - Compact View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-2xl p-6 shadow-precise card-hover-lift corner-decoration relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-brand-gold text-brand-navy rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 4px 14px rgba(254, 215, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <service.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div className="px-3 py-1 bg-brand-navy/10 rounded-full inline-block">
                  <span className="text-xs font-semibold text-brand-navy">{service.subtitle}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy leading-tight group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-brand-navy/70">
                  {service.shortDesc}
                </p>
                
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-dark font-semibold text-sm transition-colors duration-200 group-hover:gap-3"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" style={{ color: '#fed700' }} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Detailed Services */}
        {showAllServices && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/95 backdrop-blur-md border-2 border-brand-navy/15 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-brand-gold text-brand-navy rounded-2xl flex items-center justify-center" style={{ boxShadow: '0 4px 20px rgba(254, 215, 0, 0.4)' }}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div className="px-4 py-2 bg-brand-navy/10 backdrop-blur-md rounded-full border border-brand-navy/15">
                        <span className="text-sm font-semibold text-brand-gold">{service.subtitle}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-lg text-brand-navy/75 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 bg-brand-navy/5 backdrop-blur-sm p-3 rounded-lg border border-brand-navy/10"
                        >
                          <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(254, 215, 0, 0.6)' }}></div>
                          <span className="text-brand-navy font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-3 ripple-button bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                      Découvrir ce service
                      <ArrowRight className="w-5 h-5" style={{ color: '#fed700' }} />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Toggle Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-sky focus-visible:ring-offset-brand-navy"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllServices ? (
              <>
                Voir moins
                <ChevronUp className="w-5 h-5" style={{ color: '#fed700' }} />
              </>
            ) : (
              <>
                Voir tous nos services
                <ChevronDown className="w-5 h-5" style={{ color: '#fed700' }} />
              </>
            )}
          </motion.button>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-brand-navy/10 border-2 border-brand-navy/20 rounded-2xl"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Prêt pour Votre Projet de Rêve ?
          </h3>
          <p className="text-lg text-brand-navy/75 max-w-2xl mx-auto mb-8">
            Découvrez nos réalisations exceptionnelles en Suisse Romande et laissez-nous créer la piscine de vos rêves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="ripple-button shimmer-effect bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover-scale relative overflow-hidden"
            >
              Devis Gratuit Personnalisé
            </a>
            <a
              href="tel:+41793463200"
              className="border-2 border-brand-navy/30 text-brand-navy hover:text-brand-gold hover:border-brand-gold font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-brand-navy/5 hover-scale"
            >
              +41 79 346 32 00
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
