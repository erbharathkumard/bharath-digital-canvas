
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.typing-text');
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, 1000 + (index * 400));
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-theme-accent-purple/10 blur-3xl"></div>
      <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-theme-accent-pink/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <p className="text-theme-highlight mb-5 animate-slide-up typing-text opacity-0 transition-all duration-500" style={{ transitionDelay: '0.2s' }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-theme-white-heading mb-4 animate-slide-up typing-text opacity-0 transition-all duration-500" style={{ transitionDelay: '0.4s' }}>
            Bharath Kumar D.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-theme-light-slate mb-6 animate-slide-up typing-text opacity-0 transition-all duration-500" style={{ transitionDelay: '0.6s' }}>
            I build things for the web.
          </h2>
          <p className="text-lg text-theme-light-slate mb-12 max-w-2xl animate-slide-up typing-text opacity-0 transition-all duration-500" style={{ transitionDelay: '0.8s' }}>
            I'm a Computer Science Engineering student with a passion for building user-centric web applications,
            learning emerging technologies, and contributing to real-world projects in a growth-oriented environment.
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center border border-theme-highlight text-theme-highlight px-8 py-4 rounded-md 
                      hover:bg-theme-highlight hover:bg-opacity-10 transition-all duration-300 animate-slide-up typing-text 
                      opacity-0 transition-all duration-500 relative overflow-hidden group"
            style={{ transitionDelay: '1s' }}
          >
            <span className="absolute inset-0 w-0 bg-theme-highlight bg-opacity-10 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative">Learn more about me <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} /></span>
          </a>
        </div>
      </div>

      {/* Animated background code elements */}
      <div className="absolute bottom-10 right-10 text-theme-highlight/10 text-xs animate-bounce-slow hidden lg:block">
        &lt;/&gt;
      </div>
      <div className="absolute top-40 right-20 text-theme-highlight/10 text-xs animate-pulse hidden lg:block">
        &lt;code&gt;
      </div>
      <div className="absolute bottom-40 left-20 text-theme-highlight/10 text-xs animate-pulse hidden lg:block">
        &lt;/code&gt;
      </div>
    </section>
  );
};

export default Hero;
