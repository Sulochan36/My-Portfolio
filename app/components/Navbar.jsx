'use client';

import React, { useState } from 'react';
import Container from './Container';
import Link from 'next/link';
import { easeInOut, motion, useMotionValueEvent, useScroll } from "motion/react"
import DarkToggle from './DarkToogle';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll()


  useMotionValueEvent(scrollY , "change", (latest) => {
    if(latest > 20 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  })

  const handleToggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <Container className="bg-container-background">
      <motion.nav
      animate = {{
          boxShadow: scrolled ? "var(--shadow-navbar) " : "none",
          width: scrolled ? "60%" : "100%",
          y : scrolled ? 10 : 0,
      }}
      transition={{
        duration : 0.2,
        ease : easeInOut,
      }}
        className='backdrop-blur-2xl fixed inset-x-0 top-0 mx-auto flex max-w-4xl justify-between items-center py-2 z-10 rounded-full px-3'
      
      >
        

          {/* Logo */}
          <a href="#home" className="text-2xl font-bold dark:text-white border-2 p-2 rounded-full">
          S<span className="text-blue-400">M</span>
          </a>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-3xl"
            onClick={handleToggleMenu}
          >
            &#9776;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 text-md">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={()=>setHovered(item)}
                onMouseLeave={()=>setHovered(null)}
                className="text-text hover:text-white transition-colors relative px-2 py-1 "
              >
                {hovered === item && (
                  <motion.span layoutId='hovered-span' className='absolute inset-x-0 bottom-0 h-full w-full bg-neutral-500 rounded-2xl'
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                <span className='relative z-10'>{item}</span>
              </Link>
            ))}
          
          </div>

          <div className='flex flex-row flex-wrap justify-center items-center gap-3 z-10'>
            {/* Dark Toogle */}

            <DarkToggle/>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/1lWpjDMwipEqvqEPHT4k2PpzNxO7KA0zXCZ36K1huH04/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex gap-1.5 px-6 py-3 bg-primary bg-opacity-80 text-white rounded-xl hover:bg-opacity-70 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] duration-500 font-semibold shadow-md"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Resume
          </a>
          </div>
          
          

          
      

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-white bg-black bg-opacity-80 p-4 rounded-md shadow-lg transition-all duration-700 ease-in-out">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-lg hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        )}

      </motion.nav>
    </Container>
      
    
  );
};

export default Navbar;
