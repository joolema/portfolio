import { useState } from "react";
import FavTool from "./FavTool";
import EducationWork from "./EducationWork";
import Experience from "./Experience";
import Approach from "./Approach";
const Container = () => {
  const [view, setView] = useState("approach");
  return (
    <div className="w-screen h-fit bg-[var(--blue)] pb-6 mx-auto  ">
      <div className=" flex flex-col gap-2 w-[50%] mx-auto mb-5 pt-8 ">
        <h1 className="text-3xl mx-auto text-amber-50   text-wrap">
          Creativity in Practice:{" "}
        </h1>
        <h1 className="text-3xl mx-auto text-[var(--orange)]">
          My Journey & Skills
        </h1>
      </div>
      <div className=" flex flex-col">
        <div className="flex justify-between bg-black/30 w-[40%] mx-auto py-1 rounded-2xl">
          <button
            className={` text-amber-50 rounded-2xl p-2 font-bold ${
              view == "approach" ? "bg-[var(--orange)] text-black" : ""
            }`}
            onClick={() => setView("approach")}
          >
            My Approach
          </button>
          <button
            className={` text-amber-50 rounded-2xl p-2 font-bold ${
              view == "edu" ? "bg-[var(--orange)] text-black" : ""
            }`}
            onClick={() => setView("edu")}
          >
            Education
          </button>
          <button
            className={` text-amber-50 rounded-2xl p-2 font-bold ${
              view == "exp" ? "bg-[var(--orange)] text-black" : ""
            }`}
            onClick={() => setView("exp")}
          >
            Experience
          </button>
          <button
            className={` text-amber-50 rounded-2xl p-2 font-bold ${
              view == "skill" ? "bg-[var(--orange)] text-black" : ""
            }`}
            onClick={() => setView("skill")}
          >
            Skills
          </button>
        </div>
        {view == "skill" && <FavTool />}
        {view == "edu" && <EducationWork />}
        {view == "exp" && <Experience />}
        {view == "approach" && <Approach />}
      </div>
    </div>
  );
};

export default Container;
