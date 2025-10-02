"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// All the cool pool images from your collection
const galleryImages = [
  { src: "/sun7piscine-images/pool5-cool.jpg", title: "Piscine Moderne 1", category: "construction" },
  { src: "/sun7piscine-images/pool8-cool.jpg", title: "Piscine Moderne 2", category: "construction" },
  { src: "/sun7piscine-images/pool9-cool.jpg", title: "Piscine Moderne 3", category: "construction" },
  { src: "/sun7piscine-images/pool12-cool.jpg", title: "Piscine Moderne 4", category: "construction" },
  { src: "/sun7piscine-images/pool13-cool.jpg", title: "Piscine Moderne 5", category: "construction" },
  { src: "/sun7piscine-images/pool18-cool.jpg", title: "Piscine Moderne 6", category: "construction" },
  { src: "/sun7piscine-images/pool19-cool.jpg", title: "Piscine Moderne 7", category: "construction" },
  { src: "/sun7piscine-images/pool22-cool.jpg", title: "Piscine Moderne 8", category: "construction" },
  { src: "/sun7piscine-images/pool23-cool.jpg", title: "Piscine Moderne 9", category: "construction" },
  { src: "/sun7piscine-images/pool29-cool.jpg", title: "Piscine Moderne 10", category: "construction" },
  { src: "/sun7piscine-images/pool31-cool.jpg", title: "Piscine Moderne 11", category: "construction" },
  { src: "/sun7piscine-images/pool32-cool.jpg", title: "Piscine Moderne 12", category: "construction" },
  { src: "/sun7piscine-images/pool33-cool.jpg", title: "Piscine Moderne 13", category: "construction" },
  { src: "/sun7piscine-images/pool34-cool.jpg", title: "Piscine Moderne 14", category: "construction" },
  { src: "/sun7piscine-images/poo27-cool.jpg", title: "Piscine Signature", category: "construction" },
  
  // After images (renovations)
  { src: "/sun7piscine-images/pool-after1.jpg", title: "Rénovation Complète 1", category: "renovation" },
  { src: "/sun7piscine-images/pool-after2.jpg", title: "Rénovation Complète 2", category: "renovation" },
  { src: "/sun7piscine-images/pool-after3.jpg", title: "Rénovation Complète 3", category: "renovation" },
  { src: "/sun7piscine-images/pool-after4.jpg", title: "Rénovation Complète 4", category: "renovation" },
  { src: "/sun7piscine-images/pool-after5.jpg", title: "Rénovation Complète 5", category: "renovation" },
  { src: "/sun7piscine-images/pool-after6.jpg", title: "Rénovation Complète 6", category: "renovation" },
  { src: "/sun7piscine-images/pool-after7.jpg", title: "Rénovation Complète 7", category: "renovation" },
  { src: "/sun7piscine-images/pool-after8.jpg", title: "Rénovation Complète 8", category: "renovation" },
  { src: "/sun7piscine-images/pool-afterfill1.jpg", title: "Remise en Eau 1", category: "renovation" },
  { src: "/sun7piscine-images/pool-afterfill2.jpg", title: "Remise en Eau 2", category: "renovation" },
  
  // Covered pools
  { src: "/sun7piscine-images/pool-covered2.jpg", title: "Piscine Couverte 1", category: "covered" },
  { src: "/sun7piscine-images/pool-covered3.jpg", title: "Piscine Couverte 2", category: "covered" },
  { src: "/sun7piscine-images/pool-covered4.jpg", title: "Piscine Couverte 3", category: "covered" },
  { src: "/sun7piscine-images/pool-covered5.jpg", title: "Piscine Couverte 4", category: "covered" },
  { src: "/sun7piscine-images/poolcovered1-variant1.jpg", title: "Couverture Automatique 1", category: "covered" },
  { src: "/sun7piscine-images/poolcovered1-variant2.jpg", title: "Couverture Automatique 2", category: "covered" },
  
  // Indoor/Spa
  { src: "/sun7piscine-images/pool-inside1.jpg", title: "Piscine Intérieure 1", category: "indoor" },
  { src: "/sun7piscine-images/pool-inside2.jpg", title: "Piscine Intérieure 2", category: "indoor" },
  { src: "/sun7piscine-images/pool-inside3.jpg", title: "Piscine Intérieure 3", category: "indoor" },
  { src: "/sun7piscine-images/pool-jacuzzi.jpg", title: "Spa & Jacuzzi", category: "indoor" }
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "construction", label: "Constructions" },
  { id: "renovation", label: "Rénovations" },
  { id: "covered", label: "Couvertes" },
  { id: "indoor", label: "Intérieures & Spas" }
];

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, closeLightbox, prevImage, nextImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
            Galerie Complète
          </h2>
          <p className="text-xl text-[#112A46] opacity-80 max-w-3xl mx-auto mb-8">
            Découvrez l&apos;ensemble de nos réalisations classées par catégorie
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-amber-400 text-[#112A46] shadow-lg scale-105"
                    : "bg-white border border-[#112A46]/20 text-[#112A46] hover:bg-[#C3D5FD]/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <div className="text-xs opacity-80 capitalize">
                      {categories.find(cat => cat.id === image.category)?.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <p className="text-[#112A46] opacity-70">
            {filteredImages.length} projet{filteredImages.length > 1 ? "s" : ""} affiché{filteredImages.length > 1 ? "s" : ""}
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative"
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                  <p className="opacity-80">
                    {categories.find(cat => cat.id === filteredImages[selectedImage].category)?.label}
                  </p>
                </div>
              </motion.div>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}