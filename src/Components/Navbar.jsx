import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import { resume } from "../Assets";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Set the initial active link
  console.log(activeSection);
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "review",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && isElementInViewport(element)) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    // Attach event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div>
      <nav className="w-full fixed h-16 top-0 bg-white flex items-center justify-between z-20  mb-7">
        <div className=" flex items-center justify-between w-[95%] mx-auto">
          <div className="w-[15%]">
            <a
              href="#home"
              className="uppercase text-primary text-[28px] lg:text-3xl font-semibold hover:text-green"
            >
              taoheed
            </a>
          </div>
          <div className="w-[60%] hidden md:flex items-center justify-center">
            <ul className=" md:w-[80%] lg:w-[60%] flex items-center gap-4 justify-between">
              <li>
                <a
                  href="#home"
                  className={
                    activeSection === "home" ? "active-link" : "inactive-link"
                  }
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={
                    activeSection === "about" ? "active-link" : "inactive-link"
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={
                    activeSection === "skills" ? "active-link" : "inactive-link"
                  }
                >
                  skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={
                    activeSection === "projects"
                      ? "active-link"
                      : "inactive-link"
                  }
                >
                  portfolio
                </a>
              </li>
              <li>
                <a
                  href="#review"
                  className={
                    activeSection === "review" ? "active-link" : "inactive-link"
                  }
                >
                  testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={
                    activeSection === "contact"
                      ? "active-link"
                      : "inactive-link"
                  }
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[15%]  hidden md:flex items-end justify-end">
            <button
              type="button"
              className="capitalize bg-transparent border-[2px] md:text-[12px] lg:text-[15px] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white border-primary px-1 py-[6px] rounded-lg md:w-full lg:w-[85%]"
            >
              <a href={resume} download>
                download CV
              </a>
            </button>
          </div>
          <div
            className="flex items-center cursor-pointer gap-2 bg-white md:hidden px-[6px] py-[3px]  text-primary border-[1.9px] border-primary rounded-xl transition-all ease-in-out duration-300"
            onClick={() => setToggle(!toggle)}
          >
            <h3 className="cursor-pointer uppercase select-none font-semibold text-base">
              menu
            </h3>
            {toggle ? <VscChromeClose size={20} /> : <VscThreeBars size={20} />}
          </div>
        </div>
        {toggle && (
          <div className="md:hidden fixed pt-2  transition-transform duration-300 ease-in-out transform translate-y top-[3.6rem] bg-primary w-full h-[37vh] flex items-center flex-col">
            {/* <div className=" flex items-center flex-col ">
              <Link
                to="/"
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(!toggle)}
              >
                Home
              </Link>
              <Link
                to="about"
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(!toggle)}
              >
                About
              </Link>
              <Link
                to="skills"
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(!toggle)}
              >
                Skills
              </Link>
              <Link
                to="Portfolio"
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(!toggle)}
              >
                Portfolio
              </Link>
              <Link
                to="testimonial"
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(!toggle)}
              >
                Testimonial
              </Link>
              <Link
                to="testimonial"
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(!toggle)}
              >
                contact
              </Link>
              <button
                onClick={() => setToggle(!toggle)}
                className="uppercase mt-3 font-serif font-semibold text-white text-[17px] border-white px-5 py-[7px] rounded-lg border"
              >
                download CV
              </button>
            </div> */}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
