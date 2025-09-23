import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
      <p className="mt-4 text-gray-600">Let’s work together 🚀</p>
      <a
        href="mailto:youremail@example.com"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
