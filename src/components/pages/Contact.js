import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return 'Nama harus diisi';
    if (!form.email.trim()) return 'Email harus diisi';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Format email tidak valid';
    if (!form.message.trim()) return 'Pesan harus diisi';
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
    setStatus('Mengirim pesan...');
    
    try {
      const res = await fetch('https://kevin-backend-seven.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setStatus('Pesan berhasil dikirim! Terima kasih.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { label: 'Nama', value: 'Kevin Suyadi Ritonga', icon: '👤' },
    { label: 'Email', value: 'kevinsuyadi2017@gmail.com', link: 'mailto:kevinsuyadi2017@gmail.com', icon: '📧' },
    { label: 'WhatsApp', value: '+62 856-9329-5680', link: 'https://wa.link/uve1tb', icon: '📱' },
    { label: 'Alamat', value: 'Jl. Kenanga 1 No. 18 Blok D 21, Wanasari, Cibitung, Jawa Barat, Indonesia', icon: '📍' }
  ];

  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@kevindoots', icon: '🎥' },
    { name: 'GitHub', url: 'https://github.com/Vinez666', icon: '💻' },
    { name: 'Instagram', url: 'https://www.instagram.com/kepin.sr/', icon: '📷' }
  ];

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
                  placeholder="Nama Anda" 
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
                  placeholder="Email Anda" 
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
                  placeholder="Pesan Anda" 
                  rows="5" 
                  required 
                  value={form.message} 
                  onChange={handleChange}
                  disabled={isLoading}
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="form-button">
                {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
              {status && (
                <p className={`status-message ${status.includes('berhasil') ? 'success' : 'error'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="contact-additional">
          <div className="social-section">
            <h3 className="section-title">Find Me On</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon">{social.icon}</div>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
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
  );
}

export default Contact;