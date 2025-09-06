import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors duration-300 font-mono"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            MAK
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
            <a
              href="#contact" 
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </nav>

          <a 
            href="mailto:talktomoiz07@gmail.com" 
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
