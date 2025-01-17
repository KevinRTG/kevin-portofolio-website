import React from 'react';
import '../css/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="content">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah mahasiswa dari Universitas Pelita Bangsa, angkatan tahun 2021, yang mengambil program studi Teknik Informatika.
          Selama menjalani program studi ini, saya telah belajar dan mengenal berbagai bahasa pemrograman seperti:
        </p>
        <ul>
          <li>
            <img src="/images/react.png" alt="React.js Logo" className="icon" />
            React.js
          </li>
          <li>
            <img src="/images/javascript-logo.png" alt="JavaScript Logo" className="icon" />
            JavaScript
          </li>
          <li>
            <img src="/images/php-logo.png" alt="PHP Logo" className="icon" />
            PHP
          </li>
          <li>
            <img src="/images/html-5.png" alt="HTML Logo" className="icon" />
            HTML
          </li>
          <li>
            <img src="/images/css-logo.png" alt="CSS Logo" className="icon" />
            CSS
          </li>
        </ul>
        <p>
          Selain itu, saya juga memiliki ketertarikan lebih pada pembuatan desain UI/UX, baik untuk website maupun aplikasi mobile.
          Saya selalu ingin terus berkembang dan belajar untuk meningkatkan keterampilan saya di bidang ini.
        </p>
      </div>
    </section>
  );
}

export default About;
