// src/components/ProjectsGrid.jsx
export default function ProjectsGrid() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto b g-background text-white">
      <h3 className="text-2xl font-bold mb-8">Outros Projetos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="bg-background text-white p-4 rounded shadow-2xl">
            <p>Projeto {i}</p>
          </div>
        ))}
      </div>
    </section>
  )
}