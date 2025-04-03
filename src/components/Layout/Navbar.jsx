import React, { useState } from 'react';
import { Button } from '../CommonLayout/Button';
import { NAV_LINKS } from '../constants';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center">
            <span className="font-bold text-2xl text-purple-700">Ad<span className="text-gray-800">Grades</span></span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-purple-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-gray-800 hover:text-purple-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="primary" className="bg-purple-600 hover:bg-purple-700">
            Let's Make You Unstoppable
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="primary" className="mt-4 w-full bg-purple-600 hover:bg-purple-700">
            Let's Make You Unstoppable
          </Button>
        </div>
      )}
    </nav>
  );
};