import React from "react";
import TWS from '../assets/TWS.png'
import KP from '../assets/KP.png'

const workExperience = [
  {
    company: "The Web Storms",
    logo: TWS,
    jobTitle: "React Developer",
    dates: "September 2022 - Present",
    des1: "Working on HTML, CSS and Bootstrap.",
    des2: "Working on Vue JS to help seniors.",
    des3: "Working on React JS, React Router, React FinalForm, CRUD.",
    website: "https://www.thewebstorms.com/",
  },
  {
    company: "Kpleads Communications",
    logo: KP,
    jobTitle: "IT Executive",
    dates: "March 2021 - Augest 2022",
    des1: "Manage team responsibilities",
    des2: "Manage support operations. ",
    des3: "Manage Networks, Dialer's VoIP, Database, CRM, and Inventory",
    website: "https://kpleads.com/",
  },
];

const WorkExperience = () => {
  const handleClick = (website) => {
    window.open(website, "_blank");
  };
  return (
    <>
      <h1 className="text-center font-sans text-4xl font-bold py-4">
        My Experience
      </h1>
      <div className="w-16 h-1 bg-blue-500 mx-auto mb-3 mt-5"></div>
      <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>

      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 mb-30">
        {workExperience.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start hover:bg-slate-100 transition ease-out duration-200 p-4 w-full md:w-1/2"
          >
            <img
              src={work.logo}
              alt={work.company}
              className="w-36 object-cover shadow-md bg-white"
            />
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-lg font-bold">{work.company}</h3>
              <h4 className="text-md font-medium">{work.jobTitle}</h4>
              <p className="text-sm font-medium">{work.dates}</p>
              <p className="text-sm py-2">
                {work.des1} <br />
                {work.des2} <br /> {work.des3}
              </p>
              <button
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleClick(work.website)}
              >
                Visit Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkExperience;
