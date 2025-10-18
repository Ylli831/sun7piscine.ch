"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollGradientProps {
  children: ReactNode;
  fromColor?: string;
  toColor?: string;
  intensity?: number;
}

export default function ScrollGradient({ 
  children, 
  fromColor = "rgba(195, 213, 253, 0.1)",
  toColor = "rgba(0, 157, 254, 0.05)",
  intensity = 0.3
}: ScrollGradientProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, intensity, 0]);

  return (
    <div ref={ref} className="relative" style={{ position: "relative", zIndex: 0 }}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
          opacity,
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
