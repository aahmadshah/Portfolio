import HeroMain from "./components/heroSection/HeroMain"
import SubHero from "./components/heroSection/SubHero"
import NavbarMain from "./components/navbar/NavbarMain"
import HeroGradient from './components/heroSection/HeroGradient'
import AboutMeMain from "./components/aboutMeSection/AboutMeMain"
import HelperSection from "./components/HelperSection"
import SkillsMain from "./components/skillsSection/SkillsMain"
import ExperienceMain from "./components/experienceSection/ExperienceMain"
import SubSkills from "./components/skillsSection/SubsSkills"





const App = () => {
  return (
    <main>
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHero/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain />
      <HelperSection/>
      
    </main>
  )
   
}

export default App