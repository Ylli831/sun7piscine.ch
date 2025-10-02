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
    <section id="services" className="section-spacing relative overflow-hidden bg-gradient-to-br from-white via-brand-sky/20 to-white">
      <div className="absolute -top-24 right-12 h-72 w-72 rounded-full bg-brand-goldBright/20 blur-3xl" />
      <div className="absolute -bottom-32 left-8 h-80 w-80 rounded-full bg-brand-goldBright/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-navy/70">
            Excellence & savoir-faire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Nos Services d&apos;Excellence
          </h2>
          <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">
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
              className="group h-full rounded-3xl border border-brand-navy/10 bg-white/90 p-8 shadow-lg ring-1 ring-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-brand-goldBright/30"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-goldBright/20 text-brand-gold-dark transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="h-7 w-7" />
                </span>
                <div className="text-left">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-goldBright/80">Service {index + 1}</div>
                  <h3 className="text-2xl font-bold text-brand-navy">{service.title}</h3>
                </div>
              </div>

              <p className="text-brand-navy/70 leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-brand-navy/70">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-goldBright"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-brand-goldBright/40 to-transparent" />
              <div className="mt-4 text-sm font-semibold text-brand-navy/70">
                Besoin de plus de détails ? <span className="text-brand-goldBright">Parlons de votre projet.</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}