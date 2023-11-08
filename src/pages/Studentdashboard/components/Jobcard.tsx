import React,{useState} from 'react'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import { FaRupeeSign } from "react-icons/fa";
import {BsPatchCheck} from "react-icons/bs";
import {TbAlertCircle} from "react-icons/tb";
import useModal from "../../../hooks/useModal";


const applyurl = 'https://free-lance-website-server.vercel.app/jobs/apply';
const revokejoburl = 'https://free-lance-website-server.vercel.app/jobs/revoke/'

const Jobcard = ({_id,title,skills,budget,description,category, property ,setreload}:any) => {
    const token = localStorage.getItem('token');
  
    const applyforjob= async()=>{
      const object = {
        "job_id":_id
      }
      // console.log(object);
      await fetch(applyurl ,{
        method:'POST',
      headers:{
        "Content-Type":"application/json",
        "token":`${token}`
      },
      body:JSON.stringify(object)
      }).then(async(res)=>{
        const data = await res.json();
      // console.log(data);
      // location.reload();
        modal.show(<JobcardModal msg={data.message} func={func}/>);

        // location.reload();
        // window.NavigationPreloadManager;
        // reloadAppliedJobs()
      }).catch(err=>{
        console.log(err);
      })
    }
    
    const modal = useModal()

    

    const revokejob = async()=>{
      await fetch(revokejoburl+_id ,{
        method:'GET',
      headers:{
        "Content-Type":"application/json",
        "token":`${token}`
      }
      }).then(async(res)=>{
        const data = await res.json();
        console.log(data)
        // location.reload();
        setreload(3)
      }).catch(err=>{
        console.error(err);
      })
    }

    const func =()=>{
      modal.hide()
      // location.reload();
      setreload(2)
    }
    const [toggledetail,settoggledetail] = useState(false);
  return (
    <div  className='flex w-1/2 justify-start gap-4 flex-col m-4 p-4 rounded-[10px] border border-gray bg-foreground duration-300 hover:-translate-y-1 hover:shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)]  l:w-4/5 xm:w-4/5 '>
    <div className='flex flex-row justify-between gap-4 xm:flex-col '>
    <div className='flex flex-col justify-center items-start gap-2'>
        <h1 className='font-manrope text-black font-bold'>{title}</h1>
        <p className=" flex items-center font-manrope text-grey text-xs">Budget:<FaRupeeSign size={10}/>{budget}</p>
        <p className=" flex items-center font-manrope text-grey text-xs">Category:{category}</p>
        <div className="flex flex-row flex-wrap justify-start items-start gap-2">
            {skills.map((skill: any,i: any)=>(
              <div key={i} className="bg-[#cec1f3] flex justify-center items-center rounded-xl px-2.5 py-1">
              <p className="font-manrope text-black text-xs">{skill}</p>
              </div>
            ))}
        </div>
    </div>
    <div className='flex justify-start gap-2 items-center'>
      {property ?<button  className="text-indigo-500  p-2 font-medium rounded text-sm  cursor-pointer bg-foreground font-manrope outline-none border-none" onClick={applyforjob}>Apply</button> :
      <button  className="text-indigo-500  p-2 font-medium rounded text-sm  cursor-pointer bg-foreground font-manrope outline-none border-none" onClick={revokejob}>Revoke</button>
      }
    
        {toggledetail ? (
            <IoIosArrowUp className='hover:cursor-pointer' onClick={()=>settoggledetail(false)} size="20px" color="#4923B4"/>
        ):(
            <IoIosArrowDown className='hover:cursor-pointer' onClick={()=>settoggledetail(true)} size="20px" color="#4923B4"/>
        )}
      
    </div>
    </div>    
    {toggledetail && (
      <div className={`transition duration-500 `}>
         <div className=' flex flex-col justify-center gap-1 items-start'>
            <h1 className='font-manrope font-bold text-black text-base'>Description</h1>
            <p className='font-manrope text-grey text-sm'>{description}</p>
         </div>
      </div>   

    )}  
 </div>
 
  )
};
function JobcardModal({msg,func}:any) {

  

  return <div className='w-100px shadow-lg'>
  <div className='bg-white shadow-lg flex flex-col justify-center items-center gap-8 p-4 rounded-lg'>
   <div className="flex justify-center items-center flex-col gap-1">
     {msg === "Already Rregistered For This Job" ? (<TbAlertCircle size={'50px'} color="#f41818"/>)
    : (<BsPatchCheck size={'50px'} color="#4adf52"/>)}
   <p className='mt-2 font-manrope text-black font-bold'>{msg}</p> 
   </div>
    <button className='btn-3 ' onClick={func}>OK</button> 
  </div>
</div>
}

export default Jobcard