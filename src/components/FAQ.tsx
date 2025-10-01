"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Combien coûte la construction d'une piscine en Suisse ?",
    answer: "Le coût varie selon la taille, le type et les finitions. Pour une piscine standard 8x4m, comptez entre 40'000 et 80'000 CHF. Une piscine premium avec équipements haut de gamme peut atteindre 120'000 CHF. Nous offrons toujours un devis gratuit et détaillé adapté à votre projet."
  },
  {
    question: "Combien de temps faut-il pour construire une piscine ?",
    answer: "La construction prend généralement 4 à 8 semaines selon la complexité. Cela inclut : excavation (1-2 jours), structure béton (1 semaine), installations techniques (1 semaine), revêtement et finitions (2-3 semaines), mise en eau et tests (3-5 jours). Les conditions météorologiques peuvent influencer ces délais."
  },
  {
    question: "Faut-il un permis de construire pour une piscine ?",
    answer: "En Suisse, un permis de construire est généralement requis pour les piscines permanentes. Les règles varient selon les cantons et communes. Nous nous occupons de toutes les démarches administratives et vous guidons dans l'obtention des autorisations nécessaires."
  },
  {
    question: "Proposez-vous des garanties sur vos travaux ?",
    answer: "Oui, nous offrons une garantie de 10 ans sur la structure béton, 2 ans sur les équipements techniques et 1 an sur les finitions et accessoires. Notre assurance responsabilité civile couvre tous nos chantiers. Nous restons disponibles pour le service après-vente."
  },
  {
    question: "Dans quelles régions intervenez-vous ?",
    answer: "Nous couvrons toute la Suisse Romande : Genève, Vaud, Valais, Fribourg, Neuchâtel et Jura. Notre base à Meyrin nous permet d'intervenir rapidement. Pour les projets importants, nous nous déplaçons également en Suisse alémanique."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#C3D5FD]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-[#112A46] opacity-80 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services de piscines et spas
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
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#112A46]/10 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#112A46]/5 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-[#112A46] pr-4 group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#112A46] group-hover:text-blue-600 transition-colors duration-200" />
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
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#112A46]/20 to-transparent mb-4"></div>
                      <p className="text-[#112A46] opacity-90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View All FAQs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/faq"
            className="inline-flex items-center gap-2 bg-[#112A46] text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Nos experts sont là pour répondre à toutes vos questions spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41793463200"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200"
              >
                📞 079 346 32 00
              </a>
              <a
                href="mailto:info@sun7piscine.ch"
                className="inline-flex items-center justify-center gap-2 bg-white/20 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                ✉️ info@sun7piscine.ch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}