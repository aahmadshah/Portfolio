import React from 'react'

import { FaRegSquare } from "react-icons/fa";

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <img src="../../public/images/Animated_Pic.webp" 
      alt="Picture Animated Boy" 
      className='max-h-[450px] w-auto' 
      />
      <div className='absolute -z-10 flex justify-center animate-pulse'>
        <FaRegSquare className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite]'/>
      </div>
    </div>
  )
}

export default HeroPic