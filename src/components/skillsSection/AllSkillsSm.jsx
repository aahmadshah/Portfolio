import React from 'react'

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

const AllSkillsSm = () => {
  return (
    <div>AllSkillsSm</div>
  )
}

export default AllSkillsSm