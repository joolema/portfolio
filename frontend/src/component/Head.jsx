import React, { useState } from "react";

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-[100%] z-2 flex justify-between items-center p-4 bg-black shadow-md">
      <div className="logo flex items-center">
        <img
          src="https://res.cloudinary.com/dsfknwexm/image/upload/v1751017683/ylogo_kbck43.png"
          alt="Your Brand Logo"
          className="w-32 md:w-44 m-0 p-0"
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
        <a href="#edu" className="text-gray-50 text-sm hover:text-blue-500">
          Education & Work
        </a>
        <a
          href="#contact"
          className="bg-gray-50 p-2 rounded-2xl text-gray-950 text-sm hover:text-blue-500"
        >
          Contact Me
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
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
          href="#edu"
          className="text-gray-50 text-sm hover:text-blue-500"
          onClick={toggleMenu}
        >
          Education & Work
        </a>
        <a
          href="#contact"
          className="bg-gray-50 p-2 rounded-2xl text-gray-950 text-sm hover:text-blue-500 text-center"
          onClick={toggleMenu}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Head;
