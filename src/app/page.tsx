"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Construction, Wrench, Droplets, Zap, ShoppingCart, Rocket, Snowflake, Star, MapPin, Phone, Mail, CheckCircle, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ project: '', budget: '', name: '', email: '', phone: '' });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Switch to last frame after GIF plays once (5 seconds)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4350); // 5 seconds to match your GIF duration

    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen -mt-12 pt-12">
      {/* Hero Section avec Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-12 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-transparent to-cyan-900/90 z-5"></div>
        
        {/* Hero Content Layout */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30"
            >
              <span className="text-yellow-400 font-semibold text-lg">✨ Piscines & Spas d&apos;Exception</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Construction, Entretien &<br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Rénovation en Suisse</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed"
            >
              Découvrez nos services premium pour vos espaces aquatiques. De la conception sur-mesure à l&apos;entretien expert, nous créons votre oasis de rêve.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a 
                href="#quote" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-yellow-400/25 text-center"
              >
                Demander un devis gratuit
              </a>
              <a 
                href="#services" 
                className="border-2 border-blue-300/50 hover:border-blue-300 text-blue-100 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-blue-800/30 backdrop-blur-sm text-center"
              >
                Découvrir nos services
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-8 pt-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-blue-200 text-sm">+20 ans d&apos;excellence</span>
              </div>
              <div className="text-blue-200 text-sm">
                <span className="font-bold text-yellow-400">500+</span> projets réalisés
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-96 lg:h-[500px]">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* GIF animation that switches to static last frame */}
              <div className="relative w-full h-full">
                {!animationComplete ? (
                  <img
                    src="/gif-animation-sun7.gif"
                    alt="Pool Animation"
                    className="relative z-10 w-full h-full object-contain rounded-2xl"
                  />
                ) : (
                  <img
                    src="/animation-frames/unscreen-036.png"
                    alt="Pool Animation Final Frame"
                    className="relative z-10 w-full h-full object-contain rounded-2xl"
                  />
                )}
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Premium Quality
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                Swiss Made
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Nos Services d&apos;Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour vos piscines et spas en Suisse Romande avec plus de 20 ans d&apos;expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Construction, title: "Construction", desc: "Piscines sur mesure, spas installés clé en main", color: "text-blue-600" },
              { icon: Wrench, title: "Rénovation", desc: "Modernisation, étanchéité, filtration", color: "text-green-600" },
              { icon: Droplets, title: "Entretien", desc: "Nettoyage & traitement de l&apos;eau", color: "text-cyan-600" },
              { icon: Zap, title: "Dépannage", desc: "Intervention rapide en cas de panne", color: "text-yellow-600" },
              { icon: ShoppingCart, title: "Produits & Accessoires", desc: "Robots, couvertures, sécurité", color: "text-purple-600" },
              { icon: Rocket, title: "Mise en Service", desc: "Ouverture de saison & réglages", color: "text-red-600" },
              { icon: Snowflake, title: "Hivernage", desc: "Préparation pour l&apos;hiver", color: "text-indigo-600" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={48} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Confiance & Expertise
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Plus de 20 ans d&apos;expérience en Suisse Romande avec les meilleures marques du secteur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Partners Logos */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Nos Partenaires de Confiance</h3>
              <div className="grid grid-cols-3 gap-8">
                {["Pentair", "Zodiac", "Hayward", "Maytronics", "Polaris", "Fluidra"].map((brand, index) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-yellow-400 font-bold text-lg">{brand}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Témoignages Clients</h3>
              
              <motion.blockquote
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">
                  &quot;Service impeccable et équipe professionnelle. Notre piscine n&apos;a jamais été aussi belle ! Travail de qualité suisse.&quot;
                </p>
                <cite className="text-blue-200 font-semibold">— M. Dubois, Genève</cite>
              </motion.blockquote>

              <motion.blockquote
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">
                  &quot;Rénovation rapide et de qualité. Hautement recommandé pour tous vos projets piscine en Suisse.&quot;
                </p>
                <cite className="text-blue-200 font-semibold">— Mme. Martin, Lausanne</cite>
              </motion.blockquote>

              <motion.blockquote
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">
                  &quot;Installation spa parfaite avec un service après-vente exceptionnel. Merci SUN7 !&quot;
                </p>
                <cite className="text-blue-200 font-semibold">— Famille Rodriguez, Montreux</cite>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Portfolio & Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets de piscines et spas d&apos;exception réalisés en Suisse
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rénovation Moderne",
                subtitle: "Villa Genève",
                desc: "Transformation complète d&apos;une piscine familiale avec système de filtration moderne",
                image: "/before1.jpg",
                badge: "Rénovation"
              },
              {
                title: "Construction Sur-Mesure",
                subtitle: "Lac Léman",
                desc: "Piscine infinity avec vue panoramique sur le lac et système de chauffage écologique",
                image: "/sun7piscine-services.jpg",
                badge: "Construction"
              },
              {
                title: "Spa & Bien-être",
                subtitle: "Chalet Verbier",
                desc: "Installation de spa haut de gamme avec chromothérapie et jets massants",
                image: "/sun7piscine-services-2.jpg",
                badge: "Spa Premium"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400} 
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {project.badge}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quote Form */}
      <section id="quote" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
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
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
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

      {/* Contact & Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-blue-900 mb-8">Contactez-nous</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">Esplanade des Récréations 22<br />1217 Meyrin, Suisse</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+41 79 346 32 00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@sun7piscine.ch</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl overflow-hidden"
            >
              <div className="h-96 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Carte interactive</p>
                  <p className="text-blue-200">Meyrin, Genève</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}