import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import VendorsPage from './pages/VendorsPage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/vendors" element={<VendorsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App