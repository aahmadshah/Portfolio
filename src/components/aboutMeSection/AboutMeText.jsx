import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-[var(--color-cyan)] mb-10 '>About Me</h2>
        <p className='text-white'>I am an Automation Engineer and Full Stack Developer with a strong background in electrical engineering and software development. With expertise in PLC programming, SCADA systems, and industrial automation, I have worked on complex projects, including baggage handling systems at major airports. As a Full Stack Developer, I specialize in Python, C#, and JavaScript, building efficient and scalable applications. My passion lies in integrating automation with software solutions to enhance system efficiency and reliability. With a problem-solving mindset and strong communication skills, I am committed to delivering innovative and optimized technological solutions.</p>
        <button className='border rounded-full border-[var(--color-orange)] py-2 px-4 text-lg flex items-center mt-10 hover:bg-[var(--color-orange)] transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-[var(--color-cyan)]'>My Projects</button>

    </div>
  )
}

export default AboutMeText