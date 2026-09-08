import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import WhatsOnDeck from './components/sections/WhatsOnDeck'
import Network from './components/sections/Network'
import AppCarousel from './components/sections/AppCarousel'
import Covered from './components/sections/Covered'
import LiveLocation from './components/sections/LiveLocation'
import Stories from './components/sections/Stories'
import Faq from './components/sections/Faq'
import PlaceOrder from './components/sections/PlaceOrder'
import Newsletter from './components/sections/Newsletter'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatsOnDeck />
        <Network />
        <div className="app-info relative">
          <AppCarousel />
          <Covered />
        </div>
        <LiveLocation />
        <Stories />
        <div className="bottom-band relative">
          <div className="relative z-10 pb-24 lg:pb-10">
            <Faq />
            <PlaceOrder />
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App