"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function WorkCard({ title, description, image, href }) {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    // Image zoom OUT + blur
    gsap.to(imageRef.current, {
      scale: 1.2,
      filter: "blur(4px)",
      duration: 0.5,
      ease: "power3.out",
    });

    // Overlay fade in
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
    });

    // Text slide from top
    gsap.fromTo(
      textRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  };

  const handleMouseLeave = () => {
    // Reset image
    gsap.to(imageRef.current, {
      scale: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out",
    });

    // Hide overlay
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    });

    // Hide text
    gsap.to(textRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <Link href={href}>
      <div
        className="group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-sm md:h-96">
          
          {/* Image */}
          <div ref={imageRef}>
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center"
          >
            {/* Description Text */}
            <p
              ref={textRef}
              className="text-white text-center px-4 text-sm"
            >
              {description}
            </p>
          </div>
        </div>

        {/* Title below */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-black/60">{title}</h3>
        </div>
      </div>
    </Link>
  );
}