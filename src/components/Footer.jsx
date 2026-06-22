import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__tagline">和食の台所 — Japanese Home Kitchen</p>
        <nav className="footer__nav" aria-label="Footer navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </footer>
  )
}
