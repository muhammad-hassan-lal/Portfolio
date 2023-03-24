import React from "react";
import { FaCode, FaConnectdevelop, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-4xl mb-4" />,
    description:
      "I can create beautiful, fast and responsive websites using modern web development technologies such as React.",
  },
  {
    title: "Ecommerce",
    icon: <FaConnectdevelop className="text-4xl mb-4" />,
    description:
      "I can Design An E-Commerce Websites for you",
  },
//   {
//     title: "UI/UX Design",
//     icon: <FaPaintBrush className="text-4xl mb-4" />,
//     description:
//       "I am skilled in creating intuitive and user-friendly designs for web and mobile apps using tools like Figma and Adobe XD.",
//   },
];

const Services = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
    <h2 className="text-3xl font-semibold text-center">Services that I can Offer</h2>
    <div className="w-16 h-1 bg-blue-500 mx-auto mb-3 mt-5"></div>
    <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-2">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md hover:bg-slate-100">
          <div>
          <div className="mb-3">{service.icon}</div>
            <h3 className="text-xl font-medium">{service.title}</h3>
            <p className="mt-2 text-gray-500">{service.description}</p>
          </div>
  
        </div>
      ))}
    </div>
  </div>
  );
};

export default Services;
