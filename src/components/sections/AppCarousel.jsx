import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, LocationPin, Sparkle } from '../ui/Icons'

const slides = [
  { title: 'Get started in 3', bg: '#038B5C', accent: '#02C27F', img: '/illustrations/african-meals.svg' },
  { title: 'Download the app', bg: '#8C77EC', accent: '#FFD1E2', img: '/illustrations/Fastfoodxsnacks.svg' },
  { title: 'Explore categories', bg: '#FFC501', accent: '#000000', img: '/illustrations/drink.svg' },
  { title: 'Place your order', bg: '#FF884D', accent: '#0C513F', img: '/illustrations/Fitfam.svg' },
  { title: 'Unpack and enjoy', bg: '#FFEDB3', accent: '#ED5E3B', img: '/illustrations/Pack.svg' },
]

const SLIDE_MS = 7000

function ProgressRing({ accent, keyHint }) {
  const r = 24
  const c = Math.PI * 2 * r
  const arc = c / 4
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" key={keyHint} className="absolute inset-0 -rotate-90">
      <circle cx="28" cy="28" r={r} fill="none" stroke={accent} strokeWidth="3" strokeDasharray={`${arc} ${c - arc}`} strokeLinecap="round" className="progress-ring" />
    </svg>
  )
}

function Dot({ slide, active, index, onClick, onLast }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex items-center justify-center rounded-full w-14 h-14 mb-2 font-medium cursor-pointer"
      style={{
        backgroundColor: active ? 'transparent' : slide.accent,
        border: active ? `2px solid ${slide.accent}` : 'none',
        color: active ? slide.accent : slide.bg,
      }}
      aria-label={`Slide ${index + 1}`}
    >
      {active && <ProgressRing accent={slide.accent} keyHint={`ring-${index}`} />}
      <span
        className="absolute rounded-full w-[50px] h-[50px] flex items-center justify-center"
        style={{ backgroundColor: active ? slide.bg : 'transparent', top: 2, left: 2 }}
      >
        {active ? (
          <LocationPin size={21} color={slide.accent} />
        ) : onLast ? (
          <Sparkle size={26} />
        ) : (
          <span className="text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
        )}
      </span>
    </button>
  )
}

function AppCarousel() {
  const [active, setActive] = useState(0)
  const timer = useRef(null)

  const go = (next) => setActive(((next % slides.length) + slides.length) % slides.length)

  useEffect(() => {
    timer.current = setTimeout(() => go(active + 1), SLIDE_MS)
    return () => clearTimeout(timer.current)
  }, [active])

  return (
    <div className="mt-24 relative">
      <div className="container">
        <div className="relative h-[450px] md:h-[800px]">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`absolute inset-0 rounded-2xl py-6 px-4 md:p-8 relative flex flex-col transition-opacity duration-700 ${
                i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ backgroundColor: slide.bg }}
            >
              <p className="text-[32px] md:text-7xl tracking-[-2px] text-center font-bold mt-5 z-10">{slide.title}</p>
              <div className="absolute w-full h-full left-0 top-0 lg:top-10 flex flex-col items-center justify-center">
                <img src={slide.img} alt="african meal" className="w-[50%] h-[50%] lg:h-[70%] lg:w-[85%] object-contain" />
              </div>
              <div className="mt-auto relative">
                <div className="md:flex">
                  <div className="relative flex items-center">
                    {slides.map((s, j) => (
                      <Dot
                        key={s.title}
                        slide={slide}
                        active={j === i}
                        index={j}
                        onLast={j === slides.length - 1}
                        onClick={() => go(j)}
                      />
                    ))}
                  </div>
                  <div className="hidden md:block md:ml-auto">
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => go(i - 1)}
                        className="relative flex items-center justify-center rounded-full w-14 h-14 mb-2 cursor-pointer"
                        style={{ backgroundColor: slide.accent, color: slide.bg }}
                        aria-label="Previous"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(i + 1)}
                        className="relative flex items-center justify-center rounded-full w-14 h-14 mb-2 cursor-pointer"
                        style={{ backgroundColor: slide.accent, color: slide.bg }}
                        aria-label="Next"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppCarousel