import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-[#242424] py-0 mt-0">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto text-center">
        <h1 className="text-[var(--orange)] text-2xl sm:text-3xl font-bold">
          Services
        </h1>
      </div>

      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        <h1 className="text-gray-50 m-3 text-xl sm:text-2xl">
          Services I Provide
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-7">
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
          <div className="h-30 bg-gray-900 rounded-lg"></div>
        </div>
      </div>
      <hr className="bottom-0 text-gray-50" />
    </section>
  );
};

export default Services;
