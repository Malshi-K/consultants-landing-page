// components/ContactDetails.jsx
"use client"
import React, { useEffect, useState } from 'react';

const ContactDetails = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // Function to update screen size state
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Initial size detection
    updateScreenSize();

    // Set up resize listener
    window.addEventListener("resize", updateScreenSize);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and description - responsive typography */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-customYellow mb-3 sm:mb-4">Contact Details</h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base px-2 sm:px-4">
            Every person or business is different; we can tailor make our solutions to fit your budget and requirements. 
            Feel free to contact us for an obligation free chat about the best options for your home or business.
          </p>
        </div>
        
        {/* Contact info cards - improved responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col items-center text-center">
            <div className="bg-customYellow bg-opacity-10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-customYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-customGray mb-2 sm:mb-3">Address</h3>
            <p className="text-customGray text-sm sm:text-base">
              89 Church Road, Pukete, Hamilton 3200 NZ
            </p>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col items-center text-center">
            <div className="bg-customYellow bg-opacity-10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-customYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-customGray mb-2 sm:mb-3">Email Us</h3>
            <a href="mailto:digital@gdcgroup.co.nz" className="text-customGray hover:text-customYellow transition-colors text-sm sm:text-base break-words">
              digital@gdcgroup.co.nz
            </a>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col items-center text-center">
            <div className="bg-customYellow bg-opacity-10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-customYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-customGray mb-2 sm:mb-3">Call Us</h3>
            <a href="tel:0212463988" className="text-customGray hover:text-customYellow transition-colors text-sm sm:text-base">
              +64 21 246 3988
            </a>
          </div>

          {/* FB Card */}
          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col items-center text-center">
            <div className="bg-customYellow bg-opacity-10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-customYellow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-customGray mb-2 sm:mb-3">Follow us on</h3>
            <a href="https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL" className="text-customGray hover:text-customYellow transition-colors text-sm sm:text-base">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;