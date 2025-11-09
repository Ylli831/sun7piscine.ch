"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Combien coûte la construction d'une piscine en Suisse ?",
    answer: "Le coût varie selon la taille, le type et les finitions. Pour une piscine standard 8x4m, comptez entre 40'000 et 80'000 CHF. Une réalisation avec équipements haut de gamme peut atteindre 120'000 CHF. Nous offrons toujours un devis gratuit et détaillé adapté à votre projet.",
  },
  {
    question: "Combien de temps faut-il pour construire une piscine ?",
    answer: "La construction prend généralement 4 à 8 semaines selon la complexité. Cela inclut : excavation (1-2 jours), structure béton (1 semaine), installations techniques (1 semaine), revêtement et finitions (2-3 semaines), mise en eau et tests (3-5 jours). Les conditions météorologiques peuvent influencer ces délais.",
  },
  {
    question: "Faut-il un permis de construire pour une piscine ?",
    answer: "En Suisse, un permis de construire est généralement requis pour les piscines permanentes. Les règles varient selon les cantons et communes. Nous nous occupons de toutes les démarches administratives et vous guidons dans l'obtention des autorisations nécessaires.",
  },
  {
    question: "Proposez-vous des garanties sur vos travaux ?",
    answer: "Nous assurons un accompagnement sérénité sur toute la durée de vie de votre piscine : contrôles programmés, assistance prioritaire et suivi personnalisé avec nos experts. Notre assurance responsabilité civile couvre chacun de nos chantiers et nous restons votre interlocuteur privilégié pour le service après-vente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 section-muted text-brand-navy">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services
            de piscines et spas
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/85 backdrop-blur-sm rounded-xl border border-brand-navy/10 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-brand-sky/20 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-brand-navy pr-4 group-hover:text-brand-gold transition-colors duration-200">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-200" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent mb-4"></div>
                      <p className="text-brand-navy/85 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/faq"
            className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-8 py-4 rounded-full border border-brand-navy hover:bg-brand-navy/10 transition-colors duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-sky focus-visible:ring-offset-brand-navy"
          >
            Voir Toutes les Questions
            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="rounded-2xl bg-white border border-brand-navy/10 shadow-xl p-8 text-brand-navy">
            <h3 className="text-2xl font-bold mb-4 text-brand-navy">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-lg text-brand-navy/80 mb-6">
              Nos experts sont là pour répondre à toutes vos questions spécifiques
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+41793463200"
                className="group flex items-center gap-4 rounded-2xl border border-brand-navy/10 bg-white text-brand-navy px-6 py-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-goldBright/15 text-brand-goldDark transition-colors duration-300 group-hover:bg-brand-goldBright/25">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-brand-navy/80">
                    Appelez-nous
                  </div>
                  <div className="text-lg font-semibold text-brand-navy">
                    +41 79 346 32 00
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@sun7piscine.ch"
                className="group flex items-center gap-4 rounded-2xl border border-brand-navy/10 bg-white text-brand-navy px-6 py-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy/15">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-brand-navy/80">
                    Écrivez-nous
                  </div>
                  <div className="text-lg font-semibold text-brand-navy">
                    info@sun7piscine.ch
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}