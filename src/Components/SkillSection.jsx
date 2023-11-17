import React from "react";
import { mui } from "../Assets";

const SkillSection = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold uppercase">
          Skills
        </h2>
        <p className="my-3 font-medium text-lg md:text-xl capitalize">
          I've experience with this technologies
        </p>
      </div>
      <div className="w-full gap-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="w-full h-[100px] border-[1px] border-primary bg-white shadow-custom flex items-center flex-col justify-center py-3 rounded-xl">
          <div className="rounded-full h-full">
            <img
              src={mui}
              alt="mui"
              className="w-[100px] h-full rounded-full"
            />
          </div>
          <h4>Material UI</h4>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
