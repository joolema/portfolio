import React from "react";
import { easeInOut, motion, scale } from "framer-motion";

// Variants for staggered children animations
const containerVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
      staggerChildren: 0.3, // Delay between child items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
    },
  },
};

const variant2 = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 2, ease: easeInOut } },
};
const BannerContent = () => {
  const items = ["Architecture Student", "Graphic Designer", "Logo & Identity"];
  return (
    <motion.div
      className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 items-center h-auto sm:h-12 bg-[#FAAD1B] py-2 sm:py-0 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="flex items-center gap-2"
        >
          <img
            src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485287/image_wu05xs.png"
            alt="star shape"
            className="w-6 sm:w-8"
            loading="lazy"
          />
          <h1 className="text-[#242424] font-semibold text-base sm:text-lg md:text-xl">
            {item}
          </h1>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FAAD1B] py-2 sm:py-0 px-4 absolute bottom-0">
      <motion.div
        className="flex min-w-max items-center gap-6 sm:gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
      >
        <BannerContent />
        <BannerContent />
        <BannerContent />
        <BannerContent />
      </motion.div>
    </div>
  );
};

function Home() {
  return (
    <section
      id="home"
      className="bg-black bg-[url('/Hbg.png')] bg-no-repeat bg-cover h-fit xl:h-[100dvh] py-0 w-[100%] relative"
    >
      <div className="filler h-16"></div>
      <div className="w-[75%] mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {/* Left Column */}
        <motion.div
          className="flex-col justify-around h-full w-full md:w-1/2 mb-8 md:mb-0"
          initial="hidden"
          whileInView={"show"}
          variants={containerVariants}
        >
          <div className="relative text-white flex items-center mb-12 w-fit h-auto">
            {/* Corners */}
            <div className="absolute z-2 bottom-10 left-0 w-4 h-3 bg-[#FBBF24]"></div>
            <div className="absolute z-2 bottom-10 right-0 w-4 h-3 bg-[#FBBF24]"></div>
            <div className="absolute z-2 bottom-0 left-0 w-4 h-3 bg-[#FBBF24]"></div>
            <div className="absolute z-2 bottom-0 right-0 w-4 h-3 bg-[#FBBF24]"></div>

            {/* Border lines */}
            <div className="absolute bottom-11 left-2 right-2 h-px bg-gray-400"></div>
            <div className="absolute bottom-1 left-2 right-2 h-px bg-gray-400"></div>
            <div className="absolute top-1 bottom-0 left-1 w-px bg-gray-400"></div>
            <div className="absolute top-1 bottom-0 right-1 w-px bg-gray-400"></div>

            {/* Text */}
            <div className="px-6 py-4 text-center font-bold">Holle There</div>
          </div>

          <motion.h1
            className="text-gray-50 mb-6 leading-normal font-bold text-4xl md:text-3xl 2xl:text-5xl"
            variants={itemVariants}
          >
            I`m{" "}
            <span className="text-[#FAAD1B]">
              Yohannis Lemalign,
              <br />
            </span>{" "}
            Architecture Student &<br /> Graphic Designer
          </motion.h1>

          <motion.p
            className="text-gray-50 mb-4 text-xs md:text-sm font-stretch-normal w-fit 2xl:text-2xl"
            variants={itemVariants}
          >
            I`m an experienced Graphic Designer with 5+ years in the field,
            <br />
            collaborating with various companies and startups.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="border border-[var(--orange)] text-gray-50 rounded-xl h-8 px-4"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column Image */}
        <motion.img
          variants={variant2}
          initial="hidden"
          whileInView={"show"}
          src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1758099582/Untitled-1_vs0nmr.webp"
          alt="Yohannis Lemalign"
          loading="lazy"
          className="max-w-xl 2xl:max-w-2xl h-[500px] 2xl:h-[850px] object-cover"
        />
      </div>

      {/* Overlapping triangle */}
      <div className="clip-tri bg-[var(--blue)] absolute bottom-14 sm:bottom-12 right-0 w-2/3 h-15 z-20"></div>

      {/* Full-width scrolling banner */}
      <Banner />
    </section>
  );
}

export default Home;
