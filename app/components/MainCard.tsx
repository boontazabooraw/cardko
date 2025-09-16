"use client";

import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { BsDiscord, BsSteam } from "react-icons/bs";
import { SiBattledotnet, SiRoblox, SiEpicgames } from "react-icons/si";
import { Id, toast } from "react-toastify";

const MainCard = () => {
  const toastId = React.useRef<Id | null>(null);

  const copied = (un: string) => {
    navigator.clipboard.writeText(un);

    if (toastId.current === null || !toast.isActive(toastId.current)) {
      toastId.current = toast("Username copied!", {
        className: "toastAll !w-40 !text-[12px] !text-center p-0 !bg-black/50",
      });
    }
  };

  return (
    <div
      className="relative h-20 w-100 p-15 rounded-lg flex flex-col justify-center items-center gap-2
    drop-shadow-sm transition-all duration-500 ease-in"
    >
      <div className="flex flex-row gap-5">
        <Tippy
          content="buntasaburo"
          arrow={false}
          interactive={true}
          offset={[140, -250]}
          className="font-bold text-[20rem]"
        >
          <a href="https://discordapp.com/users/859743349740929034" rel="noopener noreferrer">
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
          <a href="https://steamcommunity.com/id/allyouneedtodoisstickittotheman/" rel="noopener noreferrer">
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
          <button onClick={() => copied("MadBytez")}>
            <SiEpicgames
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in cursor-pointer"
            />
          </button>
        </Tippy>

        <Tippy
          content="PawisangBilat"
          arrow={false}
          interactive={true}
          offset={[-68, -250]}
          className="font-bold text-[20rem]"
        >
          <button onClick={() => copied("PawisangBilat")}>
            <SiRoblox
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in cursor-pointer"
            />
          </button>
        </Tippy>

        <Tippy
          content="DEPRESS1ON#1393"
          arrow={false}
          interactive={true}
          offset={[-135, -250]}
          className="font-bold text-[20rem]"
        >
          <button onClick={() => copied("DEPRESS1ON#1393")}>
            <SiBattledotnet
              size={50}
              className="drop-shadow-sm hover:opacity-70 transition-all duration-200 ease-in cursor-pointer"
            />
          </button>
        </Tippy>
      </div>
      <div className="">
        <h1 className="text-center font-bold tracking-[4px] text-nowrap">beesechurger / buntasaburo</h1>
      </div>
    </div>
  );
};

export default MainCard;
