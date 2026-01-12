import '../styles/pages/home.css'


const Home = () => {
  return (
    <section className="hero container">
      <span className="hero-eyebrow fade-in">
        Desenvolvedor • Automação • Inteligencia Artificial
      </span>

      <h1 className="hero-title fade-in delay-1">
        Fazendo ideias <span className="accent">ganharem forma</span>.
      </h1>

      <p className="hero-description fade-in delay-2">
        Sou um desenvolvedor de 16 anos do RS, Brasil. Trabalho com automação,
        programação e segurança — transformando problemas complexos em soluções
        simples e eficientes.
      </p>

      <div className="hero-actions fade-in delay-3">
        <a href="/projects" className="btn btn-primary">
          Ver projetos
        </a>

        <a href="/contact" className="btn btn-secondary">
          Entrar em contato
        </a>
      </div>

      <div className="hero-glow" />
    </section>
  )
}

export default Home
