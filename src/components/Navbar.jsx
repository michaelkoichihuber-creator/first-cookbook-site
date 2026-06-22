import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand" onClick={close}>
          和食 <span>Washoku</span>
        </NavLink>

        <button
          className={`navbar__toggle${open ? ' navbar__toggle--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navbar__links${open ? ' navbar__links--open' : ''}`}
          aria-label="Main navigation"
        >
          <NavLink to="/"        end className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Home</NavLink>
          <NavLink to="/recipes"     className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Recipes</NavLink>
          <NavLink to="/notes"       className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Notes</NavLink>
          <NavLink to="/about"       className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}
