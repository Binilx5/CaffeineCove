import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cafeInterior2 from '../assets/cafe-interior2.jpg';
import cafeInterior3 from '../assets/cafe-interior3.jpg';
import cafeInterior4 from '../assets/cafe-interior4.jpg';

interface GalleryPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState([false, false, false]);
  const imageRefs = [
    useRef<HTMLDivElement>(null), 
    useRef<HTMLDivElement>(null), 
    useRef<HTMLDivElement>(null)
  ];

  const galleryImages = [
    {
      url: cafeInterior2,
      alt: 'Café Interior Design'
    },
    {
      url: cafeInterior3,
      alt: 'Coffee Bar'
    },
    {
      url: cafeInterior4,
      alt: 'Cozy Seating Area'
    }
  ];

  // Intersection Observer for image animations
  useEffect(() => {
    // On mobile, show all images immediately
    if (window.innerWidth < 768) {
      setVisibleImages([true, true, true]);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = imageRefs.findIndex(ref => ref.current === entry.target);
        if (entry.isIntersecting && index !== -1) {
          setVisibleImages(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before element is in view
    });

    const currentRefs = [...imageRefs];
    currentRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-marble-white font-poppins">
      <Header setCurrentPage={setCurrentPage} currentPage="gallery" />
      
      <section id="gallery" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-marble-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 mt-12 sm:mt-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-coffee mb-4 sm:mb-6">
                Our Gallery
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-natural-wood mx-auto mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
                A glimpse into the warm and inviting atmosphere of Caffeine Cove
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  ref={imageRefs[index]}
                  className={`transform transition-all duration-700 ease-out ${
                    window.innerWidth < 768 || visibleImages[index]
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div 
                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                    onClick={() => openModal(image.url)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="font-poppins font-medium text-lg">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white text-3xl hover:text-natural-wood transition-colors"
                onClick={closeModal}
              >
                ×
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[80vh] w-auto mx-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default GalleryPage;
