import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cafeInterior3 from '../assets/cafe-interior3.jpg';

interface AboutPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-marble-white font-poppins">
      <Header setCurrentPage={setCurrentPage} currentPage="about" />

      {/* About Us Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-soft-beige">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* About Us Heading - positioned with more space from navbar */}
            <div className="mb-12 sm:mb-16 mt-12 sm:mt-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-coffee mb-4 sm:mb-6 text-center">
                About Us
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-natural-wood mb-6 sm:mb-8 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Left Column - Image */}
              <div className="flex items-stretch">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={cafeInterior3}
                    alt="Cafe Interior"
                    className="w-full h-full min-h-[320px] sm:min-h-[400px] md:min-h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 to-transparent"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:pl-8">
                <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    Welcome to Caffeine Cove – where passion meets the perfect brew.
                    We started with a simple dream: to create a space where coffee lovers can slow down, connect, and savor life's little pleasures.
                  </p>

                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    Our beans are handpicked from sustainable farms around the world, ensuring every cup delivers exceptional taste while supporting ethical practices. Our baristas bring out the unique flavors and aromas in each blend, turning every coffee into an experience.
                  </p>

                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    More than just a café, Caffeine Cove is a cozy hub for conversations, creativity, and connection. Whether you're here for your daily pick-me-up, catching up with friends, or enjoying a quiet moment, we're here to make it special.
                  </p>

                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    To create memorable experiences through exceptional coffee, fostering a community where every visit feels like coming home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Owners Section - Commented out for future use
      <section className="py-16 sm:py-20 bg-marble-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading *//*}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-coffee mb-4 sm:mb-6">
                Meet Our Owners
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-natural-wood mx-auto mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto">
                The passionate minds behind Caffeine Cove
              </p>
            </div>

            {/* Owner 1 - Image Left, Text Right *//*}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 sm:mb-20">
              <div className="order-1 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-coffee/20 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-natural-wood to-muted-sand flex items-center justify-center">
                    <div className="text-center">
                      <i className="bi bi-person-circle text-6xl sm:text-7xl text-coffee/80"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2 md:pl-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-coffee">Sarah Chen</h3>
                  <p className="text-lg sm:text-xl text-natural-wood font-poppins font-semibold">Co-Founder & Head Barista</p>
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    With over 15 years of experience in specialty coffee, Sarah brings her passion for artisanal brewing to every cup.
                    She discovered her love for coffee during her travels through Ethiopia and Colombia, where she learned traditional
                    brewing methods from local farmers.
                  </p>
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    Sarah's expertise in coffee sourcing and her commitment to sustainable practices have made Caffeine Cove
                    a destination for coffee enthusiasts seeking authentic, ethically-sourced beverages.
                  </p>
                </div>
              </div>
            </div>

            {/* Owner 2 - Image Right, Text Left *//*}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 sm:mb-20">
              <div className="order-2 md:order-1 md:pr-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-coffee">Marcus Rodriguez</h3>
                  <p className="text-lg sm:text-xl text-natural-wood font-poppins font-semibold">Co-Founder & Operations Manager</p>
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    Marcus brings his business acumen and hospitality background to create the warm, welcoming atmosphere
                    that defines Caffeine Cove. With a degree in hospitality management and years of experience in the
                    restaurant industry, he ensures every guest feels at home.
                  </p>
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    His vision for community-centered spaces and attention to detail have transformed Caffeine Cove into
                    more than just a coffee shop – it's a gathering place where relationships flourish.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-coffee/20 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-coffee to-natural-wood flex items-center justify-center">
                    <div className="text-center">
                      <i className="bi bi-person-circle text-8xl sm:text-9xl text-marble-white/90"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner 3 - Image Left, Text Right *//*}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-coffee/20 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-muted-sand to-natural-wood flex items-center justify-center">
                    <div className="text-center">
                      <i className="bi bi-person-circle text-6xl sm:text-7xl text-coffee/80"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2 md:pl-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-coffee">Emma Thompson</h3>
                  <p className="text-lg sm:text-xl text-natural-wood font-poppins font-semibold">Co-Founder & Creative Director</p>
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    Emma's background in interior design and her eye for aesthetics have shaped the unique ambiance of
                    Caffeine Cove. She believes that great coffee deserves a beautiful setting, and her thoughtful design
                    choices create an environment that inspires creativity and conversation.
                  </p>
                  <p className="text-base sm:text-lg text-coffee/80 font-poppins leading-relaxed">
                    From the carefully curated playlist to the locally-sourced artwork on the walls, Emma ensures that
                    every detail contributes to the cafe's distinctive character and charm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AboutPage;
