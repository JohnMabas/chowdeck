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
  const [address, setAddress] = useState('')

  return (
    <section className="relative w-full h-[65vh] md:h-[53vh] lg:h-[53vh] xl:h-[67.7vw] min-h-[520px] overflow-hidden">
      <div className="hero-bg-fade absolute inset-0 z-10" />
      <HeroBackground />

      <div className="relative z-30">
        <div className="pt-32 lg:mt-12 2xl:mt-24 text-center container">
          <RotatingPhrase />
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="w-full text-left my-8 rounded-full">
              <form
                className="relative flex items-center px-3 h-[64px] rounded-full bg-white mx-auto focus-within:ring-2 focus-within:ring-black shadow-lg transition-shadow"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = '/store'
                }}
              >
                <label htmlFor="delivery-address" className="sr-only">
                  Enter a delivery address
                </label>
                <SearchPin />
                <input
                  id="delivery-address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter a delivery address"
                  className="flex-1 border-0 h-full bg-transparent outline-none text-gray-800 ml-3 min-w-0"
                  autoCapitalize="off"
                  autoCorrect="off"
                />
                <span className="shrink-0">
                  <button
                    type="submit"
                    className="bg-cucumber rounded-full text-white text-sm lg:px-6 px-2 lg:py-3 py-2 font-medium hover:bg-[#68B99D] active:scale-95 transition cursor-pointer"
                  >
                    Order now
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero