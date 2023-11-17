import React from "react";
import CountUp from "react-countup";

const Status = () => {
  return (
    <div className="w-full bg-primary flex-col md:flex-row py-3 px-6 rounded-xl flex items-center justify-between">
      <div className="flex flex-col bg-white rounded-xl px-6 py-[6px] items-center justify-center">
        <h1 className="text-2xl text-primary font-semibold">
          <CountUp
            //   separator=","
            start={0}
            end={800}
            duration={3.0}
          />
        </h1>
        <p>satisfied client</p>
      </div>
      <div className="flex flex-col bg-white my-[10px] md:my-0 rounded-xl px-6 py-[6px] items-center justify-center">
        <h1 className="text-2xl text-primary font-semibold">
          <CountUp
            //   separator=","
            start={0}
            end={800}
            duration={3.0}
          />
        </h1>
        <p>satisfied client</p>
      </div>
      <div className="flex flex-col bg-white rounded-xl px-6 py-[6px] items-center justify-center">
        <h1 className="text-2xl text-primary font-semibold">
          <CountUp
            //   separator=","
            start={0}
            end={800}
            duration={3.0}
          />
        </h1>
        <p>satisfied client</p>
      </div>
    </div>
  );
};

export default Status;
