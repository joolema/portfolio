import React from "react";

function Home() {
  return (
    <section className="bg-black py-0 w-full">
      <div className="h-16"></div>
      <div className="w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center clip-sec">
        <div className="flex-col justify-around w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative inline-block mb-3 text-white">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#FBBF24]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#FBBF24]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FBBF24]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FBBF24]"></div>

            {/* Border lines */}
            <div className="absolute top-1 left-2 right-2 h-px bg-gray-400"></div>
            <div className="absolute bottom-1 left-2 right-2 h-px bg-gray-400"></div>
            <div className="absolute top-2 bottom-2 left-1 w-px bg-gray-400"></div>
            <div className="absolute top-2 bottom-2 right-1 w-px bg-gray-400"></div>

            {/* Text */}
            <div className="px-4 py-2 text-center font-bold">Holle There</div>
          </div>
          <h1 className="text-gray-50 mb-4 font-extrabold text-2xl md:text-3xl">
            I`m <span className="text-[#FAAD1B]">Yohannis Lemalign,</span>{" "}
            Architecture Student & Graphic Designer from Ethiopia{" "}
          </h1>
          <p className="text-gray-50 mb-4 text-xs md:text-sm font-stretch-normal">
            I`m an experienced Graphic Designer with 5+ years in the field,
            collaborating with various companies and startups,
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="text-gray-50 bg-[#0c1f45] rounded-2xl px-4 h-8"
            >
              View My portfolio
            </a>
            <a
              href="#contact"
              className="border border-gray-50 text-gray-50 rounded-2xl h-8 px-4"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="flex-col w-full md:w-1/2 flex justify-center relative">
          <img
            src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1753026803/wwww_kr6tfv.webp"
            alt="Yohannis Lemalign"
            className="w-64 md:w-80 my-0 clip-img"
          />
        </div>
      </div>
      <div className="flex justify-end"></div>
      <div className="clip-tri w-full h-12 z-10 mt-0 bg-[var(--blue)]"></div>
    </section>
  );
}

export default Home;
