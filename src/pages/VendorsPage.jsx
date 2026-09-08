import VendorHero from '../components/sections/vendor/VendorHero'
import VendorAppMarquee from '../components/sections/vendor/VendorAppMarquee'
import VendorDownload from '../components/sections/vendor/VendorDownload'
import ChowpassBanner from '../components/sections/vendor/ChowpassBanner'
import Network from '../components/sections/Network'
import Stories from '../components/sections/Stories'
import Faq from '../components/sections/Faq'
import PlaceOrder from '../components/sections/PlaceOrder'
import Newsletter from '../components/sections/Newsletter'

function VendorsPage() {
  return (
    <>
      <VendorHero />
      <VendorAppMarquee />
      <VendorDownload />
      <ChowpassBanner />
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

export default VendorsPage