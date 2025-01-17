import React from 'react';
import HeroSection from '../HeroSection.js'; // Impor HeroSection

const Home = () => {
  return (
    <div>
      <HeroSection /> {/* Panggil komponen HeroSection di sini */}
      {/* Anda bisa menambahkan elemen lain di Home jika perlu */}
    </div>
  );
};

export default Home;
