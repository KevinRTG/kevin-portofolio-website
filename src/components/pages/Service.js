import React, { useRef } from 'react';
import useInView from '../../useInView';
import '../css/Service.css';

const Service = () => {
  const serviceRef = useRef(null);
  const isVisible = useInView(serviceRef, 0.3); 

  const service = [
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
      <section
      id="service"
      ref={serviceRef}
      className={`service ${isVisible ? 'fade-in' : 'fade-init'}`}
    >
      <div className="service-container">
        <h2 className="service-title">My Service</h2>
        <p className="service-description">
          The professional service I offer to help realize your digital vision
        </p>
        
        <div className="service-grid">
          {service.map(service => (
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

export default Service;