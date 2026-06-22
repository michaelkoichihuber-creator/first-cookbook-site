import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-main">
        {children}
      </main>
      <Footer />
    </>
  )
}
