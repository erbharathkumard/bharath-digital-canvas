
import React from 'react';
import { Calendar, BookOpen, GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) - Computer Science and Engineering",
      institution: "A.V.C College of Engineering, Mayiladuthurai | Anna University",
      duration: "2022 - 2026 (Expected)",
      details: "Currently pursuing a degree in Computer Science with a focus on web development, data structures, algorithms, and software engineering principles.",
      icon: <GraduationCap className="text-theme-highlight" size={20} />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kalaimahal Matric Hr.sec school, Sembanarkovil | State Board",
      duration: "Graduated: May 2022",
      details: "Completed higher secondary education with a focus on science and mathematics.",
      icon: <BookOpen className="text-theme-highlight" size={20} />
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Kalaimahal Matric Hr.sec school, Sembanarkovil | State Board",
      duration: "Graduated: May 2020",
      details: "Completed secondary education with a strong foundation in core subjects.",
      icon: <Calendar className="text-theme-highlight" size={20} />
    }
  ];
  
  return (
    <section id="education" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute -right-32 bottom-20 w-80 h-80 rounded-full bg-theme-accent-purple/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading animate-slide-up">
          <span className="text-theme-highlight mr-2">03.</span>Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {education.map((item, index) => (
              <div key={index} className="timeline-item animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-dot"></div>
                <div className="pb-6 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">{item.icon}</span>
                    <h3 className="text-theme-white-heading text-xl font-semibold group-hover:text-theme-highlight transition-colors duration-300">{item.degree}</h3>
                  </div>
                  <p className="text-theme-highlight my-1">{item.institution}</p>
                  <p className="text-sm text-theme-light-slate mb-2">{item.duration}</p>
                  <p className="text-theme-light-slate">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
