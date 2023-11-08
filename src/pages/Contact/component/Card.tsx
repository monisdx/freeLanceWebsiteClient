import React from 'react'
import {Link} from 'react-router-dom';


const Card = ({ icon, title, text, link, linkText }: any) => {
    return (
      <div className="w-[270px] h-[190px] flex justify-center items-start flex-col gap-4 m-4 p-4 rounded-[10px] bg-foreground shadow-[0px_1px_20px_rgba(14,30,37,0.12)] hover:cursor-pointer s:my-4 s:mx-0">
        <h2 >{icon}</h2>
        <h1 className="font-manrope font-extrabold text-lg text-black tracking-[-0.04em] s:text-sm">
          {title}
        </h1>
        <p className="font-manrope font-medium text-sm text-grey s:text-xs">
          {text}
        </p>
        <p className='font-manrope font-medium text-sm text-[#4923B4] hover:text-[#250d66] hover:decoration-[#250d66] underline decoration-[#4923B4] underline-offset-1 s:text-xs'>
        <Link target={"_blank"} to={link}>{linkText}</Link>
        </p>
      </div>
    );
  };

export default Card