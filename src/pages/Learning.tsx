import SectionTitle from '../components/SectionTitle.tsx'
import Card from '../components/Card.tsx'
import { learningItems } from '../lib/data.ts'
import '../styles/pages/learning.css'
const Learning = () => {
  return (
    <section className="learning container">
      <SectionTitle title="Aprendizado" />

      <p className="learning-intro">
        Um registro contínuo do que estou estudando e aprimorando no dia a dia.
      </p>

      <div className="learning-list">
        {learningItems.map((item, index) => (
          <Card key={index}>
            <div className="learning-card fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
              <span className="learning-date">{item.date}</span>

              <h3 className="learning-topic">
                {item.topic}
              </h3>

              <p className="learning-description">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Learning
