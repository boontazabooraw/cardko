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

  //   const getTrack = (index: number, shouldPlay = false): void => {};

  //JANKY
  const getTrack = (index: number, autoPlay = false) => {
    soundRef.current?.stop();
    soundRef.current?.unload();

    const newSound = new Howl({
      src: [tracks[trackIndex].src],
      html5: true,
      volume: 0.2,
      onend: () => {
        const next = index + 1 + tracks.length;
        setTrackIndex(next);
        getTrack(next, true);
      },
    });

    soundRef.current = newSound;
    setTrackIndex(index);

    if (autoPlay) {
      newSound.play();
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  const nextTrack = () => {
    //JANKY
    const next = (trackIndex + 1) % tracks.length;
    getTrack(next, isPlaying);
  };

  const prevTrack = () => {
    //JANKY
    const next = (trackIndex - 1 + tracks.length) % tracks.length;
    getTrack(next, isPlaying);
  };

  const play = () => {
    setPlaying(true);
    soundRef.current?.play();
  };
  const pause = () => {
    setPlaying(false);
    soundRef.current?.pause();
  };

  const stop = () => soundRef.current?.stop();

  useEffect(() => {
    getTrack(trackIndex, true);
    return () => {
      soundRef.current?.unload();
    };
  }, []);

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
