"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-12 bg-gradient-to-br from-[#c3d5fd] via-[#b4c9fb] to-[#a5bdf9]">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c3d5fd]/90 via-transparent to-[#b4c9fb]/90 z-5"></div>

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
              <span className="text-white text-sm">+20 ans d&apos;expérience</span>
            </div>
            <div className="text-white text-sm">
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#c3d5fd]/20 to-[#b4c9fb]/20 rounded-full blur-3xl animate-pulse"></div>

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
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#c3d5fd] to-[#b4c9fb] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              Swiss Made
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}