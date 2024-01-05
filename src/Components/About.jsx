import React from "react";
import { about, resume } from "../Assets";
import TextAnimation from "./TextAnimation";

const About = () => {
  return (
    <div className=" w-full h-full mt-[4rem]" id="about">
      <div className="w-[95%] mx-auto">
        <div className="w-full flex items-center justify-center flex-col">
          <h2 className="text-2xl md:text-3xl text-primary font-semibold font-serif uppercase">
            about me
          </h2>
        </div>
        <div className="flex items-center justify-between  flex-col md:flex-row">
          <div className="flex items-center justify-center md:justify-start w-full">
            <img src={about} alt="about-icon" className="w-[85%] md:w-[70%]" />
          </div>
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              I'm Taoheed Afolabi,
            </h3>
            <div className="my-5">
              <TextAnimation />
            </div>
            <p className="text-lg md:text-[22px]  font-medium">
              My journey in the vast world of web development has been centered
              around harnessing the power of React. From conceptualization to
              implementation, I specialize in building dynamic and responsive
              user interfaces that not only meet but exceed expectations.
            </p>
            <div className="mt-8  flex  justify-center md:justify-normal gap-6">
              <div className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize  text-white bg-primary md:text-primary md:bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-4 py-1">
                <a href={resume} download>
                  download cv
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/pythosalaf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.9px] text-base md:text-lg font-medium font-serif capitalize  text-white bg-primary md:text-primary md:bg-white hover:bg-primary hover:text-white border-primary rounded-lg px-7 py-1"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
