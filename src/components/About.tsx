
import React from 'react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute -right-20 top-1/3 w-72 h-72 rounded-full bg-theme-accent-pink/10 blur-3xl"></div>
      <div className="absolute -left-40 bottom-1/4 w-96 h-96 rounded-full bg-theme-accent-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading animate-slide-up">
          <span className="text-theme-highlight mr-2">01.</span>About Me
        </h2>
        
        <div className="grid md:grid-cols-1 gap-12 items-start">
          <div className="animate-slide-in-left">
            <p className="mb-4">
              Hello! I'm a Computer Science Engineering student pursuing my degree at 
              A.V.C College of Engineering, Mayiladuthurai (affiliated with Anna University) with an expected graduation in 2026.
            </p>
            <p className="mb-4">
              I'm passionate about web development, with experience in both front-end and back-end technologies. 
              I enjoy building user-centric applications that solve real-world problems and provide exceptional user experiences.
            </p>
            <p className="mb-4">
              My journey in technology has been filled with continuous learning and growth. I've participated in 
              hackathons, winning the Naan Mudhalvan Hackathon 2025, and secured an internship offer at HCL Chennai.
            </p>
            <p className="mb-4">
              I'm always eager to learn new technologies and contribute to innovative projects. When I'm not coding, 
              you can find me collaborating with teams, enhancing my skills, or exploring the latest developments in the tech world.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {['HTML5', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Java', 'Python', 'MySQL', 'MongoDB', 'Git', 'GitHub'].map((tech, index) => (
                <div key={index} className="flex items-center group">
                  <div className="text-theme-highlight mr-2 transform group-hover:rotate-90 transition-transform duration-300">▹</div>
                  <span className="group-hover:text-theme-highlight transition-colors duration-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
