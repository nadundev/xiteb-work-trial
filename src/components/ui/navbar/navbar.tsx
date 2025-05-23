import { Button } from "../button";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 left-0 right-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-4">
          <nav className={`py-4 px-6 flex items-center justify-between`}>
            <div className="flex items-center">
              <img
                src="/assets/logo-dark.svg"
                alt="logo"
                className="w-20 h-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#hero"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#news"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                News
              </a>
              <a
                href="#contact"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                Contact
              </a>
              <Button variant="default" className="hidden lg:inline-flex">Get a Quote</Button>
              <Button variant="outline" className="hidden lg:inline-flex">Sign in</Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {!isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </nav>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-6 pb-4 bg-white border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a
                  href="#hero"
                  className="py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={handleNavLinkClick}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={handleNavLinkClick}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={handleNavLinkClick}
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={handleNavLinkClick}
                >
                  Testimonials
                </a>
                <a
                  href="#news"
                  className="py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={handleNavLinkClick}
                >
                  News
                </a>
                <a
                  href="#contact"
                  className="py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button variant="default" className="w-full justify-center">Get a Quote</Button>
                  <Button variant="outline" className="w-full justify-center">Sign in</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
