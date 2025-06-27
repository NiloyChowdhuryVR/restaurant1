"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Nav from "./Nav";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.4,
    });

    let split;
    SplitText.create(".try", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 1,
          delay: 0.7,
          yPercent: 100,
          opacity: 0,
          stagger: 0.3,
          ease: "expo.out",
        });
        return split;
      },
    });

    gsap.from(headingRef.current,{
      y:50,
      opacity:0,
      duration:1,
      delay:1.4
    })
  }, []);

  



  useEffect(()=>{

    const handleMouseMove = (e:MouseEvent)=>{
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const moveX = (e.clientX - centerX) / centerX; // range -1 to 1
      const moveY = (e.clientY - centerY) / centerY;

      gsap.to(bgRef.current,{
        x: moveX * 8,
        y: moveY * 8,
        duration:0.5,
        ease: "power3.out",
      })

      gsap.to(heroRef.current,{
        x: moveX * -6,
        y: moveY * -6,
        duration:0.5,
        ease: "power3.out"
      })
    }

    window.addEventListener("mousemove",handleMouseMove)

    return()=>{
      window.removeEventListener("mousemove",handleMouseMove)
    }

  },[])

  return (
    <div className="h-[100svh] flex flex-col items-center overflow-y-hidden overflow-x-hidden">
      <div className="w-full">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full " ref={bgRef}>
        <div className="relative h-full w-full">
          <Image
            src={"/foodbg.jpg"}
            alt="foodbg"
            fill
            priority
            className=" object-cover -z-10"
          />
        </div>
        <div className="absolute inset-0 bg-red-500 mix-blend-multiply -z-9"></div>
        <div className="absolute inset-0 bg-black opacity-30 -z-9"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  items-center pt-5 h-full w-[90%] ">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="try font-prostrike text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-white text-center uppercase tracking-wider text-shadow-lg">
            The Ultimate{" "}
            <span className="text-yellow-300 text-8xl block lg:inline-block">
              Momo
            </span>{" "}
            Experience
          </h1>
          <div ref={headingRef}>
            {/* <button
              className="bg-yellow-300 py-3 px-6 rounded-4xl font-syne font-extrabold text-black"
              onClick={handleOpen}
            >
              Buy Now
            </button> */}
<button className="before:ease relative h-12 w-40 text-xl font-syne font-extrabold overflow-hidden border border-white text-white cursor-pointer shadow-2xl transition-all
  before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-yellow-500 before:duration-300
  hover:text-white hover:shadow-yellow-500 hover:before:h-64 hover:before:-translate-y-32
  active:text-white active:shadow-yellow-500 active:before:h-64 active:before:-translate-y-32">
  <span className="relative z-9">Buy Now</span>
</button>

          </div>
        </div>
        <div ref={heroRef} className="flex justify-center">
          <Image
            src={"/momobowl-3.png"}
            alt="momo"
            height={800}
            width={800}
            className="min-w-[100%] md:w-80 lg:w-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
