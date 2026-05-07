"use client";

import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",

    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/yourusername",

    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourusername",

    },
    {
      name: "Email",
      href: "mailto:your@email.com",

    },
  ];

  return (
    <section className="min-h-screen bg-white text-accent-blue px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/personal/aboutProfile.png"
              alt="Profile Picture"
              width={700}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white mb-3">
              About Me
            </p>

            <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight">
              Hi, I'm  <span className="text-primary-blue">Ghulam Muhammad</span>
            </h1>
          </div>

          <p className="font-sans  text-accent-blue/80  text-lg leading-relaxed">
            I’m a <span className="font-bold">3D Motion Designer</span> and <span className=" font-bold">Indie Game Developer</span> focused on creating <span className=" font-bold">visually compelling experiences</span> that blend storytelling, design, and technology.<br></br>
            My background in interactive systems and real-time development gives me a unique perspective on motion design allowing me to create work that is not only visually polished, but immersive, intentional, and strategically built for <span className=" font-bold">modern digital brands</span>.

            I partner with startups, agencies, and forward-thinking companies to help them communicate their ideas through premium visual storytelling.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-primary-blue hover:text-white text-primary-blue transition-all duration-300"
                >
                  <span>{social.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}