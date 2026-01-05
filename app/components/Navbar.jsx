'use client';

import React, { useState } from 'react';
import Container from './Container';
import Link from 'next/link';
import { easeInOut, motion, useMotionValueEvent, useScroll } from "motion/react"
import DarkToggle from './DarkToogle';
import Image from 'next/image';

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
          width: scrolled ? "80%" : "100%",
          y : scrolled ? 10 : 0,
      }}
      transition={{
        duration : 0.2,
        ease : easeInOut,
      }}
        className='backdrop-blur-md fixed inset-x-0 top-0 mx-auto mt-2 flex md:max-w-4xl w-full justify-between items-center py-2 z-10 rounded-full px-3'
      
      >
        

          {/* Logo */}
        
          <Image
            src="/propic.jpg"
            width={100}
            height={100}
            className='w-12 h-12 object-fit rounded-full shadow-md shadow-neutral-600 ring-1 ring-primary'
            alt='Profile Pic'
          />
          

          {/* Hamburger Icon (Mobile) */}
          <div
            className="w-7 h-5 cursor-pointer z-40 md:hidden text-text text-3xl flex items-center justify-between"
            onClick={handleToggleMenu}
          >
            &#9776;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onMouseEnter={()=>setHovered(item)}
                onMouseLeave={()=>setHovered(null)}
                className="text-text/70 hover:text-primary font-semibold transition-colors relative px-2 py-1 duration-300 "
              >
                <span className='relative z-10'>{item}</span>
              </Link>
            ))}
          <Link
            className="text-text/70 hover:text-primary font-semibold transition-colors relative px-2 py-1 cursor-pointer duration-300"
            href="/lab"
          >
            <span className="relative z-10">Lab</span>
          </Link>
          
          </div>

          <div className='flex flex-row flex-wrap justify-center items-center gap-3 z-10'>
            {/* Dark Toogle */}

            <DarkToggle/>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/1lWpjDMwipEqvqEPHT4k2PpzNxO7KA0zXCZ36K1huH04/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex gap-1.5 px-3 py-2 bg-transparent ring-1 ring-primary/80 hover:ring-2 hover:ring-primary bg-opacity-80 text-primary rounded-full hover:bg-opacity-50 hover:bg-primary/30 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] duration-300 font-medium"
            style={{ textShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)' }}
          >
            Resume
          </a>
          </div>
          
          

          
      

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-text bg-transparent p-4 rounded-md transition-all duration-700 ease-in-out">
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
