import React from 'react';

const HamburgerMenu = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-white shadow-lg"
      aria-label="メニュー"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span 
          className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span 
          className={`w-full h-0.5 bg-gray-600 transition-all duration-300 
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span 
          className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
