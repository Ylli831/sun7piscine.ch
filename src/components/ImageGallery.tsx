"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";

// All real images from sun7piscine-photos
const galleryImages = [
  // Nouvelles Constructions - Taponnet
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_1810.jpeg", title: "Nouvelle Construction Taponnet", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_1899.jpeg", title: "Construction Taponnet 2", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3033.jpeg", title: "Construction Taponnet 3", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3036.jpeg", title: "Construction Taponnet 4", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3561.jpeg", title: "Construction Taponnet 5", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_5154.JPG", title: "Construction Taponnet 6", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_5821.jpeg", title: "Construction Taponnet 7", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_6770.jpeg", title: "Construction Taponnet 8", category: "construction" },
  
  // Nouvelles Constructions - Châtelaine
  { src: "/sun7piscine-photos/Nouvelle Construction/chatlaine/chatlaine/IMG_3268.jpeg", title: "Construction Châtelaine 1", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chatlaine/chatlaine/IMG_4199.jpeg", title: "Construction Châtelaine 2", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chatlaine/chatlaine/IMG_4248.jpeg", title: "Construction Châtelaine 3", category: "construction" },
  
  // Nouvelles Constructions - Chêne-Bourg
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/1000034488.jpeg", title: "Construction Chêne-Bourg 1", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0005.jpeg", title: "Construction Chêne-Bourg 2", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0162.jpeg", title: "Construction Chêne-Bourg 3", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0534.jpeg", title: "Construction Chêne-Bourg 4", category: "construction" },
  
  // Rénovations PVC Armé
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/0a4b7d3b-3b8b-4c4e-ab96-a714020120e8.jpg", title: "Rénovation PVC 1", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/1000048687.jpg", title: "Rénovation PVC 2", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/1000051699.jpg", title: "Rénovation PVC 3", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/IMG_0649.jpeg", title: "Rénovation PVC 4", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/IMG_3321.jpeg", title: "Rénovation PVC 5", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/IMG_3568.jpeg", title: "Rénovation PVC 6", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/IMG_6637.jpeg", title: "Rénovation PVC 7", category: "renovation" },
  
  // Rénovations Peinture
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine Peinture/Divonne/IMG_3669.jpeg", title: "Rénovation Peinture 1", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine Peinture/Divonne/IMG_3938.jpeg", title: "Rénovation Peinture 2", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine Peinture/Divonne/IMG_3940.jpeg", title: "Rénovation Peinture 3", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine Peinture/Divonne/IMG_3967.jpeg", title: "Rénovation Peinture 4", category: "renovation" },
  
  // Rénovations Cessy
  { src: "/sun7piscine-photos/rénovations piscine/Cessy framce/Cessy framce/IMG_2173.jpeg", title: "Rénovation Cessy 1", category: "renovation" },
  { src: "/sun7piscine-photos/rénovations piscine/Cessy framce/Cessy framce/IMG_3464.jpeg", title: "Rénovation Cessy 2", category: "renovation" },
  { src: "/sun7piscine-photos/rénovations piscine/Cessy framce/Cessy framce/IMG_4052.jpeg", title: "Rénovation Cessy 3", category: "renovation" },
  
  // Couvertures et Sécurité
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/1000033862.jpeg", title: "Couverture de Sécurité 1", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_0540.jpeg", title: "Couverture Solaire 1", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_1074.jpeg", title: "Couverture Solaire 2", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_2796.JPG", title: "Couverture de Sécurité 2", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_3433.jpeg", title: "Couverture Solaire 3", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_3465.JPG", title: "Couverture de Sécurité 3", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_5831.jpeg", title: "Couverture Solaire 4", category: "covered" },
  { src: "/sun7piscine-photos/Couverture de sécurité et Solaire/IMG_7050.jpeg", title: "Couverture de Sécurité 4", category: "covered" },
  
  // Before/After Results
  { src: "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-1.jpeg", title: "Résultat Rénovation 1", category: "renovation" },
  { src: "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-2.jpeg", title: "Résultat Rénovation 2", category: "renovation" },
  { src: "/sun7piscine-photos/before and after/para edhe pas/Apres-Renovation-3.jpeg", title: "Résultat Rénovation 3", category: "renovation" },
  { src: "/sun7piscine-photos/before and after/para edhe pas/Apres-Nettoyage.jpeg", title: "Résultat Nettoyage", category: "renovation" }
  ,
  // Additional Taponnet / Construction images (previously unreferenced)
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_1899-2.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3037.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3561-2.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3562.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3646-2.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3646.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3769-2.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3769.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3916.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3918.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_3920.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_5680.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_5833.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_6355.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_6749.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_6772.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_6773.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/Taponnet/Taponnet/IMG_7127.jpeg", title: "Construction Taponnet - variant", category: "construction" },
  // Additional chatlaine & chene-bourge
  { src: "/sun7piscine-photos/Nouvelle Construction/chatlaine/chatlaine/IMG_3623.jpeg", title: "Construction Chatlaine - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chatlaine/chatlaine/IMG_4246.jpeg", title: "Construction Chatlaine - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chatlaine/chatlaine/IMG_4250.jpeg", title: "Construction Chatlaine - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/1000035039.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/1000039468.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0005-2.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0163.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0242.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0250.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_0543.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_1348.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_3947.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" },
  { src: "/sun7piscine-photos/Nouvelle Construction/chene-bourge/chene-bourge/IMG_3948.jpeg", title: "Construction Chêne-Bourg - extra", category: "construction" }
,
  // PVC exported files
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/1000048689.jpg", title: "Rénovation PVC - extra", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/2ab8e373-1ab9-47a1-95df-7b73061558c7.jpg", title: "Rénovation PVC - extra", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/4d2bbe0a-0741-4c14-8bbb-c79f58abe58b.jpg", title: "Rénovation PVC - extra", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/ceab40f0-c5d3-455b-b537-cde390e8d257.jpg", title: "Rénovation PVC - extra", category: "renovation" },
  { src: "/sun7piscine-photos/Rénovation étanchéité de piscine en PVC ARMÉ/Pvc/dca20f98-8967-43ef-8e2a-4bde3fd74473.jpg", title: "Rénovation PVC - extra", category: "renovation" },

  // Cessy duplicates
  { src: "/sun7piscine-photos/rénovations piscine/Cessy framce/Cessy framce/IMG_3464-2.jpeg", title: "Rénovation Cessy - variant", category: "renovation" },
  { src: "/sun7piscine-photos/rénovations piscine/Cessy framce/Cessy framce/IMG_3465.jpeg", title: "Rénovation Cessy - variant", category: "renovation" }
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "construction", label: "Constructions" },
  { id: "renovation", label: "Rénovations" },
  { id: "covered", label: "Couvertures & Sécurité" }
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#00008f] mb-6">
            Galerie Complète
          </h2>
          <p className="text-xl text-[#00008f] opacity-80 max-w-3xl mx-auto mb-8">
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
                    ? "bg-[#fefe00] text-[#00008f] shadow-lg scale-105"
                    : "bg-white border border-[#009dfe]/30 text-[#00008f] hover:bg-[#009dfe]/10"
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-precise card-hover-lift cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square image-overlay-reveal">
                  <SmartImage
                    src={image.src}
                    alt={image.title}
                    fill
                    loading="lazy"
                    quality={70}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0MyRDVGRCIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <div className="text-xs opacity-90 capitalize">
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
          <p className="text-[#00008f] opacity-70">
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
                <SmartImage
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
                <ChevronLeft size={24} style={{ color: '#fefe00' }} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRight size={24} style={{ color: '#fefe00' }} />
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