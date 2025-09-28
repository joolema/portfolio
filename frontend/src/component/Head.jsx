import React, { useState } from "react";

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed flex justify-center bg-black p-4  shadow-md z-30 2xl:text-4xl">
      <header className=" w-[80%]  flex justify-between items-center ">
        <div className="logo flex items-center">
          <img
            src="https://res.cloudinary.com/dq4kdrhto/image/upload/v1758103858/logo_02_xaxq88.webp"
            alt="Your Brand Logo"
            className="w-62 md:w-84  m-0 p-0"
          />
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-gray-50 text-sm hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-50 text-sm hover:text-blue-500">
            About
          </a>
          <a
            href="#services"
            className="text-gray-50 text-sm hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-gray-50 text-sm hover:text-blue-500"
          >
            Projects
          </a>
          <a href="#edu" className="text-gray-50 text-sm hover:text-blue-500">
            Education
          </a>
          <a
            href="#contact"
            className="bg-gray-50 p-2 rounded-2xl text-gray-950 text-sm hover:text-blue-500"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-gray-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col gap-4 absolute top-16 left-0 w-full bg-black p-4 shadow-md z-10`}
        >
          <a
            href="#home"
            className="text-gray-50 text-sm hover:text-blue-500"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-50 text-sm hover:text-blue-500"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-50 text-sm hover:text-blue-500"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-gray-50 text-sm hover:text-blue-500"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#edu"
            className="text-gray-50 text-sm hover:text-blue-500"
            onClick={toggleMenu}
          >
            Education
          </a>
          <a
            href="contact"
            onClick={toggleMenu}
            className="bg-gray-50 p-2 rounded-2xl text-gray-950 text-sm hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
};

export default Head;
