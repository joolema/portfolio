import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
const services = [
  {
    img: "/services/GD@100x.webp",
    title: "Graphic Design",
    desc: "Visual storytelling through branding, posters, and digital graphics that communicate clearly and creatively. ",
  },
  {
    img: "/services/BD@100x.webp",
    title: " Building Design ",
    desc: "Thoughtful architectural concepts that balance innovation, sustainability, and user experience.",
  },
  {
    img: "/services/ID@100x.webp",
    title: " Interior Design",
    desc: "Functional and stylish interiors that enhance comfort, atmosphere, and lifestyle.",
  },
  {
    img: "/services/UID@100x.webp",
    title: "UI/UX Design",
    desc: "  Intuitive and engaging digital experiences tailored for seamless interaction.",
  },
  {
    img: "/services/PD@100x.webp",
    title: " Product Design",
    desc: "User-centered solutions that merge practicality with aesthetic appeal.",
  },
  {
    img: "/services/VE@100x.webp",
    title: "  Video Editor",
    desc: " Dynamic editing that transforms raw footage into compelling visual narratives.",
  },
  {
    img: "/services/FD@100x.webp",
    title: "Furniture Design",
    desc: "Unique and functional pieces designed to elevate living and working spaces.",
  },
  {
    img: "/services/3D@100x.webp",
    title: "3D Modeling",
    desc: " Detailed digital models for visualization, planning, and presentation.",
  },
  {
    img: "/services/D@100x.webp",
    title: "  Decoration",
    desc: "Creative styling that adds personality, harmony, and beauty to any space.",
  },
];

// Title Case
const toTitleCase = (str) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

// Sentence Case
const toSentenceCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const containerVariant = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easeInOut, staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};
const Services = () => {
  const [showing, setShowing] = useState(false);
  const handleShow = () => {
    console.log("hello here");
    setShowing((prev) => !prev);
  };
  return (
    <section
      id="services"
      className={`bg-[var(--blue)]  py-4 mt-0    flex flex-col items-center ${
        showing ? "h-screen" : "h-fit"
      } `}
    >
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={containerVariant}
        key={showing}
        className=" w-[65%] mx-auto mt-20"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <motion.h1
              variants={childVariant}
              className="text-4xl text-[var(--orange)]   w-[50%] sm:w-fit  "
            >
              Services
            </motion.h1>
            <motion.h2
              variants={childVariant}
              className="text-4xl text-amber-50 font-bold  w-[50%] sm:w-fit  "
            >
              Services I Provide
            </motion.h2>
          </div>
          <button
            onClick={handleShow}
            className="bg-[var(--orange)] text-black rounded-md px-2 py-0 w-16 h-12  "
          >
            {showing ? "prev" : "next"}
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-14 items-center mx-auto  w-[100%]">
          {services
            .slice(showing ? 6 : 0, showing ? services.length : 6)
            .map((data, idx) => {
              return (
                <motion.div
                  variants={childVariant}
                  key={idx}
                  className="flex flex-col bg-black/30  p-8 text-amber-50 rounded-sm mb-4 h-44  "
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-12 w-12 object-contain "
                  />
                  <h3 className="font-bold">{data.title}</h3>
                  <p className="text-xs text-amber-50/40">{data.desc}</p>
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
