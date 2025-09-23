import { FaInstagram, FaLinkedin, FaGlobe, FaBehance } from "react-icons/fa";
//import profilePic from "/assets/portfolioprofilepic.jpg";



function Hero() {
  return (
    <section className="flex justify-between items-center px-20 py-10">
      {/* Left Content */}
      <div>
        <p className="text-gray-400">Hi I am</p>
        <h2 className="text-3xl font-bold">Ilesanmi Oluwatobiloba</h2>
        <h1 className="text-4xl font-bold text-orange-500 mt-4">
          WEB2/WEB3 FULLSTACK DEVELOPER
        </h1>

        {/* Socials */}
        <div className="flex gap-4 mt-6 text-2xl">
          <FaInstagram />
          <FaLinkedin />
          <FaGlobe />
          <FaBehance />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-orange-500 px-6 py-2 rounded">Hire Me</button>
          <button className="border px-6 py-2 rounded">Download CV</button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-10">
          <div>
            <h3 className="text-orange-500 text-2xl font-bold">3+</h3>
            <p className="text-gray-400">Experiences</p>
          </div>
          <div>
            <h3 className="text-orange-500 text-2xl font-bold">4+</h3>
            <p className="text-gray-400">Project done</p>
          </div>
          <div>
            <h3 className="text-orange-500 text-2xl font-bold">10+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-2/6 pt-10">
        <img src="/portfolioprofilepic.jpg" alt="profile" className="rounded-full" />
      </div>
    </section>
  );
}

export default Hero;
