import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'talktomoiz07@gmail.com',
      link: 'mailto:talktomoiz07@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'moiz-ahmed07',
      link: 'https://linkedin.com/in/moiz-ahmed07'
    },
    {
      icon: '📱',
      title: 'GitHub',
      value: 'Exploitdaworld',
      link: 'https://github.com/Exploitdaworld'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Karachi, Pakistan',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next DevOps or AI/MLOps project? Let's discuss how I can help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities, challenging projects, and 
                collaborating with like-minded professionals. Whether you need help with 
                cloud infrastructure, DevOps automation, or exploring AI/MLOps solutions, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/10 hover:translate-x-2">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-cyber-blue hover:text-cyber-green transition-colors duration-300 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-400">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-cyber-green/10 border border-cyber-green/20 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse shadow-cyber"></div>
                <span className="font-semibold text-cyber-green">Available for new projects</span>
              </div>
              <p className="text-gray-300 text-sm">Response time: Usually within 24 hours</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion / Job Opportunity / Consultation"
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, requirements, or how I can help..."
                  className="form-input resize-none min-h-[150px]"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>🚀 Sending...</span>
                ) : (
                  <span>📬 Send Message</span>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-center font-semibold mt-4">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
