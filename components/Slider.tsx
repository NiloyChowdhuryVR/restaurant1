"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeDiv = useRef<HTMLDivElement>(null);

  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      // Duplicate content for seamless loop
      marquee.innerHTML += marquee.innerHTML;

      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeDiv.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    },
    { scope: marqueeRef }
  );

  return (
    <div
      ref={marqueeDiv}
      className="w-full z-9999 overflow-hidden bg-yellow-300 cursor-pointer"
    >
      <div
        ref={marqueeRef}
        className="flex font-bold text-4xl gap-16"
      >
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>
        <Image src={"/logo-trans.png"} alt="logo" height={100} width={100} className="w-[15%] md:w-[8%]"/>

      </div>
    </div>
  );
};

export default Marquee;
