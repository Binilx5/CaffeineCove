import React, { useState, useEffect, useRef } from 'react';
import cafeInterior7 from '../assets/cafe-interior7.jpg';

const About: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTextVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-soft-beige">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-coffee mb-3 sm:mb-4">
              Our Story
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-natural-wood mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <div className="relative" style={{ animation: 'gentleFloat 4s ease-in-out infinite' }}>
                <img 
                  src={cafeInterior7} 
                  alt="Caffeine Cove Interior"
                  className="rounded-2xl shadow-2xl w-full h-48 sm:h-56 md:h-64 lg:h-[450px] xl:h-[500px] object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
              </div>
            </div>

            <div 
              ref={textRef}
              className={`space-y-4 sm:space-y-6 ${isTextVisible ? 'animate-zoom-in' : 'opacity-0'}`}
            >
              <p className="text-sm sm:text-base md:text-lg text-coffee/80 font-poppins leading-relaxed">
                Caffeine Cove was born from a passion for creating spaces that nurture both body and soul. Inspired by natural textures, artistic design, and the slow-living culture, we have crafted an environment where every detail tells a story.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-coffee/80 font-poppins leading-relaxed">
                Our cream-colored walls, wooden tables, and beige cushioned chairs create a harmonious backdrop for meaningful connections. The artistic wall niches with soft spotlights showcase carefully curated sculptures and decor.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-coffee/80 font-poppins leading-relaxed">
                Whether you are seeking a quiet space for work, a warm corner for conversation, or simply a moment of tranquility, Caffeine Cove offers community-focused seating designed for every need.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="text-center p-4 sm:p-6 bg-marble-white rounded-xl shadow-lg">
                  <i className="bi bi-people text-2xl sm:text-3xl text-natural-wood mb-2 sm:mb-3"></i>
                  <h3 className="font-outfit font-semibold text-coffee mb-1 sm:mb-2 text-sm sm:text-base">Community</h3>
                  <p className="text-xs sm:text-sm text-coffee/70 font-poppins">Spaces designed for connection</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-marble-white rounded-xl shadow-lg">
                  <i className="bi bi-palette text-2xl sm:text-3xl text-natural-wood mb-2 sm:mb-3"></i>
                  <h3 className="font-outfit font-semibold text-coffee mb-1 sm:mb-2 text-sm sm:text-base">Artistry</h3>
                  <p className="text-xs sm:text-sm text-coffee/70 font-poppins">Thoughtfully curated design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
