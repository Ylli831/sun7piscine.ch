"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, Sparkles } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";
import WaterDropCursor from "../../components/effects/WaterDropCursor";
import ScrollProgress from "../../components/effects/ScrollProgress";
import TiltCard from "../../components/effects/TiltCard";

const responseHighlights = [
  {
    title: "Réponse sous 24 h",
    description: "Nos experts vous contactent rapidement avec des premières pistes concrètes.",
    icon: Mail
  },
  {
    title: "Conseil personnalisé",
    description: "Un interlocuteur dédié vous accompagne de la conception à la livraison.",
    icon: Sparkles
  },
  {
    title: "Suisse Romande",
    description: "Service dans toute la région, interventions rapides et flexibles.",
    icon: Phone
  }
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-sky/10 to-white text-brand-navy">
      <ScrollProgress />
      <WaterDropCursor />
      <WaterPipeScrollIndicator />

  <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-sky/70" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url(/layered-waves-navbar.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl space-y-6 text-center text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
              Parlons de votre projet
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Construisons ensemble la piscine ou le spa qui vous ressemble
            </h1>
            <p className="text-base text-white/85 sm:text-lg">
              Dites-nous tout sur vos envies : notre équipe adapte chaque proposition à votre budget, votre terrain et vos délais.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 grid w-full max-w-5xl gap-5 md:grid-cols-3">
            {responseHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <TiltCard
                  tiltAmount={15}
                  scale={1.03}
                  className="group rounded-2xl border border-white/10 bg-white p-6 text-left text-brand-navy shadow-precise h-full"
                >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-dark group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 15px rgba(254, 215, 0, 0.2)' }}>
                  <highlight.icon className="h-5 w-5" />
                </div>
                <h2 className="text-base font-semibold group-hover:text-brand-gold transition-colors duration-300">{highlight.title}</h2>
                <p className="mt-2 text-sm text-brand-navy/70">{highlight.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="container-custom">
          <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[1.6fr,1fr] lg:items-start">
            <ContactForm />

            <motion.aside
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="flex w-full flex-col gap-6"
          >
            <div className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-lg" aria-labelledby="contact-direct">
              <h2 id="contact-direct" className="text-xl font-semibold text-brand-navy">
                Contact direct
              </h2>
              <p className="mt-2 text-sm text-brand-navy/70">
                Appelez-nous ou écrivez-nous pour une réponse immédiate.
              </p>
              <div className="mt-6 space-y-4 text-sm font-medium">
                <a href="tel:+41793463200" className="group flex items-center gap-3 rounded-2xl border border-brand-navy/15 px-4 py-3 text-brand-navy transition hover:border-brand-gold/60 hover:bg-brand-gold/10 hover-scale">
                  <Phone className="h-5 w-5 text-brand-gold group-hover:rotate-12 transition-transform duration-300" />
                  <span>+41 79 346 32 00</span>
                </a>
                <a href="mailto:info@sun7piscine.ch" className="group flex items-center gap-3 rounded-2xl border border-brand-navy/15 px-4 py-3 text-brand-navy transition hover:border-brand-gold/60 hover:bg-brand-gold/10 hover-scale">
                  <Mail className="h-5 w-5 text-brand-gold group-hover:-translate-y-1 transition-transform duration-300" />
                  <span>info@sun7piscine.ch</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-lg" aria-labelledby="contact-hours">
              <h2 id="contact-hours" className="text-xl font-semibold text-brand-navy">
                Horaires d&apos;ouverture
              </h2>
              <p className="mt-2 text-sm text-brand-navy/70">
                Nous sommes disponibles pour répondre à vos questions.
              </p>
              <div className="mt-6 space-y-4 text-sm font-medium">
                <div className="flex items-start gap-3 rounded-2xl border border-brand-navy/15 px-4 py-3 text-brand-navy">
                  <Clock className="h-5 w-5 text-brand-gold" />
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-sm text-brand-navy/70">Lun–Ven : 8h00 – 18h00</p>
                    <p className="text-sm text-brand-navy/70">Samedi : 9h00 – 16h00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
