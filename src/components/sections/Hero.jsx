import { useEffect, useState } from 'react'
import { SearchPin } from '../ui/Icons'

const phrases = ['You don chow?', 'Se o ti jeun?', 'I riela nri?', 'Kun ci abinci?', 'Have you eaten?']

function HeroIllustration() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* background pastel blobs */}
      <circle cx="8%" cy="78%" r="120" fill="#FFEDB3" />
      <circle cx="20%" cy="88%" r="70" fill="#FFEDB3" opacity="0.6" />
      <circle cx="94%" cy="70%" r="150" fill="#FFE3C2" />
      <circle cx="85%" cy="88%" r="46" fill="#8C77EC" opacity="0.18" />

      {/* floating sparkles & dots */}
      <path d="M240 150s-.6 12.5-14.4 14.4C211.5 178 240 178 240 178s1.2-18.3 14.4-13.6c-9.6-9.4-14.4-14.4-14.4-14.4Z" fill="#FFC501" />
      <path d="M1200 200s-.6 12.5-14.4 14.4C1176.5 228 1200 228 1200 228s1.2-18.3 14.4-13.6c-9.6-9.4-14.4-14.4-14.4-14.4Z" fill="#02C27F" />
      <circle cx="220" cy="520" r="10" fill="#FF884D" />
      <circle cx="1230" cy="520" r="12" fill="#FFC501" />
      <circle cx="70" cy="380" r="8" fill="#8C77EC" />
      <circle cx="1360" cy="420" r="9" fill="#02C27F" />

      {/* steam */}
      <path d="M660 560c-40-30-40-70 0-100" stroke="#0C513F" strokeWidth="10" strokeLinecap="round" opacity="0.25" />
      <path d="M720 540c-40-30-40-70 0-100" stroke="#0C513F" strokeWidth="10" strokeLinecap="round" opacity="0.18" />
      <path d="M780 560c-40-30-40-70 0-100" stroke="#0C513F" strokeWidth="10" strokeLinecap="round" opacity="0.25" />
      <path d="M600 560c40-36 40-80 0-118" stroke="#FF884D" strokeWidth="8" strokeLinecap="round" opacity="0.8" />

      {/* bowl */}
      <path d="M480 700h480l-40 130a60 60 0 0 1-60 46H580a60 60 0 0 1-60-46l-40-130Z" fill="#FFF4D3" stroke="#0C513F" strokeWidth="10" />
      <ellipse cx="720" cy="700" rx="245" ry="62" fill="#0C513F" />
      <ellipse cx="720" cy="690" rx="245" ry="62" fill="#FF884D" />
      {/* rice grains */}
      <ellipse cx="620" cy="682" rx="40" ry="14" fill="#FFC501" />
      <ellipse cx="700" cy="672" rx="44" ry="15" fill="#FFC501" />
      <ellipse cx="790" cy="680" rx="38" ry="13" fill="#FFC501" />
      <ellipse cx="740" cy="698" rx="40" ry="14" fill="#FFEDB3" />
      <ellipse cx="660" cy="700" rx="36" ry="13" fill="#FFEDB3" />
      {/* veggie toppings */}
      <circle cx="660" cy="660" r="16" fill="#02C27F" />
      <circle cx="740" cy="656" r="18" fill="#038B5C" />
      <circle cx="820" cy="668" r="14" fill="#02C27F" />
      <circle cx="610" cy="672" r="12" fill="#FFC501" />

      {/* leaves */}
      <path d="M600 470c30-18 66-18 96 0-8-40-48-56-96-36s-28 62 0 90c44-16 88-36 96-54Z" fill="#02C27F" />
      <path d="M840 450c30-18 66-18 96 0-8-40-48-56-96-36s-28 62 0 90c44-16 88-36 96-54Z" fill="#038B5C" opacity="0.6" />

      {/* drink cup right */}
      <rect x="1150" y="640" width="90" height="120" rx="22" fill="#8C77EC" stroke="#000" strokeWidth="6" />
      <rect x="1150" y="700" width="90" height="22" fill="#FFC501" />
      <path d="M1172 640l-14-40" stroke="#000" strokeWidth="6" />
      <circle cx="1158" cy="598" r="4" fill="#000" />
    </svg>
  )
}

function RotatingPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <h1 className="text-white text-5xl md:text-6xl lg:text-[112px] font-bold text-center mb-6 tracking-tighter relative">
      {phrases.map((phrase, i) => (
        <span
          key={phrase}
          className={`${i === index ? 'block animate-tip-in' : 'hidden'}`}
        >
          {phrase}
        </span>
      ))}
    </h1>
  )
}

function Hero() {
  return (
    <section className="relative w-full h-[100vh] lg:h-[67.7vw] min-h-[520px] overflow-hidden bg-chow-green">
      <div className="hero-bg-fade absolute inset-0" />
      <div className="hero-player-anim absolute -top-8 left-0 w-full h-full lg:top-0">
        <HeroIllustration />
      </div>

      <div className="relative z-30">
        <div className="pt-32 lg:mt-12 2xl:mt-24 text-center">
          <div className="container">
            <RotatingPhrase />
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="w-full text-left my-8 rounded-full">
                <div className="relative flex items-center px-3 h-[64px] rounded-full bg-white mx-auto focus-within:border-black focus-within:ring-2 focus-within:ring-black shadow-lg">
                  <SearchPin />
                  <input
                    type="text"
                    placeholder="Enter a delivery address"
                    className="flex-1 border-0 h-full bg-transparent outline-none text-gray-800 ml-3 min-w-0"
                  />
                  <span className="shrink-0">
                    <button
                      type="button"
                      disabled
                      className="bg-cucumber rounded-full text-white text-sm lg:px-6 px-2 lg:py-3 py-2 font-medium hover:bg-[#68B99D] transition cursor-not-allowed"
                    >
                      Order now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero