import {
  motion,
  useMotionValue,
  useInView,
  animate,
  easeOut,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      ease: easeOut,
    },
  },
};
const childVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};
const childVariant2 = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const Counter = ({ from = 0, to, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const motionValue = useMotionValue(from);
  const [value, setValue] = useState(from);

  // Update React state on motion value change
  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [motionValue]);

  // Animate whenever the element enters view
  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop; // stop animation if unmounted
    } else {
      motionValue.set(from); // reset when out of view
    }
  }, [isInView, motionValue, to, from, duration]);

  return <span ref={ref}>{value}+</span>;
};
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/files/YohannesPortfolio.pdf"; // file in public/
  link.download = "YohannesPortfolio.pdf"; // suggested filename
  link.click();
};
const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center bg-[#22304C] mb-0 pb-8 w-[100%]"
      id="about"
    >
      {/* Content container with 80% width */}
      <div className="w-[80%] flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 ">
        {/* Image section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          className="w-2/3 h-auto md:w-1/2 mx-auto flex justify-center"
        >
          <motion.img
            variants={childVariant2}
            initial="hidden"
            whileInView="show"
            className="w-full sm:w-3/4 md:w-2/3 max-w-xs h-auto"
            src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1753026799/Untitled-1_hxh51j.webp"
            alt="Yohannis Lemalign"
            loading="lazy"
          />
        </motion.div>

        {/* Text section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 flex flex-col space-y-4 sm:space-y-6 relative"
        >
          <motion.h2
            variants={childVariant}
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-50"
          >
            About Me
          </motion.h2>
          <motion.h1
            variants={childVariant}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-50"
          >
            Who is <span className="text-[#FAAD1B]">Yohannis Lemalign?</span>
          </motion.h1>
          <motion.p
            variants={childVariant}
            className="text-gray-50 font-light text-xs sm:text-base"
          >
            I am an undergraduate architecture student at Adama Science and
            Technology University (A.S.T.U.). I see every project as a personal
            challenge to grow and improve. Currently, I am seeking an internship
            at a reputable architecture firm where I can collaborate with
            experienced professionals and contribute to impactful architectural
            work with a vision for the future.
          </motion.p>

          <motion.div
            variants={childVariant}
            className="flex justify-start gap-4"
          >
            <div className="flex-col text-center">
              <h1 className="text-[#FAAD1B] font-extrabold text-lg sm:text-xl">
                <Counter to={100} />
              </h1>
              <p className="text-gray-50 font-light text-xs sm:text-sm">
                Project Completed
              </p>
            </div>
            <div className="flex-col text-center">
              <h1 className="text-[#FAAD1B] font-extrabold text-lg sm:text-xl">
                <Counter to={5} />
              </h1>
              <p className="text-gray-50 font-light text-xs sm:text-sm">
                Years of Experience
              </p>
            </div>
          </motion.div>

          <motion.button
            variants={childVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 bg-[var(--blue)] w-[30%] items-center rounded-md border-[var(--orange)] border-[1.5px] px-2 py-1 text-gray-50 text-sm sm:text-base"
          >
            <a
              href="https://raw.githubusercontent.com/joolema/portfolio/32fc5e2b9dc6feb833601c17962d4136aaf8040f/frontend/YohannesPortfolio.pdf
"
              download={true}
            >
              Download CV
            </a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
