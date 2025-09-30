"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Phone, Mail } from "lucide-react";

export default function QuoteFormClean() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    project: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="container-custom">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Devis Gratuit en 3 Étapes
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto text-balance">
            Obtenez rapidement une estimation personnalisée pour votre projet
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-8 lg:p-10"
          >
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-[#112A46]">Étape {step} sur 3</span>
                <span className="text-sm font-medium text-[#112A46]">{Math.round((step/3)*100)}%</span>
              </div>
              <div className="w-full bg-[#112A46]/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(step/3)*100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Project Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-[#112A46] mb-6">
                    Quel est votre projet ?
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { value: "construction", label: "Construction", icon: "🏗️" },
                      { value: "renovation", label: "Rénovation", icon: "🔧" },
                      { value: "entretien", label: "Entretien", icon: "🧽" },
                      { value: "spa", label: "Spa / Jacuzzi", icon: "🛁" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({...formData, project: option.value})}
                        className={`p-6 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
                          formData.project === option.value
                            ? 'border-blue-500 bg-blue-50 shadow-md'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-3xl mb-3">{option.icon}</div>
                        <div className="font-semibold text-[#112A46]">{option.label}</div>
                      </button>
                    ))}
                  </div>
                  
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.project}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Continuer <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Budget */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-[#112A46] mb-6">
                    Quel est votre budget estimé ?
                  </h3>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      { value: "5000-15000", label: "5'000 - 15'000 CHF" },
                      { value: "15000-30000", label: "15'000 - 30'000 CHF" },
                      { value: "30000-50000", label: "30'000 - 50'000 CHF" },
                      { value: "50000+", label: "Plus de 50'000 CHF" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({...formData, budget: option.value})}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          formData.budget === option.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="font-medium text-[#112A46]">{option.label}</div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 border border-[#112A46]/30 rounded-lg text-[#112A46] hover:bg-[#112A46]/5 transition-colors duration-200"
                    >
                      <ArrowLeft className="w-4 h-4" /> Retour
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.budget}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continuer <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-[#112A46] mb-6">
                    Vos coordonnées
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#112A46] mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#112A46]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#112A46] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#112A46]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#112A46] mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#112A46]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+41 XX XXX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#112A46] mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-[#112A46]/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Décrivez votre projet..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 border border-[#112A46]/30 rounded-lg text-[#112A46] hover:bg-[#112A46]/5 transition-colors duration-200"
                    >
                      <ArrowLeft className="w-4 h-4" /> Retour
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Recevoir mon devis
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Alternative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-white"
          >
            <p className="mb-4">Ou contactez-nous directement :</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+41793463200" 
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                079 346 32 00
              </a>
              <a 
                href="mailto:info@sun7piscine.ch" 
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                info@sun7piscine.ch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}