import { ArrowRight } from '../ui/Icons'

const categories = [
  { label: 'African', emoji: '🍲', bg: 'bg-chow-yellow-soft', accent: 'bg-jollof', href: '/store/cuisines/african-food-in-lagos' },
  { label: 'Pasta', emoji: '🍝', bg: 'bg-mint', accent: 'bg-chow-green', href: '/store/cuisines/pasta-near-me' },
  { label: 'Fast food', emoji: '🍟', bg: 'bg-chow-yellow', accent: 'bg-pepper', href: '/store/cuisines/fast-food-near-me' },
  { label: 'Rice', emoji: '🍚', bg: 'bg-candy', accent: 'bg-cucumber', href: '/store/cuisines/rice-near-me' },
  { label: 'Breakfast', emoji: '🍳', bg: 'bg-jollof', accent: 'bg-chow-green', href: '/store/cuisines/breakfast-menu-in-lagos' },
  { label: 'Drinks', emoji: '🥤', bg: 'bg-kiwi', accent: 'bg-white', href: '/store/cuisines/drinks-near-me' },
  { label: 'Fitfam', emoji: '💪', bg: 'bg-cucumber', accent: 'bg-chow-yellow', href: '/store/cuisines/fitfam-stores-in-lagos' },
  { label: 'Pastries', emoji: '🥐', bg: 'bg-chow-yellow-soft', accent: 'bg-onion', href: '/store/cuisines/pastries-in-lagos' },
  { label: 'Salads', emoji: '🥗', bg: 'bg-mint', accent: 'bg-pepper', href: '/store/cuisines/salad-in-lagos' },
  { label: 'Asian', emoji: '🍜', bg: 'bg-onion', accent: 'bg-chow-yellow', href: '/store/cuisines/asian-food-in-lagos' },
  { label: 'Desserts', emoji: '🍦', bg: 'bg-candy', accent: 'bg-chow-green', href: '/store/cuisines/desserts-near-me' },
  { label: 'Seafood', emoji: '🦐', bg: 'bg-chow-yellow', accent: 'bg-kiwi', href: '/store/cuisines/seafood-near-me' },
]

function CategoryCard({ category }) {
  return (
    <a
      href={category.href}
      className="group relative flex flex-col items-center justify-center aspect-square rounded-2xl border-4 border-black overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
    >
      <div className={`${category.bg} absolute inset-0`}>
        <span className="absolute -top-6 right-0 -rotate-12 grid place-items-center h-16 w-16 rounded-full border-4 border-black bg-white text-2xl shadow-sm transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110">
          {category.emoji}
        </span>
        <span className="absolute bottom-3 left-4 flex items-center font-bold text-lg -tracking-[0.5px]">
          {category.label}
          <ArrowRight className={`ml-2 text-black transition-transform duration-200 group-hover:translate-x-1 ${category.accent}`} />
        </span>
      </div>
    </a>
  )
}

function WhatsOnDeck() {
  return (
    <section className="container mt-20 lg:mt-28">
      <div className="flex items-end justify-between mb-8">
        <p className="section-title">
          What&rsquo;s on deck?
        </p>
        <a href="/store" className="hidden md:inline-flex items-center sub-title hover:underline shrink-0">
          browse menu
          <ArrowRight className="ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.label} category={category} />
        ))}
      </div>
    </section>
  )
}

export default WhatsOnDeck