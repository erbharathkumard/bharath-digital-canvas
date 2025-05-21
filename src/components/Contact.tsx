import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const ContactItem = ({ icon, title, content, link = "" }) => (
  <a 
    href={link} 
    target={link ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`flex items-center space-x-4 p-4 rounded-lg ${link ? 'hover:bg-theme-secondary cursor-pointer transition-colors duration-300' : ''} animate-slide-up`}
  >
    <div className="bg-theme-secondary/80 border border-theme-highlight/20 p-3 rounded-full text-theme-highlight">
      {icon}
    </div>
    <div>
      <h3 className="text-theme-white-heading font-medium">{title}</h3>
      <p className="text-theme-light-slate">{content}</p>
    </div>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success handling
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute -left-40 bottom-20 w-80 h-80 rounded-full bg-theme-accent-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading animate-slide-up">
          Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              feel free to reach out to me. I'll try my best to get back to you!
            </p>
            
            <div className="grid gap-4">
              <ContactItem 
                icon={<Mail />}
                title="Email"
                content="erbharathkumard@gmail.com"
                link="mailto:erbharathkumard@gmail.com"
              />
              
              <ContactItem 
                icon={<Phone />}
                title="Phone"
                content="+91 8438933199"
                link="tel:+918438933199"
              />
              
              <ContactItem 
                icon={<MapPin />}
                title="Location"
                content="Mayiladuthurai, Tamil Nadu, India - 609304"
              />
              
              <ContactItem 
                icon={<Linkedin />}
                title="LinkedIn"
                content="erbharathkumard"
                link="https://www.linkedin.com/in/erbharathkumard"
              />
              
              <ContactItem 
                icon={<Github />}
                title="Website"
                content="erbharathkumard.com"
                link="https://erbharathkumard.com"
              />
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6 bg-theme-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-theme-highlight/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-theme-white-heading mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-theme-primary/70 border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-theme-white-heading mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-theme-primary/70 border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-theme-white-heading mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-theme-primary/70 border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label className="block text-theme-white-heading mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-theme-primary/70 border border-gray-700 rounded-lg p-3 text-theme-light-slate focus:outline-none focus:border-theme-highlight transition-colors duration-300 min-h-[150px] resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-transparent border border-theme-highlight text-theme-highlight px-6 py-3 rounded-md relative overflow-hidden group transition-all duration-300 hover:bg-theme-highlight hover:text-theme-primary hover:bg-opacity-20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 w-0 bg-theme-highlight bg-opacity-10 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
