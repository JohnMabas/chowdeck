import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, AppStoreIcon, GooglePlayIcon } from '../ui/Icons'

const onDeck = [
  { name: 'African Meals', tag: 'Jollof • Amala • Small chops', img: '/illustrations/african-meals.svg', bg: '#fff4d3' },
  { name: 'Fast Food & Snacks', tag: 'Burgers • Fries • Pizza', img: '/illustrations/Fastfoodxsnacks.svg', bg: '#ffe8ef' },
  { name: 'Drinks', tag: 'Soft drinks • Fresh juices', img: '/illustrations/drink.svg', bg: '#fff9e6' },
  { name: 'Fitfam', tag: 'Healthy meals • Protein bowls', img: '/illustrations/Fitfam.svg', bg: '#ffe3d3' },
  { name: 'Takeaway Packs', tag: 'Family packs • Boxes', img: '/illustrations/Pack.svg', bg: '#ffedb3' },
  { name: 'Pasta', tag: 'Pasta • Italian', img: '/illustrations/Pasta.svg', bg: '#eaf6ef' },
]

const SLIDE_MS = 2000

function DownloadBtn({ label, href, icon }) {
  return (
    <a
      className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-chow-green text-white transition-all hover:bg-chow-yellow hover:text-black hover:scale-105"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {icon}
      {label}
    </a>
  )
}

function Card({ item, dir }) {
  const preset = {
    enter: 'translate-x-0 opacity-100 z-10',
    leaveLeft: '-translate-x-full opacity-0 z-0 pointer-events-none',
    leaveRight: 'translate-x-full opacity-0 z-0 pointer-events-none',
    rest: 'translate-x-0 opacity-0 z-0 pointer-events-none',
  }
  return (
    <div
      className={`absolute inset-0 w-full h-full rounded-2xl border-4 border-black overflow-hidden transition-all duration-700 ${preset[dir]}`}
      aria-hidden={dir !== 'enter'}
      style={{ backgroundColor: item.bg }}
    >
      <div className="flex flex-col items-center justify-center p-6 md:p-10 min-h-[280px] md:min-h-[420px]">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="w-[60%] md:w-[70%] max-h-[220px] md:max-h-[320px] object-contain"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white px-5 py-4">
        <p className="text-lg md:text-2xl font-bold tracking-tight">{item.name}</p>
        <p className="text-sm md:text-base text-white/80">{item.tag}</p>
      </div>
    </div>
  )
}

function WhatsOnDeck() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState({ index: 0, from: 'right' })
  const timer = useRef(null)

  const go = useCallback((next, from = 'right') => {
    setDir({ index: ((next % onDeck.length) + onDeck.length) % onDeck.length, from })
    setActive(((next % onDeck.length) + onDeck.length) % onDeck.length)
  }, [])

  useEffect(() => {
    timer.current = setTimeout(() => go(active + 1), SLIDE_MS)
    return () => clearTimeout(timer.current)
  }, [active, go])

  return (
    <section className="container mt-16 lg:mt-28">
      <div className="flex flex-col items-center text-center">
        <p className="section-title">What&rsquo;s on Deck?</p>
        <p className="mt-4 text-base md:text-xl text-gray-600">
          Try the everything app.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <DownloadBtn
            label="Download on Google Play"
            href="https://play.google.com/store/apps/details?id=com.chowdeck.com"
            icon={<GooglePlayIcon className="mr-2" />}
          />
          <DownloadBtn
            label="Download on App Store"
            href="https://apps.apple.com/us/app/chowdeck/id1530676376"
            icon={<AppStoreIcon className="mr-2" />}
          />
        </div>
      </div>

      <div className="relative mt-10 md:mt-16 max-w-4xl mx-auto">
        <div className="relative h-[280px] md:h-[420px]">
          {onDeck.map((item, i) => {
            let state = 'rest'
            if (i === dir.index) state = 'enter'
            else if (i === active) state = dir.from === 'right' ? 'leaveLeft' : 'leaveRight'
            return <Card key={item.name} item={item} dir={state} />
          })}

          <div className="absolute inset-y-0 -left-3 md:-left-6 flex items-center z-20">
            <button
              type="button"
              onClick={() => go(active - 1, 'left')}
              className="grid place-items-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border-4 border-black shadow-md hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              aria-label="Previous item"
            >
              <ChevronLeft size={22} />
            </button>
          </div>
          <div className="absolute inset-y-0 -right-3 md:-right-6 flex items-center z-20">
            <button
              type="button"
              onClick={() => go(active + 1, 'right')}
              className="grid place-items-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border-4 border-black shadow-md hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              aria-label="Next item"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {onDeck.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${item.name}`}
              aria-current={i === active ? 'true' : undefined}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? 'w-8 bg-chow-green' : 'w-3 bg-black/20 hover:bg-black/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatsOnDeck