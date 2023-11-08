import React from 'react';
import {FaFacebook,FaInstagram,} from 'react-icons/fa';
import {AiFillTwitterCircle,AiOutlineGithub} from 'react-icons/ai';
//hiii
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-footerbg section_padding'>
   
    <div className='flex justify-between items-start flex-wrap flex-row w-full text-left'>
      <div className='flex flex-col justify-start items-start w-[250px] m-4 s:my-4 s:mx-0'>
        <h3 className='font-manrope font-bold text-[25px]/[34px] text-foreground mb-4'>Aviate-freelance</h3>
        <p className='font-manrope text-xs text-foreground mb-8'>Find the right freelance service, right away.  Forget the old rules. You can have the best people.
        Right now. Right here. </p>
      </div>
      <div className='flex flex-row justify-start items-start flex-wrap gap-12 m-4 s:gap-0 s:my-4 s:mx-0'>
      <div className=' w-56 s:my-4 s:mx-0'>
        <h4 className='footer-h4'>General</h4>
        <p className='footer-p'>About Us</p>
        <p className='footer-p'>Pricing</p>
        <p className='footer-p'>Contact Us</p>
        <p className='footer-p'>Courses</p>
      </div>
      <div className='w-56 s:my-4 s:mx-0'>
        <h4 className='footer-h4'>Policies</h4>
        <p className='footer-p'>Security safeguards</p>
        <p className='footer-p'>Terms of service</p>
        <p className='footer-p'>Privacy</p>
        <p className='footer-p'>Accessibility</p>
      </div>
      <div className='w-56 s:my-4 s:mx-0'>
        <h4  className='footer-h4'>Get in touch</h4>
        <p className='footer-p'>Follow us on social media and stay updated with the latest information about our services </p>
        <h3 className='text-foreground flex text-[23px]'>
          <FaFacebook style={{marginRight: '5px'}}/>
          <FaInstagram style={{marginRight: '5px'}}/>
          <AiFillTwitterCircle style={{marginRight: '5px'}}/>
          <AiOutlineGithub style={{marginRight: '5px'}}/>
        </h3>
        
      </div>
      </div>
    </div>
    <div className='mt-8 text-center w-full s:my-4 s:mx-0'>
    <p className='font-manrope text-xs text-foreground'>© 2023-@Aviate-freelance. All rights reserved.</p>
    </div>
    
  </div>
  )
}

export default Footer
