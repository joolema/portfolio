import { easeInOut, motion } from "framer-motion";
const containerVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.3, ease: easeInOut },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};
const Experience = () => {
  return (
    <section id="edu" className=" w-[100%] items-center mt-8">
      {/* Work Grid */}
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={containerVariant}
        className=" w-[60%] sm:w-[40%] sm:h-[400px] flex items-center   mx-auto px-8  bg-black/30  rounded-xl"
      >
        <div className=" flex flex-col gap-2 w-fit mx-auto  ">
          <motion.div variants={childVariant} className="flex ml-2 mx-auto ">
            <div className="border-2 border-white relative right-2 mt-5  w-3 h-3 rounded-full"></div>
            <div className="flex flex-col ">
              <p className="font-bold text-gray-50 text-xl">Meseso Studio</p>
              <p className="text-gray-50 text-xs font-light">
                Graphics Design and <br />
                Visual Arts / 2011 - 2013
              </p>
            </div>
          </motion.div>
          <motion.div variants={childVariant} className="flex ml-2">
            <div className="border-2 border-white relative right-2 mt-5  w-3 h-3 rounded-full"></div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-50 text-xl">
                Self-Employed
              </span>
              <p className="text-gray-50 text-xs font-light ">
                Graphics Design and <br /> Visual Arts / 2014 - 2017
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex ml-2 items-center"
          >
            <div className="border-2 border-white relative right-2  w-3 h-3 rounded-full"></div>{" "}
            <div>
              <p className="text-gray-50 text-xs font-light">
                Participated in Continuous
                <br /> College Projects
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex ml-2 items-center"
          >
            <div className="border-2 border-white relative right-2  w-3 h-3 rounded-full"></div>
            <div>
              <p className="text-gray-50 text-xs font-light">
                Three Months of Internship
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
