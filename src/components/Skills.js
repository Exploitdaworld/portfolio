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
    <div className="skill-item" style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build scalable, reliable systems
        </p>
        
        <div className="skills-grid" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category card"
              data-index={categoryIndex}
            >
              <div className="skill-category-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
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
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="additional-skills">
          <h3>Additional Technologies</h3>
          <div className="skills-tags">
            {[
              "Machine Learning", "MLOps", "Prometheus", "Grafana", "Redis", 
              "PostgreSQL", "MongoDB", "Apache Kafka", "Microservices", "API Design",
              "Security", "Load Balancing", "Auto Scaling", "Cost Optimization"
            ].map((tag, index) => (
              <span key={index} className="skill-tag" style={{ animationDelay: `${index * 100}ms` }}>
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
