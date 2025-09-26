import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import { tracks } from "../tracks";

export const useAudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  // This feature is too difficult to implement oh Lawd.
  // const FADE_DURATION = 1500;

  useEffect(() => {
    const sound = new Howl({
      src: [tracks[trackIndex].src],
      html5: true,
      volume: 0.2,
      onend: () => setTrackIndex((prev) => (prev + 1) % tracks.length),
    });

    soundRef.current?.unload();
    soundRef.current = sound;

    if (shouldPlay) {
      sound.play();
    }

    return () => {
      sound.unload();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex, shouldPlay]);

  //Next
  const nextTrack = () => {
    //JANKY
    setTrackIndex((prev) => (prev + 1) % tracks.length);
    setShouldPlay(true);
  };

  //Prev
  const prevTrack = () => {
    //JANKY
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setShouldPlay(true);
  };

  //Play
  const play = () => {
    setPlaying(true);
    soundRef.current?.play();
  };

  //Pause
  const pause = () => {
    setPlaying(false);
    soundRef.current?.pause();
  };

  //Pause
  const stop = () => soundRef.current?.stop();

  return {
    track: tracks[trackIndex],
    play,
    pause,
    stop,
    nextTrack,
    prevTrack,
    isPlaying,
  };
};
