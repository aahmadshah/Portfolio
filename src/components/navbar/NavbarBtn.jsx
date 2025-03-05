import React from 'react';
import { LuArrowDownRight } from 'react-icons/lu';

const NavbarBtn = () => {
  return (
    <button
      className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-500 border flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-orange-400 hover:border-orange-400 hover:scale-110 transition-all duration-500'
      style={{ boxShadow: '0 0px 20px 0px rgba(94, 206, 220, 0.5)' }}
    >
      Hire Me
      <div className='sm:hidden md:block'>

      <LuArrowDownRight />
      
      </div>
      
    </button>
  );
};

export default NavbarBtn;