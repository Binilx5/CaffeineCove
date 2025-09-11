import React, { useEffect, useRef } from 'react';

interface FooterProps {
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const craftedByRef = useRef<HTMLAnchorElement>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageNavigation = (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => {
    // Always use setCurrentPage if available (for single page navigation)
    if (setCurrentPage) {
      setCurrentPage(page);
    } else if (page === 'home') {
      // If on home page but setCurrentPage is not available, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Remove the else block that was scrolling to sections
  };

  useEffect(() => {
    let animationTimeout: ReturnType<typeof setTimeout>;
    let isHovering = false;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isHovering) {
            const button = entry.target as HTMLButtonElement;
            const reflection = button.querySelector('.reflection') as HTMLElement;
            if (reflection) {
              // Clear any existing timeouts
              clearTimeout(animationTimeout);
              
              // Force reflow to ensure animation restarts
              void reflection.offsetWidth;
              
              // Trigger the animation
              reflection.style.opacity = '1';
              reflection.classList.add('animate-[slide_1.5s_ease-in-out_forwards]');
              
              // Reset after animation
              animationTimeout = setTimeout(() => {
                if (!isHovering) {
                  reflection.style.opacity = '0';
                }
                reflection.classList.remove('animate-[slide_1.5s_ease-in-out_forwards]');
              }, 1500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const handleMouseEnter = () => {
      isHovering = true;
      const reflection = craftedByRef.current?.querySelector('.reflection') as HTMLElement;
      if (reflection) {
        reflection.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      const reflection = craftedByRef.current?.querySelector('.reflection') as HTMLElement;
      if (reflection) {
        reflection.style.opacity = '0';
      }
    };

    if (craftedByRef.current) {
      observer.observe(craftedByRef.current);
      craftedByRef.current.addEventListener('mouseenter', handleMouseEnter);
      craftedByRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(animationTimeout);
      if (craftedByRef.current) {
        observer.unobserve(craftedByRef.current);
        craftedByRef.current.removeEventListener('mouseenter', handleMouseEnter);
        craftedByRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <footer className="bg-walnut-brown text-marble-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <i className="bi bi-cup-hot text-xl sm:text-2xl md:text-3xl text-natural-wood"></i>
                <h3 className="text-lg sm:text-xl md:text-2xl font-outfit font-bold">Caffeine Cove</h3>
              </div>
              <p className="text-marble-white/80 font-poppins leading-relaxed mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                Where warmth meets taste. Experience the perfect blend of natural comfort and artisanal coffee in our thoughtfully designed space.
              </p>
              <p className="text-natural-wood font-poppins font-medium italic text-xs sm:text-sm md:text-base">
                "Designed with love, brewed with care"
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-base sm:text-lg md:text-xl font-outfit font-semibold mb-3 sm:mb-4 md:mb-6">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2 md:space-y-3 flex flex-col items-center">
                <button 
                  onClick={() => handlePageNavigation('home')}
                  className="block w-full text-marble-white/80 hover:text-natural-wood transition-colors duration-300 font-poppins text-xs sm:text-sm md:text-base text-center"
                >
                  Home
                </button>
                <button 
                  onClick={() => handlePageNavigation('about')}
                  className="block w-full text-marble-white/80 hover:text-natural-wood transition-colors duration-300 font-poppins text-xs sm:text-sm md:text-base text-center"
                >
                  About Us
                </button>
                <button 
                  onClick={() => handlePageNavigation('menu')}
                  className="block w-full text-marble-white/80 hover:text-natural-wood transition-colors duration-300 font-poppins text-xs sm:text-sm md:text-base text-center"
                >
                  Menu
                </button>
                <button 
                  onClick={() => handlePageNavigation('gallery')}
                  className="block w-full text-marble-white/80 hover:text-natural-wood transition-colors duration-300 font-poppins text-xs sm:text-sm md:text-base text-center"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => handlePageNavigation('contact')}
                  className="block w-full text-marble-white/80 hover:text-natural-wood transition-colors duration-300 font-poppins text-xs sm:text-sm md:text-base text-center"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-base sm:text-lg md:text-xl font-outfit font-semibold mb-3 sm:mb-4 md:mb-6">Connect With Us</h4>
              
              <div className="flex justify-center md:justify-end space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4 md:mb-6">
                <a 
                  href="https://instagram.com/caffeine_cove_" 
                  className="bg-natural-wood hover:bg-soft-beige hover:text-coffee p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram text-sm sm:text-lg md:text-xl"></i>
                </a>
                <a 
                  href="https://maps.app.goo.gl/wiRQU1ogwkSeLCmY9" 
                  className="bg-natural-wood hover:bg-soft-beige hover:text-coffee p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Google"
                >
                  <i className="bi bi-google text-sm sm:text-lg md:text-xl"></i>
                </a>
              </div>

              <div className="space-y-1 sm:space-y-2 text-marble-white/80 font-poppins text-xs sm:text-sm md:text-base">
                <p>
                  <i className="bi bi-telephone mr-1 sm:mr-2"></i>
                  +91 9327672485
                </p>
                <p>
                  <i className="bi bi-envelope mr-1 sm:mr-2"></i>
                  caffeinecove7@gmail.com
                </p>
                <p>
                  <i className="bi bi-geo-alt mr-1 sm:mr-2"></i>
                  215 ~ 218 Ar Mall Mota Varachha Surat 394101
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-marble-white/20 pt-4 sm:pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-marble-white/60 font-poppins text-xs sm:text-sm text-center sm:text-left">
                © 2024 Caffeine Cove. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <a
                  href="https://instagram.com/binilradadiya_"
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={craftedByRef}
                  className="group relative inline-block rounded-lg bg-walnut-brown border border-marble-white/20 active:scale-95 transition-all duration-300 overflow-hidden border-animated"
                >
                  <div className="relative bg-walnut-brown rounded-lg transition-colors duration-200">
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="reflection absolute inset-0 bg-gradient-to-r from-transparent via-marble-white to-transparent w-1/3 transform -skew-x-12 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:animate-[slide_1.5s_ease-in-out_forwards]"
                      ></div>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <div className="w-1.5 h-1.5 bg-coffee rounded-full group-hover:bg-marble-white transition-all duration-300 group-hover:scale-110"></div>
                      <span className="text-marble-white font-poppins text-xs">
                        Powered by <span className="font-semibold text-coffee group-hover:text-coffee/90 transition-colors duration-300">Binfinity</span>
                      </span>
                    </div>
                  </div>
                </a>
                <button 
                  onClick={scrollToTop}
                  className="bg-natural-wood hover:bg-soft-beige hover:text-coffee p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <i className="bi bi-arrow-up text-sm sm:text-base md:text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
