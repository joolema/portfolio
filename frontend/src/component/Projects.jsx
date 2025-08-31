import React, { useState, useEffect, useContext } from "react";
import api from "../api/api";
import { useProject } from "../context/projectContext";
const ProjectCard = ({ title, description, images, category }) => {
  return (
    <div className="bg-[var(--gray)] w-full h-auto sm-[40%] md:w-[30%] lg:w-[30%] flex flex-col items-center   shadow-lg  hover:scale-105 transition group">
      <div className="w-full group-hover:opacity-50">
        <img
          className="w-full object-fill"
          src={images[0].image}
          alt={title}
          loading="lazy"
        />
        <div className="w-full flex flex-wrap pt-2 gap-2 my-2 ">
          {category.map((cat, index) => (
            <p
              className="py-1 px-2 rounded-full bg-[var(--orange)] text-sm font-medium text-center whitespace-nowrap"
              key={`cat_${index}`}
            >
              {cat}
            </p>
          ))}
        </div>
      </div>

      <p className="absolute inset-20 bg-[var(--blue)] w-fit h-fit p-4 text-xs text-gray-50 font-extralight px-2 pt-2 mt-2 mb-4 opacity-0 group-hover:opacity-100 transition duration-500">
        <span className="text-sm font-bold ">{title}-</span>
        {description}
      </p>
    </div>
  );
};

const Projects = () => {
  const { projects, isLoading, error } = useProject();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visible, setVisible] = useState(false);
  console.log(projects);
  //data
  /*useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await api.get("/api/project");
        setProjects(response.data.data);
      } catch (error) {
        setError(
          error.message || error.error || "failed to load projects retry"
        );
      }
    };
    getProjects();
  }, []); */

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
