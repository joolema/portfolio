import { easeInOut, motion } from "framer-motion";
const containerVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.3, ease: easeInOut },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};
const EducationWork = () => {
  return (
    <section id="edu" className=" w-[100%] items-center mt-8  ">
      {/* Work Grid */}
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={containerVariant}
        className=" w-[60%] text-2xl sm:w-[40%] sm:h-[400px] flex items-center py-4 mx-auto px-8 bg-black/30  rounded-xl"
      >
        <div className=" flex flex-col gap-2 w-fit mx-auto  ">
          <motion.div variants={childVariant} className="flex ml-2 mx-auto ">
            <div className="border-2 border-white relative right-2 mt-5  w-3 h-3 rounded-full"></div>
            <div className="flex flex-col ">
              <p className="font-bold text-gray-50 text-xl">Elementary</p>
              <p className="text-gray-50 text-xs font-light">
                Sanete Primary School <br />
                2002 - 2009
              </p>
            </div>
          </motion.div>
          <motion.div variants={childVariant} className="flex ml-2">
            <div className="border-2 border-white relative right-2 mt-5  w-3 h-3 rounded-full"></div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-50 text-xl">
                High School
              </span>
              <p className="text-gray-50 text-xs font-light ">
                Goba High School <br /> 2010 - 2011
              </p>
            </div>
          </motion.div>
          <motion.div variants={childVariant} className="flex ml-2">
            <div className="border-2 border-white relative right-2 mt-5  w-3 h-3 rounded-full"></div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-50 text-xl">
                Preparatory
              </span>
              <p className="text-gray-50 text-xs font-light ">
                Batu Terara Secondary <br /> School/ 2012 - 2013
              </p>
            </div>
          </motion.div>
          <motion.div variants={childVariant} className="flex ml-2">
            <div className="border-2 border-white relative right-2 mt-5  w-3 h-3 rounded-full"></div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-50 text-xl">University</span>
              <p className="text-gray-50 text-xs font-light ">
                Adama Science and <br />
                Technology University <br /> 2014 - now
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default EducationWork;
