import React from "react";

// Define tool data as a constant to avoid repetition
const tools = [
  {
    name: "Adobe Illustrator",
    percentage: "90%",
    icon: "/static/Illustrator.png",
  },
  {
    name: "Adobe Photoshop",
    percentage: "85%",
    icon: "/static/Photoshop.png",
  },
  {
    name: "Adobe Premiere Pro",
    percentage: "82%",
    icon: "/static/Premiere Pro.png",
  },
  {
    name: "AutoCAD",
    percentage: "85%",
    icon: "/static/Autocad.png",
  },
  {
    name: "Autodesk Revit",
    percentage: "95%",
    icon: "/static/REVIT.png",
  },
  {
    name: "Archicad",
    percentage: "85%",
    icon: "/static/Archicad.png",
  },
  {
    name: "SketchUp",
    percentage: "90%",
    icon: "/static/SketchUp.png",
  },
  {
    name: "Blender",
    percentage: "70%",
    icon: "/static/Blender.png",
  },
  {
    name: "Lumion",
    percentage: "92%",
    icon: "/static/Lumion.png",
  },
  {
    name: "Twinmotion",
    percentage: "90%",
    icon: "/static/Twinmotion.png",
  },
];

const ToolItem = ({ name, percentage, icon }) => (
  <div className="bg-[#242424] flex py-3 sm:py-4 px-4 sm:px-6 my-3 sm:my-4 w-full justify-evenly items-center rounded-3xl">
    <img
      src={icon}
      alt={name}
      className="w-16 h-16 sm:w-20 sm:h-20"
      loading="lazy"
      width={80}
      height={80}
    />
    <h1 className="font-bold text-xl sm:text-2xl text-gray-50 w-1/5">
      {percentage}
    </h1>
    <p className="text-[var(--orange)] font-light text-xl sm:text-2xl w-1/3">
      {name}
    </p>
  </div>
);

const FavTool = () => {
  // Split tools into two columns
  const firstColumn = tools.slice(0, 5);
  const secondColumn = tools.slice(5);

  return (
    <section
      id="edu"
      className="bg-[#0c0c0c] py-8 sm:py-12 flex flex-col items-center justify-center"
    >
      <div className="flex-col w-full sm:w-2/3 md:w-1/2 text-center px-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl text-[var(--orange)]">
          My Favorite Tools
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mt-2">
          Exploring the Tools Behind My Designs
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full sm:w-11/12 md:w-3/4 gap-4 mx-auto">
        <div className="flex-col w-full">
          {firstColumn.map((tool, index) => (
            <ToolItem key={`tool-${index}`} {...tool} />
          ))}
        </div>
        <div className="flex-col w-full">
          {secondColumn.map((tool, index) => (
            <ToolItem key={`tool-${index + 5}`} {...tool} />
          ))}
        </div>
      </div>

      <hr className="w-full font-bold text-gray-50" />
    </section>
  );
};

export default React.memo(FavTool);
