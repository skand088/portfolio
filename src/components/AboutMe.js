import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => (
  <section
    id="about"
    className="max-w-3xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center animate-fade-in"
  >
    <img
      src="simar-kandola-cute.png"
      alt="Profile"
      className="border-4 w-96 h-96 rounded-full object-cover border-pinky4 shadow-lg md:mr-8 mb-6 md:mb-0"
    />
    <div className="flex-1 w-full md:w-auto">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-extrabold text-pinky5 mb-2 text-center md:text-left">
          SIMAR KANDOLA 💫
        </h1>
        <p className="text-gray-700 mb-4 text-center md:text-left">
          Hi, I'm Sim. I'm a 3rd Software Engineering Student @ UCalgary. I love
          web development.🌸
        </p>
        <div className="bg-white rounded-xl px-6 py-2 shadow text-pinky5 border border-pinky2 w-fit mb-2">
          <span className="block">
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            <a
              href="mailto:simarkandola51@gmail.com"
              className="underline hover:text-pinky4"
            >
              Email
            </a>
          </span>
          <span className="flex items-center gap-1">
            <FaLinkedin className="inline text-blue-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/simar-kandola-5308b1292/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pinky4"
            >
              LinkedIn
            </a>
          </span>
          <span className="flex items-center gap-1">
            <FaGithub className="inline text-black text-xl" />
            <a
              href="https://www.github.com/skand088"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pinky4"
            >
              GitHub
            </a>
          </span>
          <span className="block">
            <span role="img" aria-label="resume">
              📄
            </span>{" "}
            <a
              href="/simar_kandola_aug2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pinky4"
            >
              Resume
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
