// Skills.jsx
import React from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPrisma, 
  SiMongodb, 
  
  SiSolidity 
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Prisma", icon: <SiPrisma className="text-indigo-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    //{ name: "Hardhat", icon: <SiHardhat className="text-yellow-500" /> },
    { name: "Solidity", icon: <SiSolidity className="text-gray-500" /> },
  ];

  return (
    <section id="skills" className="px-10 py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
