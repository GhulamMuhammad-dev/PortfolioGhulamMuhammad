"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function GalleryCard({ item }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Initial hidden state
    gsap.set(el, { opacity: 0, y: 60 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="break-inside-avoid overflow-hidden rounded-sm group cursor-pointer my-2"
    >
      {/* IMAGE */}
      {item.type === "image" && (
        <Image
          src={item.src}
          alt={item.alt || "gallery item"}
          width={800}
          height={1000}
          quality={90} // 🔥 better quality
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* VIDEO */}
      {item.type === "video" && (
        <video
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-auto object-contain"
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
        />
      )}
    </div>
  );
}