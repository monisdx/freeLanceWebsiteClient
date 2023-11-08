import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <div className="flex justify-between items-center sticky w-full px-[6rem] py-[.1rem] bg-foreground z-[100] shadow-xl s:p-8 l:px-16 l:py-4">
      <div className=" flex-1 flex justify-start items-center ">
        <div className="w-10 h-10">
          <img className=" w-full h-full" src="/images/archcoin (1).png" alt="logo" />
        </div>
        <div className="mr-16 cursor-pointer">
          <h3 className="font-manrope text-black font-extrabold text-2xl s:text-xl">Aviate-freelance</h3>
        </div>
        <div className="flex flex-row l:hidden">
          <p className={`p-style ${pathname == "/" ? "active" : "" } `}><a onClick={()=> navigate("/")}>Home</a></p>
          <p className={`p-style ${pathname == "/about" ? "active" : "" } `}><a onClick={()=> navigate("/about")}>About Us</a></p>
          <p className={`p-style ${pathname == "/contact" ? "active" : "" } `}><a onClick={()=> navigate("/contact")}>Contact Us</a></p>
          {/* <p className="p-style"><a onClick={()=> navigate("/help")}>Help&Support</a></p> */}
        </div>
      </div>
      <div className="flex justify-end items-center  s:hidden">
        <button onClick={() => navigate("/auth")} className="btn-1 duration-500 hover:scale-105 " type="button">Sign In / Sign Up</button>
      </div>
      <div className="ml-4 hidden relative l:flex">
        <RiMenu3Line className='cursor-pointer' color="#060606" size={27} onClick={() => settogglemenu(true)}/>
        {togglemenu && (
          <div className=" transition duration-500 ease-linear flex w-full h-[60vh] justify-center items-center flex-col text-center bg-white p-8 fixed top-0 right-0 shadow-xl slide-bottom">
            <RiCloseLine color="#060606" className="cursor-pointer absolute top-9 right-8" size={27} onClick={() => settogglemenu(false)}/>
            <div>
              <p className={`p-style ${pathname == "/" ? "active" : "" } `}><a onClick={()=> navigate("/")}>Home</a></p>
              <p className={`p-style ${pathname == "/about" ? "active" : "" } `}><a onClick={()=> navigate("/about")}>About Us</a></p>
              <p className={`p-style ${pathname == "/contact" ? "active" : "" } `}><a onClick={()=> navigate("/contact")}>Contact Us</a></p>
              {/* <p className="p-style"><a onClick={()=> navigate("/help")}>Help&Support</a></p> */}
            </div>
            <div className="hidden s:block">
              <button onClick={() => navigate("/auth")} className="btn-1 duration-500 hover:scale-105 s:m-[.4rem]" type="button" > Sign In / Sign up </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
