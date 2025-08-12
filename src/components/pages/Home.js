import React, { useRef, useState } from 'react';
import kevinPhoto from '../../img/kevin_photo.png';
import useInView from '../../useInView';
import '../css/Home.css';
import '../css/About.css';
import '../css/Service.css';
import '../css/Projects.css';
import '../css/Contact.css';
import About from './About';
import * as FaIcons from 'react-icons/fa';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const projectsRef = useRef(null);

  const isHomeVisible = useInView(homeRef, 0.3);
  const isAboutVisible = useInView(aboutRef, 0.3);
  const isServiceVisible = useInView(serviceRef, 0.3);
  const isProjectsVisible = useInView(projectsRef, 0.3);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!form.name.trim()) return 'Name must be filled in';
    if (!form.email.trim()) return 'Email must be filled in';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Invalid email format';
    if (!form.message.trim()) return 'Message must be filled in';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return setStatus(error);

    setIsLoading(true);
    setStatus('Sending messages...');
    try {
      const res = await fetch('https://kevin-backend-seven.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      setStatus('Message sent successfully! Thank you.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Terminal", icon: "https://cdn-icons-png.flaticon.com/512/4603/4603959.png" }
  ];

  const services = [
    "UI/UX Design & Prototyping",
    "Wireframing & User Research", 
    "Next.js Front-end Development",
    "React.js Functional Components",
    "Tailwind CSS & Bootstrap",
    "Version Control (Git & GitHub)"
  ];

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
  
  const projects = [
    {
      title: "Company Profile",
      description: "I created and implemented this company profile website project to offer to a specific company that needed a simple and easy-to-use Company Profile. This website was built using the Next.js framework.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/preview.png?raw=true",
      link: "https://solusidigital.my.id/",
      technologies: ["Next.js","Nodemailer", "Prisma", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Jemaat App",
      description: "I created this congregation app project to be implemented in church organizations, which allows congregations to register through this web-based Jemaat App.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/jemaatapppreview.png?raw=true",
      link: "https://github.com/KevinRTG/jemaat-app",
      technologies: ["Next.js", "Nodemailer", "React", "Prisma", "Tailwind CSS", "TypeScript"],
    },
  ];

  const contactInfo = [
    { label: 'Name', value: 'Kevin Suyadi Ritonga', icon: '👤' },
    { label: 'Email', value: 'kevinsuyadi2017@gmail.com', link: 'mailto:kevinsuyadi2017@gmail.com', icon: '📧' },
    { label: 'WhatsApp', value: '+62 856-9329-5680', link: 'https://wa.link/uve1tb', icon: '📱' },
    { label: 'Alamat', value: 'Jl. Kenanga 1 No. 18 Blok D 21, Wanasari, Cibitung, Jawa Barat, Indonesia', icon: '📍' }
  ];
  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@kevindoots', icon: 'youtube' },
    { name: 'GitHub', url: 'https://github.com/KevinRTG', icon: 'github' },
    { name: 'Instagram', url: 'https://www.instagram.com/kepin.sr/', icon: 'instagram' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292', icon: 'linkedin' }
  ];

  const getSocialIcon = (iconName) => {
    const iconMap = {
      youtube: FaIcons.FaYoutube,
      github: FaIcons.FaGithub,
      instagram: FaIcons.FaInstagram,
      linkedin: FaIcons.FaLinkedin
    };
    return iconMap[iconName] || null;
  };

  return (
    <>
      {/* Hero */}
      <section ref={homeRef} className={`home ${isHomeVisible ? 'fade-in' : 'fade-init'}`}>
        <div className="home-container">
          <div className="home-content">
            <div className="hero-text">
              <h1 className="home-greeting">Hello,</h1>
              <h2 className="home-title">I'm <span className="home-name">Kevin Suyadi Ritonga</span></h2>
              <p className="home-description">UI/UX Designer, Front-End Development <br /> From Indonesia</p>
              <a href="#about" className="home-button">About Me</a>
            </div>
            <div className="hero-image">
              <img src={kevinPhoto} alt="Kevin Suyadi Ritonga" className="home-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} id="about" className={`about ${isAboutVisible ? 'fade-in' : 'fade-init'}`}>
        <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Passionate Computer Engineering student with expertise in UI/UX Design and Front-End Development
        </p>
        
        <div className="about-content">
          <div className="about-intro">
            <p>
              Hello! I am Kevin Suyadi Ritonga, a Computer Engineering student at Pelita Bangsa University
              with a passion for UI/UX Design and Front-End Development. I enjoy creating
              engaging and functional digital experiences. 
              My journey in the world of technology began with an interest in web design and development.
              I continue to learn and hone my skills in creating user-friendly and responsive interfaces using modern technology.
            </p>
          </div>

          <div className="about-section">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">What I Do</h3>
            <div className="services-grid">
              {services.map((services, index) => (
                <div key={index} className="services-item">
                  <span className="services-bullet">•</span>
                  <span>{services}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">Tools I Use</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="tool-icon"
                    title={tool.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">Education</h3>
            <div className="education-card">
              <h4 className="education-title">Pelita Bangsa University</h4>
              <div className="education-details">
                <p><strong>Major:</strong> Computer Engineering</p>
                <p><strong>Year:</strong> 2021 – Present</p>
                <p><strong>Relevant Courses:</strong> Web Programming, Human Computer Interaction, Mobile Programming, Database Systems</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">My Goal</h3>
            <p className="goal-text">
              I aspire to become a professional Front-End Developer who not only writes clean code,
              but also understands user experience. I hope to work in a team that shares the same passion for building impactful digital products.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Service */}
      <section ref={serviceRef} id="service" className={`service ${isServiceVisible ? 'fade-in' : 'fade-init'}`}>
        <div className="service-section">
        <h2 className="service-heading">My Service </h2>
        <p className="service-descripti">
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

      {/* Projects */}
      <section ref={projectsRef} id="projects" className={`projects ${isProjectsVisible ? 'fade-in' : 'fade-init'}`}>
        <h2 className="projects-title">Projects</h2>
        <p className="projects-descripti">
          Explore the best projects that I have worked on
        </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Projects
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Let's connect and discuss your next project
        </p>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="section-title">Get In Touch</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <strong className="contact-label">{info.label}:</strong>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="section-title">Send Message</h3>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={form.name} 
                  onChange={handleChange}
                  disabled={isLoading}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  value={form.email} 
                  onChange={handleChange}
                  disabled={isLoading}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your message " 
                  rows="5" 
                  required 
                  value={form.message} 
                  onChange={handleChange}
                  disabled={isLoading}
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="form-button">
                {isLoading ? 'Sending...' : 'Send message'}
              </button>
              {status && (
                <p className={`status-message ${status.includes('succes') ? 'success' : 'error'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="contact-additional">
          <div className="social-section">
            <h3 className="section-title">Find Me On</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => {
                const IconComponent = getSocialIcon(link.icon);
                return (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-card">
                    {IconComponent && <IconComponent className="social-icon" />}
                    <span className="social-name">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="location-section">
            <h3 className="section-title">My Location</h3>
            <div className="map-container">
              <iframe
                title="Kevin's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.418577138495!2d107.1036725!3d-6.2438009999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985872cc8f43f%3A0x43159d6778f424ce!2sKec.%20Cibitung%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1752749095697!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
