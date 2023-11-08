import React from "react";
import Feature from "./Feature";
import {MdDesignServices,MdOutlineMobileFriendly} from "react-icons/md";
import {FaLaptopCode} from "react-icons/fa"
import {BsRobot} from "react-icons/bs"
import {AiOutlineCloudServer} from "react-icons/ai"
import {IoGameControllerOutline} from "react-icons/io5"
const cards = [
  {
    icon: <FaLaptopCode size="25px" color="#FF00C7" />,
    title: "Web Development",
    text: "Create,build and develop your website",
  },
  {
    icon: <MdOutlineMobileFriendly size="25px" color="#FF00C7" />,
    title: "Mobile App Development",
    text: "Go mobile with custom apps, site-to-app conversions,bug fixes and more.",
  },
  {
    icon: <BsRobot size="25px" color="#FF00C7" />,
    title: "AI Development",
    text: "Build and integrate AI Engine into your stack.",
  },
  {
    icon: <IoGameControllerOutline size="25px" color="#FF00C7" />,
    title: "Game Development",
    text: "Game on! Create & customize a captivating digital game that gamers will love.",
  },
  {
    icon: <MdDesignServices size="25px" color="#FF00C7" />,
    title: "UI/UX Design",
    text: "Give your visitor a smooth online experiance with a solid UX design.",
  },
  {
    icon: <AiOutlineCloudServer size="25px" color="#FF00C7" />,
    title: "DevOps & Cloud",
    text: "Build, scale and manage cloud computing environment and development operations.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col p-8 mb-16 mx-24 bg-background xm:mx-12 xs:mx-4">
      <div className="flex flex-col justify-center items-center mx-0 my-8 vm:mb-0">
        <h1 className="font-manrope text-[44px]/[62px] font-semibold text-black text-center xm:text-[28px]/[40px]">
          Our Services
        </h1>
        <p className="text-base font-normal max-w-[673px] text-center font-manrope text-grey vm:mt-4 xm:text-xs">
        Unlock Your Potential: Unleash a World of Opportunities with Our Freelancing Services.{" "}
        </p>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center gap-8 mt-8 xs:my-4 xs:mx-0 xs:min-w-full">
        {cards.map((card, i) => (
          <Feature
            key={i}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
