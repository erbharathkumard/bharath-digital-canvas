
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
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
    <header className={`fixed w-full py-4 z-50 transition-all duration-300 ${scrolled ? 'bg-theme-primary shadow-md bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-theme-highlight font-bold text-xl">BharathKumar<span className="text-theme-white-heading">D</span></a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">
                  <span className="text-theme-highlight mr-1">{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-theme-highlight" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="bg-theme-secondary h-full w-3/4 max-w-xs p-6 flex flex-col space-y-6 ml-auto">
            <div className="flex justify-end">
              <button onClick={toggleMenu}>
                <X className="text-theme-highlight" size={24} />
              </button>
            </div>
            <nav>
              <ul className="space-y-6">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="nav-link text-lg block"
                      onClick={toggleMenu}
                    >
                      <span className="text-theme-highlight mr-1">{index + 1}.</span> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
