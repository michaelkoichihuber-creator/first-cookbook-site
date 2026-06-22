import { useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import SectionHeader from '../components/SectionHeader'
import TagList from '../components/TagList'
import { recipes } from '../data'
import './Recipes.css'

const ALL = 'All'
const categories = [ALL, ...new Set(recipes.map(r => r.category))]

export default function Recipes() {
  const [active, setActive] = useState(ALL)
  const filtered = active === ALL ? recipes : recipes.filter(r => r.category === active)

  return (
    <div className="recipes">
      <div className="container">
        <SectionHeader
          eyebrow="レシピ集"
          title="Recipes"
          subtitle={`${recipes.length} dishes that teach the fundamentals — broth, rice, egg, fish, and seasoning.`}
        />

        <div className="recipes__filter" role="group" aria-label="Filter by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`recipes__filter-btn${active === cat ? ' recipes__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="recipes__grid">
          {filtered.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <section className="recipes__detail">
          {filtered.map(recipe => (
            <div key={recipe.id} className="recipes__detail-card" id={recipe.id}>
              <h2 className="recipes__detail-title">
                <span className="recipes__detail-kanji">{recipe.kanji}</span>
                {recipe.title}
              </h2>
              <p className="recipes__detail-desc">{recipe.description}</p>

              <TagList tags={recipe.tags} />

              <div className="recipes__columns">
                <div>
                  <h3 className="recipes__col-label">Ingredients</h3>
                  <ul className="recipes__list">
                    {recipe.ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="recipes__col-label">Method</h3>
                  <ol className="recipes__steps">
                    {recipe.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {recipe.note && (
                <aside className="recipes__note">
                  <p className="recipes__note-label">Cook's Note</p>
                  <p>{recipe.note}</p>
                </aside>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
