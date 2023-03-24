import React from "react";

// const Skills = () => {
//   return (
//     <section className="px-6 py-4">
//       <h2 className="text-2xl font-bold mb-4">Skills</h2>
//       <ul className="list-disc ml-6">
//         <li className="mb-1">React</li>
//         <li className="mb-1">Redux</li>
//         <li className="mb-1">JavaScript</li>
//         <li className="mb-1">HTML/CSS</li>
//         <li className="mb-1">Git</li>
//         <li className="mb-1">Node.js</li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;
const SkillBar = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <h1 className="text-2xl font-sans pb-4">My expertise and skills</h1>
      <label>HTML</label>
      <div className="flex items-center mb-2">
        <div className="flex-grow bg-gray-300 rounded-full h-2">
          <div
            className={`bg-blue-500 h-full rounded-full`}
            style={{ width: `85%` }}
          ></div>
        </div>
        <div className="w-16 text-right">
          <span>85%</span>
        </div>
      </div>

      <label>CSS</label>
      <div className="flex items-center mb-2">
        <div className="flex-grow bg-gray-300 rounded-full h-2 mr-2">
          <div
            className={`bg-blue-500 h-full rounded-full`}
            style={{ width: `85%` }}
          ></div>
        </div>
        <div className="w-16 text-right">
          <span>85%</span>
        </div>
      </div>

      <label>JavaScript</label>
      <div className="flex items-center mb-2">
        <div className="flex-grow bg-gray-300 rounded-full h-2 mr-2">
          <div
            className={`bg-blue-500 h-full rounded-full`}
            style={{ width: `50%` }}
          ></div>
        </div>
        <div className="w-16 text-right">
          <span>50%</span>
        </div>
      </div>

      <label>React JS</label>
      <div className="flex items-center mb-2">
        <div className="flex-grow bg-gray-300 rounded-full h-2 mr-2">
          <div
            className={`bg-blue-500 h-full rounded-full`}
            style={{ width: `50%` }}
          ></div>
        </div>
        <div className="w-16 text-right">
          <span>50%</span>
        </div>
      </div>

      <label>TailWind Css</label>
      <div className="flex items-center mb-2">
        <div className="flex-grow bg-gray-300 rounded-full h-2 mr-2">
          <div
            className={`bg-blue-500 h-full rounded-full`}
            style={{ width: `65%` }}
          ></div>
        </div>
        <div className="w-16 text-right">
          <span>65%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
