"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Phone, Mail } from "lucide-react";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const allFaqData: FAQItem[] = [
  // Pricing & Budget
  {
    category: "Prix & Budget",
    question: "Combien coûte la construction d'une piscine en Suisse ?",
    answer: "Le coût varie selon la taille, le type et les finitions. Pour une piscine standard 8x4m, comptez entre 40'000 et 80'000 CHF. Une piscine avec équipements haut de gamme peut atteindre 120'000 CHF. Nous offrons toujours un devis gratuit et détaillé adapté à votre projet."
  },
  {
    category: "Prix & Budget",
    question: "Combien coûte l&apos;entretien annuel d&apos;une piscine ?",
    answer: "L&apos;entretien professionnel coûte entre 1&apos;500 et 3&apos;000 CHF/an selon la taille et les services inclus. Cela comprend : produits chimiques (400-600 CHF), nettoyage régulier, hivernage, remise en route, maintenance des équipements. Un entretien régulier prolonge la durée de vie de votre piscine."
  },
  {
    category: "Prix & Budget",
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, nous offrons plusieurs solutions de financement : paiement échelonné selon l'avancement des travaux, partenariats avec des banques suisses pour crédits travaux, leasing pour équipements. Discutons ensemble de la solution la mieux adaptée à votre budget."
  },

  // Construction & Timeline
  {
    category: "Construction & Délais",
    question: "Combien de temps faut-il pour construire une piscine ?",
    answer: "La construction prend généralement 4 à 8 semaines selon la complexité. Cela inclut : excavation (1-2 jours), structure béton (1 semaine), installations techniques (1 semaine), revêtement et finitions (2-3 semaines), mise en eau et tests (3-5 jours). Les conditions météorologiques peuvent influencer ces délais."
  },
  {
    category: "Construction & Délais",
    question: "Quelle est la meilleure période pour construire une piscine ?",
    answer: "Le printemps (mars-mai) est idéal pour débuter les travaux, permettant de profiter de la piscine dès l'été. L'automne/hiver convient aussi pour les projets complexes. Nous travaillons toute l'année, sauf par conditions météorologiques extrêmes."
  },
  {
    category: "Construction & Délais",
    question: "Que se passe-t-il en cas de retard météorologique ?",
    answer: "Les conditions météorologiques extrêmes (gel prolongé, pluies intenses) peuvent retarder certaines phases. Nous adaptons le planning et vous informons immédiatement. Aucun coût supplémentaire n'est facturé pour les retards météo. Notre expérience nous permet d'anticiper et minimiser ces impacts."
  },

  // Legal & Permits
  {
    category: "Autorisations & Légal",
    question: "Faut-il un permis de construire pour une piscine ?",
    answer: "En Suisse, un permis de construire est généralement requis pour les piscines permanentes. Les règles varient selon les cantons et communes. Nous nous occupons de toutes les démarches administratives et vous guidons dans l'obtention des autorisations nécessaires."
  },
  {
    category: "Autorisations & Légal",
    question: "Quelles sont les normes de sécurité obligatoires ?",
    answer: "Les piscines doivent respecter les normes VSS et SIA suisses : barrières de sécurité (min. 1.2m), systèmes d'alarme, couvertures sécurisées, distances réglementaires avec les limites de propriété. Nous intégrons toutes ces exigences dès la conception."
  },

  // Maintenance & Services
  {
    category: "Entretien & Services",
    question: "Que comprend votre service de rénovation ?",
    answer: "Nos rénovations incluent : réfection de l'étanchéité, changement du revêtement (liner, carrelage), modernisation des équipements, amélioration de l'isolation, mise aux normes sécurité, modernisation du système de filtration. Devis gratuit après visite technique."
  },
  {
    category: "Entretien & Services",
    question: "Intervenez-vous en urgence pour les pannes ?",
    answer: "Oui, nous proposons un service d'urgence 7j/7 pour les pannes critiques (fuites importantes, dysfonctionnements majeurs). Nos techniciens interviennent dans les 24h en Suisse Romande. Contactez-nous au +41 79 346 32 00 pour les urgences."
  },
  {
    category: "Entretien & Services",
    question: "Peut-on utiliser une piscine toute l'année en Suisse ?",
    answer: "Avec un système de chauffage et une couverture, vous pouvez prolonger la saison de mars à octobre. Pour une utilisation hivernale, une piscine couverte ou intérieure est recommandée. Nous proposons des solutions de chauffage écologiques (pompes à chaleur, solaire)."
  },

  // Warranty & Quality
  {
    category: "Garanties & Qualité",
    question: "Proposez-vous des garanties sur vos travaux ?",
    answer: "Nous assurons un accompagnement sérénité sur toute la durée de vie de votre piscine : contrôles programmés, assistance prioritaire et suivi personnalisé avec nos experts. Notre assurance responsabilité civile couvre chacun de nos chantiers et nous restons votre interlocuteur privilégié pour le service après-vente."
  },
  // Coverage & Contact
  {
    category: "Couverture & Contact",
    question: "Comment obtenir un devis ?",
    answer: "Contactez-nous par téléphone (+41 79 346 32 00), email (info@sun7piscine.ch) ou via notre formulaire en ligne. Nous organisons une visite gratuite pour étudier votre terrain et comprendre vos besoins. Le devis détaillé vous est remis sous 48h."
  }
];

