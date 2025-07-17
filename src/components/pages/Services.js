import React from 'react';
import '../css/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Merancang antarmuka yang intuitif dan pengalaman pengguna yang optimal menggunakan Figma dan prinsip design thinking.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Research", "Design System"]
    },
    {
      id: 2,
      title: "Front-End Development",
      description: "Mengembangkan website responsif dan interaktif menggunakan React.js, Next.js, dan teknologi modern lainnya.",
      icon: "💻",
      features: ["React.js", "Next.js", "Responsive Design", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Website Maintenance",
      description: "Pemeliharaan dan update website untuk memastikan performa optimal dan keamanan yang terjaga.",
      icon: "🔧",
      features: ["Bug Fixes", "Security Updates", "Performance Monitoring", "Content Updates"]
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <p className="services-description">
          Layanan profesional yang saya tawarkan untuk membantu mewujudkan visi digital Anda
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