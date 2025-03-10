import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { TbAutomation } from "react-icons/tb";
import { SiSiemens } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import SingleSkill from './SingleSkill';



const skills = [{
    skill : 'HTML',
    icon : FaHtml5 ,
},
{
    skill : 'CSS',
    icon : FaCss3Alt,
},

{
    skill : 'JavaScript',
    icon : IoLogoJavascript ,
},

{
    skill : 'Python',
    icon : FaPython ,
},
{
    skill : 'Automation',
    icon : TbAutomation ,
},
{
    skill : 'Siemens',
    icon : SiSiemens ,
},
{
    skill : 'React',
    icon : FaReact,
},

{
    skill : 'Node js',
    icon : FaNodeJs,
},

]

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px]'>
            {skills.map((item,index)=>{
                return <SingleSkill key={index} text={item.text} imgSvg={<item.icon/>}/>
            })}
        </div>
    </div>
  )
}

export default AllSkills