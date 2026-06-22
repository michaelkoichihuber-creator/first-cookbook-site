import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Notes from './pages/Notes'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/notes"   element={<Notes />} />
          <Route path="/about"   element={<About />} />
          <Route path="*"        element={<NotFound />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}
