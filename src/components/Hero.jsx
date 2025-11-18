import { FaInstagram, FaLinkedin, FaGlobe, FaBehance } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="mt-17 flex flex-col md:flex-row items-center 
             px-8 sm:px-6 md:px-12 lg:px-20 
             py-12 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Left Content - Intro */}
      <div className="w-full md:w-4/6 md:pr-10 text-center lg:px-50 md:text-left mb-8 md:mb-0">
        <p className="text-gray-400 text-sm sm:text-base">Hi I am</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Ilesanmi Oluwatobiloba
        </h2>
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-orange-500 mt-3 md:mt-4 leading-snug">
          WEB2/WEB3 FULLSTACK DEVELOPER
        </h1>

        {/* Socials */}
        <div className="flex justify-center md:justify-start gap-4 mt-6 text-lg sm:text-xl md:text-2xl">
          <FaInstagram />
          <FaLinkedin />
          <FaGlobe />
          <FaBehance />
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <button className="bg-orange-500 px-5 sm:px-6 py-2 rounded text-white hover:bg-orange-600 transition">
            Hire Me
          </button>
          <button className="border px-5 sm:px-6 py-2 rounded hover:bg-gray-100 transition">
            Download CV
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mt-8 sm:mt-10">
          <div>
            <h3 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-bold">
              3+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Experiences
            </p>
          </div>
          <div>
            <h3 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-bold">
              4+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Project done
            </p>
          </div>
          <div>
            <h3 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-bold">
              10+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Happy Clients
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/6 flex justify-center">
        <img
          src="./images/portfolioprofilepic.jpg"
          alt="profile"
          className="rounded-full max-w-[200px] sm:max-w-[250px] md:max-w-[350px] w-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
