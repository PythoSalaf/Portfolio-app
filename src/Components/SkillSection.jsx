import React from "react";
import { skillsData } from "./DummyData";
const SkillSection = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold font-serif uppercase">
          Skills
        </h2>
        <p className="my-3 font-medium text-lg md:text-xl capitalize">
          I've experience with this technologies
        </p>
      </div>
      <div className="w-full gap-y-5 md:gap-y-12 gap-x-8 grid  mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="w-full h-[100px] border-[1px] md:border-[2px] border-primary bg-white shadow-custom flex items-center gap-5 py-3 rounded-lg"
          >
            <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center ">
              <img
                src={skill.avatar}
                alt="mui"
                className="w-[70%] h-[70%] rounded-full bg-white"
              />
            </div>
            <div className="w-[70%">
              <h4 className="text-primary font-serif font-semibold text-lg md:text-xl capitalize">
                {skill.name}
              </h4>
              <p className="mt-1 font-medium text-base md:text-lg">
                {skill.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
