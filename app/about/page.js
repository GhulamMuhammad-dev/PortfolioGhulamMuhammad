'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const imageGroupRef = useRef(null);

  useGSAP(() => {
    // 1. Ambient float effect on portrait photo group
    gsap.to(imageGroupRef.current, {
      y: -12,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    // 2. ScrollTrigger reveals for the standard content layouts
    const layoutBlocks = gsap.utils.toArray('.reveal-block');
    layoutBlocks.forEach((block) => {
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
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] text-white overflow-hidden select-none">

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Profile Image with Absolute Metadata Plate overlay */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div ref={imageGroupRef} className="relative w-full max-w-80 aspect-4/5">
           
              <Image
                src="/images/AboutPageProfile.png"
                alt="Ghulam Muhammad"
                fill
                priority
                sizes="(max-w-768px) 320px, 400px"
                className="object-cover object-bottom"
              />
            

            <div className="absolute bottom-4 left-4 right-4 bg-[#06332d] p-6 rounded-xl border border-white/10 shadow-2xl z-10">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-none">
                Ghulam Muhammad
              </h3>
              <p className="text-xs font-semibold text-[#82b48c] mt-2 tracking-wide uppercase">
                Creative Strategist & Motion Designer
              </p>
            </div>
          </div>
        </div>

        {/* Brand Core Headlines */}
        <div className="md:col-span-7 space-y-6 text-left reveal-block">
          <div className="flex items-center gap-4 bg-white/5 w-max px-4 py-2 rounded-md border border-white/5">
            <a href="#" className="hover:text-[#82b48c] transition-colors"><FaLinkedinIn className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#82b48c] transition-colors"><FaXTwitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#82b48c] transition-colors"><FaInstagram className="w-4 h-4" /></a>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-balance">
            Helping Technology Brands Tell Better Stories.
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
            I create strategy-driven 2D and 3D motion design for technology startups, SaaS companies, and modern brands—turning complex ideas into visuals people understand, remember, and act on.
          </p>
        </div>
      </section>

      {/* 2. SUB-SECTION: MOTION WITH PURPOSE */}
      {/* Increased vertical padding from py-24 to py-40 */}
      <section className="bg-[#0a0a0a] border-t border-white/5 px-8 py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 reveal-block">
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#82b48c] tracking-tight leading-none">
              Motion With Purpose
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-zinc-300 text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
              Great motion design does more than look beautiful. It simplifies complex ideas, builds trust, and inspires action. Every project is crafted to communicate with clarity and support your business goals—not just your brand aesthetics.
            </p>
          </div>
        </div>
      </section>
      {/* 3. PINNED TEXT TRACKING TIMELINE SECTION */}
      <MethodologyTabs />

      {/* 4. CALL TO ACTION CARDS ROW */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 reveal-block">
        {/* Let's Talk Slate */}
        <div className="bg-[#82b48c] text-[#0a0a0a] p-8 md:p-12 rounded-sm flex flex-col justify-between items-start space-y-12 shadow-xl border border-white/5">
          <div className="space-y-4">
            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">One Partner, Every Step</h4>
            <p className="text-[#0a0a0a]/80 font-medium text-base md:text-lg max-w-sm leading-normal">
              You'll work directly with the person creating the work—from the first conversation to the final animation. A simple, focused process with clear communication throughout.
            </p>
          </div>
          <a href="mailto:ghulammuhammad.dev@gmail.com" className="bg-[#0a0a0a] text-white font-extrabold uppercase tracking-wide text-sm px-6 py-4 rounded-xl transition-transform hover:scale-105 active:scale-95">
            Let's Talk
          </a>
        </div>

        {/* View Projects Slate */}
        <div className="bg-white text-[#0a0a0a] p-8 md:p-12 rounded-sm flex flex-col justify-between items-start space-y-12 shadow-xl border border-white/5">
          <div className="space-y-4">
            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">See the Work</h4>
            <p className="text-zinc-600 font-medium text-base md:text-lg max-w-xs leading-normal">
              A closer look at the projects, process, and thinking behind the motion.
            </p>
          </div>
          <a href="#projects" className="border-2 border-[#0a0a0a] font-extrabold uppercase tracking-wide text-sm px-6 py-3.5 rounded-xl transition-colors hover:bg-[#0a0a0a] hover:text-white">
            View Projects
          </a>
        </div>
      </section>

    </div>
  );
}

// --- SECURE DOM SCROLL SUB-COMPONENT ---
function MethodologyTabs() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const btnValueRef = useRef(null);
  const btnHowRef = useRef(null);
  const btnWhoRef = useRef(null);

  const tabContents = {
    value: "I partner with ambitious teams building the next generation of technology—from startups and SaaS companies to AI products, digital platforms, and modern tech brands.",
    how: "Through rigorous customer research, deep strategic planning, and highly stylized motion execution, I bridge the gap between product engineering and compelling marketing story narratives.",
    who: "Tech founders, early-stage product teams, and progressive design agencies looking to visually elevate their positioning, simplify complex feature explanation, and scale conversions.",
  };

  useGSAP(() => {
    const textEl = textRef.current;
    const bValue = btnValueRef.current;
    const bHow = btnHowRef.current;
    const bWho = btnWhoRef.current;

    // Set absolute initial state properties cleanly
    gsap.set(textEl, { textContent: tabContents.value, opacity: 1, y: 0 });
    gsap.set(bValue, { color: '#82b48c', x: 12 });
    gsap.set([bHow, bWho], { color: 'rgba(255,255,255,0.3)', x: 0 });

    const updateTabStyles = (activeBtn, inactiveBtn1, inactiveBtn2) => {
      gsap.to(activeBtn, { color: '#82b48c', x: 12, duration: 0.25, ease: 'power2.out' });
      gsap.to([inactiveBtn1, inactiveBtn2], { color: 'rgba(255,255,255,0.3)', x: 0, duration: 0.25, ease: 'power2.out' });
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2400',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // Absolute fallback safety: Forces "What I Value" rendering when scrolling backwards completely
        onUpdate: (self) => {
          if (self.progress === 0 || (self.direction === -1 && self.progress < 0.15)) {
            textEl.textContent = tabContents.value;
            updateTabStyles(bValue, bHow, bWho);
          }
        }
      },
    });

    // --- STEP 1: Hold Baseline ---
    tl.to({}, { duration: 0.5 });

    // --- STEP 2: Smooth Morph to 'How I Work' ---
    tl.to(textEl, { opacity: 0, y: -8, duration: 0.2 })
      .call(() => {
        textEl.textContent = tabContents.how;
        updateTabStyles(bHow, bValue, bWho);
      })
      .to(textEl, { opacity: 1, y: 0, duration: 0.2 })
      .to({}, { duration: 0.6 });

    // --- STEP 3: Smooth Morph to 'Who I Work With' ---
    tl.to(textEl, { opacity: 0, y: -8, duration: 0.2 })
      .call(() => {
        textEl.textContent = tabContents.who;
        updateTabStyles(bWho, bValue, bHow);
      })
      .to(textEl, { opacity: 1, y: 0, duration: 0.2 })
      .to({}, { duration: 0.5 });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#06332d] w-full min-h-screen flex items-center px-8 py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">

        {/* Navigation Headings Panel */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <div ref={btnValueRef} className="text-left text-3xl sm:text-4xl font-black uppercase tracking-tight transition-all pointer-events-none select-none">
            What I Value
          </div>
          <div ref={btnHowRef} className="text-left text-3xl sm:text-4xl font-black uppercase tracking-tight transition-all pointer-events-none select-none">
            How I Work
          </div>
          <div ref={btnWhoRef} className="text-left text-3xl sm:text-4xl font-black uppercase tracking-tight transition-all pointer-events-none select-none">
            Who I Work With
          </div>
        </div>

        {/* Dynamic Detail Panel Box */}
        <div className="md:col-span-7 h-full flex items-center min-h-48 md:pt-1">
          <p ref={textRef} className="text-white text-lg sm:text-xl md:text-2xl font-normal leading-relaxed tracking-tight text-balance">
            {/* Populated smoothly by GSAP Context Engine */}
          </p>
        </div>

      </div>
    </section>
  );
}