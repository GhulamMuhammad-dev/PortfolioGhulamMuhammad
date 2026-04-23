"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const ImgRef=useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Navbar fade-in
    gsap.from(navRef.current, {
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Links stagger animation
    gsap.from(linksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.15,
      delay: 0.3,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="w-full bg-sky-100 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-full mx-auto px-16 py-4 flex items-center justify-between">
        
        {/* Logo */}
         <div ref={ImgRef} className="p-4">
                    <Image
                      src="/Images/myPortfolioIcon.png"
                      alt="my logo"
                      width={150}
                      height={150}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-black text-sm uppercase tracking-wide">
          {["Work", "About"].map((item, i) => (
            <a
              key={item}
              ref={(el) => (linksRef.current[i] = el)}
              href="#"
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>





        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden h-0 opacity-0 bg-black/90"
      >
        <div className="flex flex-col items-center space-y-6 py-6 text-white uppercase">
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
}