// src/components/Skills.tsx
interface Skill {
  name: string;
  icon: string;
}

export default function Skills() {
  const technicalSkills: Skill[] = [
    {name: 'VueJs', icon:'🎨' },
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Hibernate', icon: '🔄' },
    { name: 'JPA', icon: '📊' },
    { name: 'Postman', icon: '🚀'},
    { name: 'REST API', icon: '🔗' }
  ];

  const tools: Skill[] = [
    { name: 'Git', icon: '🌿' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'IntelliJ IDEA', icon: '💡', },
    { name: 'VS Code', icon: '💻',  }
  ];

  const methodologies: Skill[] = [
    { name: 'Scrum', icon: '🏃'} ,
    { name: 'Kanban', icon: '📋'} ,
    { name: 'Metodologias Ágeis', icon: '⚡'}, 
  ];

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{skill.icon}</span>
        <div className="flex-1">
          <h4 className="font-semibold text-white">{skill.name}</h4>
         
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto bg-background text-white">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Habilidades & Tecnologias
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Conjunto de tecnologias e ferramentas que domino para criar soluções eficientes e escaláveis
        </p>
      </div>

      <div className="space-y-8">
        {/* Habilidades Técnicas */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
            <span className="mr-2">⚡</span>
            Tecnologias
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Ferramentas */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
            <span className="mr-2">🛠️</span>
            Ferramentas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <SkillCard key={index} skill={tool} />
            ))}
          </div>
        </div>

        {/* Metodologias */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
            <span className="mr-2">📈</span>
            Metodologias
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodologies.map((methodology, index) => (
              <SkillCard key={index} skill={methodology} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}