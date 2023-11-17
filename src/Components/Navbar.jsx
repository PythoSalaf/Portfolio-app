import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="w-full fixed h-16 top-0 bg-white flex items-center justify-between z-20  mb-7">
        <div className=" flex items-center justify-between w-[95%] mx-auto">
          <div className="w-[15%]">
            <Link
              to="/"
              className="uppercase text-primary text-2xl lg:text-3xl font-semibold hover:text-green"
            >
              taoheed
            </Link>
          </div>
          <div className="w-[60%] hidden md:flex items-center justify-center">
            <ul className=" md:w-[80%] lg:w-[60%] flex items-center gap-4 justify-between">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="skills"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="testimonial"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  Testimonial
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[15%]  hidden md:flex items-end justify-end">
            <button
              type="button"
              className="capitalize bg-transparent border-[2px] md:text-[12px] lg:text-[15px] transition-all duration-300 ease-in-out hover:bg-primary hover:text-white border-primary px-1 py-[6px] rounded-lg md:w-full lg:w-[85%]"
            >
              download CV
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
          <div className="md:hidden fixed pt-2  transition-transform duration-300 ease-in-out transform translate-y top-[3.6rem] bg-primary w-full h-[31vh] flex items-center flex-col">
            <div className=" flex items-center flex-col ">
              <Link
                to="/"
                className="mb-3 text-base font-semibold text-white"
                onClick={() => setToggle(!toggle)}
              >
                Home
              </Link>
              <Link
                to="about"
                className="mb-3 text-base font-semibold text-white"
                onClick={() => setToggle(!toggle)}
              >
                About
              </Link>
              <Link
                to="skills"
                className="mb-3 text-base font-semibold text-white"
                onClick={() => setToggle(!toggle)}
              >
                Skills
              </Link>
              <Link
                to="Portfolio"
                className="mb-3 text-base font-semibold text-white"
                onClick={() => setToggle(!toggle)}
              >
                Portfolio
              </Link>
              <Link
                to="testimonial"
                className="mb-3 text-base font-semibold text-white"
                onClick={() => setToggle(!toggle)}
              >
                Testimonial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
