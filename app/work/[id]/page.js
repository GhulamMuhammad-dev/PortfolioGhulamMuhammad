'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudiesData } from '../../../data/caseStudiesData'; // Match your structure path

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudyPage() {
  const { id } = useParams();
  const router = useRouter();
  const pageContainerRef = useRef(null);
  
  // Safe Fallback check if the dynamic id parameter matches a dataset object key
  const study = caseStudiesData[id];

  useGSAP(() => {
    if (!study) return;

    // Header Element reveal entry animations
    gsap.fromTo('.reveal-meta', 
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
    );

    // Grid Asset block reveals as user scrolls down
    const blocks = gsap.utils.toArray('.scroll-reveal-block');
    blocks.forEach((block) => {
      gsap.fromTo(block,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, { scope: pageContainerRef, dependencies: [id] });

  if (!study) {
    return (
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-black uppercase tracking-tight mb-4">Case Study Not Found</h1>
        <button onClick={() => router.push('/work')} className="text-sm font-bold uppercase tracking-wider text-[#82b48c] underline">
          Return to Work
        </button>
      </div>
    );
  }

  return (
    <div ref={pageContainerRef} className="w-full bg-[#0a0a0a] text-white overflow-hidden select-none">
      
      {/* SECTION 1: HERO DISPLAY CONTAINER */}
      <section className="w-full relative px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto mb-8">
          <button 
            onClick={() => router.push('/work')}
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-[#82b48c] transition-colors"
          >
            <FaChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            Back to All Work
          </button>
        </div>

        {/* Cinematic Wide Image Frame */}
        <div className="max-w-7xl mx-auto h-[40vh] md:h-[65vh] relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* SECTION 2: METRICS & HEADLINES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8 space-y-4 text-left reveal-meta">
          <span className="text-xs md:text-sm font-black uppercase tracking-widest text-[#82b48c]">
            {study.tagline}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-balance">
            {study.title}
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
            {study.subtitle}
          </p>
        </div>
      </section>

      {/* SECTION 3: CORE DATA ROLES MATRIX PANEL */}
      <section className="border-y border-white/5 bg-white/[0.01] px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left reveal-meta">
          <div className="space-y-3 p-6 bg-white/[0.01] border border-white/5 rounded-xl">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-500">Client</h3>
            <p className="text-sm font-semibold text-zinc-300 leading-relaxed">{study.meta.client}</p>
          </div>
          <div className="space-y-3 p-6 bg-white/[0.01] border border-white/5 rounded-xl">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-500">Challenge</h3>
            <p className="text-sm font-medium text-zinc-400 leading-relaxed">{study.meta.challenge}</p>
          </div>
          <div className="space-y-3 p-6 bg-white/[0.01] border border-white/5 rounded-xl">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#82b48c]">Result</h3>
            <p className="text-sm font-semibold text-white leading-relaxed">{study.meta.result}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTROLLED VIEWPORT ASSET GRID */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {study.gridAssets.map((asset) => (
            <div 
              key={asset.id}
              className={`scroll-reveal-block relative w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 group hover:border-white/10 transition-colors ${asset.colSpan} ${asset.aspect}`}
            >
              <Image
                src={asset.src}
                alt={`Case Asset Capture detail ${asset.id}`}
                fill
                sizes="(max-w-768px) 100vw, 80vw"
                className="object-cover transition-transform duration-700 ease-out scale-101 group-hover:scale-103"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: ANALYSIS BREAKDOWN BLOCK */}
      <section className="px-8 py-24 border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 scroll-reveal-block">
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-400">The Problem</h2>
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed text-balance">
              {study.problem}
            </p>
          </div>
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#82b48c]">The Solution</h2>
            <p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed text-balance">
              {study.solution}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT TESTIMONIAL DISPLAY ROW */}
      <section className="max-w-5xl mx-auto px-8 py-28 text-center scroll-reveal-block">
        <div className="relative p-8 md:p-16 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white italic leading-relaxed text-balance">
            "{study.testimonial.quote}"
          </blockquote>
          <div className="mt-8">
            <p className="text-base font-black uppercase tracking-tight text-[#82b48c]">
              {study.testimonial.author}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1">
              {study.testimonial.role}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION FOOTER PANEL */}
      <footer className="w-full bg-[#06332d] px-8 py-24 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-8 scroll-reveal-block">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-balance">
            Ready to scale your tech brand with motion?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Let's structure a custom visual strategy tailored specifically to convey your system mechanics with absolute market authority.
          </p>
          <div className="pt-4">
            <a href="mailto:ghulammuhammad.dev@gmail.com" className="inline-block bg-white text-black font-extrabold uppercase tracking-wide text-xs md:text-sm px-8 py-4 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-xl">
              Let's Talk
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}