import React, { useState, useRef, useEffect } from 'react';
import { createImageIntersectionObserver } from '../utils/imageUtils';
import cafeInterior8 from '../assets/cafe-interior8.jpg';
import cafeInterior9 from '../assets/cafe-interior12.jpg';
import cafeInterior4 from '../assets/cafe-interior10.jpg';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [visibleImages, setVisibleImages] = useState([false, false, false]);
  const [loadedImages, setLoadedImages] = useState(new Set<number>());
  const imageRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];


  const galleryImages = [
    {
      url: cafeInterior8,
      alt: 'Café Interior Design'
    },
    {
      url: cafeInterior9,
      alt: 'Coffee Bar'
    },
    {
      url: cafeInterior4,
      alt: 'Cozy Seating Area'
    }
  ];

  const reviews = [
    {
      name: "Dipen Jagani",
      role: "Regular Customer",
      text: "The atmosphere here is absolutely magical! The coffee is exceptional and the staff makes you feel like family. This is my go-to spot for both work and relaxation.",
      rating: 5
    },
    {
      name: "Binil Radadiya",
      role: "Coffee Enthusiast",
      text: "Perfect blend of comfort and elegance. The food is fresh, the coffee is rich, and the design is simply stunning. I love spending my mornings here!",
      rating: 5
    },
    {
      name: "Dweej Zalavadiya",
      role: "Local Artist",
      text: "This café has become my sanctuary. The attention to detail in every aspect - from the decor to the service - is remarkable. Highly recommend!",
      rating: 5
    },
    {
      name: "Dhruv Patel",
      role: "Student",
      text: "The perfect spot for meetings and networking. The ambiance is professional yet relaxed, and the coffee quality is consistently excellent.",
      rating: 5
    },
    {
      name: "Vansh Savaliya",
      role: "Food Blogger",
      text: "As someone who reviews cafes professionally, I can say this place exceeds expectations. The presentation, taste, and service are all top-notch!",
      rating: 5
    },
    {
      name: "Om Patel",
      role: "Student",
      text: "I loved everything about this café—the cozy ambiance, the smooth coffee, and the warm hospitality. It's the kind of place you walk into once and instantly feel at home.",
      rating: 5
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Intersection Observer for image animations (only when scrolled into view)
  useEffect(() => {
    const observer = createImageIntersectionObserver((entry) => {
      const index = imageRefs.findIndex(ref => ref.current === entry.target);
      if (entry.isIntersecting && index !== -1) {
        setVisibleImages(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }
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

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-muted-sand">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-coffee mb-3 sm:mb-4 md:mb-6">
              Our Space
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-natural-wood mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
              Take a visual journey through our thoughtfully designed café
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                ref={imageRefs[index]}
                className={`transform transition-all duration-700 ease-out ${
                  visibleImages[index] 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
              >
                <div 
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={() => openImage(image.url)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoadedImages(prev => new Set(prev).add(index))}
                    className={`w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-all duration-500 group-hover:scale-105 ${
                      loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Loading...</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4 md:p-6">
                    <div className="text-white">
                      <p className="font-poppins font-medium text-sm sm:text-base md:text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeImage}
            >
              <div className="relative max-w-4xl w-full">
                <button 
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-natural-wood transition-colors"
                  onClick={closeImage}
                >
                  ×
                </button>
                <img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  loading="lazy"
                  className="max-h-[80vh] w-auto mx-auto rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <p className="text-sm sm:text-base md:text-lg text-coffee/70 font-poppins mb-4 sm:mb-6 px-4">
              Every corner of Caffeine Cove has been designed with intention, creating a space that feels both welcoming and inspiring.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section with White Background */}
      <div className="bg-white py-12 sm:py-16 md:py-20 mt-12 sm:mt-16 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-coffee mb-3 sm:mb-4">
                What Our Customers Say!
              </h3>
              <div className="w-10 sm:w-12 md:w-16 h-1 bg-natural-wood mx-auto mb-3 sm:mb-4 md:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
                Real experiences from our valued customers
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={prevReview}
                className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-coffee hover:bg-natural-wood text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                aria-label="Previous review"
              >
                <i className="bi bi-chevron-left text-lg sm:text-xl"></i>
              </button>
              
              <button
                onClick={nextReview}
                className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-coffee hover:bg-natural-wood text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                aria-label="Next review"
              >
                <i className="bi bi-chevron-right text-lg sm:text-xl"></i>
              </button>

              {/* Review Display - 1 on mobile, 3 on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mx-8 sm:mx-12">
                {/* Mobile: Show only current review */}
                <div className="md:hidden">
                  {(() => {
                    const review = reviews[currentReview];
                    return (
                      <div className="bg-marble-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center mb-3 sm:mb-4 justify-center">
                          <div className="flex text-yellow-400 text-base sm:text-lg">
                            {[...Array(review.rating)].map((_, i) => (
                              <i key={i} className="bi bi-star-fill"></i>
                            ))}
                          </div>
                        </div>
                        <p className="text-coffee/80 font-poppins text-sm sm:text-base mb-4 sm:mb-6 italic text-center leading-relaxed">
                          "{review.text}"
                        </p>
                        <div className="flex items-end justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-natural-wood rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                            <i className="bi bi-person text-marble-white text-sm sm:text-lg"></i>
                          </div>
                          <div className="text-center flex-1">
                            <h4 className="font-outfit font-semibold text-coffee text-xs sm:text-sm leading-tight mb-1">{review.name}</h4>
                            <p className="text-coffee/60 font-poppins text-xs leading-tight">{review.role}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Desktop: Show 3 reviews */}
                {[0, 1, 2].map((offset) => {
                  const reviewIndex = (currentReview + offset) % reviews.length;
                  const review = reviews[reviewIndex];
                  return (
                    <div key={reviewIndex} className="hidden md:block bg-marble-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-3 sm:mb-4 justify-center">
                        <div className="flex text-yellow-400 text-base sm:text-lg">
                          {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                        </div>
                      </div>
                      <p className="text-coffee/80 font-poppins text-sm sm:text-base mb-4 sm:mb-6 italic text-center leading-relaxed">
                        "{review.text}"
                      </p>
                      <div className="flex items-end justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-natural-wood rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <i className="bi bi-person text-marble-white text-sm sm:text-lg"></i>
                        </div>
                        <div className="text-center flex-1">
                          <h4 className="font-outfit font-semibold text-coffee text-xs sm:text-sm leading-tight mb-1">{review.name}</h4>
                          <p className="text-coffee/60 font-poppins text-xs leading-tight">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {[0, 1].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentReview(page * 3)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentReview / 3) === page ? 'bg-coffee' : 'bg-coffee/30'
                    }`}
                    aria-label={`Go to page ${page + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
