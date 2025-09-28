import React from "react";
import { easeInOut, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.3, ease: easeInOut },
  },
};
const childVariants = {
  hidden: { opacity: 0, y: -5, x: -5 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { ease: easeInOut },
  },
};

const Approach = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={containerVariants}
      className=" lg:flex-row flex flex-col items-center lg:h-[400px] h-fit gap-4 bg-black/30 w-[60%] mx-auto p-4 mt-8 rounded-2xl text-amber-50"
    >
      <motion.div variants={childVariants} className="flex flex-col ">
        <h1 className="text-2xl font-bold relative left-14">Define</h1>

        <div className="flex items-start gap-4 mt-8">
          {/* Left box for the rotated number */}
          <div className="flex-shrink-0">
            <h1 className="outlined-text text-4xl ">01</h1>
          </div>

          {/* Right box for the paragraph */}
          <p className="flex-1">
            Working closely with you to understand your goals, needs an vision,
            establishing a clear and focused strategy that lays the
            <br /> foundation for a successful and impactful project.
          </p>
        </div>
      </motion.div>

      <motion.div variants={childVariants} className="flex flex-col ">
        <h1 className="text-2xl font-bold relative left-14">Develop </h1>
        <div className="flex items-end gap-4 mt-8">
          <div className="flex-shrink-0">
            <h1 className="outlined-text text-4xl">02</h1>
          </div>
          <div className="flex-1">
            {" "}
            <p>
              Transforming your vision into reality through creative design,
              meticulous planning and innovative execution, ensuring every
              detail aligns with your
              <br /> goal and delivers impactful, result driven solution
              tailored to your unique need.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={childVariants} className="flex flex-col ">
        <h1 className="text-2xl font-bold relative left-14">Deliver</h1>

        <div className="flex items-start gap-4 mt-8">
          {/* Left box for the rotated number */}
          <div className="flex-shrink-0">
            <h1 className="outlined-text text-4xl ">03</h1>
          </div>

          {/* Right box for the paragraph */}
          <p className="flex-1">
            Providing exceptional results with precision and timeliness
            exceeding
            <br /> expectation through reliable execution, attention to detail
            and ongoing support to ensure your project's success and long-term
            impact.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Approach;
