import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { assets } from '../lib/data'
import '../styles/pages/assets.css'
const Assets = () => {
  return (
    <section className="container">
      <SectionTitle
        eyebrow="Biblioteca"
        title="Assets"
      />

      <div className="prose">
        <p>
          Alguns dos meus assets digitais — scripts, utilitários e pequenas
          ferramentas reutilizáveis que uso no dia a dia.
        </p>
      </div>

      <div className="stack">
        {assets.map((asset) => (
          <Card
            key={asset.title}
            title={asset.title}
            description={asset.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Assets
