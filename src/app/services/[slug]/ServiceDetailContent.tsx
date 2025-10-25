"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Hammer,
  Phone,
  Settings,
  Shield,
  Wrench
} from "lucide-react";

import type { ServiceDetail } from "../../../data/services";

type ServiceDetailContentProps = {
  service: Omit<ServiceDetail, "icon">;
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const iconMap: Record<string, typeof Settings> = {
  entretien: Settings,
  renovation: Wrench,
  construction: Hammer,
  securite: Shield
};

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-brand-sky/5 to-white text-brand-navy">

      <motion.section
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-20 sm:py-24"
      >
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-sky/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/30 blur-[120px]"
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6">
          <div className="flex w-full items-center justify-center mb-8 relative">
            <Link
              href="/services"
              className="absolute left-0 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:border-brand-gold/60 hover:text-brand-gold hover:bg-white/30"
            >
              <ArrowLeft className="h-4 w-4" style={{ color: '#fed700' }} />
              Retour aux services
            </Link>
            {service.slug !== 'entretien' && (
              <div className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-6 py-3 text-base font-bold uppercase tracking-[0.2em] text-brand-navy shadow-lg">
                {service.hero.eyebrow}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 flex flex-col items-center"
          >
            {(() => {
              const Icon = iconMap[service.slug] ?? Settings;
              return (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur"
                >
                  <Icon className="h-7 w-7 text-brand-gold" />
                </motion.span>
              );
            })()}

            <div className="mt-6 w-full max-w-3xl space-y-4 text-center rounded-2xl border border-cyan-400/30 bg-cyan-400/20 p-8 backdrop-blur-lg shadow-[0px_24px_60px_rgba(6,182,212,0.25)]">
              <h1 className="text-balance text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
                {service.hero.heading}
              </h1>
              <p className="mx-auto max-w-2xl text-base text-brand-navy/80 sm:text-lg">
                {service.hero.subheading}
              </p>
            </div>
          </motion.div>

          <div className="mx-auto mt-12 grid w-full max-w-4xl gap-5 sm:grid-cols-3">
            {service.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full w-full rounded-2xl border border-cyan-400/30 bg-cyan-400/20 p-6 text-center backdrop-blur-lg shadow-[0px_24px_60px_rgba(6,182,212,0.25)]"
              >
                <h2 className="text-base font-semibold text-brand-navy">{highlight.title}</h2>
                <p className="mt-2 text-sm text-brand-navy/75">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center rounded-full bg-brand-sky/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-sky">
                  expertise sun7
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">Ce que nous réalisons pour vous</h2>
              <p className="mx-auto max-w-2xl text-base text-brand-navy/70 sm:text-lg">{service.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-brand-navy/10 bg-white/95 p-5 shadow-[0px_18px_40px_rgba(17,42,70,0.12)]"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 text-brand-gold" />
                  <span className="text-sm font-semibold text-brand-navy/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-[0px_28px_60px_rgba(17,42,70,0.16)]">
              <h3 className="text-xl font-semibold text-brand-navy">Prêt pour votre projet ?</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Contactez notre équipe pour définir les prochaines étapes.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-dark"
              >
                Devis personnalisé
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+41793463200"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-gold/60 hover:text-brand-gold"
              >
                <Phone className="h-4 w-4" />
                +41 79 346 32 00
              </a>
            </div>

            {service.process.length > 0 && (
              <div className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-[0px_28px_60px_rgba(17,42,70,0.16)]">
                <h3 className="text-xl font-semibold text-brand-navy">Notre méthodologie</h3>
                <div className="mt-4 space-y-4">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                      whileHover={{ x: 2 }}
                      className="flex gap-4 rounded-2xl bg-brand-sky/5 p-3"
                    >
                      <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/15 text-sm font-semibold text-brand-gold-dark">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-navy">{step.title}</h4>
                        <p className="text-sm text-brand-navy/70">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-4 text-center"
          >
            <h2 className="w-full text-3xl font-bold text-brand-navy sm:text-4xl">Réalisations récentes</h2>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-gold/60 hover:text-brand-gold"
            >
              Voir toutes nos réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((image, index) => (
              <motion.div
                key={`${service.slug}-gallery-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.03 }}
                className="group relative h-52 overflow-hidden rounded-2xl shadow-[0px_22px_50px_rgba(17,42,70,0.18)]"
              >
                <Image
                  src={image}
                  alt={`${service.title} ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-brand-navy/40 opacity-0 backdrop-blur-sm transition group-hover:opacity-80"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
        className="pb-20"
      >
        <div className="mx-auto max-w-4xl rounded-3xl p-8 sm:p-12 text-center shadow-2xl" style={{ backgroundColor: '#112A46', color: '#ffffff' }}>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Prêt à lancer votre projet {service.title.toLowerCase()} ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white opacity-75">
            Parlons-en autour d&apos;un rendez-vous ou d&apos;un appel vidéo. Nous vous présentons un plan d&apos;action détaillé et un devis transparent.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-dark"
            >
              Demander une étude
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+41793463200"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold/60 hover:text-brand-gold"
            >
              <Phone className="h-4 w-4" />
              +41 79 346 32 00
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
