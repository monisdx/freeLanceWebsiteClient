import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Features from "./components/Features";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  // const navigate=useNavigate();
  // const location=useLocation();
  // useEffect(()=>{
  //   console.log('hiii');

  //   if(localStorage.getItem('token')!=null){
  //     navigate('/dashboard');
  //   }
  // },[location]);
  return (
    <>
      <Navbar/>
      <Hero />
      <Brand />
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
