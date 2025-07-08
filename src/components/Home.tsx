// src/pages/Home.jsx
import About from './About.tsx'
import ContactFooter from './ContactFooter.tsx'
import FeaturedProjects from './FeaturedProjects.tsx'
import Hero from './Hero.tsx'
import Navbar from './Navbar.tsx'
import ProjectsGrid from './ProjectGrids.tsx'

export default function Home() {
  return (
    <div className="bg-background text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <ProjectsGrid />
      <ContactFooter />
    </div>
  )
}