import React from 'react'
import { useNavigate } from 'react-router-dom';
import {HiOutlineLogout} from 'react-icons/hi';

const Dashbar = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    window.history.pushState(null,'','/');
    localStorage.clear();
    navigate('/');
  }
  return (
    <div className="flex justify-between items-center sticky w-full px-[4rem] py-[.5rem] bg-foreground shadow-lg vs:px-2">
       <div className='flex-1 flex justify-start items-center'>
        <div className="w-10 h-10">
          <img className=" w-full h-full" src="/images/archcoin (1).png" alt="logo" />
        </div>
        
        <h3 className="font-manrope text-black font-extrabold text-xl s:text-xl">Aviate-freelance</h3>
        </div>
        <button onClick={logout} className=" flex items-center gap-1 btn-1 s:m-[.4rem]" type="button" ><HiOutlineLogout size={20}/>Sign Out </button>
    </div>
  )
}

export default Dashbar