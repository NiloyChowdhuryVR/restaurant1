"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FaGrinTongue } from "react-icons/fa";
import { FaRegGrinTongue } from "react-icons/fa";
import type { MomoItem } from "@/constants/momoItems";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const MenuCard = ({
  stars,
  reviews,
  tasteRating,
  momoHeading,
  momoSubHeading,
  offerText,
  momoDesc,
  price,
  imageSrc,
}: MomoItem) => {

  const menuCard = useRef<HTMLDivElement>(null);

  useGSAP(()=>{

    gsap.from(menuCard.current,{
      scale: 1.5,
      opacity:0,
      duration:0.5,
      scrollTrigger:{
        trigger:menuCard.current,
        start: "25% bottom",
        end: "bottom top",
      }
    })

  },[])

  return (
    <div ref={menuCard} className="lg:w-[30%] my-5 flex flex-col gap-3 h-[550px] justify-between">
      <Image
        src={imageSrc}
        alt="menu momo"
        height={400}
        width={400}
        className="rounded-tr-4xl rounded-tl-4xl w-[100%] h-[300px] overflow-hidden object-cover"
      />
      <div>
        <div className="flex gap-1">
          {[...Array(stars)].map((_, index) => (
            <FaStar key={index} />
          ))}
          <span>
            {stars} Stars ({reviews} Reviews)
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-syne text-3xl font-semibold tracking-tighter">
              {momoHeading}
            </h1>
            <h1 className="text-lg font-syne">{momoSubHeading}</h1>
          </div>
          <div className="text-right">
            <h1 className="font-syne text-3xl font-semibold tracking-tighter">
              {price}
            </h1>
            <h2 className="text-lg font-syne">GST Excluded</h2>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1 mt-2">
            {Array.from({ length: 5 }, (_, index) =>
              index < tasteRating ? (
                <FaGrinTongue key={index} size={25} />
              ) : (
                <FaRegGrinTongue key={index} size={25} />
              )
            )}
          </div>
          <h3 className="uppercase font-syne text-sm font-semibold tracking-tighter">
            {offerText}
          </h3>
        </div>
        <div className="my-2">
          <p className="text-sm font-syne line-clamp-3">{momoDesc}</p>
        </div>
        <button className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-white text-gray-800 border-gray-800 border-1 hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-110 hover:before:w-110 cursor-pointer">
          <span className="relative z-10 font-bold text-xl ">Buy Now!</span>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
