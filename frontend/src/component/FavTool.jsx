import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
const containerVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.2, ease: easeInOut },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1, ease: easeIn } },
};

const tools = [
  {
    name: "Adobe Illustrator",
    percentage: 92,
    icon: "/tools/illusicon.webp",
  },
  {
    name: "Adobe Photoshop",
    percentage: 80,
    icon: "/tools/photoicon.webp",
  },
  {
    name: "Adobe Premiere Pro",
    percentage: 80,
    icon: "/tools/pricon.webp",
  },
  {
    name: "AutoCAD",
    percentage: 92,
    icon: "/tools/cadicon.webp",
  },
  {
    name: "Autodesk Revit",
    percentage: 92,
    icon: "/tools/reviticon.webp",
  },
  {
    name: "Archicad",
    percentage: 85,
    icon: "/tools/archicon.webp",
  },
  {
    name: "SketchUp",
    percentage: 80,
    icon: "/tools/sketchupicon.webp",
  },
  {
    name: "Blender",
    percentage: 92,
    icon: "/tools/blendericon.webp",
  },
  {
    name: "Lumion",
    percentage: 92,
    icon: "/tools/lumionicon.webp",
  },
  {
    name: "Twinmotion",
    percentage: 90,
    icon: "/tools/twinicon.webp",
  },
  {
    name: " Rhinoceros 3D",
    percentage: 60,
    icon: "/tools/Rhinoceros3D@100x.webp",
  },
  {
    name: " D5 Render",
    percentage: 92,
    icon: "/tools/D5icon.webp",
  },
];

const ToolItem = ({ name, percentage, icon }) => (
  <motion.div
    variants={childVariant}
    className=" flex  w-full justify-evenly items-center rounded-3xl hover:scale-105 transform transition duration-500 "
  >
    <img src={icon} alt={name} className="w-9 h-9" loading="lazy" />
    <div className="flex flex-col w-[70%]">
      <p className="text-gray-400 font-light text-md sm:text-md w-fit">
        {name}
      </p>
      <div className="w-full bg-gray-300 rounded-full ">
        <motion.div
          initial={{ width: 0 }}
          className="bg-[var(--orange)] h-2  "
          whileInView={{
            width: `${percentage}%`,
            transition: { duration: 1, delay: 1 },
          }}
        ></motion.div>
      </div>
    </div>
  </motion.div>
);

const FavTool = () => {
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      whileInView={"show"}
      id="edu"
      className="bg-black/30  flex flex-col items-center justify-center w-[40%] mx-auto mt-8 sm:h-[400px] rounded-2xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full  gap-4">
        {tools.map((tool, index) => (
          <ToolItem key={`tool-${index}`} {...tool} />
        ))}
      </div>
    </motion.section>
  );
};

export default React.memo(FavTool);
