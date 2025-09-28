import { motion, easeIn, easeInOut } from "framer-motion";
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
const childVariant2 = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="text-amber-50 flex flex-col bg-[var(--blue)]">
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={containerVariant}
        className="flex flex-col md:flex md:flex-row justify-around my-10"
      >
        <motion.div
          variants={childVariant}
          className="flex flex-col gap-6 w-82 items-center"
        >
          <img
            src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1758103858/logo_02_xaxq88.webp"
            alt="Your Brand Logo"
            className="w-62 md:w-84  my-auto p-0"
          />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex flex-col text-cm text-amber-50 gap-1 w-24"
        >
          <p className="text-2xl">Navigation </p>
          <a
            href="#home"
            className="opacity-40 hover:opacity-100 hover:text-[var(--orange)]"
          >
            {" "}
            Home
          </a>
          <a
            href="#services"
            className="opacity-40 hover:opacity-100 hover:text-[var(--orange)]"
          >
            Services
          </a>
          <a
            href="#about"
            className="opacity-40 hover:opacity-100 hover:text-[var(--orange)]"
          >
            About{" "}
          </a>
          <a
            href="#projects"
            className="opacity-40 hover:opacity-100 hover:text-[var(--orange)]"
          >
            projects
          </a>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex flex-col text-sm text-amber-50  gap-2 w-52"
        >
          <p className="text-2xl">Contact </p>
          <p className=" text-md">
            Phone:
            <span className="opacity-40 "> +251977377440</span>
          </p>
          <p className=" text-md">
            Email:
            <span className="opacity-40 "> yohanneslemalign@gmail.com</span>
          </p>
          <p className=" text-md">
            Linkedin:<span className="opacity-40 "> Yohannis Lemalign</span>
          </p>
        </motion.div>
      </motion.div>
      <hr className="text-amber-50 w-full " />
      <div className="flex justify-between items-center px-20 bg-black/30 w-full">
        <motion.p variants={childVariant} className="text-sm ">
          Copyight © 2024 <span className="text-[var(--orange)]">Yohannes</span>
          . All Rights Reserved.{" "}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={containerVariant}
          className="flex gap-8 items-center my-4 "
        >
          <motion.div className="flex gap-5 ">
            <motion.img
              variants={childVariant}
              src="./socials/instaicon.webp"
              className="w-6 h-6 object-contain  rounded-full"
              alt="up arrow"
            />
            <motion.img
              variants={childVariant}
              src="./socials/fbicon.webp"
              className="w-6 h-6 object-contain  rounded-full"
              alt="up arrow"
            />
            <motion.img
              variants={childVariant}
              src="./socials/beicon.webp"
              className="w-6 h-6 object-contain  rounded-full"
              alt="up arrow"
            />
            <motion.img
              variants={childVariant}
              src="./socials/ld.webp"
              className="w-6 h-6 object-contain rounded-full"
              alt="up arrow"
            />
          </motion.div>
          <motion.a variants={childVariant2} href="#home">
            <div className="border-2 border-amber-50  rounded-full p-2 ">
              <img
                src="./other/arrow.webp"
                alt="up arrow"
                className="w-4 h-4 object-contain transform transition-transform duration-300 ease-in-out hover:-translate-y-3"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
