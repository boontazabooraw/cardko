"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AudioPlayerContextProps {
    isPlaying: boolean;
    togglePlay: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined);

export function useAudioPlayerContext() { 
    const conteks = useContext(AudioPlayerContext);
    if (!conteks) throw new Error ("useAudioPlayerContext must be used inside AudioPlayerProvider");
    return conteks;
}

export function AudioPlayerProvider({children} : {children:ReactNode}) {
    const [isPlaying, setPlaying] = useState(false);
    const togglePlay = () => setPlaying((prev) => !prev);

    return (
        <AudioPlayerContext.Provider value={{isPlaying, togglePlay}}>
            {children}
        </AudioPlayerContext.Provider>
    );
}


