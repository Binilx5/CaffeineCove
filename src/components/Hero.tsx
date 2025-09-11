import React, { useState, useEffect } from 'react';
import cafeInterior from '../assets/cafe-interior.jpg';
import { preloadMultipleImages } from '../utils/imageUtils';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload critical hero image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = cafeInterior;
    
    // Preload other critical images for faster navigation
    const criticalImages = [
      '/src/assets/cafe-interior8.jpg',
      '/src/assets/coffeebg2.png',
      '/src/assets/logo.png',
      '/src/assets/cafe-interior10.jpg',
      '/src/assets/cafe-interior12.jpg'
    ];
    
    // Preload in background without blocking main image
    preloadMultipleImages(criticalImages);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-end overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(107, 56, 5, 0.63), rgba(255, 255, 255, 0.5)), url(${cafeInterior})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content - only show when image is loaded */}
      <div className={`relative z-10 text-center sm:text-right px-4 sm:px-6 md:px-8 lg:pr-12 max-w-4xl mx-auto sm:mr-0 sm:ml-auto ${imageLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-outfit font-bold text-coffee mb-4 md:mb-6 leading-tight drop-shadow-lg">
          Where Warmth
          <span className="block text-coffee">Meets Taste</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-coffee/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-poppins font-bold max-w-2xl mx-auto sm:mx-0 sm:ml-auto drop-shadow-md leading-relaxed">
          Experience the perfect blend of natural comfort and artisanal coffee in our thoughtfully designed space
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-end items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto bg-coffee hover:bg-natural-wood text-marble-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-poppins font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <i className="bi bi-book mr-2"></i>
            View Menu
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto border-2 border-coffee text-coffee hover:bg-coffee hover:text-marble-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-poppins font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
          >
            <i className="bi bi-geo-alt mr-2"></i>
            Visit Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 right-3 sm:right-4 z-10">
        <i className="bi bi-chevron-down text-coffee text-lg sm:text-xl md:text-2xl drop-shadow-lg"></i>
      </div>
    </section>
  );
};

export default Hero;
