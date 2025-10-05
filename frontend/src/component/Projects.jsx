import React, { useState, useEffect } from "react";
import { easeInOut, easeIn, motion } from "framer-motion";
import { useProject } from "../context/projectContext";
//todo:work on the filter
const containerVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, ease: easeInOut },
  },
};
const containerVariant2 = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, ease: easeInOut },
  },
};
const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeIn } },
};

const Projects = () => {
  const { isLoading, projects } = useProject();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered =
        projects?.filter(
          (proj) => proj.category.toLowerCase() === filter.toLowerCase()
        ) || [];
      setFilteredProjects(filtered);
    }
  }, [projects, filter]);

  const [showing, setShowing] = useState(false);

  const handleShow = () => {
    setFilter("all");
    setShowing((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className="bg-[var(--blue)] bg-[url('/other/bg.png')] bg-[length:60%_auto] bg-no-repeat 
      bg-left-bottom py-12 mx-auto w-full min-h-screen"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariant}
        key={showing}
        className="flex flex-col items-center w-4/5 mx-auto text-amber-50"
      >
        {/* Header */}
        <div className="header flex justify-between w-full my-4">
          <motion.h1
            variants={childVariant}
            className="text-[var(--orange)] text-3xl"
          >
            My Portfolio
          </motion.h1>
          <div className="flex gap-20 justify-end w-[70%] [&>button]:text-md">
            <motion.button
              onClick={() => setFilter("all")}
              variants={childVariant}
              className={`hidden ${
                filter === "all"
                  ? "md:flex items-center text-[var(--orange)]"
                  : "md:flex items-center"
              }`}
            >
              All
            </motion.button>
            <motion.button
              onClick={() => setFilter("building")}
              variants={childVariant}
              className={`hidden ${
                filter === "building"
                  ? "md:flex items-center text-[var(--orange)]"
                  : "md:flex items-center"
              }`}
            >
              Building
            </motion.button>
            <motion.button
              onClick={() => setFilter("interior")}
              variants={childVariant}
              className={`hidden ${
                filter === "interior"
                  ? "md:flex items-center text-[var(--orange)]"
                  : "md:flex items-center"
              }`}
            >
              Interior
            </motion.button>
            <motion.button
              onClick={() => setFilter("ui/ux")}
              variants={childVariant}
              className={`hidden ${
                filter === "ui/ux"
                  ? "md:flex items-center text-[var(--orange)]"
                  : "md:flex items-center"
              }`}
            >
              UI/UX
            </motion.button>
            <button
              onClick={handleShow}
              className="bg-[var(--orange)] py-1 rounded-md px-2 text-black"
            >
              {showing ? "Hide Projects" : "View All Projects"}
            </button>
          </div>
        </div>

        {/* No Projects */}

        {projects.length === 0 ? (
          <motion.div
            variants={childVariant}
            className="flex items-center my-20"
          >
            <p className="text-3xl text-gray-50">
              {isLoading ? "Loading..." : "Coming Soon..."}
            </p>
          </motion.div>
        ) : (
          <div className="flex min-h-screen mt-10 ">
            {/* Vertical Title */}
            <div className="w-12 flex mt-36 mr-7 items-start justify-center relative ">
              <motion.h1
                variants={childVariant}
                className="transform -rotate-90 text-4xl text-amber-50 whitespace-nowrap "
              >
                My Latest Projects
                <hr className="w-16 border-[1px] border-amber-50 absolute right-0" />
              </motion.h1>
            </div>

            {/* Project Grid */}
            <motion.div
              initial="hidden"
              animate={"show"}
              variants={containerVariant2}
              key={filter + filteredProjects.length}
              className={`${
                showing
                  ? "columns-1 sm:columns-2 lg:columns-3 gap-4" // Masonry layout
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" // Stair layout
              } w-[95%] mx-auto`}
            >
              {filteredProjects
                .slice(0, showing ? filteredProjects.length : 3)
                .map((data, idx) => {
                  if (!showing) {
                    // stair layout for first 3
                    return (
                      <motion.div
                        variants={childVariant}
                        key={data.id || idx}
                        className={`flex flex-col gap-2 items-center group relative h-fit
                          ${
                            idx % 3 === 0
                              ? "lg:mt-[10px]"
                              : idx % 3 === 1
                              ? "lg:mt-[100px]"
                              : "lg:mt-[200px]"
                          }`}
                      >
                        <img
                          className="h-[50vh] cursor-pointer"
                          onClick={() => window.open(data.image.url, "_blank")}
                          src={data.image.url}
                          alt={data.title}
                        />
                        <h2 className="text-2xl text-amber-50">{data.title}</h2>

                        <div className="hidden group-hover:flex  flex-col absolute inset-0 bg-black/80">
                          <div className="bg-black mt-7 overflow-y-auto [&::-webkit-scrollbar]:hidden w-[80%] rounded-md">
                            <p className="px-2 py-3 text-xs text-amber-50">
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }

                  // masonry layout when showing all
                  return (
                    <motion.div
                      variants={childVariant}
                      key={data.id || idx}
                      className="mb-4 break-inside-avoid group flex flex-col relative"
                    >
                      {/* Image - fixed height or aspect ratio */}
                      <div className="flex-shrink-0">
                        <img
                          className="w-full rounded-t-md h-fit object-cover cursor-pointer"
                          onClick={() => window.open(data.image.url, "_blank")}
                          src={data.image.url}
                          alt={data.title}
                        />
                      </div>

                      {/* Description container that expands as needed */}
                      <div className="hidden group-hover:flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden bg-black/80 rounded-b-md p-4 absolute inset-0">
                        <h2 className="text-xl text-amber-50 font-semibold mb-3 flex-shrink-0">
                          {data.title}
                        </h2>
                        <p className="text-amber-50 text-sm leading-relaxed flex-grow">
                          {data.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
