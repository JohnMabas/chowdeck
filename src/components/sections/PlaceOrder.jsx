import { AppStoreIcon, GooglePlayIcon } from '../ui/Icons'

function GooglePlayBtn() {
  return (
    <a
      className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-white text-chow-green"
      target="_blank"
      rel="noreferrer"
      href="https://play.google.com/store/apps/details?id=com.chowdeck.com"
    >
      <GooglePlayIcon className="mr-2" />
      Download on Google Play
    </a>
  )
}

function AppStoreBtn() {
  return (
    <a
      className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-white text-chow-green"
      target="_blank"
      rel="noreferrer"
      href="https://apps.apple.com/us/app/chowdeck/id1530676376"
    >
      <AppStoreIcon className="mr-2" />
      Download on App Store
    </a>
  )
}

function PromoCode() {
  return (
    <div className="flex items-start -ml-3">
      <img src="/illustrations/Promo-code.svg" className="w-[60px] lg:w-28 self-center" alt="" />
      <div className="relative w-fit rounded-lg border-[3px] border-black bg-chow-yellow px-5 py-3 pl-[3.5rem]">
        <span className="absolute left-4 top-4 h-5 w-5 rounded-full border-4 border-black bg-chow-green" />
        <span className="text-lg lg:text-xl font-bold tracking-wide text-black">CDNWEB</span>
      </div>
    </div>
  )
}

function PlaceOrder() {
  return (
    <div className="relative container mt-16 lg:mt-20">
      <div className="md:grid md:grid-cols-2 gap-6 lg:h-[800px]">
        <div className="flex flex-col bg-chow-green p-5 h-full lg:p-10 rounded-lg lg:rounded-xl mb-5 lg:mb-0 relative">
          <p className="text-[32px] lg:text-6xl text-white font-bold leading-9 lg:leading-[1.2] mb-4 lg:mb-8 tracking-tighter">
            Place your <br /> order in seconds
          </p>

          <span className="block mb-4 lg:hidden">
            <a
              className="inline-flex items-center justify-center bg-white mr-2 rounded-full w-12 h-12"
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.chowdeck.com"
            >
              <GooglePlayIcon />
            </a>
            <a
              className="inline-flex items-center justify-center bg-white rounded-full w-12 h-12"
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/us/app/chowdeck/id1530676376"
            >
              <AppStoreIcon className="text-chow-green" />
            </a>
          </span>

          <span className="hidden lg:block mb-8 space-y-4">
            <GooglePlayBtn />
            <br />
            <AppStoreBtn />
          </span>

          <div className="mt-auto">
            <PromoCode />
            <p className="text-white w-3/4 lg:w-2/3 mt-3 pr-4">
              Get <span className="text-chow-yellow font-bold">₦300 off</span> your first order when you use this promo code!
            </p>
          </div>

          <img src="/illustrations/drink.svg" className="w-[100px] lg:w-[210px] absolute right-2 bottom-2" alt="drinks in chowdeck" />
        </div>

        <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden bg-cover bg-center">
          <img src="/images/Red.png" alt="chowdeck rating screen" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder