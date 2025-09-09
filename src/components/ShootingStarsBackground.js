import React, { useEffect, useRef } from "react";

const STAR_EMOJI = "🌠";
const STAR_COUNT = 6;
const DURATION = 3000; // ms

const ShootingStarsBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("span");
      star.innerText = STAR_EMOJI;
      star.style.position = "absolute";
      star.style.fontSize = "2.5rem";
      star.style.opacity = "0.8";
      star.style.pointerEvents = "none";
      star.style.transition = `transform ${DURATION}ms linear, opacity 0.5s`;
      container.appendChild(star);
      stars.push(star);
    }

    function animateStar(star) {
      // Start at random top offset, right edge
      const startTop = Math.random() * 100;
      star.style.left = "100vw";
      star.style.top = `${startTop}vh`;
      star.style.opacity = "0.8";
      star.style.transform = "none";
      // Animate to bottom left, spanning the whole viewport
      setTimeout(() => {
        star.style.transform = `translate(-120vw, 120vh)`;
        star.style.opacity = "0";
      }, 50);
      // Reset after animation
      setTimeout(() => {
        animateStar(star);
      }, DURATION + 500);
    }

    stars.forEach((star, i) => {
      setTimeout(() => animateStar(star), i * (DURATION / STAR_COUNT));
    });

    return () => {
      stars.forEach((star) => container.removeChild(star));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none -z-10"
      style={{ overflow: "hidden", width: "100vw", height: "100vh" }}
    />
  );
};

export default ShootingStarsBackground;
