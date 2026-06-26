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
      href: "https://linkedin.com/in/ghulammuhammad-ta",

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
            I am a multidisciplinary Creative Technologist specializing in 3D motion design, visual storytelling, and audience-centered experiences.<br></br>
<br></br>
            My work sits at the intersection of creativity, strategy, and technology. I combine 3D design, animation, motion graphics, video production, and visual communication to transform complex ideas into engaging and meaningful experiences.<br></br>
            <br></br>

            With expertise in Blender, Unreal Engine, After Effects, and DaVinci Resolve, I contribute across the entire creative pipeline from audience research and creative strategy to concept development, art direction, animation, and final delivery. I believe great visuals should do more than look impressive; they should communicate clearly, connect with audiences, and support business objectives.<br></br>
            <br></br>

            I enjoy collaborating with startups, studios, and product teams to create brand films, product visuals, marketing campaigns, and immersive digital experiences that blend cinematic quality with strategic thinking.<br></br>
            <br></br>

            My goal is to bridge the gap between business goals, user needs, and creative execution building work that not only captures attention but creates lasting impact.

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