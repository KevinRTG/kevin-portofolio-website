import React from 'react';
import '../css/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces and optimal user experiences using Figma and design thinking principles.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Research", "Design System"]
    },
    {
      id: 2,
      title: "Front-End Development",
      description: "Developing responsive and interactive websites using React.js, Next.js, and other modern technologies.",
      icon: "💻",
      features: ["React.js", "Next.js", "Responsive Design", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Website Maintenance",
      description: "Website maintenance and updates to ensure optimal performance and security.",
      icon: "🔧",
      features: ["Bug Fixes", "Security Updates", "Performance Monitoring", "Content Updates"]
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <p className="services-description">
          The professional services I offer to help realize your digital vision
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;