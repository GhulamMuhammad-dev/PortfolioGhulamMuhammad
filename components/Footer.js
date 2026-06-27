'use client';

import React, { useRef } from 'react';
// Using a sharp, filled retro envelope to perfectly match your heavy headline style
import { IoMailSharp } from 'react-icons/io5'; 
import { FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        [leftTextRef.current, rightTextRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => context.revert();
  }, { scope: containerRef });

  const handleMouseMove = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#82b48c] text-[#0b1b11] px-6 py-16 md:px-16 md:py-24 lg:px-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full max-w-7xl mx-auto">
        
        {/* Left Headline & Pitch Copy */}
        <div ref={leftTextRef} className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] max-w-2xl">
            Your Product Deserves To Be Understood.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl opacity-90">
            You invested months maybe years building an incredible product. Don't
            let unclear messaging keep it from reaching the people it's built for.
          </p>
        </div>

        {/* Right CTA Block */}
        <div
          ref={rightTextRef}
          className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center h-full space-y-6 lg:text-right"
        >
          <p className="text-xl sm:text-2xl font-bold tracking-tight leading-snug max-w-md text-balance opacity-85">
            Let's create a story that turns understanding into growth.
          </p>

          <div className="flex flex-col items-start lg:items-end gap-3 w-full">
            {/* Magnetic Interaction Button */}
            <a
              href="mailto:ghulammuhammad.dev@gmail.com"
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center gap-3 bg-white text-black font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group select-none cursor-pointer"
            >
              {/* Swapped with IoMailSharp to achieve the heavy, sharp filled look from your UI design */}
              <IoMailSharp className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base tracking-wider uppercase font-black">Contact Me</span>
            </a>

            {/* Flat Email Text Link */}
            <a
              href="mailto:ghulammuhammad.dev@gmail.com"
              className="text-sm font-semibold tracking-wide hover:underline underline-offset-4 opacity-80 transition-all duration-200"
            >
              ghulammuhammad.dev@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Block: Fixed-Width Dark Social Bar */}
      <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24 pt-8 border-t border-[#0b1b11]/10 flex justify-start items-center">
        <div className="flex items-center gap-6 bg-black text-white px-5 py-3 rounded-md shadow-md">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#82b48c] transition-colors duration-200"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-[#82b48c] transition-colors duration-200"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#82b48c] transition-colors duration-200"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}