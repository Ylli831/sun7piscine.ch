"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, Phone, CheckCircle, Award } from "lucide-react";

export default function HeroShowcase() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section 
      ref={heroRef}
      className="relative h-[100vh] flex items-center justify-center overflow-hidden parallax-container -mt-[30px] pt-[130px]"
      style={{ opacity }}
    >
      {/* Parallax Background */}
      <motion.div
        className="parallax-bg"
        style={{ y: yPos }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-sky-700/90"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img
            src="/sun7piscine-images/pool31-cool.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* Excellence Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-text text-brand-sky space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-brand-sky">Pisciniste d&apos;exception depuis 20 ans</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-4"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-brand-sky">
              Piscines & Spas
              <span className="block text-3xl lg:text-4xl xl:text-5xl text-amber-400 mt-2">
                haut de gamme
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-brand-sky opacity-90 font-light max-w-2xl leading-relaxed">
              Construction, rénovation et entretien de piscines haut de gamme par des experts certifiés.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="ripple-button bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
            >
              <span className="whitespace-nowrap">Devis Gratuit Personnalisé</span>
            </a>
            <a
              href="tel:+41793463200"
              className="border-2 border-brand-sky/30 text-brand-sky hover:text-brand-gold hover:border-brand-gold font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-brand-sky/5 backdrop-blur-sm text-center flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span className="whitespace-nowrap">+41 79 346 32 00</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-wrap items-center gap-8 pt-8 border-t border-brand-sky/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-brand-sky opacity-90 text-sm font-medium">20+ ans d&apos;expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-brand-sky opacity-90 text-sm font-medium">500+ projets réalisés</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full">
            
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-400/20 blur-3xl animate-pulse"></div>

            {/* Main animation container */}
            <div className="relative w-full flex items-center justify-center">
              <motion.div
                className="relative w-full"
                whileHover={{ 
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {!animationComplete ? (
                  <img
                    src="/gif-animation-sun7.gif"
                    alt="Pool Animation"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <img
                    src="/animation-frames/unscreen-036.png"
                    alt="SUN7 Pool Services"
                    className="w-full h-auto object-contain"
                  />
                )}
              </motion.div>
            </div>

            {/* Floating quality badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20"
              animate={{ 
                y: [0, -8, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 text-brand-gold font-semibold text-sm">
                <Award className="w-4 h-4" />
                Signature Suisse
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
