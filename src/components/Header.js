import React from "react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-pinky2 shadow-lg">
    <nav className="flex justify-center py-4">
      <button
        onClick={() => scrollToSection("about")}
        className="mx-4 text-pinky5 font-bold text-lg hover:text-pinky4 transition-colors duration-300 bg-transparent border-none cursor-pointer"
        style={{ background: "none", border: "none" }}
      >
        About Me
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className="mx-4 text-pinky5 font-bold text-lg hover:text-pinky4 transition-colors duration-300 bg-transparent border-none cursor-pointer"
        style={{ background: "none", border: "none" }}
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="mx-4 text-pinky5 font-bold text-lg hover:text-pinky4 transition-colors duration-300 bg-transparent border-none cursor-pointer"
        style={{ background: "none", border: "none" }}
      >
        Projects
      </button>
    </nav>
  </header>
);

export default Header;
