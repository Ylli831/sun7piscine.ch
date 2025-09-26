"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustAuthority() {
  return (
    <section className="py-20 bg-[#c3d5fd] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Confiance & Expertise
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Plus de 20 ans d&apos;expérience en Suisse Romande avec les meilleures marques du secteur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Partners Logos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Nos Partenaires de Confiance</h3>
            <div className="grid grid-cols-3 gap-8">
              {["Pentair", "Zodiac", "Hayward", "Maytronics", "Polaris", "Fluidra"].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-yellow-400 font-bold text-lg">{brand}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Témoignages Clients</h3>

            <motion.blockquote
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                &quot;Service impeccable et équipe professionnelle. Notre piscine n&apos;a jamais été aussi belle ! Travail de qualité suisse.&quot;
              </p>
              <cite className="text-white font-semibold">— M. Dubois, Genève</cite>
            </motion.blockquote>

            <motion.blockquote
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                &quot;Rénovation rapide et de qualité. Hautement recommandé pour tous vos projets piscine en Suisse.&quot;
              </p>
              <cite className="text-white font-semibold">— Mme. Martin, Lausanne</cite>
            </motion.blockquote>

            <motion.blockquote
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                &quot;Installation spa parfaite avec un service après-vente exceptionnel. Merci SUN7 !&quot;
              </p>
              <cite className="text-white font-semibold">— Famille Rodriguez, Montreux</cite>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}