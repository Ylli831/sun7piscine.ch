"use client";

import { motion } from "framer-motion";
import { Wrench, Hammer, Shield, Settings, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Settings,
    title: "Entretien & Maintenance",
    subtitle: "Service Premium",
    description: "Un service d'entretien complet qui maintient votre piscine dans un état parfait toute l'année.",
    shortDesc: "Entretien professionnel toute l'année",
    image: "/sun7piscine-images/pool22-cool.jpg",
    features: ["Entretien annuel complet", "Mise en route printanière", "Hivernage professionnel", "Traitement eau avancé"],
    link: "/services#entretien"
  },
  {
    icon: Wrench,
    title: "Rénovation Premium",
    subtitle: "Transformation Totale", 
    description: "Redonnez vie à votre piscine avec nos solutions de rénovation haut de gamme. Technologies modernes et finitions luxueuses.",
    shortDesc: "Transformations complètes et modernisation",
    image: "/sun7piscine-images/pool-after3.jpg",
    features: ["PVC armé premium", "Éclairage LED intelligent", "Pompe à chaleur haute performance", "Design contemporain"],
    link: "/services#renovation"
  },
  {
    icon: Hammer,
    title: "Construction Sur-Mesure",
    subtitle: "Création d'Exception",
    description: "Conception et réalisation de piscines uniques, parfaitement adaptées à votre environnement et vos désirs.",
    shortDesc: "Piscines sur-mesure de A à Z",
    image: "/sun7piscine-images/pool31-cool.jpg",
    features: ["Design 3D personnalisé", "Piscine à débordement", "Spa intégré", "Garantie 10 ans"],
    link: "/services#construction"
  },
  {
    icon: Shield,
    title: "Sécurité Avancée",
    subtitle: "Protection Maximale",
    description: "Solutions de sécurité de pointe conformes aux normes suisses les plus strictes. Protégez votre famille.",
    shortDesc: "Systèmes de sécurité intelligents",
    image: "/sun7piscine-images/pool-covered3.jpg",
    features: ["Couvertures automatiques", "Alarmes connectées", "Volets haute sécurité", "Certification complète"],
    link: "/services#securite"
  }
];

export default function ServicesPremium() {
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#C3D5FD] py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-[#112A46] mb-6">
            Services Premium
          </h2>
          <p className="text-xl text-[#112A46] max-w-3xl mx-auto leading-relaxed">
            L'excellence suisse au service de vos projets aquatiques. 
            Chaque détail compte, chaque réalisation est unique.
          </p>
        </motion.div>

        {/* Services Grid - Compact View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#C3D5FD] border border-[#112A46]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <service.icon className="w-8 h-8 text-[#112A46]" />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div className="px-3 py-1 bg-[#112A46]/10 rounded-full inline-block">
                  <span className="text-xs font-semibold text-[#112A46]">{service.subtitle}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#112A46] leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#112A46] opacity-80">
                  {service.shortDesc}
                </p>
                
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors duration-200"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
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
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#C3D5FD] border-2 border-[#112A46]/20 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-8 h-8 text-[#112A46]" />
                      </div>
                      <div className="px-4 py-2 bg-[#112A46]/10 backdrop-blur-md rounded-full border border-[#112A46]/20">
                        <span className="text-sm font-semibold text-amber-600">{service.subtitle}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-[#112A46] leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-[#112A46] opacity-80 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 bg-[#112A46]/5 backdrop-blur-sm p-3 rounded-lg border border-[#112A46]/10"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                          <span className="text-[#112A46] font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={service.link}
                      className="inline-flex items-center gap-3 ripple-button bg-amber-400 hover:bg-amber-500 text-[#112A46] font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                      Découvrir ce service
                      <ArrowRight className="w-5 h-5" />
                    </a>
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
            className="inline-flex items-center gap-3 bg-[#112A46] hover:bg-[#112A46]/90 text-[#C3D5FD] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllServices ? (
              <>
                Voir moins
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Voir tous nos services
                <ChevronDown className="w-5 h-5" />
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
          className="text-center mt-16 p-8 bg-[#112A46]/10 border-2 border-[#112A46]/20 rounded-2xl"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[#112A46] mb-4">
            Prêt pour Votre Projet de Rêve ?
          </h3>
          <p className="text-lg text-[#112A46] opacity-80 max-w-2xl mx-auto mb-8">
            Découvrez nos réalisations exceptionnelles en Suisse Romande et laissez-nous créer la piscine de vos rêves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="ripple-button bg-amber-400 hover:bg-amber-500 text-[#112A46] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Devis Gratuit Premium
            </a>
            <a
              href="tel:+41793463200"
              className="border-2 border-[#112A46]/30 text-[#112A46] hover:text-amber-600 hover:border-amber-400 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-[#112A46]/5"
            >
              079 346 32 00
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}