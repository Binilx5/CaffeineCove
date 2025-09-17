import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactPageProps {
  setCurrentPage?: (page: 'home' | 'about' | 'menu' | 'gallery' | 'contact') => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-marble-white font-poppins">
      <Header setCurrentPage={setCurrentPage} currentPage="contact" />

      <section id="contact" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-soft-beige">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16 mt-12 sm:mt-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-coffee mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-natural-wood mx-auto mb-6 sm:mb-8"></div>
                <p className="text-base sm:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
                  We would love to welcome you to our cozy corner of the world
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {/* Individual Cards for Contact Page */}
                <div className="bg-marble-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-natural-wood p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <i className="bi bi-geo-alt text-marble-white text-xl"></i>
                  </div>
                  <h4 className="font-poppins font-semibold text-coffee text-lg mb-2">Address</h4>
                  <p className="text-coffee/70 font-poppins text-sm">215 ~ 218 Ar Mall<br />Mota Varachha<br />Surat 394101</p>
                </div>

                <div className="bg-marble-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-natural-wood p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <i className="bi bi-telephone text-marble-white text-xl"></i>
                  </div>
                  <h4 className="font-poppins font-semibold text-coffee text-lg mb-2">Phone</h4>
                  <p className="text-coffee/70 font-poppins text-sm">+91 9327672485</p>
                </div>

                <div className="bg-marble-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-natural-wood p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <i className="bi bi-envelope text-marble-white text-xl"></i>
                  </div>
                  <h4 className="font-poppins font-semibold text-coffee text-lg mb-2">Email</h4>
                  <p className="text-coffee/70 font-poppins text-sm">caffeinecove7@gmail.com</p>
                </div>

                <div className="bg-marble-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-natural-wood p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <i className="bi bi-instagram text-marble-white text-xl"></i>
                  </div>
                  <h4 className="font-poppins font-semibold text-coffee text-lg mb-2">Instagram</h4>
                  <p className="text-coffee/70 font-poppins text-sm">@caffeine_cove_</p>
                </div>
              </div>

              {/* Map Section - Full Width for Contact Page */}
              <div className="mb-8 sm:mb-12">
                <div className="bg-marble-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-outfit font-bold text-coffee mb-4 sm:mb-6">Find Us</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d276.013134639976!2d72.87307329858645!3d21.23526596786851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3b743f319f%3A0x78d5235215c81318!2sCaffeine%20Cove!5e1!3m2!1sen!2sin!4v1754402488445!5m2!1sen!2sin" 
                      width="100%" 
                      height="300"
                      style={{border:0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Caffeine Cove Location"
                      className="w-full sm:h-[400px] lg:h-[500px]"
                    ></iframe>
                  </div>
                </div>
              </div>

            {/* Opening Hours Card */}
            <div className="bg-marble-white p-6 sm:p-8 rounded-2xl shadow-lg border border-natural-wood/20 w-full overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-natural-wood/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Main Content */}
                <div className="relative z-10">
                    {/* Title Section */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-natural-wood rounded-lg flex items-center justify-center">
                            <i className="bi bi-clock text-marble-white text-lg"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-outfit font-bold text-coffee">Opening Hours</h3>
                            <p className="text-coffee/60 font-poppins text-sm">Always ready to welcome you</p>
                        </div>
                    </div>

                    {/* Hours Display */}
                    <div className="bg-soft-beige/40 rounded-xl p-5 mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <i className="bi bi-calendar3 text-natural-wood text-xl"></i>
                                <span className="font-poppins font-semibold text-coffee text-lg">Monday - Sunday</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="bi bi-clock-history text-natural-wood text-xl"></i>
                                <span className="font-poppins font-bold text-natural-wood text-xl">9:00 AM - 1:00 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Features Row */}
                    <div className="flex flex-wrap justify-center sm:justify-between gap-4 mb-5">
                        <div className="flex items-center gap-2 bg-marble-white/80 px-4 py-2 rounded-full border border-natural-wood/40">
                            <i className="bi bi-cup-hot text-natural-wood"></i>
                            <span className="font-poppins text-coffee text-sm font-medium">Fresh Coffee</span>
                        </div>
                        <div className="flex items-center gap-2 bg-marble-white/80 px-4 py-2 rounded-full border border-natural-wood/40">
                            <i className="bi bi-wifi text-natural-wood"></i>
                            <span className="font-poppins text-coffee text-sm font-medium">Free WiFi</span>
                        </div>
                        <div className="flex items-center gap-2 bg-marble-white/80 px-4 py-2 rounded-full border border-natural-wood/40">
                            <i className="bi bi-heart text-natural-wood"></i>
                            <span className="font-poppins text-coffee text-sm font-medium">Cozy Space</span>
                        </div>
                    </div>

                    {/* Notice */}
                    <div className="flex items-start gap-3 p-4 bg-natural-wood/5 rounded-lg border-l-4 border-natural-wood/30">
                        <i className="bi bi-info-circle text-natural-wood mt-0.5 flex-shrink-0"></i>
                        <p className="text-coffee/70 font-poppins text-sm leading-relaxed">
                        Hours may vary on holidays. Please call ahead for special hours.                        </p>
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

export default ContactPage;
