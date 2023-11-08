import React, { useEffect, useRef, useState } from "react";
import {BsGithub, BsLinkedin } from "react-icons/bs";
import Dashbar from "./Dashbar";
import {Link} from "react-router-dom";
import Projectcard from "./Projectcard";


const projectcards = [
  {
    title: "UI Designer",
    skillset: ["CSS", "Javascript", "React"],
    link: "https://qwertt",
  },
  {
    title: "UI Designer",
    skillset: ["CSS", "Javascript", "React"],
    link: "https://qwertt",
  },
  {
    
    title: "UI Designer",
    skillset: ["CSS", "Javascript", "React"],
    link: "https://qwertt",
  },
  {
    title: "UI Designer",
    skillset: ["CSS", "Javascript", "React"],
    link: "https://qwertt",
  },
];

const projectards: {title: string,skillset: string[],link: string,id:string}[] = [] ;
const fetchuserbyidurl = 'https://free-lance-website-server.vercel.app/users/user_by_id/'
const getDetailsbyidurl = 'https://free-lance-website-server.vercel.app/saveDetails/getDetailsbyid/'
const getprojectsbyidurl = 'https://free-lance-website-server.vercel.app/project/all_projects/'

const Userdetail = () => {

  const id = localStorage.getItem('user_id');

  const [image, setimage] = useState("");
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [mobile,setmobile] = useState("");
  const [address,setaddress] = useState("");
  const [bio,setbio] = useState("");
 
  const [gitlink,setgitlink] = useState("");
  const [linkedinlink,setlinkedinlink] = useState("");
  const [projectdata,setprojectdata] = useState([]);
  // localStorage.setItem('reload','1');

  


  const fetchuser = async()=>{
    const token = localStorage.getItem('token');
    await fetch(fetchuserbyidurl+id , {
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      }
    }).then(async(res)=>{
      const data = await res.json();
      console.log(data);
      setname(data.user.first_name+" " + data.user.last_name);
      setemail(data.user.email);
    }).catch(err=>{
      console.log(err);
    })
  }

  const fetchDetails = async()=>{
    await fetch(getDetailsbyidurl+id , {
      method:'GET',
      headers:{
        "Content-Type":"application/json",
      }
    }).then(async(res)=>{
      const data = await res.json();
      console.log(data);
      if(data.details){
        setmobile(data.details[0].mobile_no);
      setaddress(data.details[0].address);
      setbio(data.details[0].bio);
      setgitlink(data.details[0].githubLink);
      setlinkedinlink(data.details[0].linkedinLink);
      setimage(data.details[0].profile.url);
      }
      
    }).catch(err=>{
      console.log(err);
    })
  }

  const fetchProjects = async()=>{
    

    await fetch(getprojectsbyidurl+id , {
      method:'GET',
      headers:{
        "Content-Type":"application/json",
      }
    }).then(async(res)=>{
      const data = await res.json();
      console.log(data);
      setprojectdata(data.projects);
      let arr = data.projects ;
          projectards.length = 0;
          arr.forEach((element: { title: any; Skills: any; githubProject: any; _id: any; }) => {
            const object = {
              title: element.title,
              skillset: element.Skills,
              link: element.githubProject,
              id:element._id
            }
            projectards.push(object);
          });
      
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    fetchuser()
    fetchDetails()
    fetchProjects();
  },[]);

 
   

  return (
    <>
      <Dashbar/>
      <div className="h-screen bg-background">
      <div className=" section_padding  bg-background flex justify-center">
        <div className="flex flex-row justify-center items-start w-full ml:flex-col ml:justify-center ml:items-center">
          <div className="flex-1 flex flex-col justify-center items-center w-full p-4 my-4 mr-4 ml-16 ml:m-4">
            <div className="flex flex-col justify-center items-center p-5 w-full bg-foreground rounded-xl shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className="flex justify-center p-[3px] bg-herogradient rounded-full items-center h-[108px] w-[108px]"
                  
                >
                  {image ? (
                    <img
                      className="w-full h-full border-4 border-foreground rounded-full"
                      src={image}
                      alt="logo"
                    />
                  ) : (
                    <img
                      className="w-full h-full border-4 border-foreground rounded-full"
                      src={"/images/user.png"}
                      alt="logo"
                    />
                  )}
                </div>
                <h3 className="font-manrope text-xl my-2.5 mx-0 font-bold">
                  {name}
                </h3>
                <input
                    className="w-full p-[.3rem] text-base text-center  outline-none bg-background rounded-md  "
                    type="text" placeholder="Enter Bio"  value={bio}
                  />
                <p className="text-sm text-black">{address}</p>
              </div>

              <div className="flex flex-col justify-center items-center mx-4 mb-4 mt-12 py-0 px-5 w-full">
                <div className="flex flex-row justify-between items-center my-2 mx-0 w-full vs:flex-col vs:gap-2">
                  <div className="flex flex-row justify-center items-center">
    
                    <BsGithub />
                    <h5 className="ml-1 font-semibold">Github</h5>
                  </div>
                  <Link target={"_blank"} to={gitlink}>
                  <input
                    className="p-[.3rem] text-base text-center border cursor-pointer rounded-md outline-none"
                    type="text" placeholder="Enter your github link"  value={gitlink}
                  />
                  </Link>
                 
                </div>
               
                <div className="flex flex-row justify-between items-center my-2 mx-0 w-full vs:flex-col vs:gap-2">
                  <div className="flex flex-row justify-center items-center">
                  
                    <BsLinkedin />
                    <h5 className="ml-1 font-semibold">Linkedin</h5>
                  </div>
                  <Link target={"_blank"} to={linkedinlink}><input
                    className="p-[.3rem] text-base border text-center cursor-pointer rounded-md outline-none"
                    type="text" placeholder="Enter your linkedin link" value={linkedinlink}
                  /></Link>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="flex-2 flex flex-col justify-center items-start w-full p-4 my-4 mr-8 ml-4 ml:m-4">
            <h1 className="font-manrope text-2xl font-bold mb-2">
              Information
            </h1>
            <div className="flex flex-col justify-center items-center p-5 w-full bg-foreground rounded-xl mb-4 shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
              <form className="flex-1 flex flex-col justify-start items-start w-3/4" >
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">
                    Full Name
                  </h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"  value={name}
                  />
                </div>
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">Email</h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text" value={email}
                  />
                </div>
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">Mobile</h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"  value={mobile}
                  />
                </div>
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">Address</h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"  value={address}
                  />
                </div>
                <div className="hidden">
                  {" "}
                  {/* <input
                    type="file"
                    ref={inputRef}
                    onChange={handleimagechange}
                  />
                   */}
                </div>
                
              </form>
            </div>
            <h1 className="font-manrope text-2xl font-bold mb-2">Projects</h1>
          
            <div className="flex w-full flex-wrap justify-start">
                {false ? (
                  <div className="h-screen justify-center items-center text-5xl italic text-teal-600">
                    Loading
                  </div>
                ) : (
                  projectards.map((projectcard, i) => (
                    <Projectcard
                      key={i}
                      id={projectcard.id}
                      title={projectcard.title}
                      skillset={projectcard.skillset}
                      link={projectcard.link}
                      
                    />
                  ))
                )}
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Userdetail;