import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '📱',
      href: 'https://github.com/Exploitdaworld'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/in/moiz-ahmed07'
    },
    {
      name: 'Email',
      icon: '✉️',
      href: 'mailto:talktomoiz07@gmail.com'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" style={{ background: '#0f172a', color: 'white' }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Moiz Ahmed Khan</h3>
              <p>DevOps Engineer & AI/MLOps Enthusiast</p>
              <p className="footer-tagline">
                Building scalable infrastructure and intelligent automation solutions.
              </p>
            </div>
            
            <div className="footer-location">
              <span className="location-icon">📍</span>
              <span>Karachi, Pakistan</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul className="footer-links">
              <li>Docker & Kubernetes</li>
              <li>Python, Go, R</li>
              <li>AWS & GCP</li>
              <li>CI/CD & Automation</li>
              <li>AI/MLOps</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="availability-status">
              <div className="status-dot available"></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Moiz Ahmed Khan. All rights reserved.</p>
            </div>
            
            <div className="footer-motto">
              <p>🚀 "Automating the future, one pipeline at a time."</p>
            </div>
            
            <div className="footer-tech">
              <p>Built with ❤️ using React.js & Docker</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
