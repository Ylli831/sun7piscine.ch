"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: typeof window !== "undefined" ? undefined : ref
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <div ref={ref} className="fixed inset-0 pointer-events-none" style={{ position: 'fixed' }} />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold origin-left z-50"
        style={{ 
          scaleX,
          boxShadow: '0 0 10px rgba(254, 215, 0, 0.5)'
        }}
      />
    </>
  );
}
