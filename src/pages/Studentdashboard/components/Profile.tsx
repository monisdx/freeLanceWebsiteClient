import React, { useEffect, useRef, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Dashbar from "./Dashbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Projectcard from "./Projectcard";
import { BsPatchCheck } from "react-icons/bs";
import { TbAlertCircle } from "react-icons/tb";
import useModal from "../../../hooks/useModal";

const fetchurl = "https://free-lance-website-server.vercel.app/users/details";
const saveurl = "https://free-lance-website-server.vercel.app/saveDetails/save";
const fetchDetailsurl = "https://free-lance-website-server.vercel.app/saveDetails/getDetails";
const fetchprojectsurl = "https://free-lance-website-server.vercel.app/project/all_projects";
const deleteprojectbyidurl = "https://free-lance-website-server.vercel.app/project/deleteproject/";

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

const projectards: {
  title: string;
  skillset: string[];
  link: string;
  id: string;
}[] = [];

const Profile = () => {
  // const inputRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }
    
  const [name, setname] = useState("aditya");
  const [email, setemail] = useState("aditya@jhfguoid");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [bio, setbio] = useState("");
  const [gitlink, setgitlink] = useState("");
  const [linkedinlink, setlinkedinlink] = useState("");
  const [image, setimage] = useState("");
  const [imageprev, setimageprev] : any = useState("");
  const [projectdata, setprojectdata] = useState([]);
  const [deletemsg, setdeletemsg] = useState("");

  const handleimagechange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setimageprev(reader.result);
      setimage(file);
    }
    // const base64 = await converttobase64(file);
    console.log(imageprev);
    console.log(image);
    // console.log("Image: ", file);
  };
  // console.log(imageprev);
  //   console.log(image);

  
  const handlemobile = (e: any) => {
    setmobile(e.target.value);
  };

  const handleaddress = (e: any) => {
    setaddress(e.target.value);
  };

  const handlebio = (e: any) => {
    setbio(e.target.value);
  };

  const handlegitlink = (e: any) => {
    setgitlink(e.target.value);
  };

  const handlelinkedinlink = (e: any) => {
    setlinkedinlink(e.target.value);
  };

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    // console.log({name : name, email: email, mobile: mobile, address: address, bio: bio, gitlink: gitlink, linkedinlink: linkedinlink })
    if ( mobile.length > 0 && mobile.length < 10) {
      // alert("Enter Correct Mobile Number ...");
      
      modal.show(<DeleteProfileModal deletemsg={"Enter Correct Mobile Number ..."} />);
      return;
    }

    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("address", address);
    formData.append("github", gitlink);
    formData.append("linkedin", linkedinlink);
    formData.append("bio", bio);
    formData.append("file", image);
    formData.append("imagelink", imageprev);
   

    await fetch(saveurl, {
      method: "POST",
      headers: {
        token: `${token}`,
      },
      body: formData
    })
      .then(async (res) => {
        const data = await res.json();
        // alert(data.message);
        setdeletemsg(data.message);

        modal.show(<DeleteProfileModal deletemsg={data.message} />);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchuser = async () => {
    await fetch(fetchurl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log(data);
        setname(data.user.first_name + " " + data.user.last_name);
        setemail(data.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        console.log(data.details[0].profile.url);
        setmobile(data.details[0].mobile_no);
        setaddress(data.details[0].address);
        setbio(data.details[0].bio);
        setgitlink(data.details[0].githubLink);
        setlinkedinlink(data.details[0].linkedinLink);
        setimageprev(data.details[0].profile.url)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProjects = async () => {
    await fetch(fetchprojectsurl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setprojectdata(data.projects);
        let arr = data.projects;
        projectards.length = 0;
        arr.forEach(
          (element: {
            title: any;
            Skills: any;
            githubProject: any;
            _id: any;
          }) => {
            const object = {
              title: element.title,
              skillset: element.Skills,
              link: element.githubProject,
              id: element._id,
            };
            projectards.push(object);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchuser();
    fetchDetails();
    fetchProjects();
  }, []);

  const deleteFunc = async (id: string) => {
    await fetch(deleteprojectbyidurl + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);

        modal.show(<DeleteProfileModal deletemsg={data.message} />);
        // alert(data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
    fetchProjects();
  };

  const modal = useModal();

  return (
    <>
      <Dashbar  />
      <div className=" section_padding bg-background flex justify-center">
        <div className="flex flex-row justify-center items-start w-full ml:flex-col ml:justify-center ml:items-center">
          <div className="flex-1 flex flex-col justify-center items-center w-full p-4 my-4 mr-4 ml-16 ml:m-4">
            <div className="flex flex-col justify-center items-center p-5 w-full bg-foreground rounded-xl shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="file-upload">
                <div 
                  className="flex justify-center p-[3px] bg-herogradient rounded-full items-center h-[108px] w-[108px]"
                  // onClick={handleimageclick}
                >
                  
                  {imageprev ? (
                    <img
                     className="w-full h-full border-4 border-foreground rounded-full"
                     src={imageprev}
                     alt="logo"
                   />
                  ):(
                    <img
                    className="w-full h-full border-4 border-foreground rounded-full"
                    src="/images/user.png"
                    alt="logo"
                  />
                  )}
                   
                   {""}
                </div>
                  </label>
                <h3 className="font-manrope text-xl my-2.5 mx-0 font-bold">
                  {name}
                </h3>
                <input
                  className="w-full p-[.3rem] text-base text-center  outline-none bg-background rounded-md  "
                  type="text"
                  placeholder="Enter Bio"
                  onChange={handlebio}
                  value={bio}
                />
                <p className="text-sm text-black">{address}</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-4 mb-4 mt-12 py-0 px-5 w-full">
                <div className="flex flex-row justify-between items-center my-2 mx-0 w-full vs:flex-col vs:gap-2">
                  <div className="flex flex-row justify-center items-center">
                    <BsGithub />
                    <h5 className="ml-1 font-semibold">Github</h5>
                  </div>
                  <input
                    className="p-[.3rem] text-base text-center border rounded-md outline-none"
                    type="text"
                    placeholder="Enter your github link"
                    onChange={handlegitlink}
                    value={gitlink}
                  />
                </div>

                <div className="flex flex-row justify-between items-center my-2 mx-0 w-full vs:flex-col vs:gap-2">
                  <div className="flex flex-row justify-center items-center">
                    <BsLinkedin />
                    <h5 className="ml-1 font-semibold">Linkedin</h5>
                  </div>
                  <input
                    className="p-[.3rem] text-base border text-center rounded-md outline-none"
                    type="text"
                    placeholder="Enter your linkedin link"
                    onChange={handlelinkedinlink}
                    value={linkedinlink}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-2 flex flex-col justify-center items-start w-full p-4 my-4 mr-8 ml-4 ml:m-4">
            <h1 className="font-manrope text-2xl font-bold mb-2">
              Information
            </h1>
            <div className="flex flex-col justify-center items-center p-5 w-full bg-foreground rounded-xl mb-4 shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
              <form
                className="flex-1 flex flex-col justify-start items-start w-3/4"
                onSubmit={handlesubmit}
              >
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">
                    Full Name
                  </h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"
                    value={name}
                  />
                </div>
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">Email</h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"
                    value={email}
                  />
                </div>
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">Mobile</h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"
                    onChange={handlemobile}
                    value={mobile}
                  />
                </div>
                <div className="flex flex-col justify-start items-start my-2 mx-0 w-full">
                  <h5 className="font-manrope text-base font-bold">Address</h5>
                  <input
                    className="w-full p-[.3rem] text-base  outline-none border-b-2 border-black"
                    type="text"
                    onChange={handleaddress}
                    value={address}
                  />
                </div>
                <div className="hidden">
                  <input
                    type="file"
                    name="myFile"
                    id="file-upload"  
                    onChange={handleimagechange}
                  />
                </div>
                <button className="btn-3" type="submit">
                  Save Changes
                </button>
              </form>
            </div>
            <h1 className="font-manrope text-2xl font-bold mb-2">Projects</h1>
            <div className="flex justify-center items-center  p-2 m-4 bg-foreground  rounded-xl shadow-[0px_1px_20px_rgba(14,30,37,0.12)]">
              <h2 className="text-sm font-medium">Add Project</h2>
              <button onClick={() => navigate("/projectform")}>
                <AiFillPlusCircle size="30px" color="#4923B4" />
              </button>
            </div>
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
                    deleteFunc={deleteFunc}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function DeleteProfileModal({ deletemsg }: any) {
  const modal = useModal();

  return (
    <div className="w-100px shadow-lg">
      <div className="bg-white shadow-lg flex flex-col justify-center items-center gap-8 p-4 rounded-lg">
        <div className="flex justify-center items-center flex-col gap-1">
          {deletemsg === "Enter Correct Mobile Number ..." ? (
            <TbAlertCircle size={"50px"} color="#f41818" />
          ) : (
            <BsPatchCheck size={"50px"} color="#4adf52" />
          )}
          <p className="mt-2 font-manrope text-black font-bold">{deletemsg}</p>
        </div>
        <button className="btn-3 " onClick={() => modal.hide()}>
          OK
        </button>
      </div>
    </div>
  );
}

// function converttobase64(file: any){
//   return new Promise((resolve, reject)=>{
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () =>{
//       resolve(fileReader.result)
//     };
//     fileReader.onerror = (error) =>{
//       reject(error)
//     }
//   })
// }

export default Profile;
