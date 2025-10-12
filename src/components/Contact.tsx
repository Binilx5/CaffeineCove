import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-coffee mb-3 sm:mb-4 md:mb-6">
              Visit Us
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-natural-wood mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4">
              We would love to welcome you to our cozy corner of the world
            </p>
          </div>

          {/* Map Section - Full Width */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <div className="bg-marble-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-outfit font-bold text-coffee mb-3 sm:mb-4 md:mb-6">Find Us</h3>
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
                  className="w-full sm:h-80 md:h-96 lg:h-[400px]"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Info and Hours Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {/* Contact Information */}
            <div className="bg-marble-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-outfit font-bold text-coffee mb-4 sm:mb-6 md:mb-8 text-center">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="bg-natural-wood p-1.5 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <i className="bi bi-geo-alt text-marble-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-coffee text-sm sm:text-base">Address</h4>
                    <p className="text-coffee/70 font-poppins text-xs sm:text-sm">215 ~ 218 Ar Mall, Mota Varachha, Surat 394101</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-natural-wood p-1.5 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <i className="bi bi-telephone text-marble-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-coffee text-sm sm:text-base">Phone</h4>
                    <p className="text-coffee/70 font-poppins text-xs sm:text-sm">+91 9327672485</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-natural-wood p-1.5 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <i className="bi bi-envelope text-marble-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-coffee text-sm sm:text-base">Email</h4>
                    <p className="text-coffee/70 font-poppins text-xs sm:text-sm">caffeinecove7@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-natural-wood p-1.5 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <i className="bi bi-instagram text-marble-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-coffee text-sm sm:text-base">Instagram</h4>
                    <p className="text-coffee/70 font-poppins text-xs sm:text-sm">@caffeine_cove_</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-marble-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-outfit font-bold text-coffee mb-4 sm:mb-6 text-center">Opening Hours</h3>
              
              <div className="bg-gradient-to-br from-soft-beige to-soft-beige/70 p-6 rounded-xl">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative flex flex-col items-center">
                    <span className="font-poppins font-semibold text-coffee text-lg sm:text-xl">Monday</span>
                    <div className="h-4 w-px bg-natural-wood/30 my-1"></div>
                    <span className="font-poppins text-coffee/70 text-sm">to</span>
                    <div className="h-4 w-px bg-natural-wood/30 my-1"></div>
                    <span className="font-poppins font-semibold text-coffee text-lg sm:text-xl">Sunday</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <i className="bi bi-sun text-yellow-500 text-lg"></i>
                    <span className="font-poppins text-coffee/80 font-medium text-base sm:text-lg">10:00 AM - 1:00 AM</span>
                    <i className="bi bi-moon-stars text-indigo-500 text-lg"></i>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-2 sm:p-3 md:p-4 bg-natural-wood/10 rounded-lg border border-natural-wood/20 text-center">
                <p className="text-coffee/70 font-poppins text-xs sm:text-sm italic">
                  <i className="bi bi-info-circle mr-1 sm:mr-2"></i>
                  Hours may vary on holidays. Please call ahead for special hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
