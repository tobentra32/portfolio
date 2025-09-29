function About() {
  return (
    <section id="about" className="flex px-20 py-20 items-center">
      <div className="w-1/2">
        <img src="/profile.png" alt="about" className="rounded-lg" />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 mb-6">
          A passionate designer with experience in UI/UX, branding, and web
          design. I focus on creating clean and functional designs that enhance
          user experience.
        </p>
        <button className="bg-orange-500 px-6 py-2 rounded">
          Download CV
        </button>
      </div>
    </section>
  );
}

export default About;
