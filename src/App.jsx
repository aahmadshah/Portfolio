import HeroMain from "./components/heroSection/HeroMain"
import SubHero from "./components/heroSection/SubHero"
import NavbarMain from "./components/navbar/NavbarMain"
import HeroGradient from './components/heroSection/HeroGradient'
import AboutMeMain from "./components/aboutMeSection/AboutMeMain"





const App = () => {
  return (
    <main>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHero  />
      <AboutMeMain />
      
    </main>
  )
   
}

export default App