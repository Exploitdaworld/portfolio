import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Gmail Alert Automation System",
      description: "Advanced automation system using Selenium to monitor Gmail for specific email patterns and trigger alerts. Features intelligent filtering, real-time notifications, and comprehensive logging.",
      image: "🔔",
      technologies: ["Python", "Selenium", "Gmail API", "Automation", "Scheduling"],
      category: "automation",
      features: [
        "Real-time email monitoring",
        "Pattern-based filtering",
        "Automated alert system",
        "Comprehensive logging",
        "Scheduled execution"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Kubernetes Multi-Cluster Manager",
      description: "DevOps solution for managing multiple Kubernetes clusters with automated deployments, monitoring, and scaling across different environments.",
      image: "⚡",
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      category: "devops",
      features: [
        "Multi-cluster deployment",
        "Auto-scaling configuration",
        "Real-time monitoring",
        "Resource optimization",
        "CI/CD integration"
      ],
      github: "#",
      demo: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "MLOps Pipeline Framework",
      description: "End-to-end MLOps pipeline with automated model training, validation, deployment, and monitoring using modern DevOps practices.",
      image: "🤖",
      technologies: ["Python", "MLflow", "Kubeflow", "Docker", "TensorFlow"],
      category: "mlops",
      features: [
        "Automated model training",
        "Model versioning & registry",
        "A/B testing framework",
        "Performance monitoring",
        "Automated rollback"
      ],
      github: "#",
      demo: "#",
      status: "Planning"
    },
    {
      id: 4,
      title: "Cloud Infrastructure as Code",
      description: "Comprehensive Infrastructure as Code solution using Terraform and Ansible for multi-cloud deployments with best practices for security and scalability.",
      image: "☁️",
      technologies: ["Terraform", "Ansible", "AWS", "GCP", "Python"],
      category: "devops",
      features: [
        "Multi-cloud support",
        "Security hardening",
        "Cost optimization",
        "Automated backups",
        "Disaster recovery"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "AI-Powered Log Analysis",
      description: "Machine learning system for analyzing application logs, detecting anomalies, and predicting potential issues before they impact production.",
      image: "📊",
      technologies: ["Python", "Scikit-learn", "Elasticsearch", "Kibana", "R"],
      category: "mlops",
      features: [
        "Anomaly detection",
        "Predictive analytics",
        "Real-time processing",
        "Interactive dashboards",
        "Alert automation"
      ],
      github: "#",
      demo: "#",
      status: "In Progress"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'devops', label: 'DevOps' },
    { key: 'automation', label: 'Automation' },
    { key: 'mlops', label: 'MLOps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="project-card card">
      <div className="project-header">
        <div className="project-icon">{project.image}</div>
        <div className="project-status">
          <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      
      <div className="project-actions">
        <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          <span>📂</span> Code
        </a>
        <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <span>🚀</span> Demo
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my expertise in DevOps, automation, and AI/MLOps through real-world projects
        </p>
        
        {/* Filter Tabs */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid grid grid-3">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* GitHub CTA */}
        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for more projects and contributions</p>
          <a 
            href="https://github.com/Exploitdaworld" 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>📱</span> Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
