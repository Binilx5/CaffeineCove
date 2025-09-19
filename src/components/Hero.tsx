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
    <section id="home" className="relative overflow-hidden">
      {/* Unified Hero Section - Desktop */}
      <div className="hidden lg:block py-16 sm:py-20 md:py-24" style={{backgroundColor: '#F5F0EA'}}>
        
        {/* Full Width Hero Content */}
        <div className="relative w-full">
          {/* Decorative Coffee Elements Background */}
          <div className="absolute inset-0">
            {/* Coffee Bean Pattern */}
            <div className="absolute top-10 left-10 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-2xl"></i>
            </div>
            <div className="absolute top-20 right-16 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-lg"></i>
            </div>
            <div className="absolute bottom-20 left-20 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-xl"></i>
            </div>
            <div className="absolute bottom-32 right-12 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-lg"></i>
            </div>
            
            {/* Steam Effect */}
            <div className="absolute top-8 right-1/4 opacity-20">
              <div className="animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                <div className="w-1 h-8 bg-coffee/30 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-12 right-1/4 ml-2 opacity-15">
              <div className="animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
                <div className="w-1 h-6 bg-coffee/25 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Main Content Layout with max-width constraint */}
          <div className="relative z-10 flex items-center justify-center py-8">
            <div className="container mx-auto">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                  
                  {/* Left Side - Hero Content */}
                  <div className={`w-1/2 pr-8 ${imageLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              
              {/* Main Heading */}
              <h1 className="text-6xl font-outfit font-bold text-coffee mb-6 leading-tight">
                <span className="block">Where Warmth</span>
                <span className="block text-natural-wood">Meets Taste</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-coffee/80 mb-8 font-poppins leading-relaxed">
                Experience the perfect blend of natural comfort and artisanal coffee in our thoughtfully designed space.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="bg-coffee text-marble-white hover:bg-natural-wood px-8 py-4 rounded-full font-poppins font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="bi bi-book mr-2"></i>
                  View Menu
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-coffee text-coffee px-8 py-4 rounded-full font-poppins font-semibold text-base transition-all duration-300 transform hover:scale-105"
                >
                  <i className="bi bi-geo-alt mr-2"></i>
                  Visit Us
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-coffee/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-coffee font-outfit">20+</div>
                  <div className="text-sm text-coffee/70 font-poppins">Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coffee font-outfit">100%</div>
                  <div className="text-sm text-coffee/70 font-poppins">Organic</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coffee font-outfit">10+</div>
                  <div className="text-sm text-coffee/70 font-poppins">Signature Drinks</div>
                </div>
              </div>
            </div>
                  
                  {/* Right Side - Minimalist Brand Focus */}
                  <div className="w-1/2 pl-8">
                    
                    {/* Clean Brand Container */}
                    <div className="relative h-full flex flex-col justify-center items-center">
                      
                      {/* Main Brand Section */}
                      <div className="text-center max-w-sm">
                        
                        {/* Brand Logo/Icon */}
                        <div className="mb-6 mt-8">
                          <div className="relative inline-block">
                            <div className="w-32 h-32 bg-gradient-to-br from-marble-white to-marble-white/90 rounded-full flex items-center justify-center border border-natural-wood/20 mx-auto">
                              <div className="text-center">
                                <i className="bi bi-cup-hot-fill text-coffee text-4xl mb-2 block"></i>
                                <div className="w-8 h-0.5 bg-natural-wood mx-auto"></div>
                              </div>
                            </div>
                            {/* Subtle accent rings */}
                            <div className="absolute inset-0 rounded-full border border-natural-wood/10 animate-pulse" style={{animationDuration: '3s'}}></div>
                            <div className="absolute inset-2 rounded-full border border-coffee/5 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                          </div>
                        </div>
                        
                        {/* Just the Logo - No Text */}
                        <div className="mb-3">
                          <div className="flex items-center justify-center space-x-3 mb-3">
                            <div className="w-8 h-0.5 bg-natural-wood"></div>
                            <i className="bi bi-gem text-natural-wood text-sm"></i>
                            <div className="w-8 h-0.5 bg-natural-wood"></div>
                          </div>
                          <p className="text-natural-wood/80 font-outfit text-sm tracking-widest uppercase font-medium">Premium Coffee Experience</p>
                        </div>
                        
                        {/* Brand Values */}
                        <div className="space-y-3 mb-8">
                          
                          {/* Value 1 */}
                          <div className="bg-marble-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-natural-wood/10">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 bg-natural-wood rounded-full"></div>
                              <span className="font-outfit font-medium text-coffee text-sm">Fresh Daily Roast</span>
                            </div>
                          </div>
                          
                          {/* Value 2 */}
                          <div className="bg-marble-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-natural-wood/10">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 bg-coffee/70 rounded-full"></div>
                              <span className="font-outfit font-medium text-coffee text-sm">Handpicked Selection</span>
                            </div>
                          </div>
                          
                          {/* Value 3 */}
                          <div className="bg-marble-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-natural-wood/10">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 bg-coffee rounded-full"></div>
                              <span className="font-outfit font-medium text-coffee text-sm">Expert Baristas</span>
                            </div>
                          </div>
                          
                        </div>
                        
                        {/* Brand Promise */}
                        <div className="mb-6">
                          <div className="bg-gradient-to-r from-marble-white/80 to-marble-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-natural-wood/20">
                            <blockquote className="text-coffee/80 font-outfit text-sm italic leading-relaxed text-center">
                              "Where every cup tells a story of passion, quality, and craftsmanship"
                            </blockquote>
                          </div>
                        </div>
                        
                        {/* Brand Badge */}
                        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-coffee to-natural-wood text-marble-white rounded-full px-6 py-2">
                          <div className="w-2 h-2 bg-marble-white rounded-full animate-pulse"></div>
                          <span className="font-playfair font-semibold text-sm">Est. 2025</span>
                          <div className="w-2 h-2 bg-marble-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        </div>
                        
                      </div>
                      
                      {/* Minimal Decorative Elements */}
                      <div className="absolute top-1/4 right-8 opacity-5">
                        <i className="bi bi-circle text-natural-wood text-6xl"></i>
                      </div>
                      <div className="absolute bottom-1/4 left-8 opacity-5">
                        <i className="bi bi-circle text-coffee text-4xl"></i>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Unified Single Section */}
      <div className="lg:hidden">
        {/* Single Mobile Hero Section with Integrated Process */}
        <div className="relative py-12 sm:py-16 md:py-20" style={{backgroundColor: '#F5F0EA'}}>
          {/* Decorative Elements for Mobile */}
          <div className="absolute inset-0">
            {/* Coffee Bean Pattern - Mobile */}
            <div className="absolute top-16 left-6 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-xl"></i>
            </div>
            <div className="absolute top-24 right-8 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-lg"></i>
            </div>
            <div className="absolute bottom-32 left-8 opacity-10">
              <i className="bi bi-circle-fill text-coffee text-lg"></i>
            </div>
            
            {/* Mobile Steam Effect */}
            <div className="absolute top-8 right-1/4 opacity-15">
              <div className="animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>
                <div className="w-0.5 h-6 bg-coffee/25 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-12 right-1/4 ml-1 opacity-10">
              <div className="animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}>
                <div className="w-0.5 h-4 bg-coffee/20 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Unified Content Layout */}
          <div className="relative z-10 flex flex-col py-4 px-6 pt-32 sm:pt-36 md:pt-40">
            
            {/* Top Section - Hero Content */}
            <div className="flex items-center justify-center py-4">
              <div className={`text-center max-w-lg ${imageLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl font-outfit font-bold text-coffee mb-6 leading-tight">
                  <span className="block">Where Warmth</span>
                  <span className="block text-natural-wood">Meets Taste</span>
                </h1>
                
                {/* Description */}
                <p className="text-lg text-coffee/80 mb-8 font-poppins leading-relaxed">
                  Experience the perfect blend of natural comfort and artisanal coffee in our thoughtfully designed space.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 sm:gap-4 justify-center mb-8">
                  <button 
                    onClick={() => scrollToSection('menu')}
                    className="bg-coffee text-marble-white hover:bg-natural-wood px-5 sm:px-7 md:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-full font-poppins font-semibold text-sm sm:text-base md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap min-w-[120px] sm:min-w-[140px]"
                  >
                    <i className="bi bi-book mr-2"></i>
                    View Menu
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-coffee text-coffee px-5 sm:px-7 md:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-full font-poppins font-semibold text-sm sm:text-base md:text-base transition-all duration-300 transform hover:scale-105 whitespace-nowrap min-w-[120px] sm:min-w-[140px]"
                  >
                    <i className="bi bi-geo-alt mr-2"></i>
                    Visit Us
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-coffee/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coffee font-outfit">20+</div>
                    <div className="text-sm text-coffee/70 font-poppins">Varieties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coffee font-outfit">100%</div>
                    <div className="text-sm text-coffee/70 font-poppins">Organic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coffee font-outfit">10+</div>
                    <div className="text-sm text-coffee/70 font-poppins">Signature Drinks</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Section - Mobile Brand Focus */}
            <div className="flex items-center justify-center py-8">
              <div className="text-center max-w-xs w-full">
                
                {/* Mobile Brand Logo */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-marble-white to-marble-white/90 rounded-full flex items-center justify-center border border-natural-wood/20 mx-auto mb-4">
                    <div className="text-center">
                      <i className="bi bi-cup-hot-fill text-coffee text-2xl mb-1 block"></i>
                      <div className="w-6 h-0.5 bg-natural-wood mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Mobile Brand Name - Removed */}
                  <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-0.5 bg-natural-wood"></div>
                    <i className="bi bi-gem text-natural-wood text-sm sm:text-base"></i>
                    <div className="w-8 h-0.5 bg-natural-wood"></div>
                  </div>
                  <p className="text-natural-wood/80 font-outfit text-sm sm:text-base tracking-wider uppercase font-medium">Premium Coffee Experience</p>
                </div>
                
                {/* Mobile Brand Values */}
                <div className="space-y-3 mb-6 sm:mb-8">
                  
                  {/* Mobile Value 1 */}
                  <div className="bg-marble-white/60 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-2.5 border border-natural-wood/10">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-natural-wood rounded-full"></div>
                      <span className="font-outfit font-medium text-coffee text-sm sm:text-base">Fresh Daily Roast</span>
                    </div>
                  </div>
                  
                  {/* Mobile Value 2 */}
                  <div className="bg-marble-white/60 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-2.5 border border-natural-wood/10">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-coffee/70 rounded-full"></div>
                      <span className="font-outfit font-medium text-coffee text-sm sm:text-base">Handpicked Selection</span>
                    </div>
                  </div>
                  
                  {/* Mobile Value 3 */}
                  <div className="bg-marble-white/60 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-2.5 border border-natural-wood/10">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-coffee rounded-full"></div>
                      <span className="font-outfit font-medium text-coffee text-sm sm:text-base">Expert Baristas</span>
                    </div>
                  </div>
                  
                </div>
                
                {/* Mobile Brand Promise */}
                <div className="mb-5 sm:mb-6">
                  <div className="bg-gradient-to-r from-marble-white/80 to-marble-white/60 backdrop-blur-sm rounded-xl px-5 py-4 sm:px-6 sm:py-5 border border-natural-wood/20">
                    <blockquote className="text-coffee/80 font-outfit text-sm sm:text-base italic leading-relaxed text-center">
                      "Where every cup tells a story of passion, quality, and craftsmanship"
                    </blockquote>
                  </div>
                </div>
                
                {/* Mobile Brand Badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-coffee to-natural-wood text-marble-white rounded-full px-4 py-1.5">
                  <div className="w-1.5 h-1.5 bg-marble-white rounded-full animate-pulse"></div>
                  <span className="font-playfair font-semibold text-xs">Est. 2025</span>
                  <div className="w-1.5 h-1.5 bg-marble-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;