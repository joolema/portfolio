import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationWork = () => {
  return (
    <section id="edu" className="bg-[#0c0c0c] ">
      <div className="py-8 sm:py-12 flex flex-col items-center justify-center w-full">
        <div className="flex-col w-full sm:w-2/3 md:w-1/2 text-center px-4">
          <h1 className="text-2xl sm:text-3xl text-[var(--orange)]">
            Education & Work
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mt-2">
            My Academic and Professional Journey
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 m-4 w-full sm:w-11/12 md:w-3/4 justify-center">
          {/* Education Grid */}
          <div className="grid-cols-1 gap-4 bg-[#242424] px-4 py-6 sm:py-7 rounded-2xl w-full sm:w-1/2">
            <div className="flex gap-4 items-center">
              <FaGraduationCap className="text-5xl sm:text-7xl text-[var(--orange)]" />
              <h3 className="text-2xl sm:text-4xl text-gray-50">Education</h3>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-l-2 border-[var(--orange)] h-12 relative top-5"></div>
              <div className="border-[var(--orange)] relative right-2 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  <span className="font-bold text-gray-50">Elementary</span> -
                  Sanete Primary School / 2002 - 2009
                </p>
              </div>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-l-2 border-[var(--orange)] h-12 relative top-5"></div>
              <div className="border-[var(--orange)] relative right-2 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  <span className="font-bold text-gray-50">High School</span> -
                  Goba High School / 2010 - 2011
                </p>
              </div>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-l-2 border-[var(--orange)] h-12 relative top-5"></div>
              <div className="border-[var(--orange)] relative right-2 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  <span className="font-bold text-gray-50">Preparatory</span> -
                  Batu Terara Secondary School / 2012 - 2013
                </p>
              </div>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-[var(--orange)] relative right-1.5 top-0.5 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  <span className="font-bold text-gray-50">University</span> -
                  Adama Science and Technology University / 2014 - Present
                </p>
              </div>
            </div>
          </div>
          {/* Work Grid */}
          <div className="grid-cols-1 gap-4 bg-[#242424] px-4 py-6 sm:py-7 rounded-2xl w-full sm:w-1/2">
            <div className="flex gap-4 items-center">
              <FaBriefcase className="text-4xl sm:text-5xl text-[var(--orange)]" />
              <h3 className="text-2xl sm:text-4xl text-gray-50">
                Work Experience
              </h3>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-l-2 border-[var(--orange)] h-12 relative top-5"></div>
              <div className="border-[var(--orange)] relative right-2 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  Three Months of Internship
                </p>
              </div>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-l-2 border-[var(--orange)] h-12 relative top-5"></div>
              <div className="border-[var(--orange)] relative right-2 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  Participated in Continuous College Projects
                </p>
              </div>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-l-2 border-[var(--orange)] h-12 relative top-5"></div>
              <div className="border-[var(--orange)] relative right-2 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  <span className="font-bold text-gray-50">Meseso Studio</span>{" "}
                  - Graphics Design and Visual Arts / 2011 - 2013
                </p>
              </div>
            </div>
            <div className="flex ml-2 items-center">
              <div className="border-[var(--orange)] relative right-1.5 top-0.5 bg-[var(--orange)] w-3 h-3 rounded-full"></div>
              <div>
                <p className="text-gray-50 text-sm sm:text-base">
                  <span className="font-bold text-gray-50">Self-Employed</span>{" "}
                  - Graphics Design and Visual Arts / 2014 - 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-50" />
    </section>
  );
};

export default EducationWork;
