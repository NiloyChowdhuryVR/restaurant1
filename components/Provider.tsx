"use client";
import React, { useEffect, useState } from "react";
import PreLoader from "./PreLoader";
import Lenis from "lenis";
import { ClerkProvider} from "@clerk/nextjs";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);
    }

    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const handlePreLoaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setIsLoading(false);
  };


return (
  <div>
      {isLoading ? <PreLoader setIsLoading={handlePreLoaderComplete} /> : null}
      <ClerkProvider>
        {children}
        </ClerkProvider>
    </div>
  );
};

export default Provider;
