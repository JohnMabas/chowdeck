function ChowpassBanner() {
  return (
    <section
      className="bg-[#8C77EC] py-20"
      style={{
        backgroundImage: 'url(/illustrations/mail-1.svg), url(/illustrations/mail-2.svg)',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: '100% 50%, 0 75%',
        backgroundSize: '100px, 100px',
      }}
    >
      <div
        className="container"
        style={{
          backgroundImage: 'url(/illustrations/v-ch-bg.svg)',
          backgroundSize: 'contain',
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="lg:flex justify-between space-y-6 lg:space-y-0 text-white">
          <div className="lg:w-[55%]">
            <h3 className="text-[40px] leading-[50px] lg:text-[70px] lg:leading-[80px] lg:w-[90%] font-bold text-center lg:text-left">
              Sell More with Chowpass
            </h3>
            <p className="text-center lg:text-left md:text-lg lg:w-[65%] mt-4 lg:mt-6">
              Enjoy increased sales, reduced service fees to your customers, and a premium vendor listing. Chowpass
              customers order more frequently and place larger orders compared to non-subscribers.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="block relative w-[272px] h-[245px] md:w-[472px] md:h-[445px] lg:-mt-32">
              <img src="/illustrations/envelop-letter.svg" alt="chowpass" className="w-full h-full object-contain" loading="lazy" />
            </span>
            <a
              className="relative -mt-8 md:-mt-12 font-medium h-[55px] rounded-lg px-6 bg-white text-[#333333] items-center flex w-fit hover:scale-105 transition-transform active:scale-95"
              href="/chowpass"
            >
              Learn more about Chowpass
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChowpassBanner