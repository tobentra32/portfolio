function Contact() {
  return (
    <section id="contact" className="px-20 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="grid grid-cols-2 gap-6 max-w-4xl mx-auto text-black">
        <input type="text" placeholder="Name" className="p-3 rounded bg-white text-gray-900 placeholder-gray-500" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-white text-gray-900 placeholder-gray-500" />
        <input type="text" placeholder="Phone Number" className="p-3 rounded bg-white text-gray-900 placeholder-gray-500"/>
        <input type="text" placeholder="Service of Interest" className="p-3 rounded bg-white text-gray-900 placeholder-gray-500" />
        <input type="text" placeholder="Timeline" className="p-3 rounded bg-white text-gray-900 placeholder-gray-500" />
        <textarea placeholder="Project Details" className="p-3 rounded bg-white text-gray-900 placeholder-gray-500" />
        <button className="bg-orange-500 px-6 py-2 rounded col-span-2">Send</button>
      </form>
    </section>
  );
}

export default Contact;
