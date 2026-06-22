import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <SectionHeader
          eyebrow="について"
          title="About This Cookbook"
        />

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
              ingredients that only exist in one city. Just honest food, made carefully.
            </p>
          </section>

          <section className="about__section">
            <h2>On Simplicity</h2>
            <p>
              The Japanese aesthetic concept of <em>ma</em> — negative space — applies
              as much to cooking as it does to design. Not every bowl needs ten toppings.
              Not every broth needs a dozen aromatics. Let one good thing speak, and it
              will speak clearly.
            </p>
            <p>
              Restraint in cooking is not a limitation. It is a kind of confidence: in
              the ingredient, in the technique, and in the person eating.
            </p>
          </section>

          <section className="about__section">
            <h2>Who This Is For</h2>
            <p>
              You do not need to have grown up eating Japanese food to cook it well.
              You do need to be willing to pay attention — to taste, to adjust, to
              repeat. Most of these dishes improve dramatically the second or third
              time you make them.
            </p>
            <p>
              If you are new to Japanese cooking, start with the{' '}
              <Link to="/notes" className="about__link">Notes</Link> page.
              It covers the pantry essentials and a handful of techniques that
              underpin almost everything here.
            </p>
          </section>

          <section className="about__section">
            <h2>A Note on Authenticity</h2>
            <p>
              These recipes are adapted for home kitchens that may not have a Japanese
              pantry already stocked. Where substitutions are possible without real loss
              of flavour, they are noted. Where they are not, the original ingredient
              is listed without apology — some things are worth seeking out once.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
