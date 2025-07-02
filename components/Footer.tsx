"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const [value,setValue] = useState("");

  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(footerRef.current, {
      scale: 0.97,
      borderRadius: "50px",
      duration: 0.7,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={footerRef} className="h-screen w-full bg-red-500 flex justify-center items-center flex-col gap-5">
      <div className="w-[95%] ">
        <div className="flex flex-col gap-3 items-center lg:items-baseline">
            <div className="w-[95%]">
          <h1 className="font-syne text-center lg:text-start text-xl font-semibold text-white">Subscribe to our Newsletter.</h1>
            </div>
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-baseline">
            <input value={value} onChange={(e)=>setValue(e.target.value)} className="bg-white w-full lg:w-80 py-2 px-5 rounded-4xl text-lg font-syne" type="text" placeholder="Enter Your Email" />
            <button className="font-syne border-1 py-2 rounded-4xl text-white border-white cursor-pointer hover:bg-white hover:text-black text-lg w-full lg:w-30">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-[4.6rem] md:text-[10.5rem] lg:text-[13rem] xl:text-[16rem] 2xl:text-[18rem] text-white font-dongpora">Himalaya Bites</h1>
      </div>

      <div className=" border-t-2 w-[95%] border-white flex flex-col lg:flex-row justify-between py-5 text-center lg:text-start">
        <div>
            <h1 className="font-syne text-white cursor-pointer  ">copyright 2025</h1>
        </div>
        <div className="flex lg:gap-5 flex-col lg:flex-row">
            <h1 className="font-syne text-white cursor-pointer ">Privacy Policy</h1>
            <h1 className="font-syne text-white cursor-pointer ">Terms and Conditions</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
