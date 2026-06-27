'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Page() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1b11] flex flex-col w-full">
      {/* Navigation Header manages the toggle height controls */}
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      
      {/* The main body wrapper node. 
        The flex layout natively pushes the structure down when the accordion opens.
      */}
      <main className="grow w-full relative z-10">
        <Hero />
        {/* Rest of page layout content / Portfolio Case Study goes here */}
      </main>
    </div>
  );
}