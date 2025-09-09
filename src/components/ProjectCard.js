import React from "react";

const ProjectCard = ({ image, title, description, link }) => (
  <div className="bg-pinky3 rounded-2xl border-4 border-pinky2 shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in">
    <img
      src={image}
      alt={title}
      className="w-24 h-24 rounded-xl mb-2 border-2 border-pinky4 object-cover"
    />
    <h3 className="text-pinky5 font-bold text-lg mb-1">{title}</h3>
    <p className="text-pinky4 text-center mb-2">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-pinky5 underline hover:text-pinky1 font-semibold"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
