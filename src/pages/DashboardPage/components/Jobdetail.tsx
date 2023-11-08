import React, { useEffect, useState } from "react";
import Dashbar from "./Dashbar";

import { FaRupeeSign } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Grid,
} from "@mui/material";

function createData(
  rank: number,
  firstname: string,
  lastname: string,
  bio: string,
  email: string,
  mobile_no: string,
  image:string,
  id:string
) {
  return { rank, firstname, lastname, bio, email, mobile_no ,image,id};
}

// interface User{rank: number,
//   firstname: string,
//   lastname: string,
//   bio: string,
//   email: string,
//   mobile_no: string,
//   id:string};


const rows :{rank: number,
  firstname: string,
  lastname: string,
  bio: string,
  email: string,
  mobile_no: string,
  image:string,
  id:string}[] = [];

const fetchjoburl = 'https://free-lance-website-server.vercel.app/jobs/jobsbyid/'
const fetchuserbyidurl = 'https://free-lance-website-server.vercel.app/users/user_by_id/'
const fetchdetailsurl = 'https://free-lance-website-server.vercel.app/saveDetails/getDetailsbyid/'


const applied_users: {rank: number, firstname: string,lastname: string,bio: string,email: string,mobile_no:string , id:string}[] = [] ;

const Jobdetail = () => {
  const [finalRows, setFinalRows]: any = useState([]);
  const modal = useModal();
  const [jobdetaildata,setjobdetaildata] = useState({title:'' , id:'' , applied_user:'' , description:'', skills:'' , budget:'', category:''});
  const [userstate , setuserstate] = useState({})
  const locatio=useLocation();
  const [array,setArray]=useState([])
  const navigate = useNavigate();
  let size: number ;
  const id = localStorage.getItem('id');
  // console.log(id);
 
  // console.log(localStorage.getItem('reload'));
let applied_users_id ;
  const fetchjob = async()=>{
    await fetch(fetchjoburl+id , {
      method:'GET',
      headers:{
        "Content-Type":"application/json",
      }
    }).then(async(res)=>{
      const data = await res.json();
      setjobdetaildata({title:data.job.title , id:data.job.id ,applied_user:data.job.applied_user , description:data.job.description , skills:data.job.skills ,budget:data.job.budget, category:data.job.category});
      // console.log(data.job);
      applied_users_id = data.job.applied_user ;
      applied_users.length=0;
      size = applied_users_id.length ;
       applied_users_id.forEach((id1: string) => {
        console.log("hlo this is check");
        if(id1.length && applied_users.length < size) {
          getapplieduser(id1);
         
        }
        
      })
    }).catch(err=>{
      console.log(err);
    })
  }


  const getapplieduser = async(id:string)=>{

     const object: {firstname: string,lastname: string,bio: string,email: string,mobile_no:string ,image:string, _id:string} = {
       firstname: "",
       lastname: "",
       bio: "",
       email: "",
       mobile_no: "",
       image: "",
       _id: id
     };
      await fetch(fetchuserbyidurl+id, {
      method:'GET',
      headers:{
        "Content-Type":"application/json",
      }
      }).then(async(res)=>{
        const data = await res.json();
        console.log(data)
        object.firstname = data.user.first_name ;
        object.lastname = data.user.last_name;
        object.email = data.user.email ;

        await fetch(fetchdetailsurl+id,{
          method:'GET',
        headers:{
          "Content-Type":"application/json",
        }
        }).then(async(res)=>{
          const data1 = await res.json();
          if(data1.details.length===1){
            object.mobile_no =  data1.details[0].mobile_no;
            object.bio =  data1.details[0].bio ;
            object.image = data1.details[0].profile.url;
          }

          if(size-1 > rows.length ){
            rows.push(createData(rows.length+1 , object.firstname, object.lastname ,object.bio ,object.email , object.mobile_no, object.image , object._id))
            console.log("fetch data");
            // console.log(rows);
            // let myobj={
            //   firstname: "",
            //   lastname: "",
            //   bio: "",
            //   email: "",
            //   mobile_no: "",
            //   _id: id
            // }
            // myobj.firstname=object.firstname;
            // myobj.lastname=object.lastname;
            // myobj.bio=object.bio;
            // myobj.email=object.email;
            // myobj.mobile_no=object.mobile_no;
            // myobj._id=object._id;
            // console.log(myobj);
            // let newer=array;
            // let mymap=new Map()
            // let newest=[]
            // newer.push(myobj);
            // for(let i=0;i<newer.length;i++){

            //   if(mymap.has(newer[i]._id)){

            //   }else{
            //     mymap.set(newer[i]._id,1);
            //     newest.push(newer[i]);
            //   }
            // }



            
            


            // setArray(newest);
            // console.log(array);
            // navigate('/jobdetail');
            
           

          }
          setFinalRows(rows);
          setuserstate(applied_users);
          // console.log("Final Rows: ", finalRows); 
                   
        })
      }).catch(err=>{
        console.log(err);
      })
  }

  // const [a,seta]=useState(0);
  // console.log(location.href);
  
  useEffect(()=>{
    
    fetchjob();
    
  },[finalRows]);

  
  // useEffect(()=>{
  //   console.log('heyeyyrydbcj')
  //   console.log(localStorage.getItem('reload'));
  //   console.log(localStorage.getItem('reload')=='1')
  //   if(localStorage.getItem('reload')=='1'){
  //     location.reload();
  //     console.log('hiiiisdfghgfdsdfggfdsdfghgfdsdfg')
  //     localStorage.setItem('reload','0');
  //   }
  // });
 

  const func=(id:any)=>{
    localStorage.setItem('user_id',id);
    // localStorage.setItem('reload','1');
    navigate(`/userdetail`)
  }
  return (
    <>
      <Dashbar />
      <div className="h-screen bg-background">
      <div className="px-24 py-10 bg-background  flex flex-col justify-center m:px-16 s:px-8">
        <h1 className="font-manrope text-black font-extrabold p-4 text-2xl">
          {" "}
          Job Details
        </h1>
        <div className="bg-foreground flex flex-col gap-4 m-auto rounded-lg  p-5 w-full  shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
          <div className="flex flex-col  p-4 justify-start items-start gap-4">
            <div className="flex flex-row w-full justfy-between s:flex-col s:gap-4">
              <div className="flex w-2/5 flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Title
                </h2>
                <p className="font-manrope text-grey text-sm">
                  {jobdetaildata.title}
                </p>
              </div>
              <div className="flex w-2/5 flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Budget
                </h2>
                <p className=" flex items-center font-manrope text-grey text-sm">
                  <FaRupeeSign />
                  {jobdetaildata.budget}
                </p>
              </div>
              <div className="flex w-2/5 flex-col">
                <h2 className="font-manrope font-bold text-black text-base">
                  Category
                </h2>
                <p className="font-manrope text-grey text-sm">
                  {jobdetaildata.category}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-black text-base">
                Skills
              </h2>
              <p className="font-manrope text-grey text-sm">
                {jobdetaildata.skills}
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-black text-base">
                Description
              </h2>
              <p className="font-manrope text-grey text-sm">
              {jobdetaildata.description}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row-reverse justify-between right-0 mt-4 ">
      
          <button onClick={()=>{modal.show(<EmailModal finalRows={finalRows}/>)}} className="btn-3" type="button">
            Send Email
          </button>
        </div> */}
      </div>
      <div className="px-24 py-10 w-fll bg-background flex flex-col justify-center m:px-16 s:px-8">
        <h1 className="font-manrope text-black font-extrabold p-4 text-2xl">
          {" "}
          Best Matches
        </h1>

        {finalRows?.length ?<div className="bg-foreground flex flex-col gap-4 m-auto rounded-lg  p-5 w-full  shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <p className="font-manrope text-lg font-extrabold">S.no</p>
                  </TableCell>
                  <TableCell>
                    <p className="font-manrope text-lg font-extrabold">User</p>
                  </TableCell>
                  <TableCell>
                    <p className="font-manrope text-lg font-extrabold">
                      Email Address
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="font-manrope text-lg font-extrabold">
                      Mobile
                    </p>
                  </TableCell>
                  {/* <TableCell>
                    <p className="font-manrope text-lg font-extrabold">Chat</p>
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                
                {finalRows?.map((user: any,i: any)  => (
                  <TableRow 
                    onClick={()=>func(user.id)}
                    key={i}
                  >
                    
                    <TableCell>
                      <h1 className="font-manrope text-grey">{i+1}</h1>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row gap-4 items-center ">
                        <div>
                          <Avatar
                            sx={{ backgroundColor: "#4923B4" }}
                            alt={user.firstname}
                            src={user.image}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="font-bold font-manrope">{`${user.firstname} ${user.lastname}`}</h1>
                          <h1 className="font-manrope text-grey">{user.bio}</h1>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <h1 className="font-manrope text-grey">{user.email}</h1>
                    </TableCell>
                    <TableCell>
                      <h1 className="font-manrope text-grey">
                        {user.mobile_no}
                      </h1>
                    </TableCell>
                    {/* <TableCell>
                      <BsChatLeftTextFill size={"30px"} color="#4923B4" />
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div> : <h1>No One Applied Yet</h1>}
        
      </div>
      </div>
    </>
  );
};

export default Jobdetail;

