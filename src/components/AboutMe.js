const AboutMe = () => (
  <section
    id="about"
    className="max-w-3xl mx-auto py-12 px-4 flex flex-row items-center animate-fade-in"
  >
    <img
      src="simar-kandola-cute.png"
      alt="Profile"
      className="border-4 w-64 h-64 rounded-full object-cover border-pinky4 shadow-lg mr-8"
    />
    <div className="flex-1">
      <h1 className="text-4xl font-extrabold text-pinky5 mb-2">
        SIMAR KANDOLA 💫
      </h1>
      <p className="text-gray-700 mb-4">
        Hi, I'm Sim. I'm a 3rd Software Engineering Student @ UCalgary. I love
        web development.🌸
      </p>
      <div className="bg-white rounded-xl px-6 py-2 shadow text-pinky5 border border-pinky2 w-fit">
        <span className="block">
          Email:{" "}
          <a
            href="mailto:simarkandola51@gmail.com"
            className="underline hover:text-pinky4"
          >
            simarkandola51@gmail.com
          </a>
        </span>
        <span className="block">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/simar-kandola-5308b1292/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pinky4"
          >
            LinkedIn
          </a>
        </span>
        <span className="block">
          GitHub:{" "}
          <a
            href="https://www.github.com/skand088"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pinky4"
          >
            GitHub
          </a>
        </span>
      </div>
    </div>
  </section>
);

export default AboutMe;
