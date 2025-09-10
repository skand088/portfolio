import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";

const AboutMe = () => {
  const wrapperRef = useRef(null);
  const coinRef = useRef(null);
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const currentAngleRef = useRef(0); // absolute degrees progressed
  const targetAngleRef = useRef(0); // absolute degrees target
  const velocityRef = useRef(360 / 0.9); // deg/s (one full turn in ~1.5s)

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const step = (ts) => {
  if (!coinRef.current) return;
    if (!lastTsRef.current) lastTsRef.current = ts;
    const dt = (ts - lastTsRef.current) / 1000; // seconds
    lastTsRef.current = ts;

    const remaining = targetAngleRef.current - currentAngleRef.current;
    const advance = Math.min(remaining, velocityRef.current * dt);
    currentAngleRef.current += advance;

  const displayAngle = currentAngleRef.current % 360;
  coinRef.current.style.transform = `rotateY(${displayAngle}deg)`;
  coinRef.current.style.transformOrigin = "center";
  coinRef.current.style.willChange = "transform";

    if (Math.abs(targetAngleRef.current - currentAngleRef.current) > 0.1) {
      rafRef.current = requestAnimationFrame(step);
    } else {
      // Snap to target and stop
      currentAngleRef.current = targetAngleRef.current;
  coinRef.current.style.transform = `rotateY(${currentAngleRef.current % 360}deg)`;
      lastTsRef.current = 0;
      rafRef.current = null;
    }
  };

  const onSpinClick = () => {
    if (prefersReducedMotion) return;
    // Queue exactly one full spin per click
    targetAngleRef.current += 360;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    // Ensure the wrapper has perspective for 3D effect
    if (wrapperRef.current) {
      wrapperRef.current.style.perspective = "1200px";
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="max-w-3xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center animate-fade-in"
    >
      <div ref={wrapperRef} className="md:mr-8 mb-6 md:mb-0" style={{ perspective: "1200px" }}>
        <div
          ref={coinRef}
          onClick={onSpinClick}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSpinClick()}
          role="button"
          aria-label="Spin profile coin in 3D"
          tabIndex={0}
          className="w-96 h-96 rounded-full cursor-pointer select-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateY(0deg)" }}
        >
          {/* Outer ring for consistent border/shadow */}
          <div className="absolute w-96 h-96 rounded-full border-4 border-pinky4 shadow-lg pointer-events-none" style={{ transform: "translateZ(0px)" }} />

          {/* Front face (image) */}
          <img
            src="simar-kandola-cute.jpeg"
            alt="Profile"
            className="absolute inset-0 w-full h-full rounded-full object-cover"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(2px)" }}
          />

          {/* Back face (same as background color) */}
          <div
            className="absolute inset-0 w-full h-full rounded-full bg-pinky3/80"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg) translateZ(2px)" }}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="flex-1 w-full md:w-auto">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-pinky5 mb-2 text-center md:text-left">
            SIMAR KANDOLA 💫
          </h1>
          <p className="text-gray-700 mb-4 text-center md:text-left">
            Hi, I'm Sim. I'm a 3rd Software Engineering Student @ UCalgary. I love
            web development.🌸
          </p>
          <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-start mb-2">
            <a
              href="mailto:simarkandola51@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-pinky2 bg-white/70 px-4 py-1.5 text-pinky5 hover:bg-pinky1 hover:border-pinky3 transition-colors focus:outline-none focus:ring-2 focus:ring-pinky3 focus:ring-offset-1"
            >
              <span role="img" aria-label="email">📧</span>
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/simar-kandola-5308b1292/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pinky2 bg-white/70 px-4 py-1.5 text-pinky5 hover:bg-pinky1 hover:border-pinky3 transition-colors focus:outline-none focus:ring-2 focus:ring-pinky3 focus:ring-offset-1"
            >
              <FaLinkedin className="text-blue-600 text-xl" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.github.com/skand088"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pinky2 bg-white/70 px-4 py-1.5 text-pinky5 hover:bg-pinky1 hover:border-pinky3 transition-colors focus:outline-none focus:ring-2 focus:ring-pinky3 focus:ring-offset-1"
            >
              <FaGithub className="text-black text-xl" />
              <span>GitHub</span>
            </a>

            <a
              href="/simar_kandola_aug2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pinky2 bg-white/70 px-4 py-1.5 text-pinky5 hover:bg-pinky1 hover:border-pinky3 transition-colors focus:outline-none focus:ring-2 focus:ring-pinky3 focus:ring-offset-1"
            >
              <span role="img" aria-label="resume">📄</span>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
