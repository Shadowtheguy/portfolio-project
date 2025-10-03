import './App.css'
import HeroImage from './components/HeroImage'
import Content from './components/Content'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import ProjectDescription from './components/ProjectDescription'
import ProjectGrid from './components/ProjectGrid'
import ProjectImage from './components/ProjectImage'
import ProjectTitle from './components/ProjectTitle'

function App() {

  return (
    <>
      <HeroImage />
      <Content children={
        <>
        <Header />
        <ProjectGrid children={
          <>
          <ProjectCard children={
            <>
            <ProjectImage imagesrc={"src/assets/madLibs.jpg"} imagename={"Mad Libs"}/>
            <ProjectTitle title={"Mad Libs Site"}/>
            <ProjectDescription description={"Website made to show off my knowledge of objects and server creation."}/>
            </>
          } />
          <ProjectCard children={
            <>
            <ProjectImage imagesrc={"src/assets/dndSite.png"} imagename={"Dnd Dice"}/>
            <ProjectTitle title={"Dnd Character Helper"}/>
            <ProjectDescription description={"A capstone project to show my knowledge of both JavaScript and HTML"}/>
            </>
          } />
          <ProjectCard children={
            <>
            <ProjectImage imagesrc={"src/assets/triviaSite.jpg"} imagename={"Trivia"}/>
            <ProjectTitle title={"Trivia Bot"}/>
            <ProjectDescription description={"A project to show my ability to incorporate a chatbot"}/>
            </>
          } />
          <ProjectCard children={
            <>
            <ProjectImage imagesrc={"src/assets/waterSite.jpg"} imagename={"Glass of Water"} />
            <ProjectTitle title={"Water Conservation"} />
            <ProjectDescription description={"A project to show basic knowledge of javascript and html elements, one of my first."} />
            </>
          } />
          </>
        } />
        </>
      } />
    </>
  )
}

export default App