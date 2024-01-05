import {
  redux,
  tailwind,
  portfolio,
  framer,
  reacticon,
  sass,
  ecommerce,
  admin,
  jobs,
  crypto,
  git,
} from "../Assets";
import { IoIosCall } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
export const skillsData = [
  {
    id: 1,
    name: "react js",
    avatar: reacticon,
    note: " A JavaScript library for building user interfaces.",
  },

  {
    id: 2,
    name: "redux & redux toolkit",
    avatar: redux,
    note: " A state management library",
  },
  // {
  //   id: 3,
  //   name: "MUI",
  //   avatar: mui,
  //   note: "A popular React UI framework",
  // },
  {
    id: 4,
    name: "Tailwind css",
    avatar: tailwind,
    note: " A utility-first CSS framework",
  },
  {
    id: 5,
    name: "Sass",
    avatar: sass,
    note: "A popular CSS preprocessor that extends CSS with features like variables",
  },
  {
    id: 6,
    name: "Framer motion",
    avatar: framer,
    note: "A lightweight and intuitive animation library for React",
  },
  {
    id: 7,
    name: "Git",
    avatar: git,
    note: "Git is a version control system for tracking changes.",
  },
];

export const contactData = [
  {
    id: 1,
    name: "call me",
    detail: "+2348106264297",
    icon: <IoIosCall size={22} color="#0db760" />,
  },
  {
    id: 2,
    name: "Email me",
    detail: "alfaheed1010@gmail.com",
    icon: <BsEnvelopeFill size={20} color="#0db760" />,
  },
  {
    id: 3,
    name: "address",
    detail: "Nigeria",
    icon: <FaLocationDot size={20} color="#0db760" />,
  },
];

export const ReviewData = [
  {
    id: 1,
    name: "James",
    stack: "Software engineer",
    review:
      "Taoheed is a skilled and experience web developer with a deep understanding of how web application works. He is a creative and innovative problem solver who can come up with solutions to even the most challenging problems",
  },
  {
    id: 2,
    name: "Shuaib",
    stack: "UI/UX Designer",
    review:
      "Taoheed's meticulous attention to detail and creative prowess in frontend development showcase a level of craftsmanship that sets a high standard for user-centric design.",
  },

  {
    id: 3,
    name: "Yusuf",
    stack: "Product Designer",
    review:
      "In the years of working with Taoheed, it's really being of wonderful experience as his zeal to make my designs come into reality has always been amazing while his work rate can't be overlooked.",
  },
  {
    id: 4,
    name: "",
    stack: "React developer",
    review:
      "I have had the pleasure of working with Taoheed on a few projects over the past few years, and I have always been impressed with his skills and professionalism.",
  },

  {
    id: 5,
    name: "Dev Abdul",
    stack: "Backend developer",
    review:
      "Hard working developer. In addition to his technical skils, Taoheed is also an excellent communicator and team player.He is always willing to go the extra mile to complete any given task.",
  },
];

export const PortfolioData = [
  {
    id: 1,
    title: "Dashboard",
    detail:
      "I designed the PsychSight Admin Dashboard, streamlining appointment management, enhancing client experience, and ensuring robust security for mental health professionals.",
    github: "https://github.com/PythoSalaf/psych-admin",
    livelink: "https://pytho-app.vercel.app/",
    avater: admin,
    stacks: ["Tailwind CSS", "React.js", "Redux Toolkit"],
  },
  {
    id: 2,
    title: "portfolio",
    detail:
      "My portfolio boosts user engagement by 20%, featuring designs that reduce bounce rates by 25% and enhance project efficiency by 15%.",
    github: "https://github.com/PythoSalaf/Portfolio-app",
    livelink: "https://pytho-app.vercel.app/",
    avater: portfolio,
    stacks: ["Tailwind CSS", "React.js", "React Particle"],
  },
  {
    id: 3,
    title: "job app",
    detail:
      "Web application that enables users to search for job openings, and locate available jobs based on their current location.",
    github: "https://github.com/PythoSalaf/Job-App",
    livelink: "https://job-app-amber.vercel.app",
    avater: jobs,
    stacks: ["React.js", "Styled-Component", "Rapid API", "Redux-Toolkit"],
  },
  {
    id: 4,
    title: "Ecommerce",
    detail:
      "Engaging e-commerce: Platform design drives 20% user engagement surge",
    github: "https://github.com/PythoSalaf/Ecommerce",
    livelink: "https://ecommerce-tao.vercel.app",
    avater: ecommerce,
    stacks: ["CSS", "React.js", "Redux-Toolkit"],
  },
  // {
  //   id: 4,
  //   title: "job app",
  //   detail:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   github: "",
  //   livelink: "",
  //   avater: nova,
  //   stacks: {},
  // },
  // {
  //   id: 5,
  //   title: "job app",
  //   detail:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   github: "",
  //   livelink: "",
  //   avater: flat,
  //   stacks: {},
  // },
  {
    id: 7,
    title: "crypto hub",
    detail:
      "My crypto project provides a comprehensive listing of all cryptocurrencies, offering detailed information on each.",
    github: "https://github.com/PythoSalaf/Crypto-Hub",
    livelink: "https://b-hub.netlify.app/",
    avater: crypto,
    stacks: ["React.js", "RTK Query", "Framer Motion"],
  },
  // {
  //   id: 7,
  //   title: "ecommerce",
  //   detail:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   github: "",
  //   livelink: "",
  //   avater: "",
  //   stacks: {},
  // },
];
