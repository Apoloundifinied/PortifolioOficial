import type { ReactNode } from 'react'
import '../styles/container.css'
interface ContainerProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const Container = ({
  children,
  as: Component = 'div',
}: ContainerProps) => {
  return <Component className="container">{children}</Component>
}

export default Container
