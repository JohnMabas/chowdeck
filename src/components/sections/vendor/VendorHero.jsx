function VendorHero() {
  return (
    <div className="relative pt-40 pb-40 md:h-screen lg:min-h-[1474px] bg-white [@media(max-height:600px)]:h-[150vh]">
      <div
        className="absolute top-0 left-0 z-0 w-full bg-cover bg-center bg-no-repeat hero-player-anim"
        style={{
          height: 'calc(115% + 14rem)',
          backgroundImage: 'url(/images/vendor/hero.svg)',
        }}
        aria-hidden="true"
      />
      <div className="container relative z-10 flex flex-col pt-10">
        <h1 className="text-[60px] leading-[1] md:text-[96px] lg:text-[112px] lg:leading-[144px] font-bold tracking-[-4px] text-center md:text-left">
          Sell More. <br /> Grow More.
        </h1>
        <h2 className="text-lg lg:text-xl lg:w-[50%] mb-10 mt-8 text-center md:text-left">
          Join thousands of restaurants, supermarkets, beauty stores and pharmacies reaching millions of customers
          daily on Chowdeck.
        </h2>

        <div className="w-fit mx-auto md:mx-0 flex gap-4 flex-wrap justify-center md:justify-start max-w-[275px] md:max-w-none">
          <a
            className="bg-black text-white rounded-lg text-lg font-medium px-6 h-[72px] flex items-center gap-2 transition-all duration-500 active:scale-95"
            target="_blank"
            rel="noreferrer"
            href="https://app.chowdeck.com/register"
          >
            Start Selling on Chowdeck
          </a>
          <a
            className="bg-black md:bg-transparent border-2 border-black text-white md:text-black rounded-lg text-lg font-medium w-full md:w-max px-6 h-[72px] flex items-center justify-center transition-all duration-500 active:scale-95"
            target="_blank"
            rel="noreferrer"
            href="https://app.chowdeck.com/"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}

export default VendorHero