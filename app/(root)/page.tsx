import ParallaxWrapper from "../components/ParallaxWrapper";
import MainCard from "../components/MainCard";

export default function Home() {
  return (
    <div>
      <ParallaxWrapper>
        <div data-depth="0.6">
          <div className="bg-[url(/imgs/DSCF0121.JPG)] blur-[3px] brightness-80 bg-center bg-cover bg-no-repeat w-screen h-screen"></div>
        </div>
        <div data-depth="0.2"  className="h-screen w-screen border-2 flex justify-center items-center">
          <MainCard />
        </div>
      </ParallaxWrapper>
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <MainCard />
      </div> */}
    </div>
  );
}
