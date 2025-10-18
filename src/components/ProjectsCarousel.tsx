"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: "renovation" | "construction" | "maintenance";
}

const projectsData: ProjectData[] = [
  {
    id: 0,
    title: "Rénovation Versoix",
    description: "Transformation complète d'une piscine vieillissante en oasis moderne",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Versoix.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apreus-Versoix.jpeg",
    category: "renovation"
  },
  {
    id: 1,
    title: "Rénovation Gland",
    description: "Modernisation complète avec nouveau revêtement",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Gland.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apres-Gland.jpeg",
    category: "renovation"
  },
  {
    id: 2,
    title: "Rénovation Mies",
    description: "Remise à neuf complète avec équipements modernes",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Mies.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apreus-Mies.jpeg",
    category: "renovation"
  },
  {
    id: 3,
    title: "Nettoyage Professionnel",
    description: "Nettoyage et remise en état spectaculaire",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Netoyage.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apreus-Netoyage.jpeg",
    category: "renovation"
  },
  {
    id: 4,
    title: "Hivernage Professionnel",
    description: "Préparation et protection pour l'hiver",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Hivernage-Avent.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/hivenages-apreus.jpeg",
    category: "maintenance"
  }
];

export default function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      projectsData.forEach((project) => {
        if (typeof window !== 'undefined') {
          const beforeImg = document.createElement('img');
          const afterImg = document.createElement('img');
          beforeImg.src = project.beforeImage;
          afterImg.src = project.afterImage;
        }
      });
    };
    
    preloadImages();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
    setAutoPlay(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setAutoPlay(false);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 section-muted text-brand-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00008f] mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-[#00008f]/80 max-w-3xl mx-auto">
            Découvrez comment nous transformons vos espaces aquatiques. 
            Faites glisser pour voir la différence avant/après de nos projets.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-navy/10 shadow-xl bg-white/95 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="py-8"
              >
                <BeforeAfterSlider
                  key={`slider-${currentProject}`}
                  beforeImage={projectsData[currentProject].beforeImage}
                  afterImage={projectsData[currentProject].afterImage}
                  title={projectsData[currentProject].title}
                  description={projectsData[currentProject].description}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#009dfe]/90 hover:bg-[#009dfe] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Projet précédent"
          >
            <ChevronLeft size={24} style={{ color: '#fefe00' }} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#009dfe]/90 hover:bg-[#009dfe] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Projet suivant"
          >
            <ChevronRight size={24} style={{ color: '#fefe00' }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject
                    ? "bg-[#009dfe] scale-125"
                    : "bg-[#00008f]/30 hover:bg-[#00008f]/50"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-[#00008f]/80">
              {currentProject + 1} / {projectsData.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}