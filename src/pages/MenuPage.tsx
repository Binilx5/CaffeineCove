import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import drinksMenu1 from '../assets/CC Drinks_page-0001.jpg';
import drinksMenu2 from '../assets/CC Drinks_page-0002.jpg';
import drinksMenu3 from '../assets/CC Drinks_page-0003.jpg';
import foodMenu1 from '../assets/CC Food01.jpg';
import foodMenu2 from '../assets/CC Food02.jpg';


interface MenuPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-marble-white font-poppins">
      <Header setCurrentPage={setCurrentPage} currentPage="menu" />

      <section id="menu" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-marble-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 mt-12 sm:mt-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-coffee mb-4 sm:mb-6">
                Our Menu
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-natural-wood mx-auto mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
                Carefully crafted beverages and dishes made with the finest ingredients
              </p>
            </div>

            {/* Drinks Menu Section */}
            <div className="mb-16 sm:mb-20 py-6 sm:py-8">
              <div className="flex items-center justify-center mb-8 sm:mb-10">
                <div className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-0.5 bg-natural-wood animate-pulse"></div>
                    <div className="flex items-center space-x-3 group cursor-default">
                      <div className="w-2 h-2 bg-natural-wood rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-lg sm:text-xl font-poppins font-medium text-coffee/80 group-hover:text-coffee transition-colors duration-300 tracking-wider">
                        BEVERAGES
                      </span>
                      <div className="w-2 h-2 bg-natural-wood rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <div className="w-12 h-0.5 bg-natural-wood animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img 
                      src={drinksMenu1} 
                      alt="Drinks Menu Page 1" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img 
                      src={drinksMenu2} 
                      alt="Drinks Menu Page 2" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img 
                      src={drinksMenu3} 
                      alt="Drinks Menu Page 3" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Menu Section */}
            <div>
              <div className="flex items-center justify-center mb-8 sm:mb-10">
                <div className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-0.5 bg-natural-wood animate-pulse"></div>
                    <div className="flex items-center space-x-3 group cursor-default">
                      <div className="w-2 h-2 bg-natural-wood rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-lg sm:text-xl font-poppins font-medium text-coffee/80 group-hover:text-coffee transition-colors duration-300 tracking-wider">
                        FOOD
                      </span>
                      <div className="w-2 h-2 bg-natural-wood rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <div className="w-12 h-0.5 bg-natural-wood animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img 
                      src={foodMenu1} 
                      alt="Food Menu Page 1" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img 
                      src={foodMenu2} 
                      alt="Food Menu Page 2" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MenuPage;
