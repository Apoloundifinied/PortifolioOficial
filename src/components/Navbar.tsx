import { NavLink } from 'react-router-dom'
import { routes } from '../lib/constants'
import  '../styles/navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar-list">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
