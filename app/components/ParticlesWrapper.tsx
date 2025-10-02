"use client";

import Particles from "./Particles";

const ParticlesWrapper = () => {
  
  return (
    <div
      className="pointer-events-auto"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={400}
        particleSpread={10}
        speed={0.5}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesWrapper;
