import './ArticleCard.css'

export default function ArticleCard({ title, category, body }) {
  return (
    <article className="article-card">
      {category && <p className="article-card__category">{category}</p>}
      <h3 className="article-card__title">{title}</h3>
      <p className="article-card__body">{body}</p>
    </article>
  )
}
