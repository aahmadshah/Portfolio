import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'

const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200] px mx-auto min-h-[600px] relative overflow-hidden'>
             <SkillsText/>
            <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%]'>
                 <AllSkills/>
            </div>
        </div>  
    </div>
  )
}

export default SkillsMain