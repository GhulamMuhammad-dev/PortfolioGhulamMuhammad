"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  /* ── Desktop GSAP entrance refs ── */
  const desktopRef     = useRef(null);
  const imgWrapRef     = useRef(null);
  const btnWorkRef     = useRef(null);
  const btnSkillsRef   = useRef(null);
  const btnAboutRef    = useRef(null);
  const headlineRef    = useRef(null);
  const bodyRef        = useRef(null);

  /* ── Mobile GSAP refs ── */
  const navPanelRef    = useRef(null);   // teal expanding nav panel
  const heroContentRef = useRef(null);   // profile + headline + body
  const navLinksRef    = useRef(null);   // the three link items inside panel

  /* ────────────────────────────────────────────────
     Desktop entrance animation (runs once on mount)
  ──────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Profile image — scale + fade in
      tl.fromTo(
        imgWrapRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      )
      // Nav buttons — stagger in from their directions
      .fromTo(
        btnWorkRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        btnSkillsRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        btnAboutRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.4"
      )
      // Headline
      .fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      // Body text
      .fromTo(
        bodyRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
    }, desktopRef);

    return () => ctx.revert();
  }, []);

  /* ────────────────────────────────────────────────
     Mobile nav: push hero content down / up
  ──────────────────────────────────────────────── */
  const toggleMobileNav = () => {
    const panel   = navPanelRef.current;
    const content = heroContentRef.current;
    const links   = navLinksRef.current?.children
      ? Array.from(navLinksRef.current.children)
      : [];

    if (!mobileNavOpen) {
      // OPEN — expand panel, push content down
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power2.out" }
      );
      gsap.fromTo(
        content,
        { y: 0 },
        { y: 20, duration: 0.45, ease: "power2.out" }  // slight push
      );
      // Stagger nav link items in
      if (links.length) {
        gsap.fromTo(
          links,
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.08, ease: "power2.out", delay: 0.15 }
        );
      }
    } else {
      // CLOSE — collapse panel, restore content
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
      gsap.to(content, { y: 0, duration: 0.35, ease: "power2.in" });
    }

    setMobileNavOpen((o) => !o);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          DESKTOP HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={desktopRef}
        className="hidden md:flex flex-col items-center bg-black min-h-screen relative overflow-hidden pb-16"
      >
        {/* Top-right social pill */}
        <div className="absolute top-6 right-8 z-20">
          <SocialPill />
        </div>

        {/* ── Image + floating nav buttons ── */}
        <div
          className="relative flex items-center justify-center w-full mt-10 "
          
        >

          {/* Profile image — tentacles are already part of this Figma export */}
          <div
            ref={imgWrapRef}
            className="relative z-10"
            style={{ width: "600px", height: "400px" }}
          >
            <Image
              src="/Images/ProfileImageWithTanticals.png"
              alt="Ghulam Muhammad"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* WORK — left */}
          <div
            ref={btnWorkRef}
            className="absolute z-20"
            style={{
              left: "calc(50% - 350px)",
              top: "44%",
              transform: "translateY(-50%) rotate(-18deg)",
            }}
          >
            <Link href={"/"} className=" text-black font-NeueMontreal  py-4 px-8 rounded-sm bg-[#7eb89a]">Work</Link>
          </div>

          {/* SKILLS — top */}
          <div
            ref={btnSkillsRef}
            className="absolute z-20"
            style={{
              left: "44%",
              top: "30px",
              transform: "translateX(-50%)",
            }}
          >
            <Link href={"/"} className=" text-black font-NeueMontreal  py-4 px-8 rounded-sm bg-[#7eb89a]">Skills</Link>
          </div>

          {/* ABOUT — right */}
          <div
            ref={btnAboutRef}
            className="absolute z-20"
            style={{
              left: "calc(50% + 250px)",
              top: "55%",
              transform: "translateY(-50%) rotate(14deg)",
            }}
          >
           <Link href={"/"} className=" text-black font-NeueMontreal  py-4 px-8 rounded-sm bg-[#7eb89a]">About</Link>
          </div>
        </div>

        {/* ── Headline + body ── */}
        <div className="text-center px-8 mt-4 max-w-5xl mx-auto w-full">
          <h1
            ref={headlineRef}
            className="font-black uppercase leading-none font-Akira text-[#7eb89a] text-5xl"
          
          >
            I help your customers understand why your product matters.
          </h1>

          <p
            ref={bodyRef}
            className="mt-5 mx-auto text-white/70 font-NeueMontreal max-w-2xl "
           
          >
            I help SaaS, AI, and tech companies turn complex products into clear
            visual stories through research, strategy, storytelling, and motion
            design.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          MOBILE HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="block md:hidden bg-black min-h-screen">

        {/* ── Sticky navbar row ── */}
        <nav className="flex items-center justify-between px-5 pt-5 pb-3 relative z-30">
          <SocialPill />
          <button
            onClick={toggleMobileNav}
            aria-label="Toggle menu"
            className="w-11 h-11 flex items-center justify-center"
          >
            <TriangleIcon open={mobileNavOpen} />
          </button>
        </nav>

        {/* ── Expanding teal nav panel (pushes content down) ── */}
        <div
          ref={navPanelRef}
          className="overflow-hidden relative z-20"
          style={{
            display: "none",         // GSAP will set to block on open
            height: 0,
            background: "#0d3d36",
          }}
        >
          {/* Decorative wavy lines inside panel */}
          <MobileWavyLines />

          {/* Nav link items */}
          <div
            ref={navLinksRef}
            className="relative z-10 flex flex-col items-center gap-6 py-10"
          >
            {["About", "Work", "Skills"].map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={toggleMobileNav}
                className="text-white font-black uppercase hover:text-green-300 transition-colors"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
                  fontSize: "2.6rem",
                  letterSpacing: "0.15em",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Hero content — pushed down by nav ── */}
        <div
          ref={heroContentRef}
          className="flex flex-col items-center px-5 pt-10 pb-10"
        >
          {/* Profile circle */}
          <div
            className="relative rounded-full overflow-hidden mb-8 shrink-0"
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <Image
              src="/Images/profileImagePortfolio.png"
              alt="Ghulam Muhammad"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Headline */}
          <h1
            className="font-black uppercase text-left w-full"
            style={{
              fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
              fontSize: "clamp(2.4rem, 9vw, 3rem)",
              letterSpacing: "0.03em",
              lineHeight: 1.05,
              color: "#7eb89a",
            }}
          >
            I help your customers understand why your product matters.
          </h1>

          <p
            className="text-white/70 mt-4 w-full"
            style={{ fontSize: "0.95rem", lineHeight: "1.65" }}
          >
            I help SaaS, AI, and tech companies turn complex products into clear
            visual stories through research, strategy, storytelling, and motion
            design.
          </p>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────────────────── */

function NavLabelButton({ href, label }) {
  return (
    <Link
      href={href}
      className="block font-black uppercase hover:opacity-75 transition-opacity"
      style={{
        fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
        background: "#7eb89a",
        color: "#0a1a0f",
        padding: "5px 18px",
        borderRadius: "6px",
        letterSpacing: "0.12em",
        fontSize: "0.9rem",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Link>
  );
}

function SocialPill() {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2 rounded-full"
      style={{ background: "#111", border: "1px solid #222" }}
    >
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>

      <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </Link>

      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="#fff" stroke="none" />
        </svg>
      </Link>
    </div>
  );
}

function TriangleIcon({ open }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.35s ease",
      }}
    >
      <polygon points="18,28 4,8 32,8" fill="white" />
    </svg>
  );
}

function MobileWavyLines() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      viewBox="0 0 390 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.45 }}
    >
      <path d="M -30 80 Q 60 30 130 110 Q 190 180 90 260" stroke="#7eb89a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 420 60 Q 330 10 260 100 Q 200 180 320 280" stroke="#7eb89a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 155 20 Q 195 -10 235 25 Q 265 55 195 100" stroke="#7eb89a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}