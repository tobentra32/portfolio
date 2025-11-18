import React from "react";

const Projects = () => {
  const projects = [
    { 
      name: "An ERC20 Token", 
      img: "./images/tokendapp.png", 
      description: "This is a project where users are able to buy our deployed token", 
      skills: ["Solidity", "Ethers.js", "Hardhat", "React", "Tailwind CSS"],
      header: "from-gray-800 to-gray-900",
      button: "from-orange-500 to-orange-600",
      textColor: "text-gray-300",
      link: "https://token-navy-six.vercel.app/"
    },
    { 
      name: "Blockchain Rent Application", 
      img: "./images/rentapp.png", 
      description: "A decentralized rental marketplace on the Ethereum blockchain.", 
      skills: ["Solidity", "Ethers.js", "Hardhat","nextjs", "Tailwind CSS","javascript"],
      header: "from-gray-800 to-gray-900",
      button: "from-orange-500 to-orange-600",
      textColor: "text-gray-300",
      link: "https://rentapp-blockchain.vercel.app/"
    },
    
    { 
      name: "Twitter Lookalike", 
      img: "./images/twitter.png", 
      description: "An X look-alike app using the latest frontend stack and backend with Prisma and MongoDB.", 
      skills: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB","javascript",],
      header: "from-gray-800 to-gray-900",
      button: "from-orange-500 to-orange-600",
      textColor: "text-gray-300",
      link: "https://token-navy-six.vercel.app/"
    },
    { 
      name: "NFT Marketplace", 
      img: "./images/nftmarketplace.png", 
      description: "A beautifully designed marketplace where users can mint and list NFTs.", 
      skills: ["Solidity", "Ethers.js", "Hardhat"],
      header: "from-gray-800 to-gray-900",
      button: "from-orange-500 to-orange-600",
      textColor: "text-gray-300",
      link: "https://nft-marketplace-nu-ashy.vercel.app/"
    },
  ];

  const handleViewDetails = (link) => {
    window.open(link, "_blank");
  }

  return (
    <section id="projects" className="px-4 sm:px-8 md:px-20 py-16 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 max-w-md mx-auto"
          >
            {/* Header */}
            <div className={`bg-gradient-to-br ${p.header} text-white p-8 text-center`}>
              <div className="flex flex-col items-center">
                <div className="w-105 h-55 flex items-center justify-center mb-4 shadow-lg overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full rounded-xs object-cover " />
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-blue-200 font-medium opacity-90">{p.description}</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 bg-gray-800">
              

              {/* Skills */}
              <div className="flex justify-center items-center gap-3 mb-6 flex-wrap">
                {p.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`bg-gradient-to-r ${p.button} text-gray-700 px-3 py-1 rounded-lg text-sm font-semibold border"`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button onClick={() => handleViewDetails(p.link)}
                className={`w-full bg-gradient-to-r ${p.button} text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
              >
                View Project
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
