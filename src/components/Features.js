import React, { useState, useEffect } from 'react';
import { HiLockClosed, HiDeviceMobile, HiDatabase, HiPhotograph, HiUpload } from 'react-icons/hi';

const featuresList = [
  {
    title: 'Advanced Steganography',
    description:
      'Securely hide messages within your photos, making communication discreet and confidential without compromising image quality.',
    icon: HiLockClosed,
  },
  {
    title: 'Offline Operation',
    description:
      'Enjoy complete privacy with offline functionality, ensuring no data leaves your device without your consent.',
    icon: HiDeviceMobile,
  },
  {
    title: 'Local Storage',
    description:
      'Maintain full control over your data by keeping all photos and messages stored locally.',
    icon: HiDatabase,
  },
  {
    title: 'User-Friendly Gallery',
    description:
      'Organize and access encrypted images effortlessly with a sleek, intuitive gallery.',
    icon: HiPhotograph,
  },
  {
    title: 'Seamless Sharing',
    description:
      'Easily share encrypted images while maintaining the privacy of your embedded messages.',
    icon: HiUpload,
  },
];

const Features = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % featuresList.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 ">
      <h2 className="text-4xl md:text-5xl font-roboto mb-16 text-center bg-gradient-to-r lg:text-7xl from-[#060707] via-[#111314] to-[#131d1f] bg-clip-text text-transparent select-none">
        Key Features
      </h2>

      <div className="grid grid-cols-1 font-roboto gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12">
        {featuresList.map((feature, index) => {
          const isHighlighted = index === highlightIndex;
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className={`
                flex flex-col items-center gap-4 md:gap-6 rounded-lg border-l-8 p-6 md:p-10
                transition-all duration-700 ease-in-out cursor-default
                ${isHighlighted
                  ? 'border-[#0b3d51] bg-[#dbe8ed] shadow-xl scale-[1.05]'
                  : 'border-transparent bg-[#e4e5e5] shadow-md scale-100'}
                md:border-l-0 md:border-t-8
                md:${isHighlighted ? 'border-t-[#0b3d51]' : 'border-t-transparent'}
              `}
              tabIndex={isHighlighted ? 0 : -1}
              aria-current={isHighlighted ? 'true' : 'false'}
            >
              <div
                className={`
                  text-5xl md:text-8xl transition-colors duration-700
                  ${isHighlighted ? 'text-[#146f86]' : 'text-[#070707]'}
                `}
              >
                <Icon />
              </div>

              <div className="flex flex-col items-center">
                <h3
                  className={`
                    text-2xl md:text-3xl font-semibold mb-4 transition-colors duration-700 text-center
                    ${isHighlighted ? 'text-[#0b3d51]' : 'text-gray-800'}
                  `}
                >
                  {feature.title}
                </h3>
                <p
                  className={`
                    max-w-md text-gray-700 text-sm md:text-base leading-relaxed text-center
                    transition-opacity duration-700
                    ${isHighlighted ? 'opacity-100' : 'opacity-75'}
                  `}
                >
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
