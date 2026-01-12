interface SectionTitleProps {
  title: string
  eyebrow?: string
}

const SectionTitle = ({ title, eyebrow }: SectionTitleProps) => {
  return (
    <header className="section-header">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
    </header>
  )
}

export default SectionTitle
