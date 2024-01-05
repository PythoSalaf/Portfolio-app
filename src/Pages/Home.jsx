import React from "react";
import { HeroBg, Status, TextAnimation } from "../Components";
import { herobg } from "../Assets";

const Home = () => {
  return (
    <div className="relative w-full  py-4 mt-[4.5rem]">
      <section className="w-full h-full  relative" id="home">
        <HeroBg />
        <div className="w-[95%] mx-auto flex-col md:flex-row  relative gap-6 flex items-start justify-between">
          <div className="w-full bg-transparent">
            <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
              Hello, I'm{" "}
              <span className="text-primary font-serif">Taoheed Afolabi</span>{" "}
              👋
            </h1>
            <div className="my-4">
              <TextAnimation />
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
              <a
                href="#project"
                className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize text-white bg-primary md:text-primary md:bg-white md:hover:bg-primary md:hover:text-white border-primary rounded-lg px-4 py-1"
              >
                projects
              </a>
              <a
                href="https://github.com/PythoSalaf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize  text-white bg-primary md:text-primary md:bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-4 py-1"
              >
                github
              </a>
              <a
                href="#contact"
                className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize  text-white bg-primary md:text-primary md:bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-4 py-1"
              >
                hire me
              </a>
            </div>
          </div>
          <div className="w-full mt-6 md:mt-0 gap-10 flex items-start justify-center">
            <img src={herobg} alt="hero-bg" className="w-[70%] md:w-[60%]" />
          </div>
        </div>
      </section>
      <div className="w-[90] md:w-[65%] relative mx-auto flex items-center justify-center mt-10  ">
        <Status />
      </div>
    </div>
  );
};

export default Home;
