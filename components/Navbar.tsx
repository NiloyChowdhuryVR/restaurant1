"use client";
import { menuItems, socialItems } from "@/constants/menuItems";
import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ChevronRight, CircleX } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuBar = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      gsap.set(".menuitem", { x: -50, opacity: 0 });

      tl.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          if (menuBar.current) {
            menuBar.current.style.display = "none";
          }
        },
      });

      tl.current
        .from(menuBar.current, {
          y: -700,
          opacity: 0,
          duration: 0.5,
          ease: "sine.out",
        })
        .to(".menuitem", {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: -0.75,
        })
        .eventCallback("onStart", () => {
          if (menuBar.current) {
            menuBar.current.style.display = "flex";
          }
        });
    },
    { scope: menuBar }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={menuBar}
      className="w-full hidden fixed flex-col items-center h-[100svh] bg-red-600 py-4 pt-8 z-999"
    >
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.label}
          className="flex menuitem justify-between w-[90%] items-center py-4 cursor-pointer border-b-1 border-white 
          text-white transition-all duration-350
          hover:bg-yellow-300 hover:text-red-600
          active:bg-yellow-300 active:text-red-600"
        >
          <div className="flex items-baseline gap-2">
            <ArrowUpRight />
            <h1 className="font-dongpora uppercase text-8xl md:text-8xl">
              {menuItem.label}.
            </h1>
          </div>

          <div className="flex gap-5 justify-center items-center">
            {menuItem.label === "home" && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer transition-all duration-350 
                hover:scale-110 active:scale-110"
              >
                <CircleX size={70} />
              </button>
            )}
            <ChevronRight />
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center w-[90%] mt-5">
        {socialItems.map((socialItem) => (
          <div key={socialItem.label}>
            <h2 className="font-syne font-semibold text-white cursor-pointer">
              {socialItem.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
