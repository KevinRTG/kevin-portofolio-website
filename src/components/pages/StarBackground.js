import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#ffffffff" },
        particles: {
          number: { value: 150 },
          color: { value: "#000000ff" }, // ✅ abu gelap
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 1.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.0,
            direction: "bottom",
            random: true,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarBackground;
