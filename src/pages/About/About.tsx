import React from 'react'
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className=" section_padding flex flex-row-reverse justify-center items-center bg-herogradient shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-br-[150px] l:flex-col ">
      <div className="flex-1 flex justify-center items-start flex-col ml-[5rem] l:mb-[3rem] l:ml-0">
        <h1 className="font-manrope font-extrabold text-[62px] leading-[75px] text-foreground tracking-[-0.04em] m:text-[48px] m:leading-[60px] vs:text-[36px] vs:leading-[48px]">
        About Us
        </h1>
        <p className="not-italic font-normal text-xl  text-foreground mt-6 vs:text-sm m:text-base ">
         Aviate-freelance provide platform that connect freelance students with clients who require specific services or tasks to be completed. It also provide growing demand for flexible work arrangements and the need for students to gain 
         valuable work experience that will help them in their future careers.
        </p>
      </div>
      <div className="flex-1 h-[320px] flex justify-start items-center">
        <img className="h-full" src="/images/about3.png" alt="ai" />
      </div>
    </div>
    <div className="flex flex-col p-8 mb-16 mt-16 mx-24 bg-background xm:mx-12 xs:mx-4">
      <div className="flex flex-col justify-center items-center mx-0 my-8 vm:mb-0">
        <h1 className="font-manrope text-[44px]/[62px] font-semibold text-black text-center xm:text-[28px]/[40px]">
          Our Goals
        </h1>
        <p className="text-base font-normal max-w-[800px] text-center mt-8 font-manrope text-grey vm:mt-4 xm:text-xs">
        To give opportunities and provide platform for students to improve their skills, to easily 
        find work according to their skills, to gain valuable work experience that will help them 
        in their future careers.
        <br/>
        <br/>
        

        To provide networking opportunities for students by connecting with clients, students 
        can establish professional networks and expand their network which can lead to future 
        job opportunities.
        <br/>
        <br/>
        
        
        To provide clients/organizations best talented list of students according to their need 
        who can help them with their projects and tasks.
        <br/>
        <br/>
        

        To provide platform that connect freelance students with clients who require specific 
        services or tasks to be completed. It acts as a bridge between the two parties, allowing 
        them to find each other easily and efficiently and work together in a mutually beneficial 
        way.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About