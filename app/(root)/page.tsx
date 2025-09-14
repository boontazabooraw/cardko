

import BackgroundImg from "../components/BackgroundImg";
import MainCard from "../components/MainCard";



export default function Home() {
  return (
    <div className="h-screen relative z-0">
      <div className="">
        <BackgroundImg />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <MainCard />
      </div>
    </div>
  );
}
