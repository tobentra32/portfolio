import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "RentApp",
      desc: "A decentralized rental app with custom ERC20 payments",
    },
    {
      title: "Wallet App",
      desc: "Crypto management app with multiple wallet integrations",
    },
    {
      title: "Stablecoin",
      desc: "EVM & Solana-based stablecoin implementation",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gray-100 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
