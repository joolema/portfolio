import React, { useState, useEffect } from "react";
import api from "../api/api";
const ProjectCard = ({ title, description, image, category }) => {
  return (
    <div className="bg-[var(--gray)] w-full h-auto sm-[40%] md:w-[30%] lg:w-[30%] flex-col items-center  rounded-3xl shadow-lg px-1 py-0">
      <img
        className="w-full h-[50%] object-cover rounded-t-3xl"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="w-full flex flex-wrap pt-2 gap-2 ">
        {category.map((cat, index) => (
          <p
            className="py-1 px-2 rounded-full bg-[var(--orange)] text-sm font-medium text-center whitespace-nowrap"
            key={`cat_${index}`}
          >
            {cat}
          </p>
        ))}
      </div>
      {/*todo:the project card list on full screen is fault*/}
      <p className="text-xs text-gray-50 font-extralight m-2">
        <span className="text-sm font-bold ">{title}-</span>
        {description}
      </p>
    </div>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  //data
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await api.get("/api/project");
        setProjects(response.data.data);
        console.log(response);
      } catch (error) {
        setError(
          error.message || error.error || "failed to load projects retry"
        );
      }
    };
    getProjects();
  }, []);

  const showMoreProjects = () => {
    if (!visible && visibleProjects < projects.length) {
      setVisibleProjects(projects.length);
      setVisible(true);
    } else {
      setVisibleProjects(3);
      setVisible(false);
    }
  };

  return (
    <section id="projects" className="bg-[var(--black)] py-12 mx-auto">
      <div className="flex flex-col items-center w-4/5 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl text-[var(--orange)]">
            My Portfolio
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mt-2">
            My Latest Projects
          </h2>
        </div>
        {projects.length == 0 ? (
          <div className="text-3xl text-gray-50 ">Coming Soon...</div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-evenly w-[100%] ">
            {error && <p>{error}</p>}
            {projects.slice(0, visibleProjects).map((proj, index) => (
              <ProjectCard key={`proj_${index}`} {...proj} />
            ))}
          </div>
        )}

        {projects.length > 3 && (
          <button
            onClick={showMoreProjects}
            className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-[var(--orange)] text-white rounded-full font-medium hover:bg-opacity-90 transition"
          >
            {visible ? "See Less" : "See More Projects"}
          </button>
        )}
      </div>
      <hr className="border-gray-50 w-full mt-12 text-7xl" />
    </section>
  );
};

export default Projects;
