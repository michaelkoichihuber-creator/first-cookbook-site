import './SectionHeader.css'

export default function SectionHeader({ eyebrow, title, subtitle, size = 'default' }) {
  return (
    <header className={`section-header section-header--${size}`}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h1 className="section-header__title">{title}</h1>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  )
}
