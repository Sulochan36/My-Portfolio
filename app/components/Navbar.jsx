'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b-2 border-white top-0 fixed w-full bg-[rgba(10,10,10,0.5)] backdrop-blur-2xl shadow-lg font-mono z-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            Sulochan<span className="text-blue-500"> Mahajan</span>
          </a>

          {/* Hamburger icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-3xl"
            onClick={handleToggleMenu}
          >
            &#9776;
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex justify-center items-center space-x-8 text-xl">
            {['Home', 'About', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Resume button */}
          <a
            href="https://docs.google.com/document/d/1lWpjDMwipEqvqEPHT4k2PpzNxO7KA0zXCZ36K1huH04/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group relative flex gap-1.5 px-6 py-3 bg-blue-500 bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] duration-500 font-semibold shadow-md"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={`md:hidden mt-4 flex flex-col gap-4 text-white bg-black bg-opacity-80 p-4 rounded-md shadow-lg transform transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            {['Home', 'About', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={closeMenu}
                className="text-white text-lg hover:text-blue-400 transition"
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
