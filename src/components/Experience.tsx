
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ExperienceTab = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-left transition-all duration-300 border-l-2 ${
      isActive 
        ? 'border-theme-highlight text-theme-highlight bg-theme-secondary/30' 
        : 'border-gray-700 text-theme-light-slate hover:bg-theme-secondary/20 hover:text-theme-highlight/80'
    }`}
  >
    {title}
  </button>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "HCL Technologies",
      role: "Internship Offer",
      date: "Upcoming",
      location: "Chennai",
      description: [
        "Received an internship offer from HCL Technologies in Chennai.",
        "Will be working on real-world projects and gaining valuable industry experience in software development.",
        "Looking forward to applying classroom knowledge to practical scenarios and learning from industry professionals."
      ]
    },
    {
      title: "Workshops & Training",
      role: "Participant",
      date: "2023",
      location: "Various",
      description: [
        "AI Innovations at Hineliex Technologies - Participated in workshops focused on artificial intelligence innovations and emerging technologies.",
        "Enhanced knowledge in cutting-edge AI applications and implementations through hands-on training sessions.",
        "Industrial Visit to Cloud Logic Technologies - Gained practical insights into cloud computing infrastructure, services, and best practices."
      ]
    },
    {
      title: "Achievements",
      role: "Competitions & Hackathons",
      date: "2023-2025",
      location: "Various",
      description: [
        "Naan Mudhalvan Hackathon 2025 Winner - Led a team to victory showcasing problem-solving abilities, technical skills, and innovative thinking under pressure.",
        "Technical Quiz Competition - 3rd Prize among 24 participating colleges, demonstrating strong technical knowledge and quick thinking.",
        "Continued to develop and enhance technical capabilities through regular participation in coding challenges and competitions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-theme-secondary/30 backdrop-blur-sm relative">
      {/* Background elements */}
      <div className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-theme-accent-pink/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading animate-slide-up">
          <span className="text-theme-highlight mr-2">02.</span>Experience
        </h2>
        
        <div className="max-w-3xl mx-auto animate-scale">
          <div className="flex flex-col md:flex-row">
            {/* Tabs navigation */}
            <div className="md:w-1/3 mb-6 md:mb-0 flex flex-row md:flex-col">
              {tabs.map((tab, index) => (
                <ExperienceTab 
                  key={index}
                  title={tab.title}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
            
            {/* Tab content */}
            <div className="md:w-2/3 md:pl-6 animate-slide-in-right">
              <div className="mb-1 flex justify-between items-center">
                <h3 className="text-theme-white-heading text-xl font-semibold">
                  {tabs[activeTab].role}
                </h3>
                <span className="bg-theme-highlight/20 text-theme-highlight px-3 py-1 rounded-full text-sm">
                  {tabs[activeTab].date}
                </span>
              </div>
              <h4 className="text-theme-highlight mb-3">{tabs[activeTab].title}, {tabs[activeTab].location}</h4>
              <ul className="space-y-3">
                {tabs[activeTab].description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="text-theme-highlight mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
