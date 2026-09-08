import Hero from '../components/sections/Hero'
import WhatsOnDeck from '../components/sections/WhatsOnDeck'
import Network from '../components/sections/Network'
import AppCarousel from '../components/sections/AppCarousel'
import Covered from '../components/sections/Covered'
import LiveLocation from '../components/sections/LiveLocation'
import Stories from '../components/sections/Stories'
import Faq from '../components/sections/Faq'
import PlaceOrder from '../components/sections/PlaceOrder'
import Newsletter from '../components/sections/Newsletter'

function HomePage() {
  return (
    <>
      <Hero />
      <WhatsOnDeck />
      <Network />
      <AppCarousel />
      <Covered />
      <LiveLocation />
      <Stories />
      <div className="bottom-band relative">
        <div className="relative z-10 pb-24 lg:pb-10">
          <Faq />
          <PlaceOrder />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default HomePage