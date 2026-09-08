import { useCallback, useEffect, useState } from 'react'
import { AppStoreIcon, GooglePlayIcon } from '../../ui/Icons'

const slides = [
  {
    title: 'Unlock new levels of growth.',
    subtitle:
      'Own your hours, be your own boss, ride your vehicle, take loans, call shots, grow and learn with your team.',
    image: '/images/rider/unlock-new-levels-of-growth.png',
    alt: 'Unlock new levels of growth.',
  },
  {
    title: 'Deliver happiness, earn rewards.',
    subtitle:
      'Get compensated fairly and on time for every delivery — with transparent earnings you can track, right from the app.',
    image: '/images/rider/unlock-new-levels-of-growth.png',
    alt: 'Deliver happiness, earn rewards.',
  },
  {
    title: 'Ride safe, deliver with confidence.',
    subtitle:
      'Join a growing league of champions with the tools, training and support you need to grow and thrive with your team.',
    image: '/images/rider/unlock-new-levels-of-growth.png',
    alt: 'Ride safe, deliver with confidence.',
  },
]

function ProgressRing({ keyHint }) {
  const r = 24
  const c = Math.PI * 2 * r
  const arc = c / 4
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" key={keyHint} className="absolute inset-0 -rotate-90">
      <circle
        cx="28"
        cy="28"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray={`${arc} ${c - arc}`}
        strokeLinecap="round"
        className="progress-ring"
      />
    </svg>
  )
}

function ProgressButton({ index, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={active ? 'true' : undefined}
      className="relative flex items-center justify-center h-14 w-14 border-2 rounded-full mb-2 font-medium cursor-pointer transition-transform hover:scale-110"
      style={{
        backgroundColor: active ? 'transparent' : '#000000',
        borderColor: active ? '#000000' : 'transparent',
        color: active ? '#000000' : '#ffffff',
      }}
    >
      {active && <ProgressRing keyHint={`ring-${index}`} />}
      <span
        className="absolute rounded-full w-[50px] h-[50px] flex items-center justify-center"
        style={{
          backgroundColor: active ? '#ffffff' : 'transparent',
          color: active ? '#000000' : '#ffffff',
          top: 2,
          left: 2,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </button>
  )
}

function AppIconLink({ href, icon }) {
  return (
    <a
      className="inline-flex items-center justify-center bg-chow-green text-white rounded-full w-12 h-12 transition-transform duration-300 hover:scale-110 active:scale-95"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {icon}
    </a>
  )
}

function RiderGrowth() {
  const [active, setActive] = useState(0)

  const go = useCallback((next) => {
    setActive(((next % slides.length) + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => go(active + 1), 7000)
    return () => clearTimeout(id)
  }, [active, go])

  const slide = slides[active]

  return (
    <div className="container -mt-40 pb-32 relative">
      <div className="bg-white border-4 border-black rounded-3xl md:h-[800px] p-10">
        <div className="relative flex flex-col h-full animate-fade-in">
          <h3
            key={`title-${active}`}
            className="animate-tip-in lg:w-[550px] text-[36px] leading-10 lg:text-[64px] lg:leading-[83px] font-bold tracking-[-2px]"
          >
            {slide.title}
          </h3>
          <p
            key={`subtitle-${active}`}
            className="animate-tip-in pt-8 pb-8 text-lg leading-7 md:w-[335px]"
          >
            {slide.subtitle}
          </p>

          <span className="mb-20">
            <span className="flex space-x-2">
              <AppIconLink
                href="https://play.google.com/store/apps/details?id=com.chowdeck.rider"
                icon={<GooglePlayIcon />}
              />
              <AppIconLink
                href="https://apps.apple.com/gb/app/chowdeck-rider/id1621694338"
                icon={<AppStoreIcon className="text-white" />}
              />
            </span>
          </span>

          <img
            key={`image-${active}`}
            src={slide.image}
            alt={slide.alt}
            className="hidden md:block md:absolute self-center py-10 md:w-3/5 right-0 -bottom-20 lg:w-[600px] max-w-none animate-fade-in"
            loading="lazy"
          />

          <div className="flex items-center space-x-4 mt-auto">
            {slides.map((s, i) => (
              <ProgressButton key={s.title} index={i} active={i === active} onClick={() => go(i)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiderGrowth