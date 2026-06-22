import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found container">
      <p className="not-found__kanji">迷子</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__body">
        This page does not exist, or may have moved. The kitchen is the other way.
      </p>
      <Link to="/" className="not-found__link">← Return home</Link>
    </div>
  )
}
