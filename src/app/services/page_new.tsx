"use client";

import { motion } from "framer-motion";
import { Wrench, Hammer, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      "/sun7piscine-images/pool35-cool.jpg",
      "/sun7piscine-images/pool36-cool.jpg"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-[#C3D5FD] py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Solutions complètes pour vos piscines et spas en Suisse Romande avec plus de 20 ans d&apos;expérience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-[#112A46]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#112A46]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-[#112A46] opacity-80 mb-8">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                        <span className="text-[#112A46]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className="inline-block bg-amber-400 hover:bg-amber-500 text-[#112A46] font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Demander un devis
                  </a>
                </div>

                {/* Images */}
                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {service.images.slice(0, 3).map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`relative rounded-xl overflow-hidden shadow-lg ${
                        imageIndex === 0 ? 'col-span-2 h-48' : 'h-32'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${service.title} ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
              Pourquoi Choisir SUN7 ?
            </h2>
            <p className="text-xl text-[#112A46] opacity-80 max-w-3xl mx-auto">
              Notre expertise et notre engagement qualité font de nous le partenaire idéal pour votre projet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "20+ Années d&apos;Expérience",
                description: "Une expertise reconnue dans le domaine des piscines et spas"
              },
              {
                title: "Suivi Continu",
                description: "Des visites de contrôle planifiées et une assistance prioritaire après la livraison"
              },
              {
                title: "Équipe Certifiée",
                description: "Des professionnels formés aux dernières techniques et normes"
              },
              {
                title: "Suivi Personnalisé",
                description: "Un accompagnement sur mesure de la conception à la livraison"
              },
              {
                title: "Matériaux Haut de Gamme",
                description: "Nous utilisons uniquement des équipements et matériaux de qualité"
              },
              {
                title: "Service Après-Vente",
                description: "Un service client réactif pour l'entretien et les dépannages"
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#C3D5FD] border border-[#112A46]/20 rounded-xl p-8 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-[#112A46] mb-4">
                  {reason.title}
                </h3>
                <p className="text-[#112A46] opacity-80">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
              Notre Processus
            </h2>
            <p className="text-xl text-[#112A46] opacity-80 max-w-3xl mx-auto">
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#C3D5FD] border border-[#112A46]/20 rounded-xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-amber-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#112A46] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#112A46] opacity-80">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-[#C3D5FD]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Commencer Votre Projet ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et un devis personnalisé
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-block bg-amber-400 text-[#112A46] hover:bg-amber-500 font-semibold py-4 px-8 rounded-full transition-colors duration-200"
              >
                Demander un Devis
              </Link>
              <a
                href="tel:+41793463200"
                className="inline-block border-2 border-[#C3D5FD] hover:bg-[#C3D5FD] hover:text-[#112A46] text-[#C3D5FD] font-semibold py-4 px-8 rounded-full transition-colors duration-200"
              >
                +41 79 346 32 00
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}