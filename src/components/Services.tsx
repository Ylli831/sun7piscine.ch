"use client";

import { motion } from "framer-motion";
import { Construction, Wrench, Droplets, Zap, ShoppingCart, Rocket, Snowflake } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Nos Services d&apos;Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions complètes pour vos piscines et spas en Suisse Romande avec plus de 20 ans d&apos;expérience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Construction, title: "Construction", desc: "Piscines sur mesure, spas installés clé en main", color: "text-blue-600" },
            { icon: Wrench, title: "Rénovation", desc: "Modernisation, étanchéité, filtration", color: "text-green-600" },
            { icon: Droplets, title: "Entretien", desc: "Nettoyage & traitement de l&apos;eau", color: "text-cyan-600" },
            { icon: Zap, title: "Dépannage", desc: "Intervention rapide en cas de panne", color: "text-yellow-600" },
            { icon: ShoppingCart, title: "Produits & Accessoires", desc: "Robots, couvertures, sécurité", color: "text-purple-600" },
            { icon: Rocket, title: "Mise en Service", desc: "Ouverture de saison & réglages", color: "text-red-600" },
            { icon: Snowflake, title: "Hivernage", desc: "Préparation pour l&apos;hiver", color: "text-indigo-600" },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}