import './RecipeCard.css'

export default function RecipeCard({ recipe }) {
  const { title, kanji, time, difficulty, description, tags } = recipe

  return (
    <article className="recipe-card">
      <div className="recipe-card__header">
        <span className="recipe-card__kanji">{kanji}</span>
        <div>
          <h2 className="recipe-card__title">{title}</h2>
          <div className="recipe-card__meta">
            <span>{time}</span>
            <span className="recipe-card__dot">·</span>
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
      <p className="recipe-card__description">{description}</p>
      <ul className="recipe-card__tags">
        {tags.map(tag => (
          <li key={tag} className="recipe-card__tag">{tag}</li>
        ))}
      </ul>
    </article>
  )
}
