import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 }; // Trigger when 60% of section is visible

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About me" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact me" },
  ];

  return (
    <nav className="flex justify-center items-center px-10 py-6 border-b border-gray-800 fixed w-full top-0 bg-black z-50">
      
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`cursor-pointer transition-colors ${
                active === item.id ? "text-orange-500 font-bold" : "text-white hover:text-orange-500"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      
    </nav>
  );
}

export default Navbar;