const categories = [...new Set(allFaqData.map(faq => faq.category))];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = selectedCategory 
    ? allFaqData.filter(faq => faq.category === selectedCategory)
    : allFaqData;

  return (
    <div className="min-h-screen">
      <WaterPipeScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-sky/30 to-white py-28 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute -top-24 right-8 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-16 h-72 w-72 rounded-full bg-brand-gold-dark/10 blur-[140px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-brand-navy/70 hover:text-brand-navy mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" style={{ color: '#fed700' }} />
              Retour à l&apos;accueil
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-navy/70 mb-6">
              Aide & Support
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-navy">
              Questions Fréquentes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-navy/80">
              Toutes les réponses à vos questions sur nos services de piscines et spas
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-b from-white via-brand-sky/10 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === null 
                    ? 'bg-[#112A46] text-white' 
                    : 'bg-white/80 text-[#112A46] hover:bg-white'
                }`}
              >
                Toutes les catégories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category 
                      ? 'bg-[#112A46] text-white' 
                      : 'bg-white/80 text-[#112A46] hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={`${faq.category}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#112A46]/10 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-[#112A46]/5 transition-colors duration-200 group"
                >
                  <div className="flex-1 pr-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-goldBright/15 text-xs font-semibold uppercase tracking-wide text-brand-navy mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-[#112A46] transition-colors duration-200 group-hover:text-brand-goldBright">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-2"
                  >
                    <ChevronDown className="w-6 h-6 transition-colors duration-200" style={{ color: '#fed700' }} />
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
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-goldBright/40 to-transparent mb-4"></div>
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
        </div>
      </section>

      {/* Contact Section */}
  <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl"
          >
            <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-brand-goldBright/30 bg-brand-goldBright/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-goldDark">
              Assistance personnalisée
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Vous ne trouvez pas la réponse à votre question ?
            </h2>
            <p className="text-xl text-brand-navy mb-10">
              Nos experts sont là pour répondre à toutes vos questions spécifiques sur votre projet de piscine
            </p>
            
            <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
              <a
                href="tel:+41793463200"
                className="group flex items-center justify-center gap-4 rounded-2xl border border-brand-goldBright/25 bg-white px-8 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-goldBright/15 text-brand-gold-dark transition-colors duration-300 group-hover:bg-brand-goldBright/25">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <div className="text-sm font-medium text-brand-navy">Appelez-nous</div>
                  <div className="text-lg font-semibold text-brand-navy">+41 79 346 32 00</div>
                </div>
              </a>
              
              <a
                href="mailto:info@sun7piscine.ch"
                  className="group flex items-center justify-center gap-4 rounded-2xl border border-brand-goldBright/25 bg-white px-8 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-goldBright/15 text-brand-gold-dark transition-colors duration-300 group-hover:bg-brand-goldBright/25">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <div className="text-sm font-medium text-brand-navy">Écrivez-nous</div>
                  <div className="text-lg font-semibold text-brand-navy">info@sun7piscine.ch</div>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-brand-goldBright/25 bg-white p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Horaires d&apos;ouverture</h3>
              <p className="text-sm text-brand-navy/70 leading-relaxed">
                Lundi - Vendredi : 8h00 - 18h00<br />
                Samedi : 9h00 - 16h00<br />
                Urgences : 7j/7, 24h/24
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}