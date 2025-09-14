"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { BsDiscord, BsSteam } from "react-icons/bs";
import { SiBattledotnet, SiRoblox, SiEpicgames } from "react-icons/si";
import { useRef } from "react";

const MainCard = () => {
  const discRef = useRef(null);
  const steaRef = useRef(null);
  const epicRef = useRef(null);
  const roblRef = useRef(null);
  const batlRef = useRef(null);

  return (
    <div
      className="h-20 w-100 p-15 bg-neutral-800/20 rounded-lg flex flex-col justify-center items-center gap-2
    drop-shadow-sm hover:bg-neutral-800/50 transition-all duration-500 ease-in
    "
    >
      <div className="flex flex-row gap-5">
        <a ref={discRef} href="https://discordapp.com/users/859743349740929034">
          <BsDiscord
            size={50}
            className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
          />
        </a>
        <a
          ref={steaRef}
          href="https://steamcommunity.com/id/allyouneedtodoisstickittotheman/"
        >
          <BsSteam
            size={50}
            className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
          />
        </a>
        <a href="#" ref={epicRef}>
          <SiEpicgames
            size={50}
            className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
          />
        </a>
        <a href="#" ref={roblRef}>
          <SiRoblox
            size={50}
            className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
          />
        </a>
        <a href="#" ref={batlRef}>
          <SiBattledotnet
            size={50}
            className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
          />
        </a>
      </div>
      <div>
        <h1 className="font-bold">beesechurger / buntasaburo</h1>
      </div>
      <Tippy
        content="buntasaburo"
        reference={discRef}
        arrow={false}
        interactive={true}
        offset={[140, -250]}
        className="font-bold text-[20rem]"
      />
      <Tippy
        content="makati itlog ko"
        reference={steaRef}
        arrow={false}
        interactive={true}
        offset={[75, -250]}
        className="font-bold text-[20rem]"
      />
      <Tippy
        content="MadBytez"
        reference={epicRef}
        arrow={false}
        interactive={true}
        offset={[0, -250]}
        className="font-bold text-[20rem]"
      />
      <Tippy
        content="PawisangBilat"
        reference={roblRef}
        arrow={false}
        interactive={true}
        offset={[-68, -250]}
        className="font-bold text-[20rem]"
      />
      <Tippy
        content="DEPRESS1ON#1393"
        reference={batlRef}
        arrow={false}
        interactive={true}
        offset={[-135, -250]}
        className="font-bold text-[20rem]"
      />
    </div>
  );
};

export default MainCard;
