'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef(null);
  const graphicWrapperRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(() => {
    // 1. Smooth ambient floating loop for the entire graphic setup (Desktop only)
    if (window.innerWidth >= 768) {
      gsap.to(graphicWrapperRef.current, {
        y: -15,
        rotation: 0.5,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // 2. Subtle counter-movement for individual buttons to make them feel organic
      gsap.to('.tentacle-btn', {
        y: 6,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
      });
    }

    // Entrance animation for content
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#0b1b11] text-white flex flex-col items-center pt-4 pb-20 md:pb-32 px-6 overflow-hidden select-none"
    >
      {/* Mind-Map Wrapper 
        - Mobile: Shows a clean, standard circular profile image.
        - Desktop: Becomes a wide container matching the aspect ratio of your composition image.
      */}
      <div className="relative w-full max-w-100 md:max-w-225 aspect-4/3 md:aspect-2/1 flex items-center justify-center mb-6 md:mb-4 ">
        
        {/* --- DESKTOP VIEWPORT LAYOUT --- */}
        <div
          ref={graphicWrapperRef}
          className="hidden md:block absolute inset-0 w-full h-4/5 top-10"
        >
          {/* Main Composition Asset Image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/ProfileImageWithTanticals.png" // Ensure your image is placed here
              alt="Profile mind map artwork"
              fill
              priority
              className="object-contain"
            />

            {/* WORK Button Overlay (Left tentacle tip) */}
            <a
              href="#work"
              className="tentacle-btn absolute top-[36%] left-[10%] bg-[#82b48c] text-[#0b1b11] font-black tracking-wider uppercase px-4 py-1.5 rounded text-xs lg:text-sm -rotate-12 border border-[#0b1b11]/20 hover:scale-105 hover:bg-white transition-all duration-200"
            >
              Work
            </a>

            {/* SKILLS Button Overlay (Top loop crown) */}
            <a
              href="#skills"
              className="tentacle-btn absolute top-[-2%] left-[32%] bg-[#82b48c] text-[#0b1b11] font-black tracking-wider uppercase px-4 py-1.5 rounded text-xs lg:text-sm rotate-6 border border-[#0b1b11]/20 hover:scale-105 hover:bg-white transition-all duration-200"
            >
              Skills
            </a>

            {/* ABOUT Button Overlay (Right tentacle tip) */}
            <a
              href="#about"
              className="tentacle-btn absolute top-[52%] right-[8%] bg-[#82b48c] text-[#0b1b11] font-black tracking-wider uppercase px-4 py-1.5 rounded text-xs lg:text-sm rotate-12 border border-[#0b1b11]/20 hover:scale-105 hover:bg-white transition-all duration-200"
            >
              About
            </a>
          </div>
        </div>

        {/* --- MOBILE VIEWPORT LAYOUT --- */}
        {/* Drops the complex background image entirely for a clean mobile presentation */}
       {/* --- MOBILE VIEWPORT LAYOUT --- */}
        <div className="block md:hidden relative w-48 h-48 rounded-full  overflow-hidden bg-zinc-800 shadow-2xl">
          <Image
            src="/Images/profileImagePortfolio.png"
            alt="Portrait Avatar"
            fill
            priority
            className="object-cover" 
          />
        </div>
      </div>

      {/* Narrative Headline Blocks */}
      <div ref={headlineRef} className="w-full max-w-4xl text-center space-y-6 px-2 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] max-w-3xl mx-auto">
          I help your customers understand why your product matters.
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal text-zinc-400 max-w-2xl mx-auto leading-relaxed text-balance">
          I help SaaS, AI, and tech companies turn complex products into clear visual stories through research, strategy, storytelling, and motion design.
        </p>
      </div>
    </section>
  );
}