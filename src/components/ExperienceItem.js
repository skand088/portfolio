const ExperienceItem = ({
  logo,
  company,
  role,
  description,
  date,
  side = "left",
  location,
}) => (
  <div className="flex items-center justify-center mb-8">
    <div className={`flex w-full items-center gap-16`}>
      {side === "left" && (
        <div className="flex flex-col items-end w-1/2">
          <img
            src={logo}
            alt={company + " logo"}
            className="w-64 h-64 rounded-full border-2 border-pinky4 mb-2 object-contain"
          />
        </div>
      )}
      <div className="w-1/2 flex justify-center">
        <div className="bg-pinky3 rounded-xl border-4 border-pinky1 shadow-md p-4 w-full">
          <h3 className="text-pinky5 font-bold text-xl">{company}</h3>
          <span className="text-pinky5 text-sm block ">{location}</span>
          <span className="text-pinky4 text-sm">{date}</span>
          <h4 className="text-pinky5 font-semibold">{role}</h4>
          <p className="text-pinky4 mt-1">{description}</p>
        </div>
      </div>
      {side === "right" && (
        <div className="flex flex-col items-start w-1/2">
          <img
            src={logo}
            alt={company + " logo"}
            className="w-64 h-64 rounded-full border-2 border-pinky4 mb-2 object-contain"
          />
        </div>
      )}
    </div>
  </div>
);

export default ExperienceItem;
