import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <div>
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
  );
};

export default TextAnimation;
