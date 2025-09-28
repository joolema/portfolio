import React, { useState } from "react";
import { easeInOut, easeIn, motion } from "framer-motion";

import { useProject } from "../context/projectContext";
const containerVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, ease: easeInOut },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1, ease: easeIn } },
};
const Projects = () => {
  const { projects, isLoading, error } = useProject();
  const [showing, setShowing] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setShowing((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className="bg-[var(--blue)] bg-[url('/bg.png')] bg-[length:60%_auto] bg-no-repeat bg-left-bottom py-12 mx-auto h-fit"
    >
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={containerVariant}
        key={showing}
        className="flex flex-col items-center w-4/5 mx-auto text-amber-50"
      >
        <div className="flex justify-between w-full my-4">
          <motion.h1
            variants={childVariant}
            className="text-[var(--orange)] text-3xl"
          >
            My Portfolio
          </motion.h1>
          <div className="flex gap-20 justify-end w-[70%] [&>button]:text-md">
            <motion.button variants={childVariant}>All</motion.button>
            <motion.button variants={childVariant}>Building</motion.button>
            <motion.button variants={childVariant}>Interior</motion.button>
            <motion.button variants={childVariant}>UI/UX</motion.button>
            <button
              onClick={handleShow}
              className="bg-[var(--orange)] py-1 rounded-md px-2 text-black"
            >
              {showing ? "Hide Services" : "View All Projects"}
            </button>
          </div>
        </div>
        {projects.length == 0 ? (
          <motion.div
            variants={childVariant}
            className="text-3xl text-gray-50 "
          >
            Coming Soon...
          </motion.div>
        ) : (
          <div className="flex relative gap-3 ">
            <motion.h1
              variants={childVariant}
              className={`absolute   left-0 mt-4 transform -rotate-90 origin-left text-4xl text-amber-50 ${
                showing ? "top-64" : "top-1/2"
              }`}
            >
              My Latest Projects
              <hr className="w-20 mt-2 absolute right-3 border-t-[1.5px] border-amber-50 " />
            </motion.h1>

            <div
              className={`${
                showing
                  ? "columns-1 sm:columns-2 lg:columns-3 gap-4" // Masonry when showing all
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" // Stair layout when showing only 3
              } w-[95%] mx-auto`}
            >
              {projects
                .slice(0, showing ? projects.length : 3)
                .map((data, idx) => {
                  //console.log(data);
                  if (!showing) {
                    // keep stair layout for first 3
                    return (
                      <motion.div
                        variants={childVariant}
                        key={idx}
                        className={`flex flex-col gap-2 items-center group relative h-fit
              ${
                idx % 3 === 0
                  ? "lg:mt-[10px]"
                  : idx % 3 === 1
                  ? "lg:mt-[100px]"
                  : "lg:mt-[200px]"
              } `}
                      >
                        <img
                          className="h-[50vh]"
                          src={data.images[0].image}
                          alt={data.title}
                        />
                        <h2 className="text-2xl text-amber-50">{data.title}</h2>

                        <div
                          className="hidden group-hover:flex flex-col
                       absolute inset-0 bg-black/70 "
                        >
                          <div className="bg-black mt-7 h-fit w-[80%] rounded-md">
                            <p className="  px-2 py-3  text-xs  text-amber-50">
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }

                  // masonry layout for "view more"
                  return (
                    <motion.div
                      variants={childVariant}
                      key={idx}
                      className="mb-4 break-inside-avoid flex  items-center group relative"
                    >
                      <img
                        className="w-full rounded-md h-fit"
                        src={data.images[0].image}
                        alt={data.title}
                      />
                      <div className="hidden group-hover:flex flex-col absolute inset-0  z-10 bg-black/70 ">
                        <div className="bg-black w-[80%] p-2 mt-10 rounded-xl">
                          <h2 className="text-2xl text-amber-50 mt-2">
                            {data.title}
                          </h2>
                          <p className="text-amber-50">{data.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
