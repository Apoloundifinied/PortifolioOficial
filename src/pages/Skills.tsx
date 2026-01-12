import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import '../styles/pages/skills.css'

// icons
import apiIcon from '../assets/linguagemicons/API.png'
import cyberIcon from '../assets/linguagemicons/cyber-security.png'
import htmlCssIcon from '../assets/linguagemicons/html&css.png'
import pythonIcon from '../assets/linguagemicons/python.png'
import reactIcon from '../assets/linguagemicons/react.png'
import jsIcon from '../assets/linguagemicons/script-java.png'
import shellIcon from '../assets/linguagemicons/shell.png'
import tsIcon from '../assets/linguagemicons/typescript.png'
import vueIcon from '../assets/linguagemicons/vuejs.png'
import linuxIcon from '../assets/linguagemicons/linux.png'
import gitIcon from '../assets/linguagemicons/git.png'
import dockerIcon from '../assets/linguagemicons/docker.png'
import postgresIcon from '../assets/linguagemicons/postgreesql.png'

const Skills = () => {
  /**
   * 🔗 Mapa central de ícones
   * A chave PRECISA bater com o texto do skill
   */
  const skillIcons: Record<string, string> = {
    Python: pythonIcon,
    JavaScript: jsIcon,
    TypeScript: tsIcon,
    'HTML & CSS': htmlCssIcon,
    'Shell Script': shellIcon,

    React: reactIcon,
    Vue: vueIcon,

    'APIs REST': apiIcon,

    Cybersecurity: cyberIcon,
    Linux: linuxIcon,
    Git: gitIcon,
    Docker: dockerIcon,
    PostgreSQL: postgresIcon,
  }

  const skillCategories = [
    {
      name: 'Linguagens',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Shell Script', 'HTML & CSS'],
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Vue', 'Next.js', 'FastAPI'],
    },
    {
      name: 'Ferramentas',
      skills: ['Git', 'Docker', 'Linux', 'PostgreSQL', 'APIs REST'],
    },
    {
      name: 'Cybersecurity',
      skills: ['Cybersecurity', 'TCP/IP', 'Modelo OSI', 'Linux Internals', 'Wireshark'],
    },
    {
      name: 'Automação',
      skills: ['Web Scraping', 'Bots', 'Scripts', 'Pipelines'],
    },
  ]

  return (
    <section className="skills">
      <Container>
        <SectionTitle title="Habilidades" />

        <p className="skills-intro">
          Tecnologias e áreas com as quais tenho experiência prática e estudo contínuo.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="skill-card"
            >
              <h3 className="skill-title">{category.name}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => {
                  const icon = skillIcons[skill]

                  return (
                    <span key={skill} className="skill-tag">
                      {icon && (
                        <img
                          src={icon}
                          alt={skill}
                          className="skill-icon"
                          loading="lazy"
                        />
                      )}
                      {skill}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
