import { useEffect, useState } from 'react'
import { Lottie } from 'lottie-react'
import { SearchPin } from '../ui/Icons'

const phrases = ['You don chow?', 'Se o ti jeun?', 'I riela nri?', 'Kun ci abinci?', 'Have you eaten?']

function HeroBackground() {
  return (
    <div className="hero-player-anim absolute -top-8 -left-18 h-[80vh] w-[270%] md:top-[-16rem] md:left-0 md:h-[100vh] md:w-full lg:top-[-2.5rem] xl:h-[75vw]">
      <Lottie src="/animations/Website.json" loop autoplay className="w-full h-full" />
    </div>
  )
}

function RotatingPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <h1 className="text-5xl md:text-6xl lg:text-[112px] font-bold text-center mb-6 tracking-tighter">
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
    <section className="relative w-full h-[65vh] md:h-[53vh] lg:h-[53vh] xl:h-[67.7vw] min-h-[520px] overflow-hidden">
      <div className="hero-bg-fade absolute inset-0 z-10" />
      <HeroBackground />

      <div className="relative z-30">
        <div className="pt-32 lg:mt-12 2xl:mt-24 text-center container">
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
    </section>
  )
}

export default Hero