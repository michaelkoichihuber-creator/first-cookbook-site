import ArticleCard from '../components/ArticleCard'
import SectionHeader from '../components/SectionHeader'
import { tips, pantryItems } from '../data'
import './Notes.css'

export default function Notes() {
  return (
    <div className="notes">
      <div className="container">
        <SectionHeader
          eyebrow="基礎知識"
          title="Kitchen Notes"
          subtitle="Techniques, pantry essentials, and things worth understanding before you start cooking."
        />

        <section className="notes__section">
          <h2 className="notes__section-title">Techniques & Philosophy</h2>
          <div className="notes__grid">
            {tips.map(tip => (
              <ArticleCard
                key={tip.id}
                title={tip.title}
                category={tip.category}
                body={tip.body}
              />
            ))}
          </div>
        </section>

        <section className="notes__section">
          <h2 className="notes__section-title">Pantry Essentials</h2>
          <p className="notes__section-sub">
            {pantryItems.length} ingredients that, once stocked, unlock the majority of Japanese home cooking.
          </p>
          <div className="notes__pantry">
            {pantryItems.map(item => (
              <div key={item.id} className="notes__pantry-item">
                <div className="notes__pantry-name">
                  <span className="notes__pantry-kanji">{item.kanji}</span>
                  <strong>{item.name}</strong>
                </div>
                <div className="notes__pantry-content">
                  <p className="notes__pantry-desc">{item.description}</p>
                  <p className="notes__pantry-tip">
                    <span className="notes__pantry-tip-label">Tip</span>
                    {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
