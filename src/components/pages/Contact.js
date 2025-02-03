import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Kontak Saya</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Nama :</strong> Kevin Suyadi Ritonga</p>
          <p><strong>Email :</strong> <a href="mailto:kevinsuyadi2017@gmail.com">kevinsuyadi2017@gmail.com</a></p>
          <p><strong>No.Telp/ Whatsapp :</strong> <a href="https://wa.link/uve1tb">+62 856-9329-5680</a></p>
          <p><strong>Alamat :</strong> Jl. Kenanga 1 No. 18 Blok D 21, Wanasari, Cibitung, Jawa Barat, Indonesia</p>
        </div>
        <form className="contact-form">
          <h3>Hubungi Saya</h3>
          <input type="text" placeholder="Nama Anda" required />
          <input type="email" placeholder="Email Anda" required />
          <textarea placeholder="Pesan Anda" rows="5" required></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
