import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import ShootingStarsParticles from "./components/ShootingStarsParticles";

const experiences = [
  {
    logo: "/rbc.png",
    company: "Royal Bank of Canada",
    location: "Toronto, ON",
    role: "Full-stack Developer Intern",
    description:
      "Fullstack development for RBC Wealth Management. Angular, Node, Express, Snowflake, MSSQL, OCP4",
    date: "May 2025 - Sept 2025",
    side: "left",
  },
  {
    logo: "/ucsolarcar.jpeg",
    company: "UCalgary Solarcar Team",
    role: "Telemetry Team Developer",
    description: "Helped build adorable web apps.",
    date: "Oct 2024 - Now",
    side: "right",
  },

  {
    logo: "/uofc.png",
    company: "University of Calgary SHAKTI AI Lab",
    role: "AI Research Intern",
    description: "Helped build adorable web apps.",
    date: "May 2024 - Sept 2024",
    side: "left",
  },
  {
    logo: "/ctclogo.png",
    company: "Code the Change YYC",
    role: "Vice President Events and Hackathon Website Dev",
    description: "Made everything sparkle and work beautifully.",
    date: "Feb 2024 - Now",
    side: "right",
  },
];

const projects = [
  {
    image: "/logo192.png",
    title: "Portfolio Website",
    description: "A super cute portfolio made with React and Tailwind.",
    link: "https://github.com/skand088/portfolio",
  },
  {
    image: "/logo192.png",
    title: "Pink App",
    description: "An app that makes everything pink and happy!",
    link: "https://github.com/skand088/pink-app",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-pinky3/80 font-sans scroll-smooth relative">
      <ShootingStarsParticles />
      <Header />
      <AboutMe />
      <section
        id="experience"
        className="max-w-4xl mx-auto py-12 px-4 animate-fade-in relative"
      >
        <h2 className="text-3xl font-extrabold text-pinky5 mb-8 text-center">
          Experience
        </h2>
        <div className="absolute left-1/2 top-24 -translate-x-1/2 h-[calc(100%-4rem)] w-1 bg-pinky4 z-0" />
        <div className="relative z-10">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="max-w-5xl mx-auto py-12 px-4 animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold text-pinky5 mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
