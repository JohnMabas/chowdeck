import { ArrowDown, LinkedInDot } from '../ui/Icons'
import { FooterStar, Wordmark } from '../ui/Logo'

function SubscribeBar() {
  return (
    <div className="flex items-center h-24 border-t border-b border-white/20 pl-0 pr-0 mb-0">
      <span className="flex-1 h-full flex items-center border-r border-white/20 px-2">
        <input
          type="email"
          className="flex w-full pr-10 text-xl bg-transparent text-white/40 font-bold focus:outline-none placeholder:text-white/40"
          placeholder="yourname@email.com"
          autoCapitalize="off"
          autoCorrect="off"
          name="email"
          id="email"
          size="25"
        />
      </span>
      <button className="w-[30%] lg:w-[23.3%] flex items-center justify-center text-onion cursor-pointer">
        <ArrowDown size={36} />
      </button>
    </div>
  )
}

const socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/chowdeck',
    icon: (
      <svg width="35" height="24" viewBox="0 0 43 41" fill="none" className="text-mint mr-2">
        <path d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chowdeck/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 30 24" fill="none" className="text-candy mr-2">
        <path
          d="m13.733 1.223.579 1.627a1.84 1.84 0 0 0 2.523 1.045l1.56-.741c1.563-.743 3.194.888 2.451 2.451l-.741 1.56a1.838 1.838 0 0 0 1.045 2.523l1.627.578c1.63.58 1.63 2.886 0 3.467l-1.627.579a1.84 1.84 0 0 0-1.045 2.523l.741 1.56c.743 1.563-.888 3.194-2.451 2.451l-1.56-.741a1.839 1.839 0 0 0-2.523 1.044l-.579 1.628c-.58 1.63-2.886 1.63-3.466 0l-.579-1.628a1.84 1.84 0 0 0-2.523-1.044l-1.56.74c-1.563.744-3.194-.887-2.451-2.45l.741-1.56A1.84 1.84 0 0 0 2.85 14.31l-1.627-.578c-1.63-.58-1.63-2.887 0-3.467l1.627-.578a1.84 1.84 0 0 0 1.048-2.523l-.742-1.56c-.743-1.564.888-3.195 2.452-2.452l1.56.742A1.84 1.84 0 0 0 9.69 2.85l.578-1.627c.578-1.63 2.884-1.63 3.464 0Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/chowdeck',
    icon: (
      <svg width="35" height="16" viewBox="0 0 65 30" fill="none" className="text-onion rotate-180 mr-2">
        <path d="M19.739 0A20.261 20.261 0 0 1 40 20.261v3.88H0v-4.402A19.739 19.739 0 0 1 19.739 0Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/chowdeck/',
    icon: <LinkedInDot />,
  },
]

function SocialStrip() {
  return (
    <ul className="grid grid-cols-2">
      {socials.map(({ label, href, icon }, i) => (
        <li
          key={label}
          className={`h-24 font-bold text-xl flex items-center justify-center border-white/20 ${
            i % 2 === 0 ? 'border-r' : ''
          } border-b`}
        >
          <a href={href} target="_blank" rel="noreferrer" className="text-white flex items-center hover:underline">
            {icon}
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

const linkColumns = [
  {
    title: 'Company',
    links: [
      { label: 'customers', href: '/' },
      { label: 'Vendors', href: '/vendors' },
      { label: 'Riders', href: '/riders' },
      { label: 'Ads', href: '/ads' },
      { label: 'Chowstore', href: '/store/chowstore' },
      { label: 'Storefront', href: '/store' },
      { label: 'Documentation', href: '/docs' },
      { label: 'About', href: '/company' },
      { label: 'Careers', href: 'https://chowdeck.bamboohr.com/careers' },
      { label: 'FAQs', href: '/#faqs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Cuisines near you',
    links: [
      { label: 'Pasta near me', href: '/store/cuisines/pasta-near-me' },
      { label: 'Rice near me', href: '/store/cuisines/rice-near-me' },
      { label: 'Fast food near me', href: '/store/cuisines/fast-food-near-me' },
      { label: 'Asian food in Lagos', href: '/store/cuisines/asian-food-in-lagos' },
      { label: 'African food in Lagos', href: '/store/cuisines/african-food-in-lagos' },
      { label: 'Breakfast menu in Lagos', href: '/store/cuisines/breakfast-menu-in-lagos' },
      { label: 'Fitfam stores in Lagos', href: '/store/cuisines/fitfam-stores-in-lagos' },
      { label: 'American food in Lagos', href: '/store/cuisines/american-food-in-lagos' },
      { label: 'Pastries in Lagos', href: '/store/cuisines/pastries-in-lagos' },
      { label: 'Salad in Lagos', href: '/store/cuisines/salad-in-lagos' },
      { label: 'Fruits in Lagos', href: '/store/cuisines/fruits-in-lagos' },
    ],
  },
  {
    title: 'popular',
    links: [
      { label: 'Food delivery', href: '/store' },
      { label: 'Surulere', href: '/store/surulere' },
      { label: 'Ogudu', href: '/store/ogudu' },
      { label: 'Yaba', href: '/store/lagos-mainland' },
      { label: 'Ikeja', href: '/store/ikeja' },
      { label: 'Lekki', href: '/store/lekki' },
      { label: 'King Glab', href: '/store/ikeja/restaurants/king-glab-ikeja' },
      { label: 'Korede Spaghetti', href: '/store/lagos-mainland/restaurants/korede-spaghetti' },
      { label: 'Iyan Aladuke', href: '/store/lagos-mainland/restaurants/iyan-aladuke' },
      { label: 'Food Fusion', href: '/store/ikeja/restaurants/food-fusion-lagos' },
      { label: 'Belefull', href: '/store/ikeja/restaurants/belefull' },
    ],
  },
]

function LinkColumn({ column, index }) {
  return (
    <div className={`flex items-start lg:block mb-20 lg:mb-0 lg:pl-4 lg:py-16 ${index % 2 !== 0 ? 'lg:border-x lg:border-white/20' : ''}`}>
      <h3 className="uppercase text-white/40 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">{column.title}</h3>
      <ul className="w-[60%] lg:w-full grid gap-6">
        {column.links.map(({ label, href }) => (
          <li key={label} className="text-white first-letter:capitalize">
            <a className="hover:underline" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-black -mt-1">
      <div className="container relative">
        <img src="/images/logo/footer-bowl.svg" alt="" className="absolute right-0 -top-28 hidden lg:block w-[138px]" />

        <div>
          <SubscribeBar />
          <div className="lg:hidden">
            <SocialStrip />
          </div>
        </div>

        <div className="lg:flex border-t border-white/20">
          <div className="hidden lg:flex lg:flex-col w-[30%] pt-16 pb-8">
            <FooterStar />
            <div className="mt-16">
              <Wordmark className="w-[220px] h-[80px]" />
            </div>
          </div>
          <div className="lg:border-l border-white/20 flex-1">
            <div className="border-b border-white/20 pt-16 lg:pt-0 lg:grid lg:grid-cols-3">
              {linkColumns.map((column, i) => (
                <LinkColumn key={column.title} column={column} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <SocialStrip />
        </div>

        <p className="text-xs text-white/40 text-center pb-7 pt-2">
          © 2022-2026 Chowdeck Logistics Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer