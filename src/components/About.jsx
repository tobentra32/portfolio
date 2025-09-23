import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
      <p className="mt-6 max-w-2xl text-gray-600 leading-relaxed">
        I'm a smart contract engineer and full-stack developer passionate about
        blockchain and web technologies. I build dApps, wallets, and smart
        contracts with a focus on security and usability.
      </p>
    </section>
  );
};

export default About;
