import React from 'react';

const MobileMenu = ({ isOpen, children }) => {
  return (
    <div 
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div 
        className={`fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 mt-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
