import RiderHero from '../components/sections/rider/RiderHero'
import RiderGrowth from '../components/sections/rider/RiderGrowth'
import Network from '../components/sections/Network'
import Stories from '../components/sections/Stories'
import Faq from '../components/sections/Faq'
import PlaceOrder from '../components/sections/PlaceOrder'
import Newsletter from '../components/sections/Newsletter'

function RidersPage() {
  return (
    <>
      <RiderHero />
      <RiderGrowth />
      <Network />
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

export default RidersPage