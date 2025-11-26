import React, { useState } from 'react';
import '../css/Contact.css';
import * as FaIcons from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return 'Name must be filled in';
    if (!form.email.trim()) return 'Email must be filled in';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Invalid email format';
    if (!form.message.trim()) return 'Message must be filled in';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    setIsLoading(true);
    setStatus('Sending messages...');

    try {
      const res = await fetch('https://kevin-backend-seven.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      setStatus('Message sent successfully! Thank you.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('Failed to send message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { label: 'Name', value: 'Kevin Suyadi Ritonga', icon: <FaIcons.FaUser /> },
    { label: 'Email', value: 'kevinsuyadi2017@gmail.com', link: 'mailto:kevinsuyadi2017@gmail.com', icon: <FaIcons.FaEnvelope /> },
    { label: 'Address', value: 'Based in Bekasi, Indonesia', icon: <FaIcons.FaMapMarkerAlt /> }
  ];

  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@kevindoots', icon: 'FaYoutube' },
    { name: 'GitHub', url: 'https://github.com/KevinRTG', icon: 'FaGithub' },
    { name: 'Instagram', url: 'https://www.instagram.com/kepin.sr/', icon: 'FaInstagram' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292', icon: 'FaLinkedin' }
  ];

  const getSocialIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent className="social-icon" /> : null;
  };

  return (
    <section className="contact">
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
                    <strong className="contact-label">{info.label}</strong>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
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
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
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
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-card">
                  {getSocialIcon(link.icon)}
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="location-section">
            <h3 className="section-title">My Location</h3>
            <div className="map-container">
              <iframe
                title="Kevin's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.8251647539!2d106.970127!3d-6.284977499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546ad633d%3A0x79e8de8965402078!2sKota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1756394719437!5m2!1sid!2sid"
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
  );
}

export default Contact;