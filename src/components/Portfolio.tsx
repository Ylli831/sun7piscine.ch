"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Portfolio & Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets de piscines et spas d&apos;exception réalisés en Suisse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Rénovation Moderne",
              subtitle: "Villa Genève",
              desc: "Transformation complète d&apos;une piscine familiale avec système de filtration moderne",
              image: "/before1.jpg",
              badge: "Rénovation"
            },
            {
              title: "Construction Sur-Mesure",
              subtitle: "Lac Léman",
              desc: "Piscine infinity avec vue panoramique sur le lac et système de chauffage écologique",
              image: "/sun7piscine-services.jpg",
              badge: "Construction"
            },
            {
              title: "Spa & Bien-être",
              subtitle: "Chalet Verbier",
              desc: "Installation de spa haut de gamme avec chromothérapie et jets massants",
              image: "/sun7piscine-services-2.jpg",
              badge: "Spa Premium"
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.badge}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{project.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}