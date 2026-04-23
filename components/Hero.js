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
    <div className='min-h-screen bg-sky-100 max-w-full mx-auto px-16 py-4 flex items-center' ref={textRef}>
      
      <h1 className='text-black text-5xl'>I love creating connection between <br></br> brands and games with their target Audiance </h1>


    </div>
  )
}

export default Hero