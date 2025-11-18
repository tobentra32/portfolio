import React from "react";

const Projects = () => {
  const projects = [
    { name: "An ERC20 Token", img: "./images/tokendapp.png", description: "This is a project where users are able to buy our deployed token", skills: ["Solidity", "Ethers.js", "Hardhat"] },
    { name: "Blockchain Rent Application", img: "./images/rentapp.png", description: "This project is a decentralized application built on the Ethereum blockchain. It is a rental marketplace where users can create, book, and review apartments. The project revolves around DappBnb.sol, a Solidity-written Ethereum smart contract. It leverages the OpenZeppelin library to ensure secure and standardized development of the contract.", skills: ["Solidity", "Ethers.js", "Hardhat"] },
    { name: "Twitter Lookalike", img: "./images/twitter.png", description: "This is an X look alike application, where i used the latest frontend stacks and implementing backend with prisma and mongodb, nextauth to fully understand how prisma can be used to perform CRUD operations on mongodb", skills: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"] },
    { name: "NFTMarketplace", img: "./images/nftmarketplace.png", description: "This is a beautifully designed marketplace where user can create and list an NFT for other users to buy", skills: ["Solidity", "Ethers.js", "Hardhat"] },
  ];

  return (
    <section id="projects" className="px-20 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
            <img className="px-20 pt-8" src={p.img} alt={p.name} width="600" height="500" />
            <div className="p-4">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-gray-400">{p.description}</p>
              <button className="mt-4 bg-orange-500 px-4 py-2 rounded">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
