// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-background shadow text-white outline-4 outline-green-400">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <nav className="space-x-4 text-lg" >
        <a className="hover:text-green-600 transition-colors duration-140 delay-200 cursor-pointer">Sobre</a>
        <a className="hover:text-green-600 transition-colors duration-140 delay-200 cursor-pointer">Projetos</a>
        <a className="hover:text-green-600 transition-colors duration-140 delay-200 cursor-pointer">Contato</a>
      </nav>
    </header>
  )
}