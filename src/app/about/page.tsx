"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Star, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";
import WaterDropCursor from "../../components/effects/WaterDropCursor";
import ScrollProgress from "../../components/effects/ScrollProgress";
import TiltCard from "../../components/effects/TiltCard";
import MagneticButton from "../../components/effects/MagneticButton";
import RippleEffect, { useRipple } from "../../components/effects/RippleEffect";
import HoverGlow from "../../components/effects/HoverGlow";

export default function AboutPage() {
  const { ripples: contactRipples, createRipple: createContactRipple } = useRipple();
  const { ripples: realisationsRipples, createRipple: createRealisationsRipple } = useRipple();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <WaterDropCursor />
      <WaterPipeScrollIndicator />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-sky/30 to-white py-28 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute -top-24 right-8 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-16 h-72 w-72 rounded-full bg-brand-gold-dark/10 blur-[140px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center text-brand-navy"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-navy/70">
                Notre histoire
              </div>
              <h1 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">
                À propos de{" "}
                <span style={{ color: '#fed700' }}>
                  SUN7
                </span>{" "}
                Piscine
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-brand-navy/70 lg:text-xl">
                Plus de 20 ans d&apos;excellence suisse dans la création, la rénovation et l&apos;entretien de piscines d&apos;exception en Suisse Romande.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing py-8 lg:py-12 relative">
        <div className="absolute inset-0 swiss-grid-pattern opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-brand-navy mb-8">
                  Notre Histoire
                </h2>
                <div className="space-y-6 text-brand-navy/80 text-lg">
                  <p>
                    Fondée en 2008, SUN7 est née de la passion de créer des espaces aquatiques exceptionnels.
                    Notre expertise s&apos;est développée au fil des années pour devenir une référence en Suisse Romande.
                  </p>
                  <p>
                    Nous croyons que chaque piscine doit être unique, refléter la personnalité de son propriétaire
                    et s&apos;intégrer parfaitement dans son environnement. C&apos;est cette philosophie qui guide chacun de nos projets.
                  </p>
                  <p>
                    Aujourd&apos;hui, avec plus de 200 réalisations à notre actif, nous continuons d&apos;innover
                    pour offrir les meilleures solutions à nos clients.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/sun7piscine-images/pool34-cool.jpg"
                        alt="Équipe SUN7"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/sun7piscine-images/pool29-cool.jpg"
                        alt="Travaux en cours"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/sun7piscine-images/pool19-cool.jpg"
                        alt="Finitions de qualité"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/sun7piscine-images/pool31-cool.jpg"
                        alt="Piscine terminée"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-spacing bg-white/60 py-8 lg:py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-8">
                Nos Valeurs
              </h2>
              <p className="text-xl text-[#112A46] max-w-3xl mx-auto">
                Ce qui nous guide dans chacune de nos réalisations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Nous visons l'excellence dans chaque détail, de la conception à la réalisation."
                },
                {
                  icon: Users,
                  title: "Écoute Client",
                  description: "Votre satisfaction est notre priorité. Nous écoutons vos besoins et y répondons."
                },
                {
                  icon: Clock,
                  title: "Respect des Délais",
                  description: "Nous nous engageons à respecter les délais convenus pour tous nos projets."
                },
                {
                  icon: Shield,
                  title: "Garantie Qualité",
                  description: "Chaque chantier est contrôlé par nos experts avec un suivi continu et des matériaux certifiés."
                },
                {
                  icon: Star,
                  title: "Innovation",
                  description: "Nous restons à la pointe des technologies et tendances du secteur."
                },
                {
                  icon: Phone,
                  title: "Service Après-Vente",
                  description: "Notre relation ne s'arrête pas à la livraison. Nous assurons un suivi complet."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <TiltCard
                    tiltAmount={15}
                    scale={1.03}
                    className="group rounded-2xl border border-brand-navy/10 bg-white/90 p-10 shadow-precise corner-decoration relative overflow-hidden h-full"
                  >
                    <HoverGlow intensity={0.3}>
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-sky/60 text-brand-gold-dark group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(254, 215, 0, 0.15)' }}>
                        <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-brand-navy/70">
                        {value.description}
                      </p>
                    </HoverGlow>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section (replaces previous team grid) */}
      <section className="section-spacing py-8 lg:py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-8">
                Fondateur
              </h2>
              <p className="text-xl text-[#112A46] max-w-3xl mx-auto">
                Besnik Sylejmani — visionnaire derrière SUN7, passionné par la création de piscines sur-mesure.
              </p>
            </motion.div>
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-brand-navy/10 bg-white/90 p-10 text-center shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky to-white text-3xl font-bold text-brand-navy shadow-inner">
                BS
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">
                Besnik Sylejmani
              </h3>
              <p className="text-brand-gold-dark font-semibold mb-2">
                Fondateur
              </p>
              <p className="text-brand-navy/60 text-sm mb-2">
                20+ ans d&apos;expérience
              </p>
              <p className="text-brand-navy/70 text-sm">
                Je conçois des projets de A à Z en plaçant l&apos;esthétique, la durabilité et la satisfaction client au cœur de chaque réalisation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications removed per request */}

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy py-8 lg:py-12">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8">
                Travaillons Ensemble
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Vous avez un projet ? Parlons-en ! Notre équipe est là pour vous accompagner
                et réaliser la piscine de vos rêves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton strength={0.4}>
                  <Link
                    href="/#contact"
                    onClick={createContactRipple}
                    className="inline-block bg-amber-400 text-[#112A46] hover:bg-amber-500 font-semibold py-4 px-8 rounded-full transition-colors duration-200 shimmer-effect relative overflow-hidden"
                  >
                    <RippleEffect ripples={contactRipples} color="rgba(255, 255, 255, 0.6)" />
                    Nous Contacter
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a
                    href="/realisations"
                    onClick={createRealisationsRipple}
                    className="inline-block border-2 border-[#C3D5FD] hover:bg-[#C3D5FD] hover:text-[#112A46] text-[#C3D5FD] font-semibold py-4 px-8 rounded-full transition-colors duration-200 relative overflow-hidden"
                  >
                    <RippleEffect ripples={realisationsRipples} color="rgba(254, 215, 0, 0.3)" />
                    Voir Nos Réalisations
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}