import { AppStoreIcon, GooglePlayIcon } from '../../ui/Icons'

function HeroDownloadButton({ href, icon, children }) {
  return (
    <a
      className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-5 font-medium bg-white text-chow-green transition-all duration-500 hover:scale-105 active:scale-95"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {icon}
      {children}
    </a>
  )
}

function RiderHero() {
  return (
    <div className="relative h-[90vh] md:h-[80vh] lg:min-h-[1177px] [@media(max-height:600px)]:h-[180vh]">
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat hero-player-anim"
        style={{ backgroundImage: 'url(/images/rider/Rider-Hero-Image.svg)' }}
        aria-hidden="true"
      />
      <div className="container h-full py-40 relative">
        <div className="relative z-20">
          <h1 className="mt-10 mb-10 text-center md:text-left text-[60px] leading-none md:text-[96px] lg:text-[112px] lg:leading-[144px] font-bold tracking-[-4px] text-white animate-fade-up">
            Become a <br /> Champion
          </h1>
          <div className="w-fit mx-auto md:mx-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 w-fit">
              <HeroDownloadButton
                href="https://play.google.com/store/apps/details?id=com.chowdeck.rider"
                icon={<GooglePlayIcon className="mr-2" />}
              >
                Download on Google Play
              </HeroDownloadButton>
              <HeroDownloadButton
                href="https://apps.apple.com/gb/app/chowdeck-rider/id1621694338"
                icon={<AppStoreIcon className="mr-2" />}
              >
                Download on App Store
              </HeroDownloadButton>
            </div>
          </div>
        </div>
        <img
          src="/images/rider/Rider.svg"
          alt="Become a chowdeck rider"
          className="absolute right-16 bottom-36 z-10 w-1/2 lg:w-[700px] max-w-none animate-fade-in-right"
          loading="eager"
        />
      </div>
    </div>
  )
}

export default RiderHero