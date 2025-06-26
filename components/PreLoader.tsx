import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaHeart } from "react-icons/fa";

const PreLoader = ({
  setIsLoading,
}: {
  setIsLoading: (state: boolean) => void;
}) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline();
      tl.current.to(preloaderRef.current?.querySelectorAll(".preloaderBar")!, {
          top: "-200%",
        duration: 0.7,
        stagger: 0.2,
      }).add(() => setIsLoading(false));
    },
    { scope: preloaderRef }
  );

  return (
    <div
      ref={preloaderRef}
      className="w-full fixed z-10 min-h-screen  flex justify-center items-center"
    >
      <div className="preloaderBar fixed top-0 left-0 bg-red-500 w-1/4 min-h-screen flex justify-center items-center ">
      <h1 className="text-8xl font-dongpora text-white ">W</h1></div>
      <div className="preloaderBar fixed top-0 left-1/4 bg-red-500 w-1/4 min-h-screen flex justify-center items-center ">
      <h1 className="text-8xl font-dongpora text-white ">O</h1></div>
      <div className="preloaderBar fixed top-0 left-2/4 bg-red-500 w-1/4 min-h-screen flex justify-center items-center ">
      <h1 className="text-8xl font-dongpora text-white ">W</h1></div>
      <div className="preloaderBar fixed top-0 left-3/4 bg-red-500 w-1/4 min-h-screen flex justify-center items-center ">
      <h1 className="text-8xl text-white mt-[-12px]"><FaHeart className="w-20"/></h1></div>
    </div>
  );
};

export default PreLoader;
