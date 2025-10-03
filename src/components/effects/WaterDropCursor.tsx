"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Drop {
  id: number;
  x: number;
  y: number;
}

export default function WaterDropCursor() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    let lastTime = Date.now();
    const minInterval = 50; // Minimum milliseconds between drops

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;

      const newDrop: Drop = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setDrops((prev) => [...prev, newDrop]);

      // Remove drop after animation
      setTimeout(() => {
        setDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute"
            initial={{
              x: drop.x,
              y: drop.y,
              scale: 0,
              opacity: 0.6,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0.6, 0.3, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: 20,
              height: 20,
              marginLeft: -10,
              marginTop: -10,
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
                boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
