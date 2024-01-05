import React from "react";
import { contactData } from "./DummyData";

const Contact = () => {
  return (
    <div className="w-full mt-[4.5rem]" id="contact">
      <div className="w-[95%] mx-auto">
        <div className="w-full flex items-center justify-center flex-col">
          <h2 className="uppercase text-2xl md:text-3xl font-serif text-primary font-semibold ">
            contact
          </h2>
          <h4 className="capitalize my-3 font-medium text-lg md:text-xl ">
            let discuss your{" "}
            <span className="text-primary font-serif">projects</span>
          </h4>
          <p className="text-center text-base capitalize font-medium">
            let make something new, different and more meaningful
          </p>
        </div>

        <div className="w-full flex items-start flex-col md:flex-row mt-12">
          <div className="w-full md:w-[80%] mx-auto">
            {contactData.map((data) => (
              <div
                key={data.id}
                className="flex w-full md:w-[70%] items-center gap-8 py-2 px-4 bg-primary mb-4 md:mb-5 rounded-md"
              >
                <div className="bg-white flex items-center justify-center h-10 md:h-11 w-10 md:w-11 rounded-lg">
                  {" "}
                  {data.icon}
                </div>
                <div className="text-white">
                  <h3 className="capitalize font-serif font-medium mb-[2px] text-lg md:text-xl">
                    {data.name}
                  </h3>
                  <p className="text-base md:text-lg font-medium">
                    {data.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-5 md:mt-0">
            <form>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border h-[40px] pl-[6px] rounded-lg outline-none border-primary mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border h-[40px] pl-[6px] rounded-lg outline-none border-primary"
                />
              </div>
              <div className="flex flex-col md:flex-row my-6 md:my-10 w-full gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border h-[40px] pl-[6px] rounded-lg outline-none border-primary mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border h-[40px] pl-[6px] rounded-lg outline-none border-primary"
                />
              </div>
              <textarea
                type="text"
                placeholder="enter your messages"
                className="resize-none w-full outline-none border border-primary pl-2 pt-1 rounded-lg h-[100px]"
              />
              <div className="flex items-center md:items-end justify-center md:justify-end mt-5">
                <button
                  type="button"
                  className="bg-primary text-base md:hover:bg-white md:hover:text-primary border border-white md:hover:border-primary transition ease-in-out duration-300 md:text-lg capitalize  rounded-lg font-medium font-serif text-white px-4 py-[6px] md:py-2 md:px-5"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
