import SectionTitle from '../components/SectionTitle'
import { personalBio } from '../lib/data'
import '../styles/pages/about.css'
const About = () => {
  return (
    <section className="container">
      <SectionTitle eyebrow="Sobre" title="Quem eu sou" />

      <div className="prose">
        <p>{personalBio}</p>
      </div>
    </section>
  )
}

export default About
