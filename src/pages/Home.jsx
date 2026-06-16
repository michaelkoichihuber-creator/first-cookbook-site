import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <p className="home__eyebrow">和食の台所</p>
        <h1 className="home__title">Simple Japanese<br />Home Cooking</h1>
        <p className="home__subtitle">
          A small collection of recipes rooted in Japanese tradition — made accessible
          for any kitchen, anywhere.
        </p>
        <Link to="/recipes" className="home__cta">Browse Recipes</Link>
      </section>

      <section className="home__divider">
        <span>一</span>
      </section>

      <section className="home__values">
        <div className="home__value">
          <h3>Seasonal</h3>
          <p>Japanese cooking follows the rhythm of the seasons, using ingredients at their peak.</p>
        </div>
        <div className="home__value">
          <h3>Simple</h3>
          <p>Restraint is a virtue. These recipes need few ingredients and reward patience.</p>
        </div>
        <div className="home__value">
          <h3>Balanced</h3>
          <p>Every dish balances the five tastes: sweet, salty, sour, bitter, and umami.</p>
        </div>
      </section>
    </div>
  )
}
