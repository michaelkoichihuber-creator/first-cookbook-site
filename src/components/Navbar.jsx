import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          和食 <span>Washoku</span>
        </NavLink>
        <nav className="navbar__links">
          <NavLink to="/"        end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/recipes"     className={({ isActive }) => isActive ? 'active' : ''}>Recipes</NavLink>
          <NavLink to="/about"       className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}
