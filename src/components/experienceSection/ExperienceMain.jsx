import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTopSection from './ExperienceTopSection'
import AllExperiences from './AllExperience'

const ExperienceMain = () => {
    return (
      
      <div>
        <ExperienceText  id="experience" className="max-w-[1200px] mx-auto px-4" />
        <ExperienceTopSection />
        <div className='w-auto m-1 mt-4 bg-[var(--color-lightBrown)] lg:block sm:hidden'></div>
        <AllExperiences />

      </div>
      
    )

  };

export default ExperienceMain