import React,{useEffect, useState} from 'react'
import {HiOutlineLogout} from 'react-icons/hi';
import {IoMdContact} from 'react-icons/io';
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const fetchDetailsurl = "https://free-lance-website-server.vercel.app/saveDetails/getDetails";
const Dashbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location=useLocation();
  const [toggle,settoggle] = useState(true);
  const [image,setimage] = useState("");
  const func =()=>{
    navigate("/profile");
  }

  const logout = ()=>{
    window.history.pushState(null,'','/');
    localStorage.clear();
    navigate('/');
  }
  let x=window.location.href;
  x=x.slice(-7);
  useEffect(()=>{
    if(x=="profile"){
      settoggle(false);
    }else if(x=="ectform"){
      settoggle(false);
    }else{
      settoggle(true);
    }
  },[location]);
  

  const fetchDetails = async () => {
    await fetch(fetchDetailsurl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        
        setimage(data.details[0].profile.url)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    
    fetchDetails();
    
  }, []);

  return (
    <div className="flex justify-between items-center sticky w-full px-[4rem] py-[.5rem] bg-foreground shadow-lg vs:px-2 ">
      <div className='flex-1 flex justify-start items-center'>
        <div className="w-10 h-10">
          <img className=" w-full h-full" src="/images/archcoin (1).png" alt="logo" />
        </div>
        <h3 className="font-manrope text-black font-extrabold text-xl s:text-xl">Aviate-freelance</h3>
        </div>
        <div className='flex items-center gap-2'>
          {toggle && (<Avatar onClick = {func} sx={{ backgroundColor: "#4923B4" ,size: 35}}  src={image} /> )}
          <button onClick={logout} className=" flex items-center gap-1 btn-1 s:m-[.4rem]" type="button" ><HiOutlineLogout size={20}/>Sign Out </button>
        </div>
    </div>
  )
}

export default Dashbar