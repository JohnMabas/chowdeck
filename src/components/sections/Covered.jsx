import { LocationPin, Sparkle, StarBurst, Wave } from '../ui/Icons'

const tips = [
  { text: 'Quick and easy onboarding', icon: <Sparkle className="text-chow-yellow" /> },
  { text: 'Quality meal choices', icon: <Wave className="text-jollof" size={35} /> },
  { text: 'Fresh market picks', icon: <StarBurst className="text-kiwi" size={35} /> },
  { text: 'Essential healthcare supplies', icon: <Wave className="text-candy" size={35} /> },
  { text: 'Quick-grab groceries', icon: <Sparkle className="text-jollof" /> },
  { text: 'Live updates on orders', icon: <Wave className="text-kiwi" size={35} /> },
  { text: 'Highly rated riders', icon: <LocationPin className="text-kiwi" size={24} /> },
  { text: '24/7 support for customers and vendors', icon: <Wave className="text-candy" size={35} /> },
]

const notifications = [
  '/images/app-steps/accept-order.png',
  '/images/app-steps/pickup.png',
  '/images/app-steps/order-transit.png',
  '/images/app-steps/order-arrived.png',
]

function Tip({ tip }) {
  return (
    <span className="flex items-center min-w-fit ml-1 mr-1 rounded-lg border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white">
      <span className="mr-2">{tip.icon}</span>
      {tip.text}
    </span>
  )
}

function NotificationRow() {
  return (
    <div className="flex items-start">
      {notifications.map((src, i) => (
        <div
          key={src}
          className={`h-[395px] w-48 md:h-[693px] md:w-[336px] mr-6 rounded-lg overflow-hidden ${i % 2 === 1 ? 'mt-8' : ''}`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  )
}

function Covered() {
  return (
    <div className="relative">
      <div className="container">
        <div className="text-white mt-16 lg:grid lg:grid-cols-2 lg:gap-32">
          <div className="flex items-center relative">
            <span className="section-title relative z-10">
              Chowdeck has <br /> you covered
            </span>
            <img
              src="/illustrations/meal.png"
              className="w-40 md:w-[230px] lg:w-[180px] -ml-4 lg:absolute -right-8 -bottom-5"
              alt="asian meal"
            />
          </div>
          <p className="text-sm md:text-lg lg:text-2xl tracking-normal mt-4">
            What do you need? A quick fix on a busy day? Last-minute dinner backup? Supplies for the week? Download Chowdeck
            and let’s deliver happiness to your doorstep in minutes.
          </p>
        </div>
      </div>

      <div className="flex overflow-hidden will-change-transform mt-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tips, ...tips].map((tip, i) => (
            <Tip key={i} tip={tip} />
          ))}
        </div>
      </div>

      <div className="pt-20">
        <div className="flex overflow-hidden will-change-transform pb-16">
          <div className="flex animate-marquee">
            {[0, 1, 2].map((copy) => (
              <NotificationRow key={copy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Covered