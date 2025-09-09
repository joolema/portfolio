import { useState, useEffect } from "react";
import Head from "./Head";
import api from "../api/api";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

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
      className="bg-[var(--black)] w-full mx-auto h-screen "
    >
      <Head />
      <div className="filler h-32"></div>
      <div className="flex flex-col md:flex-row  lg:flex-row items-stretch justify-center w-[80%] mx-auto rounded-4xl relative ">
        <div className="flex flex-col w-[80%] gap-4 justify-center md:w-[50%] lg:w-[40%] p-2">
          {/* bg-[var(--gray)]*/}
          <p className="text-[var(--orange)]">Contact Us</p>
          <p className="text-gray-50 font-bold ">
            {" "}
            Let`s Talk for Your Next Projects
          </p>
          <div className="flex gap-2">
            <a href="">
              <FaInstagram className="text-[var(--orange)]" />
            </a>
            <a href="">
              <FaFacebook className="text-[var(--orange)]" />
            </a>
            <a href="mailto:yohannesweb81@gmail.com">
              <FaEnvelope className="text-[var(--orange)]" />
            </a>
            <a href="">
              <FaLinkedin className="text-[var(--orange)]" />
            </a>
          </div>
          <p className="text-xs font-extralight text-gray-50">
            Whether it's architecture, graphic design, or a creative vision, I’m
            here to bring your ideas to life with innovation and precision.
            Let's collaborate and create something exceptional."{" "}
          </p>
          <div className="flex gap-2">
            <FaPhone className="text-[var(--orange)]" />
            <p className="text-gray-50 text-xs">+251977377440</p>
          </div>
          <div className="flex gap-2">
            <FaEnvelope className="text-[var(--orange)]" />
            <p className="text-gray-50 text-xs"> yohanneslemalign@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <FaInstagram className="text-[var(--orange)]" />
            <p className="text-gray-50 text-xs"> Yohannis Lemalign</p>
          </div>
        </div>
        {/* bg-gray-500
rounded-4xl*/}
        <div className="flex w-full gap-2 h-auto md:w-[50%] lg:w-[50%]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-col-1 m-auto py-3 px-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
          >
            <div className="flex flex-col py-2 px-4">
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
                className="border border-amber-50 text-gray-50 rounded-xl p-1 text-xs placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col py-2 px-4">
              <label className="text-xs text-gray-50 font-light ml-2">
                {" "}
                I`m Interested in
              </label>
              <select
                className="border text-xs text-gray-400  border-amber-50 rounded-xl p-1"
                id="options"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">select</option>
                <option value="Hire">Hire</option>
                <option value="Collaborate">Collaborate</option>
                <option value="Advice">Advice</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col py-2 px-4">
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
                className="border border-amber-50 text-gray-50 rounded-xl p-1 text-xs placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col py-2 px-4">
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
                className="border border-amber-50 text-gray-50 rounded-xl p-1 text-xs placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col py-2 px-4">
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
                placeholder="+25100000000"
                className="border border-amber-50 text-gray-50 rounded-xl p-1 text-xs placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col col-span-full py-2 px-4">
              <label className="text-xs text-gray-50 font-light ml-2">
                {" "}
                Your Message
              </label>
              <textarea
                name="message"
                className="border border-amber-50 text-gray-50 rounded-xl p-1 "
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {error && <div className="text-red-400">{error}</div>}
            <div className="flex justify-between items-center bg-[#FAAD1B] rounded-4xl px-1 py-1 col-span-full sm:w-1/2 md:w-1/2 ml-4">
              <button
                disabled={isLoading}
                className="bg-[#0c1f45] w-[80%] rounded-4xl p-2 flex-1 text-gray-50 text-sm sm:text-base"
              >
                Submit
              </button>
              <div className="rounded-full bg-gray-50 p-2 w-[20%] h-[80%]"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
