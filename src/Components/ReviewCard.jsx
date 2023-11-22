import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Stars } from "../Components";
import { avater } from "../Assets";

const ReviewCard = ({ name, review, stack }) => {
  return (
    <div className="w-full flex items-center justify-center mt-[3rem]">
      <div className="w-[250px] md:w-[300px] h-[300px] flex flex-col items-center bg-primary justify-center rounded-xl pt-[3rem] pb-[1rem] relative">
        <div className="absolute h-[85px] flex items-center justify-center w-[85px] md:h-[100px] md:w-[100px] top-0 rounded-[50%] bg-white border border-primary mt-[-40px] md:mt-[-45px] z-[6px] ">
          <img
            src={avater}
            alt="avater"
            className="w-[90%] h-[90%] rounded-full"
          />
        </div>
        <div className="w-[90%] mx-auto flex items-center justify-center flex-col mt-[7px]  md:mt-4">
          <h2 className="text-xl md:text-[22px] font-serif font-semibold capitalize">
            {name}
          </h2>
          <h4 className="my-[5px] text-lg md:text-xl capitalize font-medium ">
            {stack}
          </h4>
          <Stars />
        </div>
        <div className="w-[95%] mx-auto mt-4">
          <i className="text-center text-[13px] md:text-[15px] font-medium">
            {review}
          </i>
        </div>
        <FaQuoteLeft
          className="absolute left-[20px] top-[-10px]"
          color="orange"
          size={25}
        />
        <FaQuoteRight
          className="absolute right-[20px] top-[-10px]"
          color="orange"
          size={25}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
