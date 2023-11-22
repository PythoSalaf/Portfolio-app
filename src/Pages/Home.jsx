import React from "react";
import { Contact, HeroBg, Review, SkillSection, Status } from "../Components";
import { TypeAnimation } from "react-type-animation";
import { herobg } from "../Assets";

const Home = () => {
  return (
    <div className="relative w-full  py-4 mt-[4.5rem]">
      <div className="w-full hfull  relative">
        <HeroBg />
        <div className="w-[95%] mx-auto flex-col md:flex-row  relative gap-6 flex items-start justify-between">
          <div className="w-full bg-transparent">
            <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
              Hello, I'm{" "}
              <span className="text-primary font-serif">Taoheed Afolabi</span>{" "}
              👋
            </h1>
            <div className="my-5">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "I'm a Passionate Frontend Developer", // initially rendered starting point
                  1000,
                  "I'm a React Enthusiast",
                  1000,
                  "I'm a Responsive Web Design Specialist",
                  1000,
                  "I'm a Performance Optimization Guru",
                  1000,
                  "Accessibility Champion",
                  500,
                ]}
                speed={50}
                className="text-primary text-xl  md:text-2xl lg:text-3xl font-serif "
                repeat={Infinity}
              />
            </div>
            <p className="text-lg md:text-2xl  font-medium ">
              Welcome to my digital playground.{" "}
              <span className="text-primary font-serif">
                I'm Taoheed Afolabi
              </span>
              , a dedicated{" "}
              <span className="text-primary font-serif">
                frontend developer
              </span>{" "}
              with a love for creating seamless and visually stunning web
              applications.
            </p>
            <div className="mt-10 md:mt-16 flex items-center justify-center md:justify-normal gap-6">
              <button className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize text-primary bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-4 py-1">
                projects
              </button>
              <button className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize text-primary bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-4 py-1">
                github
              </button>
              <button className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize text-primary bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-4 py-1">
                hire me
              </button>
            </div>
          </div>
          <div className="w-full mt-6 md:mt-0 gap-10 flex items-start justify-center">
            <img src={herobg} alt="hero-bg" className="w-[70%] md:w-[60%]" />
          </div>
        </div>
      </div>
      <div className="w-[90] md:w-[65%] relative mx-auto flex items-center justify-center mt-10  ">
        <Status />
      </div>
      <div className="w-[95%] mx-auto relative mt-[4rem]">
        <SkillSection />
      </div>
      <div className="w-[95%] mx-auto relative mt-[4rem]">
        <Review />
      </div>
      <div className="w-[95%] mx-auto relative mt-[4rem]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
