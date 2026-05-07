"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-accent-blue font-sans ">
      
      
        <div className="max-w-full mx-auto px-16 py-44 flex flex-col md:flex-row items-start md:items-center md:justify-between ">
        {/* Logo + Social Links */}
        <div>
          <h2 className="text-xl font-semibold leading-tight">
            Ghulam<br />Muhammad.
          </h2>

          <div className="flex gap-4 mt-4 text-sm text-gray-400">
            <Link href="https://github.com" target="_blank" className="hover:text-white transition">
              GitHub
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
              LinkedIn
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
              Twitter
            </Link>
          </div>
        </div>

        {/* Contact Message */}
        <div className="max-w-md">
          <h1 className="font-bold text-4xl py-2">Let’s Build Something Exceptional</h1>
          <p className="text-gray-300 text-lg leading-relaxed py-2 ">
            If you’re looking for premium motion design and 3D visuals that elevate your brand and communicate your product clearly <span className="font-bold text-primary-blue">let’s talk </span>.
          </p>

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="inline-block mt-4 text-white font-medium hover:underline"
          >
            ghulammuhammad.dev@gmail.com
          </a>
          <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Ghulam Muhammad. All rights reserved.
        </div>
        </div>

        </div>

    
    </footer>
  );
}