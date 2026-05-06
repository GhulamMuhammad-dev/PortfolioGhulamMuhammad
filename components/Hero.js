"use client"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
    const textRef=useRef(null)

    useEffect(()=>{
      gsap.from(textRef.current, {
      x: -10,
      opacity: 0,
      duration: 3,
      ease: "ease.in",
    });
    },[]);




  return (
    <section className=' border-2 border-accent-blue min-h-screen bg-white max-w-full mx-auto px-16  flex items-center' >
      
      <h1 ref={textRef}  className='max-w-4/6 font-sans  text-accent-blue text-6xl  leading-tight'>Turning Complex Products Into <span className="text-primary-blue font-bold"> Visually Compelling </span> Brand Experiences.</h1>


    </section>
  )
}

export default Hero