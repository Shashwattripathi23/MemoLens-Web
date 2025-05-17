import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import HeaderC from './components/HeaderC';
import FAQ from './components/FAQ';

import './index.css';
import Header from './components/HeaderC';
function App() {
  return (
    <div className="bg-gradient-to-br from-[#d7d8da] via-[#d1d1d3] to-[#5e6062] text-white min-h-screen flex flex-col items-center">
      <HeaderC/>
      <HeroSection />
      {/* <ImageCarousel /> */}
      <Features />
      <FAQ />
      {/* <ImageCarousel /> */}
      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default App;
