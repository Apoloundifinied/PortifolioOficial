import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import '../styles/card.module.css'
interface CardProps {
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}

const Card = ({ title, description, children }: CardProps) => {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </motion.article>
  )
}

export default Card
