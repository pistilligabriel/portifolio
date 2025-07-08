// src/components/FeaturedProjects.jsx
export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-background text-white" id="projects">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8">Projetos em Destaque</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background text-white p-6 rounded shadow-2xl">
            <h4 className="text-xl font-semibold mb-2">Projeto 1</h4>
            <p className="mb-4">Descrição do projeto 1.</p>
            <a href="#" className="text-blue-600 hover:underline">Ver mais</a>
          </div>
          <div className="bg-background text-white border-white p-6 rounded shadow-2xl">
            <h4 className="text-xl font-semibold mb-2">Projeto 2</h4>
            <p className="mb-4">Descrição do projeto 2.</p>
            <a href="#" className="text-blue-600 hover:underline">Ver mais</a>
          </div>
        </div>
      </div>
    </section>
  )
}