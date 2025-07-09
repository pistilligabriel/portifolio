import Logo from '../assets/logo-branca.png'

// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="flex justify-around items-center p-6 bg-background shadow text-white outline-4 outline-green-400">
      <img className="w-16 " src={Logo} alt="Logo GP" />
      <nav className="space-x-4 text-lg" >
        <a href='#hero' className="hover:text-green-600 transition-colors duration-120 delay-150 cursor-pointer">Sobre</a>
        <a href='#projects' className="hover:text-green-600 transition-colors duration-120 delay-150 cursor-pointer">Projetos</a>
        <a href='#contact' className="hover:text-green-600 transition-colors duration-120 delay-150 cursor-pointer">Contato</a>
      </nav>
    </header>
  )
}