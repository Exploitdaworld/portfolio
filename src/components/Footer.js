import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
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
    <footer className="relative bg-gradient-hero text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-slate opacity-95"></div>
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-icon top-[20%] left-[10%] text-cyber-green opacity-30" style={{ animationDelay: '0s' }}>⚙️</div>
        <div className="floating-icon top-[60%] right-[15%] text-cyber-pink opacity-30" style={{ animationDelay: '2s' }}>💻</div>
        <div className="floating-icon bottom-[40%] left-[20%] text-cyber-blue opacity-30" style={{ animationDelay: '4s' }}>☁️</div>
        <div className="floating-icon top-[30%] right-[25%] text-cyber-purple opacity-30" style={{ animationDelay: '6s' }}>🚀</div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-mono font-bold text-cyber-green mb-2 animate-glow">MAK</h3>
              <p className="text-lg font-semibold text-white mb-4">DevOps Engineer & AI/MLOps Enthusiast</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Building scalable infrastructure and intelligent automation solutions for tomorrow's digital world.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-cyber-blue">
              <span className="text-xl">📍</span>
              <span className="font-medium">Karachi, Pakistan</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-mono font-bold text-cyber-pink mb-6 border-b border-cyber-pink/30 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-300 hover:text-cyber-green transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <span className="text-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-xl font-mono font-bold text-cyber-blue mb-6 border-b border-cyber-blue/30 pb-2">Technologies</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-cyber-green">🐳</span>
                Docker & Kubernetes
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-cyber-pink">🐍</span>
                Python, Go, R
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-cyber-blue">☁️</span>
                AWS & GCP
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-cyber-purple">⚡</span>
                CI/CD & Automation
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-cyber-green">🤖</span>
                AI/MLOps
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-mono font-bold text-cyber-purple mb-6 border-b border-cyber-purple/30 pb-2">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyber-green transition-all duration-300 hover:translate-x-2 group"
                  title={social.name}
                >
                  <span className="text-2xl group-hover:animate-bounce">{social.icon}</span>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-3 bg-cyber-green/10 border border-cyber-green/30 rounded-lg p-3">
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-cyber-green font-medium text-sm">Available for opportunities</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-400">
              <p>&copy; {currentYear} Moiz Ahmed Khan. All rights reserved.</p>
            </div>
            
            <div className="text-center">
              <p className="text-cyber-green font-mono font-semibold text-lg">
                🚀 "Automating the future, one pipeline at a time."
              </p>
            </div>
            
            <div className="text-gray-400">
              <p>Built with ❤️ using <span className="text-cyber-pink">React.js</span> & <span className="text-cyber-blue">Tailwind</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
