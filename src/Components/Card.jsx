import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ detail, avater, github, livelink, title }) => {
  return (
    <div className="w-[290px] md:w-[350px] h-[350px] md:h-[408px] bg-white border border-primary shadow-custom rounded-lg ">
      <div className="w-[90%] mx-auto my-3 h-[150px] md:h-[200px]">
        <img src={avater} alt="flat" className="w-full h-full" />
      </div>
      <div className="mt-5 w-[90%] mx-auto">
        <div className="flex items-center w-full">
          <div className="w-full">
            <h2 className="text-lg md:text-xl font-semibold capitalize font-serif">
              {title}
            </h2>
          </div>
          <div className="flex items-center justify-end gap-3 w-full">
            <div className="bg-primary rounded-full w-8 h-8 cursor-pointer flex items-center justify-center ">
              <Link to={github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub color="#fff" size={20} />
              </Link>
            </div>
            <div className="bg-primary rounded-full w-8 h-8 cursor-pointer flex items-center justify-center ">
              <Link to={livelink} target="_blank" rel="noopener noreferrer">
                <AiFillEye color="#fff" size={20} />
              </Link>
            </div>
          </div>
        </div>
        <p className="font-serif mt-4 mb-2 text-[12px] md:text-[14px]">
          {detail}
        </p>
        <div className="flex items-center gap-3 w-full md:mb-[12px] ">
          <h3 className="text-red-600 font-semibold text-sm md:text-base border capitalize rounded-lg px-1 py-[1px]">
            #React
          </h3>
          <h3 className="text-black font-semibold text-sm capitalize md:text-base border px-[6px] py-[1px] rounded-lg">
            #tailwind css
          </h3>
          <h3 className="text-orange-600 font-semibold text-sm capitalize md:text-base border px-[6px] py-[1px] rounded-lg">
            #redux
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
