import React, { useEffect, useRef } from "react";

// A small mascot that slides along the experience vertical bar as you scroll.
// Expects the Experience section to have id="experience" and the bar to have id="experience-bar".
// On mobile (bar hidden), this stays hidden as well.
const ScrollMascot = ({ imgSrc = "/hello-kitty.png", size = 56, alt = "Hello Kitty", xOffset = 16 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const section = document.getElementById("experience");
    const bar = document.getElementById("experience-bar");
    const el = ref.current;
    if (!section || !bar || !el) return;

    let rafId = null;

    const update = () => {
      const sRect = section.getBoundingClientRect();
      const bRect = bar.getBoundingClientRect();
      const centerY = window.innerHeight / 2;

      // Progress of viewport center moving from top to bottom of bar
      const raw = (centerY - bRect.top) / bRect.height;
      const progress = Math.max(0, Math.min(1, raw));

      // Keep mascot within bar height minus its own size to avoid overflow
  const offset = progress * Math.max(0, bRect.height - size);
  // Position centered on the bar, then push slightly to the right (xOffset)
  el.style.transform = `translateX(-50%) translateY(${offset}px) translateX(${xOffset}px)`;

      // Hide when section is out of viewport
      const isVisible = sRect.bottom > 0 && sRect.top < window.innerHeight;
      el.style.opacity = isVisible ? "1" : "0";
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [size, xOffset]);

  const onImgError = (e) => {
    // Hide broken image; show fallback next sibling
    e.currentTarget.style.display = "none";
    const fallback = e.currentTarget.nextElementSibling;
    if (fallback) fallback.style.display = "flex";
  };

  return (
    <div
      ref={ref}
      className="hidden md:block absolute left-1/2 top-24 z-20 transition-transform duration-150 ease-out"
      style={{ width: "auto", height: size, opacity: 0 }}
      aria-hidden
    >
      <img
        src={imgSrc}
        alt={alt}
        onError={onImgError}
        className="h-full w-auto select-none"
        draggable={false}
      />
      <div
        className="items-center justify-center h-full text-2xl"
        style={{ display: "none" }}
      >
        🐱
      </div>
    </div>
  );
};

export default ScrollMascot;
