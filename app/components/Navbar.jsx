'use client';

import React, { useState, useEffect } from 'react';
import Container from './Container';
import Link from 'next/link';
import { easeInOut, motion, useMotionValueEvent, useScroll } from "motion/react";
import DarkToggle from './DarkToogle';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Define the navigation items, including 'Lab'
const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' }, 
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' }, 
  { label: 'MyStudio', href: '/studio' }, 
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange(); // set on load
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const handleToggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <Container className="bg-container-background">
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-navbar)" : "none",
          width: scrolled ? "80%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: easeInOut,
        }}
        className="backdrop-blur-md fixed inset-x-0 top-0 mx-auto mt-2 flex md:max-w-4xl w-full justify-between items-center py-2 z-100 rounded-full px-3"
      >
        {/* Logo */}
        <Image
          src="/propic.jpg"
          width={100}
          height={100}
          className="w-12 h-12 object-fit rounded-full shadow-md shadow-neutral-600 ring-1 ring-blue-800"
          alt="Profile Pic"
        />

        {/* Hamburger Icon (Mobile) */}
        <div
          className="w-7 h-5 cursor-pointer z-40 md:hidden text-text text-3xl flex items-center justify-between"
          onClick={handleToggleMenu}
        >
          &#9776;
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-col md:flex-row md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('/#');

            let isActive = false;

            if (isHashLink) {
              isActive =
                pathname === '/' &&
                activeHash === item.href.replace('/', '');
            } else {
              isActive = pathname === item.href;
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                className={`font-semibold relative px-2 py-1 transition
        ${isActive
                    ? "text-blue-500 underline underline-offset-4"
                    : "text-primary hover:text-text dark:hover:text-white"
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-3 z-10">
          {/* Dark Toggle */}
          <DarkToggle />

          {/* Resume Button */}
          <Link
            href="https://docs.google.com/document/d/1lWpjDMwipEqvqEPHT4k2PpzNxO7KA0zXCZ36K1huH04/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-1 px-3 py-2 bg-transparent bg-opacity-80 text-primary hover:text-text hover:bg-opacity-50 hover:-translate-y-0.5 duration-300 font-medium"
            style={{ textShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)' }}
          >
            <img src="/file.svg" alt="resume" className="w-4 h-4 object-contain" />
            Resume
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-3 md:hidden flex flex-col gap-4 text-center bg-container-background/90 backdrop-blur-md py-4 rounded-2xl shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-lg hover:text-blue-400 transition text-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </motion.nav>
    </Container>
  );
};

export default Navbar;
