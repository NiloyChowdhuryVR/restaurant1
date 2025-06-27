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
      className="w-full overflow-hidden bg-yellow-300 py-4 cursor-pointer"
    >
      <div
        ref={marqueeRef}
        className="flex font-bold text-4xl gap-16"
      >
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>
        <Image src={"/wowmomo-svg.svg"} alt="logo" height={100} width={100} className="w-[6%]"/>

      </div>
    </div>
  );
};

export default Marquee;
