import { useState, useEffect } from "react";
import api from "../api/api";
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
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await api.post("/api/message", formData);
      if (response.status == 201) {
        setIsLoading(false);
        alert("message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          interest: "",
          country: "",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  return (
    <section
      id="contact"
      className="bg-[var(--blue)]/70  bg-[url('./other/bghouse.png')] flex items-center   sm:bg-[length:60%_100%] bg-right bg-no-repeat w-full mx-auto h-[100vh] relative "
    >
      <motion.div
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col bg-[var(--blue)]  items-stretch justify-center w-[35%] ml-[20%] py-3  rounded-4xl relative "
      >
        {/* bg-[var(--gray)]*/}

        <motion.div
          variants={containerVariant}
          className="w-[65%]  mx-auto  flex flex-col gap-2 mb-2"
        >
          <h1 className="text-[var(--orange)] text-2xl">Contact Us</h1>
          <h2 className="text-gray-50 font-bold text-3xl ">
            Get in touch today
          </h2>
          <p className="text-xs font-extralight text-gray-50 ">
            Whether it's architecture, graphic design, or a creative vision, I’m
            here to bring your ideas to life with innovation and precision.
            Let's collaborate and create something exceptional.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView={"show"}
          variants={containerVariant}
          onSubmit={handleSubmit}
          className="grid grid-col-1 m-auto w-[70%] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 [&_input]:bg-black/30 [&_select]:bg-black/30 [&_textarea]:bg-black/30 [&_div]:hover:scale-120"
        >
          <motion.div
            variants={childVariant}
            className="flex flex-col py-1 px-2"
          >
            <label className="text-xs text-gray-50 font-light ml-2">
              {" "}
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex. john doe"
              className=" text-gray-50 rounded-sm p-1 text-xs placeholder:text-gray-400"
            />
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex flex-col py-1 px-2"
          >
            <label className="text-xs text-gray-50 font-light ml-2">
              {" "}
              I`m Interested in
            </label>
            <select
              className=" text-xs text-gray-400   rounded-sm p-1"
              id="options"
              name="interest"
              placeholder="select"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">select</option>
              <option value="Hire">Hire</option>
              <option value="Collaborate">Collaborate</option>
              <option value="Advice">Advice</option>
              <option value="Other">Other</option>
            </select>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex flex-col py-1 px-2"
          >
            <label className="text-xs text-gray-50 font-light ml-2">
              {" "}
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className=" text-gray-50 rounded-sm p-1 text-xs placeholder:text-gray-400"
            />
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex flex-col py-1 px-2"
          >
            <label className="text-xs text-gray-50 font-light ml-2">
              {" "}
              Country{" "}
              <span className="text-gray-300 text-[0.825em] text-opacity-50%">
                (optional)
              </span>
            </label>
            <input
              type="text"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              placeholder="place of residence"
              className=" rounded-sm p-1 text-xs placeholder:text-gray-400"
            />
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex flex-col py-1 px-2"
          >
            <label className="text-xs text-gray-50 font-light ml-2">
              {" "}
              Phone
            </label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className=" text-gray-50 rounded-sm p-1 text-xs placeholder:text-gray-400"
            />
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex flex-col col-span-full py-1 px-2"
          >
            <label className="text-xs text-gray-50 font-light ml-2">
              {" "}
              Your Message
            </label>
            <textarea
              name="message"
              className=" text-gray-50 rounded-md p-1 text-xs "
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter here"
            ></textarea>
          </motion.div>
          {error && <div className="text-red-400">{error}</div>}
          <motion.button
            variants={childVariant}
            ton
            disabled={isLoading}
            className="bg-[var(--orange)] w-[60%]  px-2 py-[0.5px] rounded-md text-sm sm:text-base"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
