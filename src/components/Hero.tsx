
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <p className="text-theme-highlight mb-5 animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold text-theme-white-heading mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bharath Kumar D.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-theme-light-slate mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I build things for the web.
          </h2>
          <p className="text-lg text-theme-light-slate mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I'm a Computer Science Engineering student with a passion for building user-centric web applications,
            learning emerging technologies, and contributing to real-world projects in a growth-oriented environment.
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center border border-theme-highlight text-theme-highlight px-8 py-4 rounded hover:bg-theme-highlight hover:bg-opacity-10 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Learn more about me <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
