import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90 },
        { name: "Go", level: 75 },
        { name: "R", level: 70 },
        { name: "Bash/Shell", level: 85 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS/GCP", level: 80 },
        { name: "Terraform", level: 75 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: "🛠️",
      skills: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Ansible", level: 80 },
        { name: "Jenkins", level: 75 }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: "🚀",
      skills: [
        { name: "GitLab CI/CD", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "Selenium", level: 80 },
        { name: "Monitoring", level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.index);
            setVisibleSkills(prev => [...new Set([...prev, categoryIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('.skill-category');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, delay, isVisible }) => (
    <div className="mb-6 opacity-0 animate-[fadeInUp_0.6s_ease_both]" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-gray-800 font-mono">{skill.name}</span>
        <span className="font-bold text-cyber-green font-mono text-shadow-glow">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200/50 rounded-full overflow-hidden">
        <div 
          className={`skill-bar-gradient transition-all duration-1500 ease-out ${isVisible ? 'animate-pulse' : ''}`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, reliable systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card group relative overflow-hidden"
              data-index={categoryIndex}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4 filter drop-shadow-lg group-hover:animate-bounce">{category.icon}</span>
                  <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill} 
                      delay={skillIndex * 200}
                      isVisible={visibleSkills.includes(categoryIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="text-center">
          <h3 className="text-3xl font-bold gradient-text mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Machine Learning", "MLOps", "Prometheus", "Grafana", "Redis", 
              "PostgreSQL", "MongoDB", "Apache Kafka", "Microservices", "API Design",
              "Security", "Load Balancing", "Auto Scaling", "Cost Optimization"
            ].map((tag, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-cyber-blue/10 border-2 border-cyber-blue/30 rounded-full text-cyber-blue font-semibold font-mono transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyber-blue/20 hover:border-cyber-blue/60 hover:shadow-cyber opacity-0 animate-[fadeInUp_0.6s_ease_both]" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
