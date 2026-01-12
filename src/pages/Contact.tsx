import SectionTitle from '../components/SectionTitle'
import '../styles/pages/contact.css'
const Contact = () => {
  return (
    <section className="container contact">
      <SectionTitle
        eyebrow="Contato"
        title="Vamos trabalhar juntos"
      />

      <div className="prose">
        <p>
          Se você precisa de alguém para resolver problemas reais com código —
          seja em automação, frontend ou segurança — estou aberto a conversas.
        </p>

        <p>
          Prefiro contatos diretos e objetivos.
        </p>
      </div>

      <div className="contact-actions">
        <a
          href="mailto:empreendendo019@gmail.com"
          className="contact-link primary"
        >
          empreendendo019@gmail.com
        </a>
        <a href="https://github.com/Apoloundifinied" className="contact-link secondary">
          <img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="" />
        </a>

        <span className="contact-hint">
          Respondo normalmente em até 24h
        </span>
      </div>
    </section>
  )
}

export default Contact
