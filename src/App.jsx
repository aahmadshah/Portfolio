import HeroMain from "./components/heroSection/HeroMain"
import SubHero from "./components/heroSection/SubHero"
import NavbarMain from "./components/navbar/NavbarMain"
import HeroGradient from './components/heroSection/HeroGradient'





const App = () => {
  return (
    <main>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHero  />
      
    </main>
  )
   
}

export default App