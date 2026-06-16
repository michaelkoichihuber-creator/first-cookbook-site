import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'
import './Recipes.css'

export default function Recipes() {
  return (
    <div className="recipes">
      <div className="recipes__header">
        <p className="recipes__eyebrow">レシピ集</p>
        <h1 className="recipes__title">Recipes</h1>
        <p className="recipes__subtitle">
          Three dishes to start with — each one a small lesson in Japanese flavour.
        </p>
      </div>

      <div className="recipes__grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <section className="recipes__detail">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipes__detail-card">
            <h2 className="recipes__detail-title">
              <span>{recipe.kanji}</span> {recipe.title}
            </h2>
            <div className="recipes__columns">
              <div>
                <h3>Ingredients</h3>
                <ul className="recipes__list">
                  {recipe.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Method</h3>
                <ol className="recipes__steps">
                  {recipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
