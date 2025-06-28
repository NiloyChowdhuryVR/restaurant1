"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const BigImage = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(()=>{

        gsap.to(containerRef.current,{
            scale: 0.9,
            borderRadius:"50px",
            scrollTrigger:{
                trigger:containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        })

    },[])


  return (
    <div ref={containerRef} className='h-full w-full relative overflow-hidden rounded-[0px] will-change-transform'>
        <Image src={"/momoshrink-1.jpg"} alt='Momo' height={1600} width={900} className='object-cover w-[100%] max-h-screen'/>
    </div>
  )
}

export default BigImage