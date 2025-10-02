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
    title: "Transformation Spectaculaire",
    description: "Métamorphose complète d'une piscine - notre projet phare",
    beforeImage: "/before1.jpg",
    afterImage: "/after1.jpg",
    category: "renovation"
  },
  {
    id: 1,
    title: "Rénovation Complète - Piscine Familiale",
    description: "Transformation complète d'une piscine vieillissante en oasis moderne",
    beforeImage: "/sun7piscine-images/pool-before1.jpg",
    afterImage: "/sun7piscine-images/pool-after1.jpg",
    category: "renovation"
  },
  {
    id: 2,
    title: "Modernisation et Finitions",
    description: "Mise à jour des finitions et amélioration de l'étanchéité",
    beforeImage: "/sun7piscine-images/pool-before2.jpg",
    afterImage: "/sun7piscine-images/pool-after2.jpg",
    category: "renovation"
  },
  {
    id: 3,
    title: "Réaménagement Total",
    description: "Changement complet du design et des matériaux",
    beforeImage: "/sun7piscine-images/pool-before3.jpg",
    afterImage: "/sun7piscine-images/pool-after3.jpg",
    category: "renovation"
  },
  {
    id: 4,
    title: "Restauration Premium",
    description: "Remise à neuf complète avec équipements haut de gamme",
    beforeImage: "/sun7piscine-images/pool-before4.jpg",
    afterImage: "/sun7piscine-images/pool-after4.jpg",
    category: "renovation"
  },
  {
    id: 5,
    title: "Transformation Moderne",
    description: "Passage d'un style classique à un design contemporain",
    beforeImage: "/sun7piscine-images/pool-before5.jpg",
    afterImage: "/sun7piscine-images/pool-after5.jpg",
    category: "renovation"
  },
  {
    id: 6,
    title: "Rénovation Élégante",
    description: "Amélioration esthétique et fonctionnelle",
    beforeImage: "/sun7piscine-images/pool-before6.jpg",
    afterImage: "/sun7piscine-images/pool-after6.jpg",
    category: "renovation"
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
    <section className="py-20 bg-[#C3D5FD]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-[#112A46] max-w-3xl mx-auto">
            Découvrez comment nous transformons vos espaces aquatiques. 
            Faites glisser pour voir la différence avant/après de nos projets.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#C3D5FD]/90 hover:bg-[#C3D5FD] text-[#112A46] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Projet précédent"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#C3D5FD]/90 hover:bg-[#C3D5FD] text-[#112A46] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Projet suivant"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject
                    ? "bg-[#112A46] scale-125"
                    : "bg-[#112A46]/30 hover:bg-[#112A46]/50"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-[#112A46]">
              {currentProject + 1} / {projectsData.length}
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-[#C3D5FD] border border-[#112A46]/20 rounded-full px-6 py-3 shadow-lg">
            <div className="text-[#112A46] font-semibold">
              💧 Glissez pour révéler la transformation
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}