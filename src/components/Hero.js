import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = useMemo(() => ['DevOps Engineer', 'AI/MLOps Enthusiast', 'Cloud Architect', 'Automation Expert'], []);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentRole];
      
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-8 py-16 mt-20 overflow-hidden">
      {/* Beautiful Geometric Background */}
      <div className="absolute inset-0 z-10">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/40"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.015]"></div>
      </div>
      
      {/* Soft glowing particles */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/8 via-transparent to-transparent animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-radial from-pink-500/8 via-transparent to-transparent animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-30 max-w-6xl mx-auto text-center px-4">
        <h1 className="hero-title mb-6 opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_both] break-words hyphens-auto">
          Hi, I'm Moiz <span className="block sm:inline relative font-mono animate-glitch whitespace-nowrap sm:whitespace-normal" data-text="Moiz Ahmed Khan"></span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-semibold font-mono h-12 flex items-center justify-center mb-8 opacity-0 animate-[fadeInUp_0.8s_ease_0.4s_both]">
          <span className="text-cyber-green border-r-2 border-cyber-green pr-1 animate-pulse">{displayText}</span>
          <span className="text-cyber-green ml-1 animate-pulse">|</span>
        </div>
        
        <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto text-shadow-glow opacity-90 opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_both]">
          🚀 Elite DevOps Engineer & AI/MLOps Architect from Karachi, Pakistan. 
          Crafting next-generation cloud infrastructure, intelligent automation, and 
          pioneering the intersection of DevOps and AI. Building tomorrow's systems today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 opacity-0 animate-[fadeInUp_0.8s_ease_0.8s_both]">
          <button 
            className="cyber-btn"
            onClick={() => scrollToSection('skills')}
          >
            <span>➤ View Skills</span>
          </button>
          <button 
            className="cyber-btn cyber-btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            <span>⚡ Hire Me Now</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease_1s_both]">
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg border border-cyber-green/20 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-cyber">
            <h3 className="text-4xl font-mono font-bold text-cyber-green mb-2 text-shadow-cyber">5+</h3>
            <p className="text-white/80 font-medium uppercase tracking-wide text-sm">Years Mastery</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg border border-cyber-blue/20 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-cyber">
            <h3 className="text-4xl font-mono font-bold text-cyber-blue mb-2 text-shadow-cyber">100+</h3>
            <p className="text-white/80 font-medium uppercase tracking-wide text-sm">Systems Deployed</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg border border-cyber-pink/20 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-cyber">
            <h3 className="text-4xl font-mono font-bold text-cyber-pink mb-2 text-shadow-cyber">99.99%</h3>
            <p className="text-white/80 font-medium uppercase tracking-wide text-sm">Uptime SLA</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-lg border border-cyber-purple/20 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-cyber">
            <h3 className="text-4xl font-mono font-bold text-cyber-purple mb-2 text-shadow-cyber">∞</h3>
            <p className="text-white/80 font-medium uppercase tracking-wide text-sm">Innovation Drive</p>
          </div>
        </div>
      </div>
      
      {/* Advanced Floating Tech Icons */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="floating-icon top-[20%] left-[10%] text-cyber-green" style={{ animationDelay: '0s' }}>🚀</div>
        <div className="floating-icon top-[60%] right-[15%] text-cyber-pink" style={{ animationDelay: '1.5s' }}>⚙️</div>
        <div className="floating-icon bottom-[30%] left-[20%] text-cyber-blue" style={{ animationDelay: '3s' }}>☁️</div>
        <div className="floating-icon top-[30%] right-[25%] text-cyber-purple" style={{ animationDelay: '4.5s' }}>🤖</div>
        <div className="floating-icon bottom-[40%] right-[30%] text-cyber-green" style={{ animationDelay: '6s' }}>🔥</div>
        <div className="floating-icon top-[70%] left-[30%] text-cyber-pink" style={{ animationDelay: '7.5s' }}>💻</div>
        <div className="floating-icon top-[50%] left-[5%] text-cyber-blue" style={{ animationDelay: '9s' }}>🌟</div>
        <div className="floating-icon bottom-[20%] right-[10%] text-cyber-purple" style={{ animationDelay: '10.5s' }}>⚡</div>
      </div>
    </section>
  );
};

export default Hero;
