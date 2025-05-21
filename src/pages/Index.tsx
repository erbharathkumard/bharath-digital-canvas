
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 125, 107, 0.8);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
      mix-blend-mode: difference;
    `;
    
    const cursorBorder = document.createElement('div');
    cursorBorder.classList.add('cursor-border');
    cursorBorder.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid rgba(255, 125, 107, 0.4);
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: width 0.2s ease, height 0.2s ease, transform 0.3s ease;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorBorder);
    
    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorBorder.style.left = `${e.clientX}px`;
      cursorBorder.style.top = `${e.clientY}px`;
    };
    
    const enlargeCursor = () => {
      cursor.style.width = '15px';
      cursor.style.height = '15px';
      cursorBorder.style.width = '50px';
      cursorBorder.style.height = '50px';
    };
    
    const resetCursor = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursorBorder.style.width = '40px';
      cursorBorder.style.height = '40px';
    };
    
    document.addEventListener('mousemove', updateCursor);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', enlargeCursor);
      link.addEventListener('mouseleave', resetCursor);
    });

    // Add parallax effect
    const parallaxElements = document.querySelectorAll('.bg-shape');
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      parallaxElements.forEach((elem) => {
        if (elem instanceof HTMLElement) {
          const speed = parseFloat(elem.getAttribute('data-speed') || '0.1');
          const x = (mouseX - 0.5) * speed * 100;
          const y = (mouseY - 0.5) * speed * 100;
          elem.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    });
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', enlargeCursor);
        link.removeEventListener('mouseleave', resetCursor);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorBorder);
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background shapes */}
      <div className="fixed top-20 left-20 w-96 h-96 rounded-full bg-theme-accent-purple/5 blur-3xl bg-shape" data-speed="0.05"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 rounded-full bg-theme-highlight/5 blur-3xl bg-shape" data-speed="0.08"></div>
      
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
