import React from "react";
import project1 from "../assets/download.jpeg";
import project2 from "../assets/ESE.png";


const projects = [
  {
    name: "Allama Iqbal Hospital",
    image: project1,
    website: "https://www.allamaiqbalhospital.com/",
  },
  {
    name: "FlightESE",
    image: project2,
    website: "https://www.project2.com/",
  },
];

const Work = () => {
  const handleClick = (website) => {
    window.open(website, "_blank");
  };

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-4xl font-bold text-center mb-10">My Work</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mb-3 mt-5"></div>
      <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center overflow-hidden rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-103"
          >
            <img
              className="w-full h-auto object-cover"
              src={project.image}
              alt={project.name}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 opacity-0 hover:opacity-75 transition ease-in-out duration-500">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {project.name}
                </h3>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  onClick={() => handleClick(project.website)}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
