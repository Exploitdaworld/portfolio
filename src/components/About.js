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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={aboutRef}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
                <p className="text-2xl text-primary-500 font-semibold mb-8">
                  DevOps Engineer & AI/MLOps Enthusiast from Karachi, Pakistan
                </p>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_both]">
                  I'm a passionate DevOps Engineer with over 3 years of experience in building and 
                  maintaining scalable cloud infrastructure. Currently diving deep into the exciting 
                  world of AI/MLOps, I'm fascinated by the intersection of traditional DevOps practices 
                  and machine learning operations.
                </p>
                
                <p className="opacity-0 animate-[fadeInUp_0.8s_ease_0.4s_both]">
                  My expertise spans across modern technologies including <strong className="text-gray-800 font-semibold">Python, Go, and R</strong> 
                  for development, with strong proficiency in <strong className="text-gray-800 font-semibold">Docker, Kubernetes, and cloud platforms</strong>. 
                  I'm particularly skilled in automation frameworks like <strong className="text-gray-800 font-semibold">Ansible</strong> and 
                  CI/CD pipelines using <strong className="text-gray-800 font-semibold">GitLab and GitHub Actions</strong>.
                </p>
                
                <p className="opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_both]">
                  What drives me is the challenge of creating robust, automated systems that not only 
                  solve today's problems but anticipate tomorrow's needs. Whether it's implementing 
                  intelligent monitoring with Selenium or designing scalable ML pipelines, 
                  I believe in building solutions that make a difference.
                </p>
              </div>

              <div className="opacity-0 animate-[fadeInUp_0.8s_ease_0.8s_both]">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Values</h3>
                <div className="flex flex-wrap gap-3">
                  {personalValues.map((value, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-primary-100 text-primary-700 border border-primary-200 rounded-full font-medium transition-all duration-300 hover:bg-primary-200 hover:-translate-y-1 opacity-0 animate-[fadeInUp_0.6s_ease_both]"
                      style={{ animationDelay: `${1000 + index * 100}ms` }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="glass-card max-w-sm w-full text-center opacity-0 animate-[fadeInUp_0.8s_ease_1s_both]">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  <span>👨‍💻</span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Moiz Ahmed Khan</h3>
                  <p className="text-gray-600 font-medium mb-4">DevOps Engineer & AI/MLOps Enthusiast</p>
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <span>📍</span>
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4">
                  <a 
                    href="mailto:talktomoiz07@gmail.com" 
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                    title="Email"
                  >
                    ✉️
                  </a>
                  <a 
                    href="https://linkedin.com/in/moiz-ahmed07" 
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    💼
                  </a>
                  <a 
                    href="https://github.com/Exploitdaworld" 
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`glass-card text-center group transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:animate-bounce">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
