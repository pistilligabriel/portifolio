// src/components/ProjectsGrid.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export default function ProjectsGrid() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Suporte Chamados",
      description: "Sistema completo para abertura e atendimento de chamados internos de uma empresa com gerenciamento de usuários e chamados com autenticação JWT e operações CRUD.",
      technologies: ["Java", "Spring Boot", "MySQL", "JPA"],
      github: "https://github.com/pistilligabriel/SupportManagement",
      image: "🏢"
    },
    {
      id: 2,
      title: "API Sistema de Suporte Chamados",
      description: "API Rest robusta para o sistema de suporte para gerenciamento dos chamados.",
      technologies: ["Java", "Spring Boot", "MySQL", "JPA","Swagger"],
      github: "https://github.com/pistilligabriel/SuporteApi",
      image: "☁"
    },
    // {
    //   id: 3,
    //   title: "Sistema de Biblioteca",
    //   description: "Aplicação para controle de empréstimos de livros com notificações e relatórios automatizados.",
    //   technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    //   github: "https://github.com/usuario/projeto3",
    //   image: "📚"
    // },
    // {
    //   id: 4,
    //   title: "Controle de Estoque",
    //   description: "Sistema para gerenciamento de estoque com alertas de baixa quantidade e relatórios de movimentação.",
    //   technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA"],
    //   github: "https://github.com/usuario/projeto4",
    //   image: "📦"
    // },
    // {
    //   id: 5,
    //   title: "Sistema de Agendamento",
    //   description: "Plataforma para agendamento de consultas com notificações por email e calendário integrado.",
    //   technologies: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    //   github: "https://github.com/usuario/projeto5",
    //   image: "📅"
    // },
    // {
    //   id: 6,
    //   title: "API de Microserviços",
    //   description: "Arquitetura de microserviços com Spring Cloud, discovery service e gateway API.",
    //   technologies: ["Java", "Spring Cloud", "Docker", "Eureka"],
    //   github: "https://github.com/usuario/projeto6",
    //   image: "🔧"
    // }
  ];

 
  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group">
      {/* Header do Card */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{project.image}</span>
          <div>
            <h4 className="font-semibold text-white text-lg group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
          </div>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tecnologias */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex space-x-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-lg transition-colors text-sm"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-blue-300 hover:text-white rounded-lg transition-colors text-sm"
          >
            <span>🚀</span>
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto bg-background text-white">
      <div  className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projetos
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}