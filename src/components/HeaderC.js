import React from 'react';
import { HiUser } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="w-full text-white flex items-center justify-between py-1 px-6 lg:px-10 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/memolenslogonew.png"
          alt="MemoLens Logo"
          className="h-10 sm:h-16 lg:h-22 w-auto"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* Meet the Dev button */}
     <a
  href="https://github.com/Shashwattripathi23"
  className="flex items-center font-roboto space-x-2 text-[#070707] underline-animate transition-colors duration-300"
>
  <span className="hidden sm:inline font-medium text-lg">Meet the Dev</span>
  <HiUser className="w-6 h-6 mb-2" />
</a>
    
    </header>
  );
};

export default Header;
