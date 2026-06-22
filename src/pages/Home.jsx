import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'
import { seasons } from '../data/seasons'
import './Home.css'

const featured = recipes.slice(0, 3)

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero container">
        <SectionHeader
          eyebrow="和食の台所"
          title={<>Simple Japanese<br />Home Cooking</>}
          subtitle="A small collection of recipes rooted in Japanese tradition — made accessible for any kitchen, anywhere in the world."
          size="xl"
        />
        <Link to="/recipes" className="home__cta">Browse Recipes</Link>
      </section>

      <div className="home__divider" aria-hidden="true">
        <span>一</span>
      </div>

      <section className="home__values container">
        <div className="home__value">
          <h3>Seasonal</h3>
          <p>Japanese cooking follows the rhythm of the seasons, choosing ingredients at their peak.</p>
        </div>
        <div className="home__value">
          <h3>Simple</h3>
          <p>Restraint is a virtue. These recipes need few ingredients and reward patience over technique.</p>
        </div>
        <div className="home__value">
          <h3>Balanced</h3>
          <p>Every dish balances the five tastes: sweet, salty, sour, bitter, and umami.</p>
        </div>
      </section>

      <section className="home__featured container">
        <div className="home__featured-header">
          <h2 className="home__featured-title">Featured Recipes</h2>
          <Link to="/recipes" className="home__featured-link">View all →</Link>
        </div>
        <div className="home__featured-grid">
          {featured.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="home__seasons">
        <div className="container">
          <div className="home__seasons-header">
            <p className="home__seasons-eyebrow">旬</p>
            <h2 className="home__seasons-title">Cooking with the Season</h2>
            <p className="home__seasons-sub">
              Japanese cuisine is built around <em>shun</em> — the peak moment of an ingredient's year.
              Each season brings its own flavours and its own quiet rituals.
            </p>
          </div>
          <div className="home__seasons-grid">
            {seasons.map(season => (
              <div key={season.id} className="home__season-card">
                <div className="home__season-top">
                  <span className="home__season-kanji">{season.kanji}</span>
                  <div>
                    <p className="home__season-name">{season.name}</p>
                    <p className="home__season-months">{season.months}</p>
                  </div>
                </div>
                <p className="home__season-desc">{season.description}</p>
                <ul className="home__season-ingredients">
                  {season.ingredients.map(ing => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
                <p className="home__season-dish">
                  <span>Try: </span>{season.dishIdea}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home__learn container">
        <div className="home__learn-inner">
          <div>
            <p className="home__learn-eyebrow">New to Japanese cooking?</p>
            <h2 className="home__learn-title">Start with the Notes</h2>
            <p className="home__learn-body">
              The Notes page covers the eight pantry essentials and six techniques
              that underpin almost everything on this site. Read it once before
              you start cooking.
            </p>
          </div>
          <Link to="/notes" className="home__learn-link">Go to Notes →</Link>
        </div>
      </section>
    </div>
  )
}
