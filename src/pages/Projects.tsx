import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { projects } from '../lib/data'
import '../styles/pages/projects.css'

const Projects = () => {
  return (
    <section className="projects container">
      <SectionTitle title="Projetos" />

      <p className="projects-intro">
        Alguns projetos que representam bem meu nível atual, minha forma de pensar
        e os problemas que gosto de resolver.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Card className="project-card-wrapper">
              <article
                className="project-card fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Título */}
                <h3 className="project-title">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="project-tech">
                  {project.tech.split(',').map((tech, i) => (
                    <span key={i} className="project-tag">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <footer className="project-footer">
                  <span className="project-cta">
                    Ver projeto →
                  </span>
                </footer>
              </article>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
