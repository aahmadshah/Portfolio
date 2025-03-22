import React from 'react';

const ExpeirenceInfo = ({ number, text }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-bold text-6xl text-[var(--color-cyan)]'>{number}</p>
      <p className='font-bold text-xl text-[var(--color-lightGrey)] uppercase -mt-4'>{text}</p>
    </div>
  );
};

export default ExpeirenceInfo;