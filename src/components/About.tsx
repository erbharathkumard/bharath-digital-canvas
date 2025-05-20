
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-theme-highlight mr-2">01.</span>About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="mb-4">
              Hello! I'm Bharath Kumar D, a Computer Science Engineering student pursuing my degree at 
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
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {['HTML5', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Java', 'Python', 'MySQL', 'MongoDB', 'Git', 'GitHub'].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-theme-highlight mr-2">▹</div>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative group">
              <div className="w-full h-full rounded-md bg-theme-highlight absolute group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 opacity-20"></div>
              <div className="w-full h-full border-2 border-theme-highlight rounded-md overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Bharath Kumar D" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
