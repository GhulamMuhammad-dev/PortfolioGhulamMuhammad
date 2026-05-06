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
    <section className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/Images/about-profile.jpg"
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
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
              About Me
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm Your Name
            </h1>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed">
            I am a creative developer and digital artist passionate about building
            immersive experiences through web development, 3D art, motion design,
            and interactive technology. My work combines technical precision with
            artistic storytelling to craft products that are both functional and
            visually compelling.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Over time, I have focused on mastering modern frontend development,
            animation systems, real-time graphics, and creative production
            pipelines. I enjoy solving complex problems, designing elegant user
            experiences, and pushing creative boundaries through technology.
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
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
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