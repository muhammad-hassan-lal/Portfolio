import React, { useState } from "react";
import bgImg from "../../assets/bg-1234.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      setScrolled(true);
    } else if(window.scrollY >= 1613) {
      setScrolled(false);
    }
    else {
      setScrolled(false)
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white flex items-center justify-between px-6 py-4 transition duration-500 ${
          scrolled ? "bg-blue-500" : "bg-gray-100 bg-opacity-30"
        }`}
      >
        <h1 className="text-3xl font-bold italic font-serif">
          Hassan.
        </h1>
        <nav className="hidden md:block">
          <a
            href="https://www.linkedin.com/in/muhammad-hassan-lal-bb84021a4/"
            className="text-gray-300 hover:text-white mx-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muhammad-hassan-lal"
            className="text-gray-300 hover:text-white mx-4"
          >
            GitHub
          </a>
          <a
            href="https://join.skype.com/invite/sQSC57sYfZhc"
            className="text-gray-300 hover:text-white mx-4"
          >
            Skype
          </a>
        </nav>
        <button className="hidden md:block text-white border border-white rounded-full px-10 py-6 hover:bg-white hover:text-black ease-in duration-300">
          Contact Me
        </button>
      </header>
      <div className="relative h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-40">
          <h1 className="text-white font-sans text-4xl md:text-7xl text-center px-4">
            Muhammad Hassan Lal
          </h1>
          <p className="text-white font-sans text-lg md:text-3xl text-center px-4 mt-4">
            The best way to predict your future is to create it.
          </p>
          <button className="block md:hidden text-white border border-white rounded-full px-8 py-4 mt-6 hover:bg-white hover:text-black ease-in duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
