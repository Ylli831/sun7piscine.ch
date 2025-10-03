"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageZoomProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export default function ImageZoom({ 
  children, 
  scale = 1.1,
  className = "" 
}: ImageZoomProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        whileHover={{ scale }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
