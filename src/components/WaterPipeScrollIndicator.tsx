"use client";

import { useEffect, useState } from 'react';

export default function WaterPipeScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.min(Math.max(scrollPx / winHeightPx, 0), 1);
      
      setScrollProgress(scrolled);
      setIsVisible(winHeightPx > 200); // Only show if page is scrollable
    };

    // Initial calculation
    updateScrollProgress();

    // Add scroll event listener with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative w-12 h-96">
        {/* Industrial pipe outer shell */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-full border-2 border-gray-500 shadow-2xl">
          {/* Inner pipe cavity */}
          <div className="absolute inset-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-inner">
            
            {/* Water/liquid fill */}
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0 ? 0.8 : 0
              }}
            >
              {/* Water surface */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 rounded-full"></div>
              
              {/* Water texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-300/30 to-transparent opacity-60"></div>
            </div>

            {/* Water droplets that squirt out when scrolling */}
            {scrollProgress > 0 && (
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                {/* Right side squirt */}
                <div 
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-80"
                  style={{ 
                    right: '-4px', 
                    top: `${scrollProgress * 90}%`,
                    animation: 'squirtRight 1.5s ease-out infinite'
                  }}
                ></div>
                {/* Left side squirt */}
                <div 
                  className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full opacity-70"
                  style={{ 
                    left: '-4px', 
                    top: `${scrollProgress * 85 + 3}%`,
                    animation: 'squirtLeft 1.8s ease-out infinite',
                    animationDelay: '0.4s'
                  }}
                ></div>
                {/* Top right squirt */}
                <div 
                  className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-60"
                  style={{ 
                    right: '-6px', 
                    top: `${scrollProgress * 88 + 1}%`,
                    animation: 'squirtTopRight 1.2s ease-out infinite',
                    animationDelay: '0.7s'
                  }}
                ></div>
              </div>
            )}

            <style jsx>{`
              @keyframes squirtRight {
                0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
                30% { transform: translate(15px, -5px) scale(0.8); opacity: 0.6; }
                70% { transform: translate(25px, 10px) scale(0.5); opacity: 0.3; }
                100% { transform: translate(30px, 25px) scale(0.2); opacity: 0; }
              }
              
              @keyframes squirtLeft {
                0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
                25% { transform: translate(-12px, -3px) scale(0.9); opacity: 0.5; }
                60% { transform: translate(-20px, 8px) scale(0.6); opacity: 0.3; }
                100% { transform: translate(-25px, 20px) scale(0.2); opacity: 0; }
              }
              
              @keyframes squirtTopRight {
                0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
                40% { transform: translate(18px, -8px) scale(0.7); opacity: 0.4; }
                80% { transform: translate(28px, 5px) scale(0.4); opacity: 0.2; }
                100% { transform: translate(35px, 18px) scale(0.1); opacity: 0; }
              }
            `}</style>
          </div>

          {/* Pipe metallic highlights */}
          <div className="absolute left-1 top-2 w-1 h-full bg-gradient-to-b from-gray-200 via-white/30 to-gray-300 rounded-l-full opacity-60"></div>
          <div className="absolute right-1 top-2 w-0.5 h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-r-full opacity-40"></div>
        </div>

        {/* Industrial pipe fittings/caps */}
        <div className="absolute -top-3 -left-1 right-0 h-6 bg-gradient-to-b from-gray-500 via-gray-400 to-gray-500 border-2 border-gray-600 shadow-lg" style={{ width: '3.5rem' }}>
          {/* Bolts/screws */}
          <div className="absolute top-1 left-2 w-1 h-1 bg-gray-700 rounded-full"></div>
          <div className="absolute top-1 right-2 w-1 h-1 bg-gray-700 rounded-full"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-700 rounded-full"></div>
        </div>
        
        <div className="absolute -bottom-3 -left-1 right-0 h-6 bg-gradient-to-t from-gray-500 via-gray-400 to-gray-500 border-2 border-gray-600 shadow-lg" style={{ width: '3.5rem' }}>
          {/* Bolts/screws */}
          <div className="absolute top-1 left-2 w-1 h-1 bg-gray-700 rounded-full"></div>
          <div className="absolute top-1 right-2 w-1 h-1 bg-gray-700 rounded-full"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-700 rounded-full"></div>
        </div>

        {/* Progress percentage */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-gray-800 text-gray-200 text-xs font-mono px-3 py-1.5 rounded border border-gray-600 shadow-lg whitespace-nowrap">
            {Math.round(scrollProgress * 100)}%
          </div>
          {/* Arrow pointer */}
          <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent"></div>
        </div>

        {/* Pipe connection points */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 border border-gray-700 shadow-md"></div>
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 border border-gray-700 shadow-md"></div>
      </div>

      {/* Hover trigger area */}
      <div className="absolute inset-0 group"></div>
    </div>
  );
}