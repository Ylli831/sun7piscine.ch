"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ScrollGradient from "./effects/ScrollGradient";

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
    title: "Transformation Spectaculaire",
    description: "Rénovation complète d'une piscine avec des résultats impressionnants",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/before.jpg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/after.jpg",
    category: "renovation"
  },
  {
    id: 1,
    title: "Rénovation Complète",
    description: "Transformation complète d'une piscine vieillissante en oasis moderne",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Renovation-1.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-1.jpeg",
    category: "renovation"
  },
  {
    id: 2,
    title: "Rénovation Moderne",
    description: "Modernisation complète avec nouveau revêtement",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Renovation-2.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-2.jpeg",
    category: "renovation"
  },
  {
    id: 3,
    title: "Remise à Neuf",
    description: "Remise à neuf complète avec équipements modernes",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Renovation-3.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-3.jpeg",
    category: "renovation"
  },
  {
    id: 4,
    title: "Nettoyage Professionnel",
    description: "Nettoyage et remise en état spectaculaire",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/Avant-Nettoyage.jpeg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/Apres-Nettoyage.jpeg",
    category: "renovation"
  },
  {
    id: 5,
    title: "Nouvelle Construction",
    description: "Construction sur-mesure d'une piscine moderne et élégante",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/before6.jpg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/after6.jpg",
    category: "construction"
  },
  {
    id: 6,
    title: "Construction Personnalisée",
    description: "Création d'un espace aquatique unique et moderne",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/before7.jpg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/after7.jpg",
    category: "construction"
  },
  {
    id: 7,
    title: "Rénovation d'Excellence",
    description: "Transformation complète avec finitions haut de gamme",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/before8.jpg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/after8.jpg",
    category: "renovation"
  },
  {
    id: 8,
    title: "Construction Moderne",
    description: "Création d'une piscine contemporaine avec équipements de pointe",
    beforeImage: "/sun7piscine-photos/before and after/para edhe pas/before10.jpg",
    afterImage: "/sun7piscine-photos/before and after/para edhe pas/after10.jpg",
    category: "construction"
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
    <ScrollGradient fromColor="rgba(0, 157, 254, 0.08)" toColor="rgba(195, 213, 253, 0.12)" intensity={0.35}>
      <section className="py-20 section-muted text-brand-navy">
        <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00008f] mb-6 font-display">
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
    </ScrollGradient>
  );
}