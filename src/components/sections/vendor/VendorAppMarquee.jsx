const screens = [
  { src: '/images/vendor/Categories.png', alt: 'chowdeck vendors app' },
  { src: '/images/vendor/Orders.png', alt: 'chowdeck vendors orders' },
  { src: '/images/vendor/Track.png', alt: 'chowdeck vendors track' },
  { src: '/images/vendor/Switch.png', alt: 'chowdeck vendors switch' },
  { src: '/images/vendor/Payouts.png', alt: 'chowdeck vendors payouts' },
]

function ScreenRow() {
  return (
    <div className="flex min-w-fit">
      {screens.map((screen) => (
        <span key={screen.src} className="min-w-max mx-2 md:mx-6">
          <img
            src={screen.src}
            alt={screen.alt}
            className="w-[292px] h-[495px] md:w-[416px] md:h-[720px] object-cover"
            loading="lazy"
          />
        </span>
      ))}
    </div>
  )
}

function VendorAppMarquee() {
  return (
    <div className="relative -mt-32 lg:-mt-40">
      <div className="flex overflow-hidden will-change-transform scrollbar-hide pb-5">
        {[0, 1, 2].map((copy) => (
          <div
            key={copy}
            className="flex overflow-x-auto scrollbar-hide animate-marquee-normal min-w-fit"
            style={{ padding: '2.5rem 0' }}
            aria-hidden={copy > 0}
          >
            <ScreenRow />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VendorAppMarquee