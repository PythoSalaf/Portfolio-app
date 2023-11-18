import { mui, redux } from "../Assets";
import { IoIosCall } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
export const skillsData = [
  {
    id: 1,
    name: "react js",
    avatar: "",
    note: "Lorem ipsum dolor sit.",
  },

  {
    id: 2,
    name: "redux & redux toolkit",
    avatar: redux,
    note: "Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    name: "MUI",
    avatar: mui,
    note: "Lorem ipsum dolor sit.",
  },
  {
    id: 4,
    name: "Tailwind css",
    avatar: "",
    note: "Lorem ipsum dolor sit.",
  },
  {
    id: 5,
    name: "Sass",
    avatar: "",
    note: "Lorem ipsum dolor sit.",
  },
  {
    id: 6,
    name: "Framer motion",
    avatar: "",
    note: "Lorem ipsum dolor sit.",
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
