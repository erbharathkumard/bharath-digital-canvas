
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-theme-secondary bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-theme-highlight mr-2">02.</span>Experience
        </h2>
        
        <div className="max-w-3xl">
          {/* Experience Item */}
          <div className="card mb-8">
            <div className="flex items-center mb-2">
              <h3 className="text-theme-white-heading text-xl font-semibold">Internship Offer</h3>
              <div className="ml-auto bg-theme-highlight bg-opacity-20 text-theme-highlight px-3 py-1 rounded-full text-sm">
                Upcoming
              </div>
            </div>
            <h4 className="text-theme-highlight mb-3">HCL Technologies, Chennai</h4>
            <p className="text-theme-light-slate">
              Received an internship offer from HCL Technologies in Chennai, providing an opportunity to 
              work on real-world projects and gain valuable industry experience in software development.
            </p>
          </div>
          
          {/* Workshops & Training */}
          <div className="card mb-8">
            <h3 className="text-theme-white-heading text-xl font-semibold mb-2">Workshop & Training</h3>
            <h4 className="text-theme-highlight mb-3">AI Innovations - Hineliex Technologies</h4>
            <p className="text-theme-light-slate mb-4">
              Participated in workshops focused on artificial intelligence innovations and emerging technologies, 
              enhancing knowledge in cutting-edge AI applications and implementations.
            </p>
            
            <h4 className="text-theme-highlight mb-3">Industrial Visit - Cloud Computing - Cloud Logic Technologies</h4>
            <p className="text-theme-light-slate">
              Gained practical insights into cloud computing infrastructure, services, and best practices 
              through an industrial visit to Cloud Logic Technologies, expanding understanding of cloud-based solutions.
            </p>
          </div>
          
          {/* Achievements */}
          <div className="card">
            <h3 className="text-theme-white-heading text-xl font-semibold mb-2">Achievements</h3>
            
            <div className="mb-4">
              <h4 className="text-theme-highlight mb-1">Naan Mudhalvan Hackathon 2025 Winner</h4>
              <p className="text-theme-light-slate">
                Led a team to victory in the Naan Mudhalvan Hackathon, showcasing problem-solving abilities, 
                technical skills, and innovative thinking under pressure.
              </p>
            </div>
            
            <div>
              <h4 className="text-theme-highlight mb-1">Technical Quiz Competition - 3rd Prize</h4>
              <p className="text-theme-light-slate">
                Secured third place in a technical quiz competition among 24 participating colleges, 
                demonstrating strong technical knowledge and quick thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
