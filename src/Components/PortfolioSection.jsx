import React from "react";
import { Card } from "../Components";
import { PortfolioData } from "./DummyData";

const PortfolioSection = () => {
  return (
    <div className="w-full mt-[4rem]" id="projects">
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold font-serif uppercase">
          Portfolio
        </h2>
        <h4 className="my-3 font-medium text-lg md:text-xl capitalize">
          My creative works
        </h4>
        {/* <p className="">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p> */}
      </div>
      <div className="w-full mt-7 md:mt-10">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 place-items-center">
          {PortfolioData.map((data) => (
            <div key={data.id}>
              <Card {...data} />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-9">
          <button
            className="bg-primary text-base md:hover:bg-white md:hover:text-primary border border-white md:hover:border-primary transition ease-in-out duration-300 md:text-lg capitalize  rounded-lg font-medium font-serif text-white px-5 py-[6px] md:py-2 md:px-6"
            // onClick={() => navigate("/portfolio")}
          >
            <a
              href="https://github.com/PythoSalaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              show more
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
