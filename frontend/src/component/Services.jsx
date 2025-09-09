import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const services = [
  {
    img: "rand.jpeg",
    title: "Graphic Design",
    desc: "creative and reliable Graphics design and to take your visual content to the next level",
  },
  {
    img: "rand2.jpeg",
    title: "building design",
    desc: "Architectural design for you dream building",
  },
  {
    img: "rand3.jpeg",
    title: "Video editing",
    desc: "turn your raw footage into engaging, professional videos with smooth transitions, clean audio, and cinematic color grading.",
  },
  {
    img: "rand.jpeg",
    title: "Graphic Design",
    desc: "creative and reliable Graphics design and to take your visual content to the next level",
  },
  {
    img: "rand2.jpeg",
    title: "building design",
    desc: "Architectural design for you dream building",
  },
  {
    img: "rand3.jpeg",
    title: "Video editing",
    desc: "turn your raw footage into engaging, professional videos with smooth transitions, clean audio, and cinematic color grading.",
  },
];
// Title Case
const toTitleCase = (str) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

// Sentence Case
const toSentenceCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const Services = () => {
  const service_num = services.length;
  const [show, setShow] = useState(3);
  const [showing, setShowing] = useState(false);

  const handleShow = () => {
    if (!showing) {
      setShow(service_num);
      setShowing(true);
    } else {
      setShow(3);
      setShowing(false);
    }
  };
  return (
    <section
      id="services"
      className="bg-[var(--black)] py-0 mt-0 h-screen flex flex-col items-center "
    >
      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto ">
        <h1 className="text-[var(--orange)] text-2xl sm:text-3xl font-bold">
          Services
        </h1>
      </div>

      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        <div className="flex justify-between items-center ">
          <h1 className="text-gray-50 m-3 text-2xl sm:text-2xl">
            Services I Provide
          </h1>
          <button
            onClick={handleShow}
            className="flex gap-5 items-center border rounded-4xl bg-[var(--blue)] p-3 group hover:bg-amber-50"
          >
            <p className="text-white font-mono group-hover:text-[var(--black)]">
              {showing ? "Hide Services" : "View All Services"}
            </p>
            <ArrowRightIcon className="text-white w-5 h-5 font-bold group-hover:text-[var(--black)]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 py-7">
          {services.slice(0, show).map((srvc, idx) => (
            <div
              key={idx}
              className="bg-[var(--gray)] p-4 rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={srvc.img}
                alt="service icon"
                className="w-16 h-16 object-cover mb-3"
              />
              <h2 className="text-white font-semibold">
                {toTitleCase(srvc.title)}
              </h2>
              <p className="text-gray-400 text-sm">
                {toSentenceCase(srvc.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
