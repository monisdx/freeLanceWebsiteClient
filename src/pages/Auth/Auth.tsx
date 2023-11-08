import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { TextField, InputAdornment, IconButton, MenuItem } from "@mui/material";
import Navbar from "../../common/Navbar";
import {TbAlertCircle} from "react-icons/tb";
import useModal from "../../hooks/useModal";

const initialState = {firstname: '', lastname: '', role: '', email: '', password: '', confirmpassword:''};
const register_url = 'https://free-lance-website-server.vercel.app/users/newuser' ;
const login_url = 'https://free-lance-website-server.vercel.app/users/login' ;




const Auth = () => {

  const modal = useModal();

  const [isSignup, setisSignup] = useState(false);

  const [showpassword, setshowpassword] = useState(false);

  const [formData, setformData] = useState(initialState);
  
  const handleChange = (e : any) =>{
    setformData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(isSignup){
      if(!(formData.password === formData.confirmpassword)){
       
        modal.show(<AuthModal msg={"Password and Confirm Password Should be same"}/>);
        
        return ;
      }
      let role = formData.role === '1' ? "Student" : "Client" ;
      const object = {
        "first_name":formData.firstname,
        "last_name":formData.lastname,
        "email":formData.email,
        "role":role,
        "password":formData.password
      }
      await fetch(register_url , {
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(object)
      }).then(async(res)=>{
        const data = await res.json();
        console.log(data);
        localStorage.setItem("token" , data.token)
        if(!data.sucess){
          if(data.message){
          
            modal.show(<AuthModal msg={data.message}/>);
          }else if(data.errors){
           
            modal.show(<AuthModal msg={data.errors[0].msg}/>);
          }else {
          alert("server Error");
          }
        }
        if(data.sucess){
          if(role==="Student"){
            window.location.replace(`https://free-lance-website-server.vercel.app/studentdashboard`);
          }else{
            window.location.replace('https://free-lance-website-server.vercel.app/dashboard')
          }
        }
        
      }).catch(err=>{
        console.log(err);
      })
    }else {
      const object = {
        "email":formData.email,
        "password":formData.password
      }
      console.log(formData.password.length < 5);
      
      await fetch(login_url , {
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(object)
      }).then(async(res)=>{
        const data = await res.json();
        console.log(data);
        localStorage.setItem("token" , data.token)
        if(!data.sucess){
          if(data.errors){
            modal.show(<AuthModal msg={data.errors[0].msg}/>);
          }else {
            modal.show(<AuthModal msg={data.message}/>)
          }
        }
        if(data.sucess){
          if(data.user.role==="Student"){
            window.location.replace(`https://free-lance-website-server.vercel.app/studentdashboard`);
          }else{
            window.location.replace('https://free-lance-website-server.vercel.app/dashboard')
          }
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }

  const handleshowpassword = () =>
    setshowpassword((prevshowpassword) => !prevshowpassword);

  const switchMode = () => {
    
    setisSignup((previsSignup) => !previsSignup);
    setshowpassword(false);
    setformData(initialState);
    

  
  };

  const Endadornment = ({ showpassword }: { showpassword: any }) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={handleshowpassword}>
          {showpassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </IconButton>
      </InputAdornment>
    );
  };


  return (
    <>
    <Navbar/>
    <div className=" bg-foreground flex flex-col gap-10 m-auto rounded-lg mt-16 p-5 w-[30%] h-[80%]  mb-8 shadow-[0px_1px_20px_rgba(14,30,37,0.12)] s:w-4/5 s:p-2.5 sm:w-6/12">
      <div className="flex flex-col justify-center items-center text-xl font-manrope font-semibold">
        <img className="w-[62px] h-[62px]" src="/images/archcoin (1).png" alt="lock" />
        {/* <h3>{isSignup ? "Sign Up" : "Sign In"}</h3> */}
        <h3>Aviate-freelance</h3>
      </div>
      <form className="flex flex-col gap-5 justify-evenly z-1" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between z-0">
          {isSignup && (
            <>
              <div className="mr-1">
                <TextField
                  name="firstname"
                  variant="outlined"
                  label="First name"
                  type="text"
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </div>
              <div className="ml-1">
                <TextField
                  name="lastname"
                  variant="outlined"
                  label="Last name"
                  type="text"
                  fullWidth
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
        {isSignup && (
          <>
            <TextField
              variant="outlined"
              name="role"
              label="Select your role"
              required
              select
              onChange={handleChange}
              fullWidth

            >
              <MenuItem value="1">Student</MenuItem>
              <MenuItem value="0">Client</MenuItem>
            </TextField>
          </>
        )}
        <div>
          <TextField
            name="email"
            variant="outlined"
            label="Email Address"
            type="email"
            value={formData.email}
            required
            fullWidth
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            type={showpassword ? "text" : "password"}
            value={formData.password}
            required
            fullWidth
            onChange={handleChange}
            InputProps={{
              endAdornment: <Endadornment showpassword={showpassword} />,
            }}
          />
        </div>
        {isSignup && (
          <>
            <div>
              <TextField
                name="confirmpassword"
                variant="outlined"
                label="Confirm password"
                type="password"
                required
                fullWidth
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <div>
          <button className="btn-2" type="submit">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
      <div>
        <button
          className="text-indigo-500 w-full p-2 font-medium rounded text-sm  cursor-pointer bg-foreground font-manrope outline-none border-none"
          onClick={switchMode}
        >
          {isSignup
            ? `Already have an account? Sign In`
            : `Don't have an account? Sign Up`}
        </button>
      </div>
    </div>
 
    </>
  );
};

function AuthModal({msg}:any) {

  const modal = useModal()

  return <div className='w-100px shadow-lg'>
  <div className='bg-white shadow-lg flex flex-col justify-center items-center gap-8 p-4 rounded-lg'>
   <div className="flex justify-center items-center flex-col gap-1">
    <TbAlertCircle size={'50px'} color="#f41818"/>
   <p className='mt-2 font-manrope text-black font-bold'>{msg}</p> 
   </div>
    <button className='btn-3 ' onClick={()=>modal.hide()}>OK</button> 
  </div>
</div>
}

export default Auth;
