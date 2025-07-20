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
    <section id="contact" className="section" style={{ background: '#1e293b', color: 'white' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>Get In Touch</h2>
        <p className="section-subtitle" style={{ color: '#94a3b8' }}>
          Ready to collaborate on your next DevOps or AI/MLOps project? Let's discuss how I can help!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities, challenging projects, and 
                collaborating with like-minded professionals. Whether you need help with 
                cloud infrastructure, DevOps automation, or exploring AI/MLOps solutions, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="availability">
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <span>Available for new projects</span>
              </div>
              <p>Response time: Usually within 24 hours</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion / Job Opportunity / Consultation"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, requirements, or how I can help..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>🚀 Sending...</span>
                ) : (
                  <span>📬 Send Message</span>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
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
