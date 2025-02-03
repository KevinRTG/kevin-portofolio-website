import React from 'react';
import '../css/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah mahasiswa dari Universitas Pelita Bangsa, angkatan tahun 2021, yang mengambil program studi Teknik Informatika.
          Selama menjalani program studi ini, saya telah belajar dan mengenal berbagai bahasa pemrograman seperti:
        </p>
        <ul>
          <li>
            <img src="/images/react.png" alt="Logo React.js" className="icon" />
            <span>React JS</span>
          </li>
          <li>
            <img src="/images/javascript-logo.png" alt="Logo JavaScript" className="icon" />
            <span>JavaScript</span>
          </li>
          <li>
            <img src="/images/php-logo.png" alt="Logo PHP" className="icon" />
            <span>PHP</span>
          </li>
          <li>
            <img src="/images/html-5.png" alt="Logo HTML" className="icon" />
            <span>HTML</span>
          </li>
          <li>
            <img src="/images/css-logo.png" alt="Logo CSS" className="icon" />
            <span>CSS</span>
          </li>
        </ul>
        <p>
          Selain itu, saya juga memiliki ketertarikan lebih pada pembuatan desain UI/UX, baik untuk website maupun aplikasi mobile.
          Saya selalu ingin terus berkembang dan belajar untuk meningkatkan keterampilan saya di bidang Front-end ini.
        </p>
      </div>
    </section>
  );
}

export default About;
