import React, { useState } from "react";

const tools = [
  {
    name: "Adobe Illustrator",
    percentage: 90,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485295/Illustrator_hxbceh.png",
  },
  {
    name: "Adobe Photoshop",
    percentage: 85,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485301/Photoshop_yqrtcu.png",
  },
  {
    name: "Adobe Premiere Pro",
    percentage: 82,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485305/Premiere_Pro_hxjgb6.png",
  },
  {
    name: "AutoCAD",
    percentage: 85,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485296/Autocad_vmstrh.png",
  },
  {
    name: "Autodesk Revit",
    percentage: 95,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485310/REVIT_tx1zik.png",
  },
  {
    name: "Archicad",
    percentage: 85,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485301/Archicad_thdb8l.png",
  },
  {
    name: "SketchUp",
    percentage: 90,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485310/SketchUp_mlqik4.png",
  },
  {
    name: "Blender",
    percentage: 70,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485296/Blender_cehier.png",
  },
  {
    name: "Lumion",
    percentage: 92,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485291/Lumion_qbykce.png",
  },
  {
    name: "Twinmotion",
    percentage: 90,
    icon: "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485307/Twinmotion_gh66ed.png",
  },
];

const ToolItem = ({ name, percentage, icon }) => (
  <div className=" flex  w-full justify-evenly items-center rounded-3xl hover:scale-105 transform transition duration-500 ">
    <img
      src={icon}
      alt={name}
      className=" sm:w-20 sm:h-20"
      loading="lazy"
      width={80}
      height={80}
    />
    <div className="flex flex-col w-[70%]">
      <p className="text-gray-400 font-light text-sm sm:text-xl w-fit">
        {name}
      </p>
      <div className="w-full bg-gray-300 rounded-full ">
        <div
          className="bg-[var(--orange)] h-2  transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const FavTool = () => {
  return (
    <section
      id="edu"
      className="bg-[var(--dark-blue)]  flex flex-col items-center justify-center w-[60%] mx-auto mt-8 sm:h-[400px] rounded-2xl"
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mx-auto">
          {tools.map((tool, index) => (
            <ToolItem key={`tool-${index}`} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FavTool);
