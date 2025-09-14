"use client";

import Image from "next/image";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const bgHeroStyle = {
  filter: "brightness(0.7)",

  mask: "linear-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
};

const BackgroundImg = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}
    className="bg-[url(/imgs/DSCF0121.JPG)] blur-[2px] brightness-80 bg-center bg-cover bg-no-repeat w-screen h-screen">
      <MouseParallaxChild factorX={0.3} factorY={0.5}>
        <div className="bg-[url(/imgs/DSCF0121.JPG)] blur-[3px] brightness-80 bg-center bg-cover bg-no-repeat w-screen h-screen"></div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default BackgroundImg;
