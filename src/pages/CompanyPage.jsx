import CompanyHero from '../components/sections/company/CompanyHero'
import CoreValues from '../components/sections/company/CoreValues'
import Teams from '../components/sections/company/Teams'
import People from '../components/sections/company/People'
import Faq from '../components/sections/Faq'
import PlaceOrder from '../components/sections/PlaceOrder'
import Newsletter from '../components/sections/Newsletter'

function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <CoreValues />
      <Teams />
      <People />
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

export default CompanyPage