import React, { useRef } from 'react';
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa";
// import { Link } from 'react-scroll';


const Footer = ({experienceRef}) => {
  const scrollToRef = (ref) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="bg-blue-500 text-white py-20 px-6 lg:px-16 justify-center">
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-center'>
        <div>
        <h2 className=' text-2xl font-bold pb-4 italic font-serif'>Hassan.</h2>
        <p className="text-sm mb-2">Copyright &copy; 2023 
          <a href="#" className="text-gray-300 hover:text-white  ml-1">Muhammad Hassan Lal</a>
          </p>
          <p className="text-sm">Designed and built with 
          <a href="https://reactjs.org/" className=" text-gray-300 hover:text-white  ml-1">React</a> and 
          <a href="https://tailwindcss.com/" className="text-gray-300 hover:text-white  ml-1">Tailwind CSS</a>.
          </p>
        </div>
        <div>
          <h2 className=' text-2xl font-bold pb-4'>Quick Links</h2>
          <ul>
            <li className='py-1 text-gray-300 hover:text-white  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103 ' >About</li>
            <li className='py-1 text-gray-300 hover:text-white  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'>Services</li>
            <li className='py-1 text-gray-300 hover:text-white  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'  onClick={() => scrollToRef(experienceRef)}>Experience</li>
            <li className='py-1 text-gray-300 hover:text-white  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'>My Work</li>
          </ul>
        </div>
        <div  >
          <h2 className=' text-2xl font-bold pb-4'>Contact</h2>
          <div className='flex gap-3 justify-center  '>
          <a href="https://api.whatsapp.com/send?phone=923485050335" target="_blank" className='text-gray-300 hover:text-white  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'>
          {/* <img src="whatsapp-icon.png" alt="Whatsapp" /> */}
          <FaWhatsapp/>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hassan-lal-bb84021a4/" target="_blank" className=' text-gray-300 hover:text-white transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'>
          {/* <img src="whatsapp-icon.png" alt="Whatsapp" /> */}
          <FaLinkedinIn/>
          </a>
          <a href="https://join.skype.com/invite/sQSC57sYfZhc" target="_blank" className='text-gray-300 hover:text-white transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'>
          {/* <img src="whatsapp-icon.png" alt="Whatsapp" /> */}
          <FaSkype/>
          </a>
          <a href="https://github.com/muhammad-hassan-lal" target="_blank" className=' text-gray-300 hover:text-white t-gray-500 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-103'>
          {/* <img src="whatsapp-icon.png" alt="Whatsapp" /> */}
         <FaGithub/>
          </a>
          </div>

          

        </div>
      </div>
    </div>
    
    
  );
};

export default Footer;
