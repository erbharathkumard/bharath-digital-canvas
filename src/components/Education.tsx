
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) - Computer Science and Engineering",
      institution: "A.V.C College of Engineering, Mayiladuthurai | Anna University",
      duration: "2022 - 2026 (Expected)",
      details: "Currently pursuing a degree in Computer Science with a focus on web development, data structures, algorithms, and software engineering principles."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kalaimahal Matric Hr.sec school, Sembanarkovil | State Board",
      duration: "Graduated: May 2022",
      details: "Completed higher secondary education with a focus on science and mathematics."
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Kalaimahal Matric Hr.sec school, Sembanarkovil | State Board",
      duration: "Graduated: May 2020",
      details: "Completed secondary education with a strong foundation in core subjects."
    }
  ];
  
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-theme-highlight mr-2">03.</span>Education
        </h2>
        
        <div className="max-w-3xl">
          <div className="space-y-0">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="pb-6">
                  <h3 className="text-theme-white-heading text-xl font-semibold">{item.degree}</h3>
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
