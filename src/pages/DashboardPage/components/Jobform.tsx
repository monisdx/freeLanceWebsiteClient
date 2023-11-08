import React from 'react'
import Dashbar from './Dashbar'
import Stepperform from './Stepperform'

const Jobform = () => {
  return (
    <>
    <Dashbar/>
    <div className=" section_padding h-screen bg-background flex flex-col justify-start s:px-0 vm:px-0">
      {/* <h1 className=' w-[70%] m-auto font-manrope mb-4 text-xl font-bold text-black  xm:text-sm'>New Job</h1> */}
      <Stepperform/>
    </div>
    </>
  )
}

export default Jobform