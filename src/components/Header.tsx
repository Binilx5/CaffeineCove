import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'menu' | 'gallery' | 'contact';
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Small delay to ensure content loads smoothly
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);



  // Helper function to handle page navigation
  const handlePageNavigation = (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => {
    if (setCurrentPage) {
      setCurrentPage(page);
    } else if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/25 backdrop-blur-lg shadow-2xl border border-white/20 rounded-3xl mx-4 mt-2' : 'bg-white/15 backdrop-blur-md shadow-xl border border-white/10 rounded-3xl mx-4 mt-2'
    } ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}  
          <div className="flex items-center pl-12 sm:pl-16 md:pl-20 lg:pl-24 xl:pl-28">
            <img 
              src="src/assets/logo.png" 
              alt="Caffeine Cove Logo" 
              className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-12 w-auto object-contain cursor-pointer transition-all duration-300 hover:opacity-90"
              onClick={() => handlePageNavigation('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 pr-6 md:pr-8 lg:pr-12 xl:pr-16">
            <button 
              onClick={() => handlePageNavigation('home')} 
              className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap"
            >
              Home
            </button>
            <button 
              onClick={() => handlePageNavigation('about')} 
              className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap"
            >
              About
            </button>
            <button 
              onClick={() => handlePageNavigation('menu')} 
              className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap"
            >
              Menu
            </button>
            <button 
              onClick={() => handlePageNavigation('gallery')} 
              className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap"
            >
              Gallery
            </button>
            <button 
              onClick={() => handlePageNavigation('contact')} 
              className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-coffee text-xl sm:text-2xl p-2 rounded-lg hover:bg-coffee/10 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-coffee/10">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => handlePageNavigation('home')} 
                className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-lg text-left py-2 px-3 rounded-lg hover:bg-coffee/5 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handlePageNavigation('about')} 
                className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-lg text-left py-2 px-3 rounded-lg hover:bg-coffee/5 w-full text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => handlePageNavigation('menu')} 
                className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-lg text-left py-2 px-3 rounded-lg hover:bg-coffee/5 w-full text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => handlePageNavigation('gallery')} 
                className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-lg text-left py-2 px-3 rounded-lg hover:bg-coffee/5 w-full text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => handlePageNavigation('contact')} 
                className="text-coffee hover:text-natural-wood transition-colors duration-300 font-poppins font-semibold text-lg text-left py-2 px-3 rounded-lg hover:bg-coffee/5 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
