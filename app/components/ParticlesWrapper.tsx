"use client";

import Particles from "./Particles";
import { useAudioPlayerContext } from "../utils/context/AudioPlayerProvider";

const ParticlesWrapper = () => {
  const { isPlaying } = useAudioPlayerContext();
  return (
    <div
      className={`pointer-events-auto ${
        isPlaying ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <Particles
        particleColors={["#c48c87", "#4d2c29"]}
        particleCount={200}
        particleSpread={10}
        speed={2}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesWrapper;
