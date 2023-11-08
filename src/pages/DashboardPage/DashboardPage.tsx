import React,{useEffect, useState} from "react";
import {
  AiFillDropboxCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import Graph from "./components/Graph";
import Jobcard from "./components/Jobcard";
import Dashbar from "./components/Dashbar";
import { useNavigate } from "react-router-dom";
import {BsPatchCheck} from "react-icons/bs";
import useModal from "../../hooks/useModal";

const AllJoburl = 'https://free-lance-website-server.vercel.app/jobs/jobs_of_client'
const deleteurl = 'https://free-lance-website-server.vercel.app/jobs/deletejob/';
const fetchuserdetailsurl = 'https://free-lance-website-server.vercel.app/users/details';

const jobcards: {title: string,skillset: string[],category: string,amount: string,id:string}[] = [] ;

const DashboardPage = () => {

  const navigate = useNavigate();

  const modal = useModal();
  

  const[job,setjob] = useState("0"); 
  const[jobdata, setjobdata] = useState([]); 
  const [firstname,setfirstname] = useState("");
  const [lastname,setlastname] = useState("");
  const [email,setemail] = useState("");

  const token = localStorage.getItem('token');
  console.log(token);
  if(token===null){
    console.log("token is nULL")
     navigate('/');
  }

    const fetchuser = async()=>{
      await fetch(fetchuserdetailsurl , {
        method:'GET',
          headers:{
            "Content-Type":"application/json",
            "token":`${token}`
          }
        }).then(async(res)=>{
          const data = await res.json();
          console.log(data);
          setfirstname(data.user.first_name);
          setlastname(data.user.last_name);
          setemail(data.user.email);
        }).catch(err=>{
          console.log(err);
        })
    }
    const fetchDetails = async()=>{
        await fetch(AllJoburl, {
          method:'GET',
          headers:{
            "Content-Type":"application/json",
            "token":`${token}`
          },
        }).then(async(res)=>{
          const data = await res.json();
          setjob(data.jobs.length)
          setjobdata(data.jobs);
          let arr = data.jobs ;
          jobcards.length = 0;
          arr.forEach((element: { title: any; skills: any; category: any; budget: any; _id: any; }) => {
            const object = {
              title: element.title,
              skillset: element.skills,
              amount: element.budget,
              id:element._id,
              category: element.category
            }
            jobcards.push(object);
          });
        }).catch(err=>{
          console.log(err);
        })
    }

    const deleteFunc = async(id: string)=>{
      await fetch(deleteurl+id , {
        method:'DELETE',
        headers:{
          "Content-Type":"application/json"
        }
      }).then(async(res)=>{
        const data = await res.json();
        console.log(data);
        // alert(data.message);
        // setdeletemsg(data.message);
        // setdeletemodel(true);
        modal.show(<DeleteModal msg={data.message}/>);
      }).catch(err=>{
        console.log(err);
        alert(err.message);
      })
      fetchDetails();
    }
    console.log(localStorage.getItem('token'));
    useEffect(()=>{
      fetchDetails();
      fetchuser();
    },[]);

  return (
    <>
      <Dashbar />
      <div className="h-screen bg-background">
      <div className=" p-8  bg-background">
        <div className="flex flex-wrap flex-row justify-center items-start gap-8">
          <div className="flex-1 flex max-w-xs max-h-32 justify-center items-start flex-col gap-10 m-4 p-4 rounded-[10px] bg-white bg-no-repeat bg-cover bg-center bg-[url('/images/welcome-bg.svg')] shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)] ease-in-out duration-300 hover:scale-105">
            <div className="flex flex-col w-full justify-center items-start ">
              <h1 className=" font-manrope text-xl font-extrabold">Welcome</h1>
              <h2 className=" font-manrope text-xl font-semibold">{`${firstname} ${lastname}`}</h2>
             
             
            </div>
            <h1 className="font-manrope text-sm font-semibold text-grey flex items-center mt-2 ">
      
              {email}
            </h1>
          </div>
          <div className="flex-1  max-w-xs max-h-32 flex justify-center items-start flex-col gap-4 m-4 p-4 rounded-[10px] bg-foreground shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)] ease-in-out duration-300 hover:scale-105">
            <div className="flex flex-row w-full justify-between items-center ">
              <h2 className="text-xl font-bold font-manrope">Jobs</h2>
              <AiFillDropboxCircle size="60px" color="#4923B4" />
            </div>
            <h1 className="text-3xl font-semibold">{job}</h1>
          </div>
          <div className="flex-1 flex h-32 max-w-xs justify-center items-center flex-col  m-4 p-1 rounded-[10px] bg-[#E878CF] shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)] ease-in-out duration-300 hover:scale-105">
            {/* <h2 className='text-xl text-foreground font-medium'>Monthly Earnings</h2> */}
            {/* <Sparkline  id="line-sparkline" currentColor="#fff" type="Line" height="60px" width="200px" data={SparklineData} color="#fff" /> */}
            <Graph />
          </div>
          <div className="flex-1 flex max-w-xs justify-center items-start flex-col gap-4 m-4 p-4 rounded-[10px] bg-foreground shadow-[0px_7px_30px_0px_rgba(90,114,123,0.11)] ease-in-out duration-300 hover:scale-105">
            <div className="flex flex-row w-full justify-between items-center gap-1">
              <h2 className="text-xl font-bold font-manrope">Post Job</h2>
              <button onClick={() => navigate("/jobform")}>
                {" "}
                <AiFillPlusCircle size="60px" color="#4923B4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className=" p-8 bg-background xm:px-0">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-manrope mb-4 text-[44px]/[62px] font-semibold text-black text-center xm:text-[28px]/[40px]">
            Manage Jobs
          </h1>
          <div className="flex w-3/5 items-center flex-col justify-center l:w-4/5 xm:w-4/5">
            {false ? (
              <div className="h-screen justify-center items-center text-5xl italic text-teal-600">
                Loading
              </div>
            ) : (
              jobcards.map((jobcard, i) => (
                <Jobcard
                  key={i}
                  id={jobcard.id}
                  title={jobcard.title}
                  skillset={jobcard.skillset}
                  amount={jobcard.amount}
                  category={jobcard.category}
                  deleteFunc={deleteFunc}
                  //   description={jobcard.description}
                />
              ))
            )}
          </div>
        </div>
      </div>
      </div>
      {/* {deletemodel && <div className='z-[100] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[1px] flex justify-center items-center '>
      <div className='w-100px shadow-lg'>
        <div className='bg-white shadow-lg flex flex-col justify-center items-center gap-8 p-4 rounded-lg'>
         <div className="flex justify-center items-center flex-col gap-1">
         <BsPatchCheck size={'50px'} color="#4adf52"/>
         <p className='mt-2 font-manrope text-black font-bold'>{deletemsg}</p>
         </div>
         <button className='btn-3 ' onClick={()=>setdeletemodel(false)}>OK</button>
        </div>
      </div>
    </div>} */}
    </>
  );
};

function DeleteModal({msg}:any) {

  const modal = useModal()

  return <div className='w-100px shadow-lg'>
  <div className='bg-white shadow-lg flex flex-col justify-center items-center gap-8 p-4 rounded-lg'>
   <div className="flex justify-center items-center flex-col gap-1">
   <BsPatchCheck size={'50px'} color="#4adf52"/>
   <p className='mt-2 font-manrope text-black font-bold'>{msg}</p> 
   </div>
    <button className='btn-3 ' onClick={()=>modal.hide()}>OK</button> 
  </div>
</div>
}

export default DashboardPage;