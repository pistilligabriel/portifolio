
// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 bg-background text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div id="hero" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Olá, eu sou Gabriel</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
          {/* Coluna do texto */}
          <div className="text-justify space-y-4 order-2 lg:order-1">
            <p className="text-lg leading-relaxed">
              Desenvolvedor Java | Spring Boot | Desenvolvedor Back-End focado em criar experiências incríveis.
            </p>
            
            <p className="text-lg leading-relaxed">
              Apaixonado por tecnologia, estou em constante busca por inovação e crescimento na área de programação.
            </p>
            
            <p className="text-lg leading-relaxed">
              Atualmente, curso Análise e Desenvolvimento de Sistemas e possuo experiência em projetos pessoais e acadêmicos, utilizando tecnologias como Java, Spring Boot, MySQL, Hibernate, Swagger e JPA.
            </p>
            
            <p className="text-lg leading-relaxed">
              Tenho uma sólida base em desenvolvimento Back-End e me dedico a criar soluções escaláveis e eficientes, sempre focado nas boas práticas de programação.
            </p>
          </div>
          
          {/* Coluna da imagem */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <img 
                // src={Photo}
                alt="Gabriel - Desenvolvedor Back-End" 
                className="w-100 h-100 object-cover rounded-full shadow-lg border-4 border-green-300/60"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          
          <a href="#projects" className="bg-button text-white px-6 py-3 rounded shadow-xl border-2 border-green-500">
            Veja meus projetos
          </a>
        </div>
      </div>
    </section>
  )
}