import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const ShootingStarsParticles = () => {
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: "transparent",
        },
        fullScreen: { enable: true, zIndex: -10 },
        particles: {
          number: { value: 80 },
          move: {
            direction: "bottom-left",
            speed: 2,
            straight: false,
            outModes: { default: "out" },
          },
          shape: { type: "star" },
          opacity: { value: 1 },
          size: { value: 2 },
        },
      }}
    />
  );
};

export default ShootingStarsParticles;
