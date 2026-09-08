import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import VendorsPage from './pages/VendorsPage'
import RidersPage from './pages/RidersPage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/riders" element={<RidersPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App