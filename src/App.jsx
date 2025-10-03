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
            <ProjectImage />
            <ProjectTitle />
            <ProjectDescription />
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