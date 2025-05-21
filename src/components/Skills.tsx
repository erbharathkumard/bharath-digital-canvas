import React, { useEffect, useRef } from 'react';

const SkillCategory = ({ title, skills, index }: { title: string, skills: { name: string, level: number }[], index: number }) => {
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-8 opacity-0" ref={categoryRef} style={{ transitionDelay: `${index * 0.2}s` }}>
      <h3 className="text-theme-white-heading text-xl font-semibold mb-4 flex items-center">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="group">
            <div className="flex justify-between mb-1">
              <span className="group-hover:text-theme-highlight transition-colors duration-300">{skill.name}</span>
              <span className="text-theme-highlight">{skill.level}%</span>
            </div>
            <div className="skill-bar bg-theme-primary/50 border border-theme-secondary">
              <div 
                className="skill-progress h-full origin-left scale-x-0 transition-transform duration-1000" 
                style={{ 
                  transform: 'scaleX(0)',
                  background: `linear-gradient(90deg, var(--tw-gradient-stops))` 
                }}
                data-progress={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          if (progress) {
            setTimeout(() => {
              (bar as HTMLElement).style.transform = `scaleX(${parseInt(progress) / 100})`;
              (bar as HTMLElement).style.backgroundImage = 'linear-gradient(90deg, #64FFDA, #9b87f5)';
            }, 300);
          }
        });
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technicalSkills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
    backend: [
      { name: "Java", level: 70 },
      { name: "Python", level: 75 },
      { name: "MySQL", level: 65 },
      { name: "MongoDB", level: 60 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Photoshop", level: 65 },
      { name: "Figma", level: 70 },
      { name: "Netlify/Vercel Deployment", level: 80 },
    ]
  };

  const softSkills = [
    { name: "Team Work & Collaboration", level: 90 },
    { name: "Time Management & Leadership", level: 85 },
    { name: "Goal Setting & Achievement", level: 80 },
    { name: "Communication", level: 85 },
    { name: "Adaptability", level: 80 },
    { name: "Problem Solving", level: 85 },
  ];

  const languages = [
    { name: "English (Professional Proficiency)", level: 85 },
    { name: "Tamil (Native)", level: 100 },
  ];

  return (
    <section id="skills" className="py-20 bg-theme-secondary/30 backdrop-blur-sm relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute -left-32 center w-64 h-64 rounded-full bg-theme-highlight/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading animate-slide-up">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <SkillCategory title="Front-End Development" skills={technicalSkills.frontend} index={0} />
            <SkillCategory title="Back-End Development" skills={technicalSkills.backend} index={1} />
          </div>
          
          <div>
            <SkillCategory title="Tools & Technologies" skills={technicalSkills.tools} index={2} />
            <SkillCategory title="Soft Skills" skills={softSkills} index={3} />
            <SkillCategory title="Languages" skills={languages} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
