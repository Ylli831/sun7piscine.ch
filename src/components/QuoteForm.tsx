"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ project: '', budget: '', name: '', email: '', phone: '' });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-[#c3d5fd] to-[#b4c9fb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Demander un Devis Gratuit
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Obtenez un devis personnalisé pour votre projet en seulement 3 étapes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-600">Étape {step} sur 3</span>
              <span className="text-sm font-semibold text-gray-600">{Math.round((step/3)*100)}% complété</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-yellow-400 h-2 rounded-full"
                initial={{ width: "33%" }}
                animate={{ width: `${(step/3)*100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Quel type de projet vous intéresse ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { value: "piscine", label: "Piscine Neuve", icon: "🏊‍♂️" },
                  { value: "spa", label: "Spa / Jacuzzi", icon: "🛁" },
                  { value: "renovation", label: "Rénovation", icon: "🔧" },
                  { value: "entretien", label: "Entretien", icon: "🧽" }
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({...formData, project: option.value})}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      formData.project === option.value
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{option.icon}</div>
                    <div className="font-semibold text-blue-900">{option.label}</div>
                  </motion.button>
                ))}
              </div>
              <button
                onClick={nextStep}
                disabled={!formData.project}
                className="w-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuer
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Quel est votre budget estimé ?</h3>
              <div className="space-y-4 mb-8">
                {[
                  { value: "5000-15000", label: "5,000 - 15,000 CHF", desc: "Entretien, petites réparations" },
                  { value: "15000-35000", label: "15,000 - 35,000 CHF", desc: "Rénovations, équipements" },
                  { value: "35000-75000", label: "35,000 - 75,000 CHF", desc: "Piscine standard, spa" },
                  { value: "75000+", label: "75,000+ CHF", desc: "Projets haut de gamme" }
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setFormData({...formData, budget: option.value})}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      formData.budget === option.value
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-semibold text-blue-900 mb-1">{option.label}</div>
                    <div className="text-gray-600 text-sm">{option.desc}</div>
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-gray-300"
                >
                  Retour
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.budget}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Vos coordonnées</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                  <input
                    name="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+41 79 123 45 67"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-gray-300"
                >
                  Retour
                </button>
                <button
                  onClick={() => alert('Devis envoyé ! Nous vous contacterons sous 24h.')}
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Envoyer le devis
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}