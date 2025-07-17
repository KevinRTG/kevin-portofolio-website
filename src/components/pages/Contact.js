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

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Nama:</strong> Kevin Suyadi Ritonga</p>
          <p><strong>Email:</strong> <a href="mailto:kevinsuyadi2017@gmail.com">kevinsuyadi2017@gmail.com</a></p>
          <p><strong>No.Telp/WhatsApp:</strong> <a href="https://wa.link/uve1tb" target="_blank" rel="noopener noreferrer">+62 856-9329-5680</a></p>
          <p><strong>Alamat:</strong> Jl. Kenanga 1 No. 18 Blok D 21, Wanasari, Cibitung, Jawa Barat, Indonesia</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Message</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Nama Anda" 
            required 
            value={form.name} 
            onChange={handleChange}
            disabled={isLoading}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email Anda" 
            required 
            value={form.email} 
            onChange={handleChange}
            disabled={isLoading}
          />
          <textarea 
            name="message" 
            placeholder="Pesan Anda" 
            rows="5" 
            required 
            value={form.message} 
            onChange={handleChange}
            disabled={isLoading}
          ></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
          {status && <p className={`status-message ${status.includes('berhasil') ? 'success' : 'error'}`}>{status}</p>}
        </form>
      </div>

      <div className="additional-content">
        <h3>Find Me On</h3>
        <ul className="social-links">
          <li><a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href="https://github.com/Vinez666" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>

        <h3>My Location</h3>
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
    </section>
  );
}

export default Contact;