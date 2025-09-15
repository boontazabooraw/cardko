import ParallaxWrapper from "../components/ParallaxWrapper";
import MainCard from "../components/MainCard";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <ParallaxWrapper>
          <div data-depth={0.6}>
            <div className="blur-[0px] brightness-70 bg-center bg-cover bg-no-repeat w-screen h-screen scale-110">
              <Image
                src="/imgs/DSCF0121.JPG"
                alt="preview"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        </ParallaxWrapper>
      </div>
      <div
        className="h-[100%] w-[100%] flex items-center justify-center z-10
      "
      >
        <ParallaxWrapper>
          <div data-depth={0.2} className="pointer-events-auto">
            <MainCard />
          </div>
        </ParallaxWrapper>
      </div>

      <div
        className="bg-[url(/imgs/DSCF0121.JPG)] blur-[3px] brightness-70 bg-center bg-cover bg-no-repeat w-screen h-screen
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
      ></div>
    </div>

    /* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <MainCard />
      </div> */

    // <div className="h-screen relative z-0">
    //   <div className="">
    //     <BackgroundImg />
    //   </div>
    //   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    //     <MainCard />
    //   </div>
    // </div>
  );
}
