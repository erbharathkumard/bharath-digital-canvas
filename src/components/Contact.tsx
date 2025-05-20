
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactItem = ({ icon, title, content, link = "" }) => (
  <a 
    href={link} 
    target={link ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`flex items-center space-x-4 p-4 rounded-lg ${link ? 'hover:bg-theme-secondary cursor-pointer transition-colors duration-300' : ''}`}
  >
    <div className="bg-theme-secondary p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-theme-white-heading font-medium">{title}</h3>
      <p className="text-theme-light-slate">{content}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-theme-highlight mr-2">05.</span>Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              feel free to reach out to me. I'll try my best to get back to you!
            </p>
            
            <div className="grid gap-4">
              <ContactItem 
                icon={<Mail className="text-theme-highlight" />}
                title="Email"
                content="erbharathkumard@gmail.com"
                link="mailto:erbharathkumard@gmail.com"
              />
              
              <ContactItem 
                icon={<Phone className="text-theme-highlight" />}
                title="Phone"
                content="+91 8438933199"
                link="tel:+918438933199"
              />
              
              <ContactItem 
                icon={<MapPin className="text-theme-highlight" />}
                title="Location"
                content="Mayiladuthurai, Tamil Nadu, India - 609304"
              />
              
              <ContactItem 
                icon={<Linkedin className="text-theme-highlight" />}
                title="LinkedIn"
                content="erbharathkumard"
                link="https://www.linkedin.com/in/erbharathkumard"
              />
              
              <ContactItem 
                icon={<Github className="text-theme-highlight" />}
                title="Website"
                content="erbharathkumard.com"
                link="https://erbharathkumard.com"
              />
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-theme-white-heading mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-theme-secondary border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-theme-white-heading mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-theme-secondary border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-theme-white-heading mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-theme-secondary border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label className="block text-theme-white-heading mb-2">Message</label>
                <textarea 
                  className="w-full bg-theme-secondary border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight min-h-[150px]"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-transparent border border-theme-highlight text-theme-highlight px-6 py-3 rounded hover:bg-theme-highlight hover:bg-opacity-10 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
