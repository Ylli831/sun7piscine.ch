"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroShowcase() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-[88px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Sun7 Piscine"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <Image
            src="/logo-without-bg.png"
            alt="Sun7 Piscine Logo"
            width={200}
            height={200}
            priority
            className="drop-shadow-2xl w-[200px] md:w-[250px] lg:w-[300px] h-auto"
          />
        </motion.div>

        {/* Slogan */}
        <div className="space-y-3">
          {/* First line with block wipe reveal */}
          <div className="relative overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl font-hero">
              L&apos;expérience d&apos;un pro.
            </h1>
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#00008f]"
            />
          </div>
          
          {/* Second line with block wipe reveal */}
          <div className="relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white drop-shadow-2xl font-hero">
              La confiance d&apos;un ami.
            </h2>
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#00008f]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
