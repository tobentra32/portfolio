function About() {
  return (
    <section id="about" className="flex px-20 py-20 items-center">
      <div className="w-1/2">
        <img src="./images/profilepic.jpg" alt="about" className="rounded-lg" />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 mb-6">
          Highly talented professional with effective multi-tasking aptitude and
          accomplished mathematician with a strong passion for harnessing the
          power of blockchain technology to drive innovation.. Possessing
          indepth knowledge of Ethereum ecosystem, Solidity programming, and
          decentralized applications (DApps), combined with a profound
          understanding of complex mathematical concepts and their practical
          applications.
        </p>
        <button className="bg-orange-500 px-6 py-2 rounded">Download CV</button>
      </div>
    </section>
  );
}

export default About;
