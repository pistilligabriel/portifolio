// src/pages/Home.jsx
import ContactFooter from './ContactFooter.tsx'
import Hero from './Hero.tsx'
import Navbar from './Navbar.tsx'
import ProjectsGrid from './ProjectGrids.tsx'
import Skills from './Skills.tsx'

export default function Home() {
  return (
    <div className="bg-background text-white">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectsGrid />
      <ContactFooter />
    </div>
  )
}