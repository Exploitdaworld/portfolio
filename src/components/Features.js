import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-content">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Experience blazing fast load times and seamless performance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Advanced security features to protect your valuable data.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Customizable</h3>
            <p>Highly customizable to meet diverse business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
