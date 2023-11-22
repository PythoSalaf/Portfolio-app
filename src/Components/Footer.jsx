import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full relative mt-4">
      <div className="w-[94%] mx-auto py-4">
        <hr className="border-[1px] w-full" />
        <div className="w-[98%] md:w-[88%] mt-6 gap-3 md:gap-6 place-items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <h3 className="capitalize text-base flex items-center justify-center w-full font-semibold">
            &copy; 2023, all right resevered
          </h3>
          <h3 className="w-full flex  items-center text-base justify-center font-semibold">
            Designed with{" "}
            <IoIosHeart className="mx-1" size={18} color="#0db760" /> by Taoheed
          </h3>
          <div className="w-full flex items-center mt-[2px] md:mt-0 gap-7 justify-center">
            <Link
              to="https://www.linkedin.com/in/pythosalaf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={23} color="#0db760" />
            </Link>
            <Link
              to="https://twitter.com/PythoSalaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={23} color="#0db760" />
            </Link>

            <Link
              to="https://github.com/PythoSalaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={23} color="#0db760" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
