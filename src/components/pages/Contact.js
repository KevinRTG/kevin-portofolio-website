import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://kevin-backend-seven.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Gagal mengirim pesan.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Nama :</strong> Kevin Suyadi Ritonga</p>
          <p><strong>Email :</strong> <a href="mailto:kevinsuyadi2017@gmail.com">kevinsuyadi2017@gmail.com</a></p>
          <p><strong>No.Telp/ Whatsapp :</strong> <a href="https://wa.link/uve1tb">+62 856-9329-5680</a></p>
          <p><strong>Alamat :</strong> Jl. Kenanga 1 No. 18 Blok D 21, Wanasari, Cibitung, Jawa Barat, Indonesia</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Me</h3>
          <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your message" rows="5" required value={form.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
          <p>{status}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;