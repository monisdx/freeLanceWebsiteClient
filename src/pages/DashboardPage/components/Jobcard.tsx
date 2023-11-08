import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { FaRupeeSign } from "react-icons/fa";



const Jobcard = ({ id,title, skillset, amount ,category, deleteFunc}: any) => {
  const navigate = useNavigate();

  const func=()=>{
    localStorage.setItem('id',id);
    navigate(`/jobdetail`)
  }

  return (
    <div className=" flex w-4/5 justify-between relative z-0 flex-row gap-4 m-4 p-4 rounded-[10px] bg-foreground  duration-300 hover:-translate-y-1 hover:shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)] l:flex-col l:w-full xm:w-full ">
      <div className="flex flex-col justify-center items-start gap-2">
        <h1 className="font-manrope text-black font-semibold">{title}</h1>
        <p className=" flex items-center font-manrope text-grey text-xs">Budget:<FaRupeeSign size={10}/>{amount}</p>
        <p className=" flex items-center font-manrope text-grey text-xs">Category:{category}</p>
        <div className="flex flex-row  flex-wrap justify-start items-start gap-2">
          {skillset.map((skill: any,i: any)=>(
            <div key={i} className="bg-[#cec1f3] flex justify-center items-center rounded-xl px-2.5 py-1">
             <p className="font-manrope text-black text-xs">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-start gap-2 items-center ">
        <button onClick={func} className="text-indigo-500  p-2 font-medium rounded text-sm  cursor-pointer bg-foreground font-manrope outline-none border-none">View Detail</button>
        <button
          onClick={()=>deleteFunc(id)}
        >
          <AiFillDelete className="hover:cursor-pointer" size="20px" color="#4923B4" />
        </button>
      </div>
    </div>
  );
};

export default Jobcard;
