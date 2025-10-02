"use client";

import {
  TbPlayerPause,
  TbPlayerPlay,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
} from "react-icons/tb";
import { useAudioPlayer } from "../utils/hooks/useAudioPlayer";

const AudioControls = () => {
  const { track, play, pause, stop, nextTrack, prevTrack, isPlaying } =
    useAudioPlayer();

  return (
    <div className="flex flex-row items-center gap-10 opacity-80">
      <button
        onClick={prevTrack}
        className={`transition-opacity duration-300 ease-in-out 
            ${isPlaying ? "hover:opacity-80 visible" : "opacity-0 invisible"}`}
      >
        <TbPlayerSkipBack size={30} />
      </button>

      {isPlaying ? (
        <button
          onClick={pause}
          className="hover:opacity-80 transition-opacity duration-300 ease-in-out"
        >
          <TbPlayerPause size={30} />
        </button>
      ) : (
        <button
          onClick={play}
          className="hover:opacity-80 transition-opacity duration-300 ease-in-out"
        >
          <TbPlayerPlay size={30} />
        </button>
      )}

      {/* <button onClick={stop}>⏹️ Stop</button> */}
      <button
        onClick={nextTrack}
        className={`transition-opacity duration-300 ease-in-out 
            ${isPlaying ? "hover:opacity-80 visible" : "opacity-0 invisible"}`}
      >
        <TbPlayerSkipForward size={30} />
      </button>
    </div>
  );
};

export default AudioControls;
