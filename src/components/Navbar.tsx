import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">Smile Dental Clinic</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#home" className="hover:text-primary px-3 py-2 text-sm font-medium">Home</a>
            <a href="#about" className="hover:text-primary px-3 py-2 text-sm font-medium">About</a>
            <a href="#services" className="hover:text-primary px-3 py-2 text-sm font-medium">Services</a>
            <a href="#testimonials" className="hover:text-primary px-3 py-2 text-sm font-medium">Testimonials</a>
            <a href="#contact" className="hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu - hamburger icon when closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon for menu - X icon when open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
