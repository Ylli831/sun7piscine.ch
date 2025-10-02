"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ArrowLeft, Phone, Mail } from "lucide-react";
import Link from "next/link";
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
    answer: "Le coût varie selon la taille, le type et les finitions. Pour une piscine standard 8x4m, comptez entre 40'000 et 80'000 CHF. Une piscine premium avec équipements haut de gamme peut atteindre 120'000 CHF. Nous offrons toujours un devis gratuit et détaillé adapté à votre projet."
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
    answer: "Oui, nous proposons un service d'urgence 7j/7 pour les pannes critiques (fuites importantes, dysfonctionnements majeurs). Nos techniciens interviennent dans les 24h en Suisse Romande. Contactez-nous au 079 346 32 00 pour les urgences."
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
    answer: "Oui, nous offrons une garantie de 10 ans sur la structure béton, 2 ans sur les équipements techniques et 1 an sur les finitions et accessoires. Notre assurance responsabilité civile couvre tous nos chantiers. Nous restons disponibles pour le service après-vente."
  },
  {
    category: "Garanties & Qualité",
    question: "Êtes-vous assurés et certifiés ?",
    answer: "SUN7 dispose de toutes les assurances obligatoires : responsabilité civile entreprise, assurance travaux, garantie décennale. Nos techniciens sont certifiés et formés aux dernières normes. Nous sommes membres des associations professionnelles suisses du secteur."
  },

  // Coverage & Contact
  {
    category: "Couverture & Contact",
    question: "Dans quelles régions intervenez-vous ?",
    answer: "Nous couvrons toute la Suisse Romande : Genève, Vaud, Valais, Fribourg, Neuchâtel et Jura. Notre base à Meyrin nous permet d'intervenir rapidement. Pour les projets importants, nous nous déplaçons également en Suisse alémanique."
  },
  {
    category: "Couverture & Contact",
    question: "Comment obtenir un devis ?",
    answer: "Contactez-nous par téléphone (079 346 32 00), email (info@sun7piscine.ch) ou via notre formulaire en ligne. Nous organisons une visite gratuite pour étudier votre terrain et comprendre vos besoins. Le devis détaillé vous est remis sous 48h."
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
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-[#C3D5FD] py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#C3D5FD] hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l&apos;accueil
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Toutes les réponses à vos questions sur nos services de piscines et spas
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                    <div className="inline-block px-3 py-1 bg-[#112A46]/10 rounded-full text-xs font-medium text-[#112A46] mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-[#112A46] group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-2"
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Vous ne trouvez pas la réponse à votre question ?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Nos experts sont là pour répondre à toutes vos questions spécifiques sur votre projet de piscine
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:+41793463200"
                className="flex items-center justify-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm opacity-70">Appelez-nous</div>
                  <div>079 346 32 00</div>
                </div>
              </a>
              
              <a
                href="mailto:info@sun7piscine.ch"
                className="flex items-center justify-center gap-3 bg-white/20 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/30 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm opacity-70">Écrivez-nous</div>
                  <div>info@sun7piscine.ch</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Horaires d&apos;ouverture</h3>
              <p className="text-sm opacity-90">
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