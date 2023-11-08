import React  from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Projectcard = ({id,title,skillset,link , deleteFunc}:any) => {
  
  return (
    <div className=" flex w-full justify-between relative z-0 flex-row gap-4 m-4 p-4 rounded-[10px] bg-foreground hover:shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)] xm:flex-col l:w-full xm:w-full ">
    <div className="flex flex-col justify-center items-start gap-2">
      <h1 className="font-manrope text-black font-semibold">{title}</h1>
      <p className=" flex items-center font-manrope text-[#6777f0] text-xs hover:underline hover:decoration-[#6770f0] hover:underline-offset-1"><Link target={"_blank"} to={link}>{link}</Link></p>
      <div className="flex flex-row flex-wrap justify-start items-start gap-2">
        {skillset.map((skill: any,i: any)=>(
          <div key={i} className="bg-[#cec1f3] flex justify-center items-center rounded-xl px-2.5 py-1">
           <p className="font-manrope text-black text-xs">{skill}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-start gap-2 items-center ">
      <button onClick={()=>deleteFunc(id)}>
        <AiFillDelete size="20px" color="#4923B4" />
      </button>
    </div>
  </div>
  )
}

export default Projectcard