'use client'
import React from 'react'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const page = () => {
    const TextRef=useRef(null);

     useEffect(() => {
    // Navbar fade-in
    gsap.from(TextRef.current, {
      y: -200,
      skew:30,
      repeat:-1,
      duration: 2,
      ease: "power3.out",
      yoyo:true,
    });
 

  }, []);
  return (
    <section  className='h-screen bg-black flex items-center justify-center'>
       
       <h1 ref={TextRef} className='text-8xl text-amber-500'>Hello World</h1>
    
    </section>
  )
}

export default page