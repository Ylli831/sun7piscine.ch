"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverGlowProps {
  children: ReactNode;
  glowColor?: string;
  intensity?: number;
  className?: string;
}

export default function HoverGlow({ 
  children, 
  glowColor = "254, 215, 0",
  intensity = 0.4,
  className = "" 
}: HoverGlowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered
          ? `0 0 20px rgba(${glowColor}, ${intensity}), 0 0 40px rgba(${glowColor}, ${intensity * 0.6}), 0 0 60px rgba(${glowColor}, ${intensity * 0.4})`
          : `0 0 0px rgba(${glowColor}, 0)`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
