"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  title,
  description 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(80);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Use direct DOM event listener for touch events with { passive: false }
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    };

    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, updateSliderPosition]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!isDragging) {
      updateSliderPosition(e.clientX);
    }
  }, [isDragging, updateSliderPosition]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {title && (
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#112A46] mb-4">{title}</h3>
          {description && (
            <p className="text-lg text-[#112A46] max-w-2xl mx-auto">{description}</p>
          )}
        </motion.div>
      )}
      
      <motion.div 
        ref={containerRef}
  className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none bg-gradient-to-br from-blue-50 to-cyan-50"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleEnd}
        onMouseUp={handleEnd}
        onTouchEnd={handleEnd}
        onClick={handleClick}
        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* After Image */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="Pool After Renovation"
            fill
            priority
            loading="eager"
            className="object-cover select-none pointer-events-none transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            draggable={false}
          />
          <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-[#C3D5FD] px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              APRÈS
            </span>
          </div>
        </div>
        
        {/* Before Image with clip-path */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`
          }}
        >
          <Image
            src={beforeImage}
            alt="Pool Before Renovation"
            fill
            priority
            loading="eager"
            className="object-cover select-none pointer-events-none transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            draggable={false}
          />
          <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#112A46] to-[#1e40af] text-[#C3D5FD] px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              AVANT
            </span>
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg cursor-col-resize z-10"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#C3D5FD] rounded-full shadow-xl border-3 border-blue-500 flex items-center justify-center hover:scale-110 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex space-x-1">
              <div className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Ripple effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="water-ripple opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
}