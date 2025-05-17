import React from "react";
import { HiDownload } from 'react-icons/hi';

function HeroSection() {
  return (
    <section className="w-full min-h-screen px-6 py-20 font-roboto flex flex-col lg:flex-row  lg:items-start relative">
      <div className="max-w-2xl text-center lg:text-left lg:flex-1 lg:mt-48 lg:ml-28 z-10">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#070707] via-[#212222] to-[#33a4b8] bg-clip-text text-transparent">
          Capture. Conceal. Cherish.
        </h1>
        <p className="text-lg lg:text-xl mb-10 text-gray-900">
          Privacy-first offline photo management app. Capture moments, hide
          messages, and keep your data secure.
        </p>
      <div className="flex items-center space-x-4">
    <button
       onClick={() => {
    const link = document.createElement('a');
    link.href = '/Memolens1.0.5.apk';
    link.setAttribute('download', 'MemoLens_v1.0.5.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
      className="flex items-center gap-2 bg-gradient-to-r from-[#33a4b8] to-[#097f94] 
                 text-black font-roboto py-3 px-8 rounded-lg shadow-md
                 hover:from-[#00d9ff] hover:to-[#33a4b8] transition duration-300"
    >
      <HiDownload className="w-6 h-6" />
      Download APK
    </button>
    <span className="text-gray-600 font-mono select-none">v1.0.5</span>
  </div>
      </div>
<div className="relative mt-10 lg:mr-80 lg:w-[400px] lg:h-[600px] w-64 min-h-[400px] mb-45 mx-auto">
        {/* First Image */}
        <img
          src="./images/1.png"
          alt="MemoLens Main Image"
          className="absolute top-0 left-0 rounded-2xl shadow-2xl z-10
            w-64 h-auto
            lg:w-80 lg:h-auto"
        />

        {/* Second Image with 3D rotation */}
        <div
          style={{ perspective: '800px' }}
          className="absolute z-20
            top-[220px] left-[110px] w-40 h-[300px] 
            lg:top-[80px] lg:left-[250px] lg:w-64 lg:h-[600px]"
        >
          <div
            className="w-full h-full shadow-2xl rounded-2xl overflow-hidden"
            style={{
              transform: 'rotateX(10deg) rotateY(20deg) rotateZ(-10deg)',
              transformStyle: 'preserve-3d',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src="./images/2-.png"
              alt="MemoLens Secondary Image"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>







    </section>
  );
}

export default HeroSection;
