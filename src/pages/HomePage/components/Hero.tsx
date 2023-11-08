import React from "react";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" section_padding flex bg-herogradient shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-br-[150px] l:flex-col ">
      <div className="flex-1 flex justify-center items-start flex-col mr-[5rem] l:mb-[3rem] l:mr-0">
        <h1 className="font-manrope font-extrabold text-[62px] leading-[75px] text-foreground tracking-[-0.04em] m:text-[48px] m:leading-[60px] vs:text-[36px] vs:leading-[48px]">
        Find the right freelance service, right away 
        </h1>
        <p className="not-italic font-normal text-xl  text-foreground mt-6 vs:text-sm m:text-base ">
        Forget the old rules. You can have the best people.
        Right now. Right here.
        </p>
        <div className="flex mt-8 mb-4">
          <button onClick={() => navigate("/auth")} className="btn-4 m:text-base ss:text-sm" type="button">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="w-full h-full " src="/images/Saly-11.png" alt="ai" />
      </div>
    </div>
  );
};

export default Hero;
