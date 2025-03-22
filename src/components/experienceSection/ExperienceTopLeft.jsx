import React from 'react';
import ExpeirenceInfo from './ExpeirenceInfo';

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className=' text-[var(--color-orange)] font-bold uppercase text-3xl font-special text-center '> Since 2022</p>
      <div className='flex justify-center items-center gap-4'>
        <ExpeirenceInfo number='2+' text='Years' />
        <p className='font-bold text-6xl text-[var(--color-lightBrown)]'>-</p>
        <ExpeirenceInfo number='4' text='Project' />
      </div>
      <p className='font-bold text-white text-center'>
        I have over two years of experience in Automation and Full Development, specializing in designing, programming, and integrating automated systems using PLCs, SCADA, and IoT technologies, as well as developing end-to-end software solutions with expertise in Python, JavaScript and scalability in various industries.
      </p>
      <ExpeirenceInfo number='100k' text='Budget' />
    </div>
  );
};

export default ExperienceTopLeft;