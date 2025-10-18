"use client";

import { motion } from "framer-motion";
import { Construction, Wrench, Droplets, Zap, ShoppingCart, Rocket, Snowflake } from "lucide-react";

const services = [
  {
    icon: Construction,
    title: "Construction",
    description: "Piscines sur mesure et spas haut de gamme livrés clé en main.",
    highlights: ["Structures béton & inox", "Intégration paysagère luxueuse"],
  },
  {
    icon: Wrench,
    title: "Rénovation",
    description: "Modernisez votre bassin avec des finitions durables et esthétiques.",
    highlights: ["Diagnostic complet", "Revêtements dernière génération"],
  },
  {
    icon: Droplets,
    title: "Entretien",
    description: "Programmes sur-mesure pour une eau parfaite toute l'année.",
    highlights: ["Contrats saisonniers", "Analyses d'eau professionnelles"],
  },
  {
    icon: Zap,
    title: "Dépannage",
    description: "Intervention rapide de nos techniciens certifiés en cas de panne.",
    highlights: ["Support 24h/24", "Pièces d'origine garanties"],
  },
  {
    icon: ShoppingCart,
    title: "Produits & Accessoires",
    description: "Robots, couvertures et domotique pour sublimer votre piscine.",
    highlights: ["Robots intelligents", "Sécurité & confort"],
  },
  {
    icon: Rocket,
    title: "Mise en Service",
    description: "Un démarrage de saison sans stress avec un réglage optimal.",
    highlights: ["Mise en eau experte", "Équilibrage & filtration"],
  },
  {
    icon: Snowflake,
    title: "Hivernage",
    description: "Protégez votre installation pendant l'hiver et facilitez la reprise.",
    highlights: ["Protection antigel", "Redémarrage simplifié"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing relative overflow-hidden bg-gradient-to-br from-white via-white/30 to-white">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#00008f]/70">
            Excellence & savoir-faire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00008f] mb-4">
            Nos Services d&apos;Excellence
          </h2>
          <p className="text-lg text-[#00008f]/70 max-w-3xl mx-auto">
            De la conception à l&apos;entretien, profitez d&apos;un accompagnement sur mesure avec des experts reconnus en Suisse Romande.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group h-full rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fefe00]/20 text-[#00008f] transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="h-6 w-6" />
                </span>
                <div className="text-left">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#00008f]/60">Service {index + 1}</div>
                  <h3 className="text-xl font-bold text-[#00008f]">{service.title}</h3>
                </div>
              </div>

              <p className="text-[#00008f]/70 leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-[#00008f]/70">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#fefe00]"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-sm font-semibold text-[#00008f]/70">
                Besoin de plus de détails ? <span className="text-[#fefe00]">Parlons de votre projet.</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}