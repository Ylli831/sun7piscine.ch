"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-white via-brand-sky/30 to-white py-16 lg:py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-gold-dark/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-gradient-to-r from-brand-goldBright/15 via-white/90 to-brand-goldBright/15 px-5 py-2 text-xs font-semibold tracking-wide text-brand-navy/70">
            Besoin d’une assistance rapide ?
          </p>
          <h2 className="text-balance text-3xl font-bold text-brand-navy lg:text-4xl">
            Restons en contact
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-navy/70 lg:text-base">
            Une question, un conseil ou un projet piscine ?
            <br />
            Je serai ravie de vous répondre personnellement — généralement dans les 24 heures ouvrées.
          </p>
        </motion.div>

  <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 lg:gap-8">
          {[{
            icon: Phone,
            title: "Par téléphone",
            highlight: "+41 79 346 32 00",
            description: "Assistance rapide",
            href: "tel:+41793463200",
            cta: "Échanger maintenant"
          }, {
            icon: Mail,
            title: "Par email",
            highlight: "info@sun7piscine.ch",
            description: "Réponse en 24 h ouvrées",
            href: "mailto:info@sun7piscine.ch",
            cta: "Envoyer un message"
          }, {
            icon: Calendar,
            title: "Rendez-vous",
            highlight: "Consultation",
            description: "Planification rapide",
            href: "/contact#form",
            cta: "Planifier"
          }].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-white/90 p-5 lg:p-6 shadow-lg ring-1 ring-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-brand-gold/40"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-2xl bg-brand-goldBright/15 p-3 text-brand-gold-dark transition-colors duration-300 group-hover:bg-brand-goldBright/25">
                  <card.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">{card.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-goldBright">{card.highlight}</p>
                  <p className="mt-2 text-sm text-brand-navy/70">{card.description}</p>
                </div>
              </div>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors duration-300 group-hover:text-brand-goldBright"
              >
                {card.cta}
                <span aria-hidden className="text-brand-goldBright transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
