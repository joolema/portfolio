import React, { useState } from "react";

const ProjectCard = ({ title, description, image, category }) => {
  return (
    <div className="bg-[var(--gray)] w-full h-auto sm-[40%] md:w-[30%] lg:w-[30%] flex-col items-center  rounded-3xl shadow-lg px-1 py-0">
      <img
        className="w-full h-auto object-cover rounded-t-3xl"
        src={image}
        alt={title}
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
  //data
  const allProjects = [
    {
      title: "Home Design",
      description:
        "A beautiful home interior design lorem ipsum delore amet sit ",
      category: ["architecture", "design", "natural", "family"],
      image:
        "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485288/images_ojfu4q.jpg",
    },
    {
      title: "Office Space",
      description: "Modern workspace design",
      category: ["commercial", "design"],
      image:
        "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485288/images_ojfu4q.jpg",
    },
    {
      title: "Garden Landscape",
      description: "Sustainable outdoor design",
      category: ["landscape", "eco-friendly"],
      image:
        "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485288/images_ojfu4q.jpg",
    },
    {
      title: "Retail Store",
      description: "Contemporary retail interior",
      category: ["commercial", "retail"],
      image:
        "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485288/images_ojfu4q.jpg",
    },
    {
      title: "Apartment Complex",
      description: "Urban residential design",
      category: ["architecture", "residential"],
      image:
        "https://res.cloudinary.com/dq4kdrhto/image/upload/v1751485288/images_ojfu4q.jpg",
    },
  ];

  const showMoreProjects = () => {
    if (visibleProjects < allProjects.length) {
      setVisibleProjects(allProjects.length);
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

        <div className="flex flex-wrap gap-4 justify-evenly ">
          {allProjects.slice(0, visibleProjects).map((proj, index) => (
            <ProjectCard key={`proj_${index}`} {...proj} />
          ))}
        </div>

        <button
          onClick={showMoreProjects}
          className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-[var(--orange)] text-white rounded-full font-medium hover:bg-opacity-90 transition"
        >
          {visible ? "See Less" : "See More Projects"}
        </button>
      </div>
      <hr className="border-gray-50 w-full mt-12 text-7xl" />
    </section>
  );
};

export default Projects;
