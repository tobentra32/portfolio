import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
