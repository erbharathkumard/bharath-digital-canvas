
import React from 'react';

const SkillCategory = ({ title, skills }: { title: string, skills: { name: string, level: number }[] }) => (
  <div className="mb-8">
    <h3 className="text-theme-white-heading text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span className="text-theme-highlight">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
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
    <section id="skills" className="py-20 bg-theme-secondary bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-theme-highlight mr-2">04.</span>Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <SkillCategory title="Front-End Development" skills={technicalSkills.frontend} />
            <SkillCategory title="Back-End Development" skills={technicalSkills.backend} />
          </div>
          
          <div>
            <SkillCategory title="Tools & Technologies" skills={technicalSkills.tools} />
            <SkillCategory title="Soft Skills" skills={softSkills} />
            <SkillCategory title="Languages" skills={languages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
