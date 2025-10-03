"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.2);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="fixed bottom-24 right-6 z-40 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy p-3 rounded-full shadow-2xl transition-colors duration-300 group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5" />
      
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brand-navy/20"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brand-gold"
          style={{
            pathLength: scaleX,
            strokeDasharray: "0 1",
          }}
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
}
