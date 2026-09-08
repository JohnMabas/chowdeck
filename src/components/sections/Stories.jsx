const stories = [
  {
    tag: 'Food & Culture',
    title: 'The best Nigerian street food to try this weekend',
    excerpt: 'From asun to suya, here are the street snacks worth skipping the grocery run for.',
    read: '4 min read',
    href: '/blog/nigerian-street-food',
    image: '/illustrations/african-meals.svg',
  },
  {
    tag: 'Vendors',
    title: 'Growing a restaurant with delivery: our vendors’ playbook',
    excerpt: 'Swaggo, Belefull and more share how they turn happy customers into repeat orders.',
    read: '6 min read',
    href: '/blog/vendors-playbook',
    image: '/illustrations/Fastfoodxsnacks.svg',
  },
  {
    tag: 'Lifestyle',
    title: 'Movie night, but make it snacky',
    excerpt: 'Warm, crunchy, shareable snacks to level up your next movie marathon.',
    read: '3 min read',
    href: '/blog/movie-night-snacks',
    image: '/illustrations/Pack.svg',
  },
  {
    tag: 'Riders',
    title: 'Inside the helmet: a day in the life of a Chowdeck rider',
    excerpt: 'Meet the men and women delivering happiness across Lagos, one order at a time.',
    read: '5 min read',
    href: '/blog/day-in-the-life-rider',
    image: '/illustrations/Fitfam.svg',
  },
  {
    tag: 'Fresh Picks',
    title: '5 lazy dinners that take less than 20 minutes',
    excerpt: 'Quick, comforting meals for the nights you just can’t.',
    read: '2 min read',
    href: '/blog/quick-dinners',
    image: '/illustrations/Pasta.svg',
  },
  {
    tag: 'Offers',
    title: 'Your cheat sheet to the best deals on the app',
    excerpt: 'Everything you need to know about promo codes, first order bonuses and more.',
    read: '3 min read',
    href: '/blog/deals-cheat-sheet',
    image: '/illustrations/drink.svg',
  },
]

function StoryCard({ story }) {
  return (
    <a
      href={story.href}
      className="group flex flex-col shrink-0 w-[280px] md:w-[340px] border-4 border-black rounded-2xl overflow-hidden bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(12,81,63,1)]"
    >
      <div className="relative h-44 overflow-hidden bg-chow-yellow-soft">
        <img src={story.image} alt="" className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <span className="sub-title text-cucumber">{story.tag}</span>
        <p className="font-bold text-lg leading-snug mt-2 tracking-tight">{story.title}</p>
        <p className="text-sm text-gray-500 mt-2">{story.excerpt}</p>
        <span className="mt-auto pt-4 flex items-center text-sm font-semibold text-chow-green">
          Read story
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          <span className="ml-auto text-gray-400 font-medium">{story.read}</span>
        </span>
      </div>
    </a>
  )
}

function Stories() {
  return (
    <div className="my-36">
      <div className="container flex items-center justify-between mb-8">
        <p className="section-title flex items-center">
          Stories
          <img src="/illustrations/Pasta.svg" className="ml-2 w-12 lg:w-full" alt="" />
        </p>
        <a href="/blog" className="hidden md:inline-flex items-center sub-title hover:underline shrink-0">
          See all posts
          <span className="ml-1">→</span>
        </a>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-px-4 px-4 lg:px-[max(1rem,calc((100vw-1280px)/2))] gap-5 pb-4 [scrollbar-width:thin]">
        {stories.map((story) => (
          <div key={story.href} className="snap-start">
            <StoryCard story={story} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stories