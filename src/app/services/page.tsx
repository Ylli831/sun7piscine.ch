"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { serviceDetails } from "../../data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

// Separate component for each gallery to avoid state conflicts
function ImageGallery({ service, index }: { service: { slug: string; title: string; gallery: string[] }; index: number }) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (imageKey: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredImage(imageKey);
    }, 500); // Reduced to 500ms for better responsiveness
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredImage(null);
  };

  if (service.gallery.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#00008f]/5 to-[#fefe00]/5 rounded-2xl h-96 flex items-center justify-center border border-[#00008f]/10"
      >
        <span className="text-[#00008f]/40 font-medium">Galerie</span>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {service.gallery.slice(0, 4).map((img: string, idx: number) => {
        const imageKey = `${service.slug}-${idx}`;
        const isHovered = hoveredImage === imageKey;
        const isAnyHovered = hoveredImage !== null;
        
        let gridClass = '';
        let heightClass = '';
        
        if (idx === 0) {
          gridClass = isAnyHovered && !isHovered ? 'col-span-1' : 'col-span-2';
          heightClass = isAnyHovered && !isHovered ? 'h-40' : 'h-80';
        } else {
          gridClass = isHovered ? 'col-span-2' : 'col-span-1';
          heightClass = isHovered ? 'h-80' : 'h-40';
        }

        return (
          <motion.div
            key={img}
            className={`relative rounded-lg overflow-hidden shadow-lg cursor-pointer ${gridClass} ${heightClass}`}
            onMouseEnter={() => handleMouseEnter(imageKey)}
            onMouseLeave={handleMouseLeave}
            layout
            transition={{ 
              layout: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
            }}
          >
            <Image
              src={img}
              alt={`${service.title} ${idx + 1}`}
              fill
              priority={index === 0 && idx === 0}
              loading={index === 0 && idx === 0 ? undefined : "lazy"}
              quality={70}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-[#00008f]/40 via-transparent to-transparent"
              animate={{
                opacity: isHovered ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-[#00008f]/60 mb-4 inline-block">
                Nos Expertises
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#00008f] leading-tight mb-6">
                Services
              </h1>
              <p className="text-xl text-[#00008f]/70 leading-relaxed max-w-xl">
                De la conception à l&apos;entretien, nous proposons des solutions complètes et personnalisées pour votre piscine.
              </p>
            </motion.div>
          </div>

          {/* Decorative line */}
          <motion.div
            className="mt-12 h-px w-20 bg-gradient-to-r from-[#fefe00] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-20 md:py-28 border-t border-[#00008f]/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <motion.article
                key={service.slug}
                variants={itemVariants}
                className="group"
              >
                <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs font-semibold tracking-widest uppercase text-[#fefe00]">
                        Service {index + 1}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-bold text-[#00008f] mt-3 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-[#00008f]/60 font-medium mb-6">
                        {service.subtitle}
                      </p>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-[#00008f]/70 text-base leading-relaxed mb-8 max-w-lg"
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-3 mb-8"
                    >
                      {service.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fefe00]/10 flex-shrink-0 mt-0.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#fefe00]" />
                          </span>
                          <span className="text-[#00008f]/70 font-medium">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-3 text-[#00008f] font-semibold hover:gap-4 transition-all duration-300 group/link"
                      >
                        Découvrir
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Image Gallery */}
                  <ImageGallery service={service} index={index} />
                </div>

                {/* Divider */}
                {index < serviceDetails.length - 1 && (
                  <motion.div
                    className="mt-20 h-px bg-gradient-to-r from-transparent via-[#00008f]/10 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 md:py-28 bg-gradient-to-br from-[#00008f] to-[#00008f]/90 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fefe00]/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fefe00]/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre piscine ?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour discuter de votre projet et découvrir comment nous pouvons vous aider.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#fefe00] hover:bg-[#fefe00]/90 text-[#00008f] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
