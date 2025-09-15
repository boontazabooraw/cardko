"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { BsDiscord, BsSteam } from "react-icons/bs";
import { SiBattledotnet, SiRoblox, SiEpicgames } from "react-icons/si";

const MainCard = () => {
  return (
    <div
      className="h-20 w-100 p-15  rounded-lg flex flex-col justify-center items-center gap-2
    drop-shadow-sm transition-all duration-500 ease-in">
      <div className="flex flex-row gap-5">
        <Tippy
          content="buntasaburo"
          arrow={false}
          interactive={true}
          offset={[140, -250]}
          className="font-bold text-[20rem]"
        >
          <a href="https://discordapp.com/users/859743349740929034">
            <BsDiscord
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
            />
          </a>
        </Tippy>

        <Tippy
          content="makati itlog ko"
          arrow={false}
          interactive={true}
          offset={[75, -250]}
          className="font-bold text-[20rem]"
        >
          <a href="https://steamcommunity.com/id/allyouneedtodoisstickittotheman/">
            <BsSteam
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
            />
          </a>
        </Tippy>

        <Tippy
          content="MadBytez"
          arrow={false}
          interactive={true}
          offset={[0, -250]}
          className="font-bold text-[20rem]"
        >
          <a href="#">
            <SiEpicgames
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
            />
          </a>
        </Tippy>

        <Tippy
          content="PawisangBilat"
          arrow={false}
          interactive={true}
          offset={[-68, -250]}
          className="font-bold text-[20rem]"
        >
          <a href="#">
            <SiRoblox
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
            />
          </a>
        </Tippy>

        <Tippy
          content="DEPRESS1ON#1393"
          arrow={false}
          interactive={true}
          offset={[-135, -250]}
          className="font-bold text-[20rem]"
        >
          <a href="#">
            <SiBattledotnet
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in"
            />
          </a>
        </Tippy>
      </div>
      <div>
        <h1 className="font-bold">beesechurger / buntasaburo</h1>
      </div>
    </div>
  );
};

export default MainCard;
