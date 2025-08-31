import React from "react";

function Home() {
  return (
    <section className="bg-black py-0 w-full relative">
      <div className="filler h-16"></div>
      <div>
        <div className="w-[75%] mx-auto flex flex-col md:flex-row justify-between items-center clip-sec relative ">
          <div className="flex-col justify-around h-full w-full md:w-1/2 mb-8 md:mb-0">
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
            <h1 className="text-gray-50 mb-6 leading-normal font-bold text-4xl  md:text-3xl">
              I`m{" "}
              <span className="text-[#FAAD1B]">
                Yohannis Lemalign,
                <br />
              </span>{" "}
              Architecture Student &<br /> Graphic Designer <br />
              from Ethiopia{" "}
            </h1>
            <p className="text-gray-50 mb-4 text-xs md:text-sm font-stretch-normal">
              I`m an experienced Graphic Designer with 5+ years in the field,
              <br />
              collaborating with various companies and startups.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="text-gray-50 bg-[var(--blue)] rounded-2xl px-4 h-8"
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

          <div className="flex flex-col w-full h-screen md:w-1/2 justify-center relative">
            <img
              src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1753044107/wwww_kr6tfv_f1d908.webp"
              alt="Yohannis Lemalign"
              loading="lazy"
              width="400"
              height="auto"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
        {/* Overlapping triangle on the right */}
        <div className="clip-tri bg-[var(--blue)] absolute bottom-0 right-0 w-2/3 h-15 z-20"></div>
      </div>
    </section>
  );
}

export default Home;
