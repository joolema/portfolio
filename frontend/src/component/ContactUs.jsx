import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaBeer,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[var(--black)] w-full mx-auto">
      <div className="flex flex-col md:flex-row  lg:flex-row items-stretch justify-center w-[80%] mx-auto rounded-4xl ">
        <div className="flex flex-col w-[80%] gap-4 justify-center md:w[50%] lg:w-[40%] p-2">
          {/* bg-[var(--gray)]*/}
          <p className="text-[var(--orange)]">Contact Us</p>
          <p className="text-gray-50 font-bold ">
            {" "}
            Let`s Talk for Your Next Projects
          </p>
          <div className="flex gap-2">
            <FaInstagram className="text-[var(--orange)]" />
            <FaFacebook className="text-[var(--orange)]" />
            <FaEnvelope className="text-[var(--orange)]" />
            <FaLinkedin className="text-[var(--orange)]" />
          </div>
          <p className="text-xs font-extralight text-gray-50">
            "Let’s talk about your next project! Whether it's architecture,
            graphic design, or a creative vision, I’m here to bring your ideas
            to life with innovation and precision. Let's collaborate and create
            something exceptional."{" "}
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
          <form className="grid grid-col-1 m-auto py-3 px-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col py-2 px-4">
              <label className="text-xs text-gray-50 font-light ml-2">
                {" "}
                Your Name
              </label>
              <input
                type="name"
                name="name"
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
                name="options"
              >
                <option className=" px-4 mx-auto" value="" disabled selected>
                  select
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
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
                placeholder="example@gmail.com"
                className="border border-amber-50 text-gray-50 rounded-xl p-1 text-xs placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col py-2 px-4">
              <label className="text-xs text-gray-50 font-light ml-2">
                {" "}
                Country
              </label>
              <input
                type="country"
                name="country"
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
                type="name"
                name="name"
                placeholder="0900000000"
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
              ></textarea>
            </div>
            <div className="flex justify-between items-center bg-[#FAAD1B] rounded-4xl px-1 py-1 col-span-full sm:w-1/2 md:w-1/2 ml-4">
              <button className="bg-[#0c1f45] w-[80%] rounded-4xl p-2 flex-1 text-gray-50 text-sm sm:text-base">
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
