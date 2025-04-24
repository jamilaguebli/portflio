
import Contact from "./components/contact/Contact"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import NavBar from "./components/NavBar"
import Project from "./components/project/Project"
import SkillsSection from "./components/skills/Skills"
import ThreeBackground from "./components/ThreeBackground"
import HeroSection from "./HeroSection/HeroSection"


function App() {


  return (
   
    <div className="h-screen">
    <ThreeBackground />
    <NavBar/>
   <HeroSection/>
   <Education/>
   <Experience/>
   <Project/>

   <SkillsSection/>

   <Contact/>
    
      
      
    </div>

  )
}

export default App
