import React, { useState, useEffect, useMemo, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = useMemo(() => ['DevOps Engineer', 'AI/MLOps Enthusiast', 'Cloud Architect', 'Automation Expert'], []);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Matrix Digital Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const drops = [];
    
    for (let x = 0; x < canvas.width / 10; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(15, 15, 35, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00FF88';
      ctx.font = '15px JetBrains Mono';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 10, drops[i] * 10);
        
        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <section id="home" className="hero">
      {/* Matrix Background Effect */}
      <div className="matrix-bg">
        <canvas 
          ref={canvasRef} 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          Hi, I'm <span className="glitch-text" data-text="Moiz Ahmed Khan">Moiz Ahmed Khan</span>
        </h1>
        
        <div className="hero-subtitle">
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>
        
        <p className="hero-description fade-in">
          🚀 Elite DevOps Engineer & AI/MLOps Architect from Karachi, Pakistan. 
          Crafting next-generation cloud infrastructure, intelligent automation, and 
          pioneering the intersection of DevOps and AI. Building tomorrow's systems today.
        </p>
        
        <div className="hero-buttons fade-in">
          <button 
            className="cyber-btn"
            onClick={() => scrollToSection('projects')}
          >
            <span>➤ View Portfolio</span>
          </button>
          <button 
            className="cyber-btn cyber-btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            <span>⚡ Hire Me Now</span>
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <h3>5+</h3>
            <p>Years Mastery</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Systems Deployed</p>
          </div>
          <div className="stat">
            <h3>99.99%</h3>
            <p>Uptime SLA</p>
          </div>
          <div className="stat">
            <h3>∞</h3>
            <p>Innovation Drive</p>
          </div>
        </div>
      </div>
      
      {/* Advanced Floating Tech Icons */}
      <div className="floating-elements">
        <div className="float-icon" style={{ animationDelay: '0s' }}>🚀</div>
        <div className="float-icon" style={{ animationDelay: '1.5s' }}>⚙️</div>
        <div className="float-icon" style={{ animationDelay: '3s' }}>☁️</div>
        <div className="float-icon" style={{ animationDelay: '4.5s' }}>🤖</div>
        <div className="float-icon" style={{ animationDelay: '6s' }}>🔥</div>
        <div className="float-icon" style={{ animationDelay: '7.5s' }}>💻</div>
        <div className="float-icon" style={{ animationDelay: '9s' }}>🌟</div>
        <div className="float-icon" style={{ animationDelay: '10.5s' }}>⚡</div>
      </div>
    </section>
  );
};

export default Hero;
