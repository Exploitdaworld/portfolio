import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: "🚀",
      title: "3+ Years DevOps Experience",
      description: "Building and maintaining scalable cloud infrastructure"
    },
    {
      icon: "☁️",
      title: "Multi-Cloud Expertise",
      description: "Proficient in AWS, GCP, and hybrid cloud solutions"
    },
    {
      icon: "🤖",
      title: "AI/MLOps Pioneer",
      description: "Bridging the gap between ML models and production"
    },
    {
      icon: "⚡",
      title: "Automation Specialist",
      description: "Streamlining workflows with intelligent automation"
    }
  ];

  const personalValues = [
    "Continuous Learning",
    "Innovation",
    "Collaboration",
    "Excellence",
    "Problem Solving",
    "Efficiency"
  ];

  return (
    <section id="about" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="about-container" ref={aboutRef}>
          <div className={`about-content ${isVisible ? 'visible' : ''}`}>
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <div className="about-intro">
                <p className="about-subtitle">
                  DevOps Engineer & AI/MLOps Enthusiast from Karachi, Pakistan
                </p>
              </div>
              
              <div className="about-description">
                <p>
                  I'm a passionate DevOps Engineer with over 3 years of experience in building and 
                  maintaining scalable cloud infrastructure. Currently diving deep into the exciting 
                  world of AI/MLOps, I'm fascinated by the intersection of traditional DevOps practices 
                  and machine learning operations.
                </p>
                
                <p>
                  My expertise spans across modern technologies including <strong>Python, Go, and R</strong> 
                  for development, with strong proficiency in <strong>Docker, Kubernetes, and cloud platforms</strong>. 
                  I'm particularly skilled in automation frameworks like <strong>Ansible</strong> and 
                  CI/CD pipelines using <strong>GitLab and GitHub Actions</strong>.
                </p>
                
                <p>
                  What drives me is the challenge of creating robust, automated systems that not only 
                  solve today's problems but anticipate tomorrow's needs. Whether it's implementing 
                  intelligent monitoring with Selenium or designing scalable ML pipelines, 
                  I believe in building solutions that make a difference.
                </p>
              </div>

              <div className="personal-values">
                <h3>Core Values</h3>
                <div className="values-grid">
                  {personalValues.map((value, index) => (
                    <span 
                      key={index} 
                      className="value-tag"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="profile-card">
                <div className="profile-avatar">
                  <span className="avatar-icon">👨‍💻</span>
                </div>
                <div className="profile-info">
                  <h3>Moiz Ahmed Khan</h3>
                  <p>DevOps Engineer & AI/MLOps Enthusiast</p>
                  <div className="location">
                    <span className="location-icon">📍</span>
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
                
                <div className="contact-links">
                  <a 
                    href="mailto:talktomoiz07@gmail.com" 
                    className="contact-link"
                    title="Email"
                  >
                    ✉️
                  </a>
                  <a 
                    href="https://linkedin.com/in/moiz-ahmed07" 
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    💼
                  </a>
                  <a 
                    href="https://github.com/Exploitdaworld" 
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    📱
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`achievement-card card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
