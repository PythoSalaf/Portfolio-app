import React from "react";
import { BsStarFill } from "react-icons/bs";
const Stars = () => {
  return (
    <div className="flex items-center gap-[2px]">
      <BsStarFill color="orange" size={17} />
      <BsStarFill color="orange" size={17} />
      <BsStarFill color="orange" size={17} />
      <BsStarFill color="orange" size={17} />
      <BsStarFill color="orange" size={17} />
    </div>
  );
};

export default Stars;
