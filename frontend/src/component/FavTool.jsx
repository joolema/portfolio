import React, { useState } from "react";

// Define tool data as a constant to avoid repetition
const tools = [
  {
    name: "Adobe Illustrator",
    percentage: "90%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485295/Illustrator_hxbceh.png",
  },
  {
    name: "Adobe Photoshop",
    percentage: "85%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485301/Photoshop_yqrtcu.png",
  },
  {
    name: "Adobe Premiere Pro",
    percentage: "82%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485305/Premiere_Pro_hxjgb6.png",
  },
  {
    name: "AutoCAD",
    percentage: "85%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485296/Autocad_vmstrh.png",
  },
  {
    name: "Autodesk Revit",
    percentage: "95%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485310/REVIT_tx1zik.png",
  },
  {
    name: "Archicad",
    percentage: "85%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485301/Archicad_thdb8l.png",
  },
  {
    name: "SketchUp",
    percentage: "90%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485310/SketchUp_mlqik4.png",
  },
  {
    name: "Blender",
    percentage: "70%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485296/Blender_cehier.png",
  },
  {
    name: "Lumion",
    percentage: "92%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485291/Lumion_qbykce.png",
  },
  {
    name: "Twinmotion",
    percentage: "90%",
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485307/Twinmotion_gh66ed.png",
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
  const [max, setMax] = useState(tools.length / 2 - 1);
  const firstColumn = tools.slice(0, max);

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
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto">
          {firstColumn.map((tool, index) => (
            <ToolItem key={`tool-${index}`} {...tool} />
          ))}
        </div>
        <div>
          {max < tools.length ? (
            <button
              className="bg-[var(--orange)] p-2 border rounded-2xl "
              onClick={() => {
                setMax(tools.length);
              }}
              type="button"
            >
              see more...
            </button>
          ) : (
            <div>
              <button
                className="bg-[var(--orange)] p-2 border rounded-2xl "
                onClick={() => {
                  setMax(tools.length / 2 - 1);
                }}
                type="button"
              >
                see less...
              </button>
            </div>
          )}
        </div>
      </div>

      <hr className="mt-4 w-full font-bold text-gray-50" />
    </section>
  );
};

export default React.memo(FavTool);
