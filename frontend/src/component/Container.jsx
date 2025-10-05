import { useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

//components
import FavTool from "./FavTool";
import EducationWork from "./EducationWork";
import Experience from "./Experience";
import Approach from "./Approach";

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.3, ease: easeInOut },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};
const childVariants2 = {
  hidden: { opacity: 0, y: -3, x: 3 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { ease: easeInOut },
  },
};

const childVariants3 = {
  hidden: { opacity: 0, y: -5, x: -5 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { ease: easeInOut },
  },
};

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Container = () => {
  const [view, setView] = useState("approach");
  const views = ["skill", "edu", "exp", "approach"];
  const currentIndex = views.indexOf(view);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % views.length;
    setView(views[nextIndex]);
  };
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + views.length) % views.length;
    setView(views[prevIndex]);
  };
  return (
    <div
      id="edu"
      className="w-full h-fit xl:h-[100dvh]  bg-[var(--blue)] mx-auto  py-10"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className=" flex flex-col gap-2 w-[50%] mx-auto mb-5 pt-8 "
      >
        <motion.h1
          variants={childVariants}
          className="text-3xl mx-auto text-amber-50   text-wrap"
        >
          Creativity in Practice:{" "}
        </motion.h1>
        <motion.h1
          variants={childVariants}
          className="text-3xl mx-auto text-[var(--orange)]"
        >
          My Journey & Skills
        </motion.h1>
      </motion.div>
      <motion.div className=" flex flex-col">
        <div className="w-[100%] relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="flex md:justify-between bg-black/30 w-fit md:w-[40%] mx-auto py-2 rounded-2xl ]"
          >
            <button
              onClick={handlePrev}
              className="text-3xl text-amber-50 mx-3 bg-[var(--blue)] flex items-center rounded-full p-2 md:hidden"
            >
              <IoIosArrowBack />
            </button>
            <motion.button
              variants={childVariants2}
              className={` text-amber-50 rounded-2xl p-2 font-bold ${
                view == "approach"
                  ? "bg-[var(--orange)] text-black"
                  : "hidden md:flex"
              }`}
              onClick={() => setView("approach")}
            >
              My Approach
            </motion.button>
            <motion.button
              variants={childVariants2}
              className={` text-amber-50 rounded-2xl p-2 font-bold ${
                view == "edu"
                  ? "bg-[var(--orange)] text-black"
                  : "hidden md:flex"
              }`}
              onClick={() => setView("edu")}
            >
              Education
            </motion.button>
            <motion.button
              variants={childVariants2}
              className={` text-amber-50 rounded-2xl p-2 font-bold ${
                view == "exp"
                  ? "bg-[var(--orange)] text-black"
                  : "hidden md:flex"
              }`}
              onClick={() => setView("exp")}
            >
              Experience
            </motion.button>
            <motion.button
              variants={childVariants2}
              className={` text-amber-50 rounded-2xl p-2 font-bold ${
                view == "skill"
                  ? "bg-[var(--orange)] text-black"
                  : "hidden md:flex"
              }`}
              onClick={() => setView("skill")}
            >
              Skills
            </motion.button>
            <button
              onClick={handleNext}
              className="text-3xl text-amber-50 mx-3 bg-[var(--blue)] flex items-center rounded-full p-2 md:hidden"
            >
              <IoIosArrowForward />
            </button>
          </motion.div>
        </div>

        {view == "skill" && <FavTool />}
        {view == "edu" && <EducationWork />}
        {view == "exp" && <Experience />}
        {view == "approach" && <Approach />}
      </motion.div>
    </div>
  );
};

export default Container;
