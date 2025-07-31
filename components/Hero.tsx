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
  const blobRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.7,
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

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1.4,
    });
  }, []);

  useEffect(() => {
    const animateBlob = () => {
      gsap.to(blobRef.current, {
        scaleX: gsap.utils.random(0.8, 1.2),
        scaleY: gsap.utils.random(0.8, 1.2),
        rotation: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(0.4, 1),
        ease: "sine.inOut",
        onComplete: animateBlob,
      });
    };

    animateBlob();

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const moveX = (e.clientX - centerX) / centerX; // range -1 to 1
      const moveY = (e.clientY - centerY) / centerY;

      gsap.to(bgRef.current, {
        x: moveX * 8,
        y: moveY * 8,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(heroRef.current, {
        x: moveX * -6,
        y: moveY * -6,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(blobRef.current, {
        x: e.clientX,
        y: e.clientY,
        ease: "sine.out",
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-[100svh] flex flex-col items-center overflow-y-hidden overflow-x-hidden">
      <div
        ref={blobRef}
        className=" z-9999 hidden lg:block fixed pointer-events-none rounded-[100%] mix-blend-overlay  h-10 w-10 bg-white left-0 top-0 -translate-1/2"
      ></div>
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
        <div className="absolute inset-0 bg-black opacity-20 -z-9"></div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between  items-center pt-5 h-full w-[90%] ">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="try font-prostrike text-[150%] md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-white text-center uppercase tracking-wider text-shadow-lg">
            The Ultimate{" "}
            <span className="text-yellow-300 text-8xl block lg:inline-block">
              Momo
            </span>{" "}
            Experience
          </h1>
          <div ref={headingRef}>
            <button
              className="before:ease relative h-12 w-40 text-xl font-syne font-extrabold overflow-hidden border rounded-4xl border-white text-black bg-yellow-300 cursor-pointer shadow-2xl transition-all
  before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300
  hover:text-black hover:before:h-64 hover:before:-translate-y-32
  active:text-white active:before:h-64 active:before:-translate-y-32"
            >
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
            className="min-w-[100%] md:w-[70%] xl:w-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
