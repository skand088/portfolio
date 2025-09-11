import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiJupyter,
  SiTailwindcss,
  SiSocketdotio,
  SiDocker,
  SiNumpy,
} from "react-icons/si";
import { useState } from "react";

const techIconMap = {
  React: <FaReact className="text-blue-400" title="React" />,
  "Node.js": <FaNodeJs className="text-green-600" title="Node.js" />,
  MongoDB: <SiMongodb className="text-green-700" title="MongoDB" />,
  Firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
  Python: <FaPython className="text-yellow-400" title="Python" />,
  Jupyter: <SiJupyter className="text-orange-400" title="Jupyter" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" title="TailwindCSS" />,
  "Socket.io": <SiSocketdotio className="text-gray-700" title="Socket.io" />,
  Docker: <SiDocker className="text-blue-500" title="Docker" />,
  NMF: <FaDatabase className="text-purple-400" title="NMF" />,
  LDA: <FaDatabase className="text-pink-400" title="LDA" />,
  NLTK: <SiNumpy className="text-green-400" title="NLTK" />,
};

const ExperienceItem = ({
  logo,
  company,
  role,
  description,
  date,
  side = "left",
  location,
  techs = [],
  techDetails = {}, // { React: "Built UI with hooks", ... }
}) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex items-center justify-center mb-8">
      <div className={`flex w-full items-center md:gap-28 gap-0`}>
        {side === "left" && (
          <div className="hidden md:flex md:flex-col md:items-end md:w-1/2">
            <div className="group relative flex items-center">
              {techs.length > 0 && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-16 flex gap-3 bg-pinky2 rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95 transition-all duration-500 z-20">
                  {techs.map((tech, i) => (
                    <span key={i} className="text-3xl" title={tech}>
                      {techIconMap[tech] || tech}
                    </span>
                  ))}
                </div>
              )}
              <img
                src={logo}
                alt={company + " logo"}
                className="w-64 h-64 rounded-full border-2 border-pinky4 mb-2 object-contain transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>
          </div>
        )}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md" style={{ perspective: "1200px" }}>
            <div
              className="relative w-full cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.7s",
                transform: flipped ? "rotateY(180deg)" : "none",
              }}
              onClick={() => setFlipped((f) => !f)}
            >
              {/* Front Side */}
              <div
                className=" inset-0 flex flex-col justify-center bg-pinky3 rounded-xl border-4 border-pinky1 shadow-md p-6 w-full"
                style={{
                  backfaceVisibility: "hidden",
                  opacity: flipped ? 0 : 1,
                  transition: "opacity 0.7s",
                }}
              >
                <h3 className="text-pinky5 font-bold text-xl mb-2">
                  {company}
                </h3>
                <span className="text-pinky5 text-sm block mb-1">
                  {location}
                </span>
                <span className="text-pinky4 text-sm mb-1">{date}</span>
                <h4 className="text-pinky5 font-semibold mb-2">{role}</h4>
                <p className="text-pinky4 mt-1 mb-2">{description}</p>
              </div>
              {/* Back Side */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center bg-pinky2 rounded-xl border-4 border-pinky1 shadow-md p-6 w-full"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  opacity: flipped ? 1 : 0,
                  transition: "opacity 0.7s",
                }}
              >
                {techs.length > 0 && (
                  <div className="absolute top-2 right-2 z-10 flex flex-wrap gap-2 bg-pinky3/80 rounded-md px-2 py-1 shadow md:hidden">
                    {techs.map((tech, i) => (
                      <span key={i} className="text-xl sm:text-2xl" title={tech}>
                        {techIconMap[tech] || tech}
                      </span>
                    ))}
                  </div>
                )}
                <div> 🚧 In progress 🚧 </div>
                <ul className="flex flex-col gap-2 w-full">
                  {/* {techs.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">
                        {techIconMap[tech] || tech}
                      </span>

                      <span className="text-pinky4 text-sm">
                        {techDetails[tech] || ""}
                      </span>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {side === "right" && (
          <div className="hidden md:flex md:flex-col md:items-start md:w-1/2">
            <div className="group relative flex items-center">
              <img
                src={logo}
                alt={company + " logo"}
                className="w-64 h-64 rounded-full border-2 border-pinky4 mb-2 object-contain transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
              />
              {techs.length > 0 && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-16 flex gap-3 bg-pinky2 rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95 transition-all duration-500 z-20">
                  {techs.map((tech, i) => (
                    <span key={i} className="text-3xl" title={tech}>
                      {techIconMap[tech] || tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
