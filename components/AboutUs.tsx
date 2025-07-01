"use client";
import { aboutUsCards } from "@/constants/aboutUsCards";
import Image from "next/image";
import React, { useRef } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    //scroll to 400 pixels down from the top
    const width = containerRef.current?.scrollWidth;
    gsap.from(containerRef.current, {
      duration: 1,
      scrollTo: { x: width },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% bottom",
        end: "bottom top",
        // toggleActions: "play reverse play reverse"
        // pin: true,
        // scrub:1,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center overflow-x-auto scrollbar-hide m-0"
    >
      {aboutUsCards.map((card) => (
        <div
          className={`p-10 h-[70%] flex justify-center w-[90%] md:max-w-[calc(100%/2.5)] lg:max-w-[calc(90%/3.5)] bg-white text-[150%] font-syne shrink-0 mx-5 rounded-3xl z-1`}
          key={card.id}
        >
          {card.highlighted ? (
            <p className="text-black text-syne ">
              <span className="font-bold text-3xl block mb-5">
                {card.highlighted}
              </span>
              {card.rest}
            </p>
          ) : (
            <p>{card.data}</p>
          )}
        </div>
      ))}
      <div className="min-h-[100%] min-w-[100%] absolute bg-red-300 -z-2">
        <Image
          src={"/foodbg.jpg"}
          alt="eatwomen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-500 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    </div>
  );
};

export default AboutUs;
