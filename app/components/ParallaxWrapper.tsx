"use client";

import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

const ParallaxWrapper = ({ children }: ParallaxWrapperProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      gyroscope: true // added
    });

    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <div ref={sceneRef}>{children}</div>

    // <div
    //   globalFactorX={0.1}
    //   globalFactorY={0.1}
    //   className="bg-[url(/imgs/DSCF0121.JPG)] blur-[2px] brightness-80 bg-center bg-cover bg-no-repeat w-screen h-screen"
    // >
    //   <MouseParallaxChild factorX={0.3} factorY={0.5}>
    //     <div className="bg-[url(/imgs/DSCF0121.JPG)] blur-[3px] brightness-80 bg-center bg-cover bg-no-repeat w-screen h-screen"></div>
    //   </MouseParallaxChild>
    // </div>
  );
};

export default ParallaxWrapper;
