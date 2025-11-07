import React from "react";

const Projects = () => {
  const projects = [
    { name: "Project 1", img: "./images/tokendapp.png", category: "Web Design" },
    { name: "Project 2", img: "./images/rentapp.png", category: "App Design" },
    { name: "Project 3", img: "./images/twitter.png", category: "Branding" },
    { name: "Project 3", img: "./images/nftmarketplace.png", category: "Branding" },
  ];

  return (
    <section id="projects" className="px-20 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio</h2>
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-orange-500 px-4 py-1 rounded">All</button>
        <button className="border px-4 py-1 rounded">Web Design</button>
        <button className="border px-4 py-1 rounded">App Design</button>
        <button className="border px-4 py-1 rounded">Branding</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
            <img src={p.img} alt={p.name} />
            <div className="p-4">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-gray-400">{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
