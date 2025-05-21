
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 text-center text-theme-light-slate relative">
      <div className="absolute inset-0 bg-gradient-to-t from-theme-deep-navy to-transparent z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex space-x-6">
            <a 
              href="https://github.com/erbharathkumard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-theme-light-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all duration-300 glow-on-hover"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/erbharathkumard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-theme-light-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all duration-300 glow-on-hover"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:erbharathkumard@gmail.com" 
              className="text-theme-light-slate hover:text-theme-highlight transform hover:-translate-y-1 transition-all duration-300 glow-on-hover"
            >
              <Mail size={22} />
            </a>
          </div>
          
          <p className="text-sm mb-2">
            Designed & Built by Bharath Kumar D | &copy; {new Date().getFullYear()}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 bg-theme-secondary/50 hover:bg-theme-secondary p-3 rounded-full text-theme-highlight hover:shadow-md transition-all duration-300 border border-theme-highlight/30 hover:border-theme-highlight animate-float"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
