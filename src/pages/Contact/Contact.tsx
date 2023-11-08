import React from 'react'
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import Card from "./component/Card";
import {HiOutlinePhone,HiOutlineChatAlt2,HiOutlineLocationMarker,HiOutlineMail} from "react-icons/hi"


const cards = [
    {
      icon: <HiOutlineChatAlt2 size="25px" color="#FF00C7" />,
      title: "Chat to support",
      text: "We are here to help",
      link:"https://wa.me/918871668385",
      linkText : "Whatsapp"
    },
    {
        icon: <HiOutlineMail size="25px" color="#FF00C7" />,
        title: "Email us",
        text: "Reach Out for Prompt Assistance and Support.",
        link:"mailto:moniskhandx@gmail.com",
        linkText : "moniskhandx@gmail.com"
      },
    {
      icon: <HiOutlineLocationMarker size="25px" color="#FF00C7" />,
      title: "Visit us",
      text: "Visit our office HQ.",
      link:"https://www.google.com/maps/search/%22google%22+map+link+of+abv+iiitm+gwalior/@26.2499706,78.1705215,17.07z?entry=ttu",
      linkText : "Location"
    },
    {
      icon: <HiOutlinePhone size="25px" color="#FF00C7" />,
      title: "Call us",
      text: "Mon-Fri from 8am to 5pm.",
      link: "tel:+918871668385",
      linkText : "+91 8871668385"
    },
   
  ];

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className=" section_padding flex bg-herogradient shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-br-[150px] l:flex-col ">
      <div className="flex-1 flex justify-center items-start flex-col mr-[5rem] l:mb-[3rem] l:mr-0">
        <h1 className="font-manrope font-extrabold text-[62px] leading-[75px] text-foreground tracking-[-0.04em] m:text-[48px] m:leading-[60px] vs:text-[36px] vs:leading-[48px]">
        Contact our friendly team
        </h1>
        <p className="not-italic font-normal text-xl  text-foreground mt-6 vs:text-sm m:text-base ">
        Let us know how we can help
        </p>
        
      </div>
      <div className="flex-1 h-[320px] flex justify-center items-center">
        <img className="h-full" src="/images/contact.png" alt="ai" />
      </div>
    </div>

    
      <div className="flex flex-wrap flex-row justify-center items-center gap-8 m-8 xs:my-4 xs:mx-0 xs:min-w-full">
        {cards.map((card, i) => (
          <Card
          {...card}
          />
        ))}
      </div>
    
    <Footer/>
    </>
  )
}

export default Contact