
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detect active section
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'contact'];
      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full py-4 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-theme-primary/80 shadow-md backdrop-blur-md border-b border-theme-highlight/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-theme-highlight font-bold text-xl relative group"
        >
          <span className="text-theme-white-heading group-hover:text-theme-highlight transition-colors duration-300">Bharath</span>
          <span> Kumar D</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-highlight transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={index} className="relative">
                  <a 
                    href={link.href} 
                    className={`nav-link ${isActive ? 'text-theme-highlight' : ''}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-theme-highlight"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-theme-highlight p-1 rounded-md hover:bg-theme-secondary/30 transition-colors duration-300" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden">
          <div className="bg-theme-secondary h-full w-3/4 max-w-xs p-6 flex flex-col space-y-6 ml-auto animate-slide-in-right">
            <div className="flex justify-end">
              <button 
                onClick={toggleMenu}
                className="p-1 hover:bg-theme-primary/30 rounded-md transition-colors duration-300"
              >
                <X className="text-theme-highlight" size={24} />
              </button>
            </div>
            <nav>
              <ul className="space-y-6">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className={`nav-link text-lg block ${isActive ? 'text-theme-highlight' : ''}`}
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
