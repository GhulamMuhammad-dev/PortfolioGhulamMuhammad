'use client';

import React, { useRef } from 'react';
import { FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: menuRef });

  // Handle push-down accordion animation on mobile
  const toggleMenu = contextSafe(() => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    gsap.to(menuRef.current, {
      height: nextState ? 'auto' : 0,
      duration: 0.5,
      ease: 'power3.inOut',
    });
  });

  return (
    <header className="w-full bg-[#032e2a] text-white relative z-50">
      {/* Top Utility Row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Social Icons Badge */}
        <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-md backdrop-blur-md">
          <a href="#" className="hover:text-[#82b48c] transition-colors"><FaLinkedinIn className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-[#82b48c] transition-colors"><FaXTwitter className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-[#82b48c] transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
        </div>

        {/* Mobile Hamburger / Triangle Icon Indicator */}
        <button 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          className="md:hidden flex flex-col items-center justify-center focus:outline-none"
        >
          <div className={`w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-white transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#82b48c]' : ''}`} />
        </button>
      </div>

      {/* Expandable Mobile Navigation Links (Pushes content down) */}
      <div 
        ref={menuRef} 
        className="h-0 overflow-hidden md:hidden bg-[#032e2a] border-b border-white/5"
      >
        <nav className="flex flex-col items-center justify-center py-8 space-y-6">
          <a href="#about" onClick={toggleMenu} className="text-2xl font-black tracking-widest uppercase hover:text-[#82b48c] transition-colors">About</a>
          <a href="#work" onClick={toggleMenu} className="text-2xl font-black tracking-widest uppercase hover:text-[#82b48c] transition-colors">Work</a>
          <a href="#skills" onClick={toggleMenu} className="text-2xl font-black tracking-widest uppercase hover:text-[#82b48c] transition-colors">Skills</a>
        </nav>
      </div>
    </header>
  );
}