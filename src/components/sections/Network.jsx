import { ArrowDown, ArrowRight, Sparkle, StarBurst } from '../ui/Icons'

const cards = [
  {
    title: 'Start selling',
    copy: 'Do you own a restaurant, store, or pharmacy? Join our network to reach new customers and grow your business with ease.',
    href: '/vendors',
    image: '/illustrations/for-vendors.png',
    alt: 'Start selling',
    icon: <Sparkle className="text-jollof" />,
  },
  {
    title: 'Deliver happiness',
    copy: 'Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.',
    href: '/riders',
    image: '/illustrations/for-riders.png',
    alt: 'Deliver happiness',
    icon: <StarBurst className="text-kiwi" size={40} />,
  },
  {
    title: 'Behind the scenes',
    copy: 'If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.',
    href: '/company',
    image: '/illustrations/behind-the-scenes.png',
    alt: 'Behind the scenes',
    icon: <Sparkle className="text-onion" size={40} />,
  },
]

function NetworkCard({ title, copy, href, image, icon, alt }) {
  return (
    <div className="border-4 border-black rounded-2xl overflow-hidden">
      <div className="p-6 h-[290px] flex flex-col">
        <span className="mb-4 h-8 flex items-center">{icon}</span>
        <p className="font-bold text-xl mb-5 lg:text-[28px] -tracking-[1px]">{title}</p>
        <p className="mb-5">{copy}</p>
        <a className="flex items-center sub-title hover:underline mt-auto mb-5 w-fit" href={href}>
          see more
          <ArrowRight className="ml-1" />
        </a>
      </div>
      <div className="-mb-2 bg-gray-100">
        <img src={image} alt={alt} className="w-full object-cover" />
      </div>
    </div>
  )
}

function Network() {
  return (
    <div className="container my-8">
      <p className="text-gray-300 section-title w-full flex justify-center items-center mb-10">
        <span className="font-normal">Join our growing network</span>
        <ArrowDown className="ml-1 md:text-6xl" />
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        {cards.map((card) => (
          <NetworkCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Network