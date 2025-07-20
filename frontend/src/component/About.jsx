import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
const BannerContent = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 items-center h-auto sm:h-12 bg-[#FAAD1B] py-2 sm:py-0 px-4">
      <img
        src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485287/image_wu05xs.png"
        alt="star shape"
        className="w-6 sm:w-8"
        loading="lazy"
      />
      <h1 className="text-[#242424] font-semibold text-base sm:text-lg md:text-xl">
        Architecture Student
      </h1>
      <img
        src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485287/image_wu05xs.png"
        alt="star shape"
        className="w-6 sm:w-8"
        loading="lazy"
      />
      <h1 className="text-[#242424] font-semibold text-base sm:text-lg md:text-xl">
        Graphic Designer
      </h1>
      <img
        src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485287/image_wu05xs.png"
        alt="star shape"
        className="w-6 sm:w-8"
        loading="lazy"
      />
      <h1 className="text-[#242424] font-semibold text-base sm:text-lg md:text-xl">
        Logo & Identity
      </h1>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FAAD1B] py-2 sm:py-0 px-4">
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
        {/* Duplicated content for continuous scroll */}
        <BannerContent />
        <BannerContent />
        <BannerContent />
        <BannerContent />
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <div
      className="flex flex-col items-center bg-[#22304C] mb-0 pb-8"
      id="about"
    >
      {/* Full-width banner */}
      <Banner />

      {/* Content container with 80% width */}
      <div className="w-[80%] flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        {/* Image section */}
        <div className="w-2/3 h-auto md:w-1/2 mx-auto flex justify-center">
          <img
            className="w-full sm:w-3/4 md:w-2/3 max-w-xs h-auto"
            src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1753026799/Untitled-1_hxh51j.webp"
            alt="Yohannis Lemalign"
            loading="lazy"
          />
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-50">
            About Me
          </h2>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-50">
            Who is <span className="text-[#FAAD1B]">Yohannis Lemalign?</span>
          </h1>
          <p className="text-gray-50 font-light text-xs sm:text-base">
            I am an undergraduate architecture student at Adama Science and
            Technology University (A.S.T.U.). I see every project as a personal
            challenge to grow and improve. Currently, I am seeking an internship
            at a reputable architecture firm where I can collaborate with
            experienced professionals and contribute to impactful architectural
            work with a vision for the future.
          </p>
          {/*todo:the size of the text on full screen is too big*/}
          <div className="flex justify-around gap-4">
            <div className="flex-col text-center">
              <h1 className="text-[#FAAD1B] font-extrabold text-lg sm:text-xl">
                100+
              </h1>
              <p className="text-gray-50 font-light text-xs sm:text-sm">
                Project Completed
              </p>
            </div>
            <div className="flex-col text-center">
              <h1 className="text-[#FAAD1B] font-extrabold text-lg sm:text-xl">
                5+
              </h1>
              <p className="text-gray-50 font-light text-xs sm:text-sm">
                Years of Experience
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#FAAD1B] rounded-4xl p-0 py-1 sm:w-1/2 md:w-1/2">
            <button className="bg-[#0c1f45] w-full rounded-4xl p-2 flex-1 text-gray-50 text-sm sm:text-base">
              Download CV
            </button>
            <div className="rounded-full bg-gray-50 p-2">
              <MdArrowForward className="text-xl sm:text-2xl text-[#0c1f45]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
