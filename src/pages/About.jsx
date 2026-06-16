import './About.css'

export default function About() {
  return (
    <div className="about">
      <div className="about__header">
        <p className="about__eyebrow">について</p>
        <h1 className="about__title">About This Cookbook</h1>
      </div>

      <div className="about__body">
        <section className="about__section">
          <h2>The Philosophy</h2>
          <p>
            Japanese home cooking — <em>katei ryori</em> — is not about elaborate
            technique. It is about attention: to the quality of ingredients, to the
            season, and to the person you are cooking for.
          </p>
          <p>
            This collection is for anyone who wants to bring a little of that spirit
            into their kitchen. No specialist equipment required, no hard-to-find
            ingredients that only exist in one city. Just honest food.
          </p>
        </section>

        <section className="about__section">
          <h2>On Simplicity</h2>
          <p>
            The Japanese aesthetic concept of <em>ma</em> — negative space — applies
            as much to cooking as it does to design. Not every bowl needs ten
            toppings. Let one good thing speak.
          </p>
        </section>

        <section className="about__section">
          <h2>Ingredients to Keep on Hand</h2>
          <ul className="about__pantry">
            <li><strong>Soy sauce</strong> — the backbone of Japanese seasoning.</li>
            <li><strong>Mirin</strong> — sweet rice wine that adds depth and gloss.</li>
            <li><strong>Sake</strong> — for marinades and braises.</li>
            <li><strong>Dashi</strong> — the foundational umami stock (kombu + bonito).</li>
            <li><strong>Short-grain rice</strong> — a different world from long-grain.</li>
            <li><strong>Matcha</strong> — ceremonial grade when used in food.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
