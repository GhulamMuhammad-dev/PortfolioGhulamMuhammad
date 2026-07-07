'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '@/data/projectsData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal text sequences effortlessly on entry
    gsap.fromTo('.reveal-header', 
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    );

    // Staggered bento card reveal sequence
    gsap.fromTo('.bento-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.bento-grid-container',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] text-white overflow-hidden select-none">
      
      {/* HEADER SECTION */}
      <header className="max-w-7xl mx-auto px-8 pt-24 pb-16 space-y-6 text-left">
        {/* Social Bar Row Layout */}
        <div className="reveal-header flex items-center gap-4 bg-white/5 w-max px-4 py-2 rounded-md border border-white/5">
          <a href="#" className="hover:text-[#82b48c] transition-colors"><FaLinkedinIn className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#82b48c] transition-colors"><FaXTwitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#82b48c] transition-colors"><FaInstagram className="w-4 h-4" /></a>
        </div>
        
        {/* Main Header Statements */}
        <h1 className="reveal-header text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] max-w-4xl text-balance">
          Built to Solve Communication Challenges
        </h1>
        <p className="reveal-header text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
          Strategy-driven motion design for technology startups, SaaS companies, and modern brands.
        </p>
      </header>

      {/* BENTO GRID MAIN SECTION */}
      <main className="bento-grid-container max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {projectsData.map((project) => {
            // Determine sizing footprint based on priority configuration metrics
            const isHigh = project.priority === 'high';
            
            return (
              <div
                key={project.id}
                className={`bento-card group flex flex-col justify-between space-y-4 bg-white/1 border border-white/5 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-white/10 ${
                  isHigh ? 'col-span-12' : 'col-span-12 md:col-span-6'
                }`}
              >
                {/* Interactive Dynamic Media Frame Display Box */}
                <Link 
                  href={`/work/${project.id}`} 
                  className={`relative block w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 cursor-pointer group select-none ${
                    isHigh ? 'aspect-video' : 'aspect-4/3 md:aspect-square lg:aspect-4/3'
                  }`}
                >
                  {/* Base Layer Image Asset Content */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={isHigh ? "100vw" : "(max-w-768px) 100vw, 50vw"}
                    className="object-cover transition-transform duration-700 ease-out scale-101 group-hover:scale-104"
                  />

                  {/* Overlay Interaction Layer: Blurs base layout images while fading in centered case study flags */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 backdrop-blur-0 transition-all duration-400 ease-out flex items-center justify-center group-hover:opacity-100 group-hover:backdrop-blur-md">
                    <div className="transform translate-y-4 opacity-0 transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1) group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="bg-white text-black text-xs md:text-sm font-black uppercase tracking-wider px-6 py-3 rounded-xl shadow-2xl transition-transform active:scale-95">
                        View Case Study
                      </span>
                    </div>
                  </div>
                  
                  {/* Context Meta Tag Pill */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 z-10">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#82b48c]">
                      {project.category}
                    </span>
                  </div>
                </Link>

                {/* Typography Descriptive Panel Block */}
                <div className="space-y-1.5 pt-2">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none group-hover:text-[#82b48c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-medium leading-normal max-w-2xl text-balance">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

    </div>
  );
}