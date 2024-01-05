import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Card = ({ detail, avater, github, livelink, title, stacks }) => {
  return (
    <div className="w-[290px] md:w-[350px] h-[370px] md:h-[418px] bg-white border border-primary shadow-custom rounded-lg ">
      <div className="w-[95%] mx-auto my-3 h-[150px] md:h-[200px]">
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
              <a href={github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub color="#fff" size={20} />
              </a>
            </div>
            <div className="bg-primary rounded-full w-8 h-8 cursor-pointer flex items-center justify-center ">
              <a href={livelink} target="_blank" rel="noopener noreferrer">
                <AiFillEye color="#fff" size={20} />
              </a>
            </div>
          </div>
        </div>
        <p className="font-serif mt-4 mb-2 text-[12px] md:text-[14px]">
          {detail}
        </p>
        <div className="flex items-center flex-wrap gap-3 w-full md:mb-[12px] ">
          <p className="text-red-600 font-semibold text-[12px] md:text-sm border capitalize rounded-lg px-1 py-[1px]">
            {stacks[0]}
          </p>
          <p className="text-black font-semibold text-[10px] capitalize md:text-sm border px-[6px] py-[1px] rounded-lg">
            {stacks[1]}
          </p>
          <p className="text-orange-600 font-semibold text-[10px] capitalize md:text-sm border px-[6px] py-[1px] rounded-lg">
            {stacks[2]}
          </p>
          {stacks.length > 3 && (
            <p className="text-blue-600 font-semibold text-[10px] capitalize md:text-sm border px-[6px] py-[1px] rounded-lg">
              {stacks[3]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
