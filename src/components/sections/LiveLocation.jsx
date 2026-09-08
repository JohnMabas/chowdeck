import { LocationPin } from '../ui/Icons'

const restaurants = [
  { name: 'King Glab', cuisine: 'Pasta • Italian', rating: 4.8, reviews: '300+', eta: '20-35 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'Korede Spaghetti', cuisine: 'Spaghetti • Local', rating: 4.7, reviews: '180+', eta: '25-40 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'Iyan Aladuke', cuisine: 'Native rice • Local', rating: 4.6, reviews: '240+', eta: '15-30 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'Food Fusion', cuisine: 'African • Continental', rating: 4.7, reviews: '210+', eta: '30-45 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'Belefull', cuisine: 'African • Meals', rating: 4.5, reviews: '150+', eta: '20-30 min', status: 'Closing soon', dot: 'bg-chow-yellow' },
  { name: 'Chicken Republic', cuisine: 'Fast food', rating: 4.4, reviews: '500+', eta: '15-25 min', status: 'Open', dot: 'bg-kiwi' },
  { name: "Domino's Pizza", cuisine: 'Pizza', rating: 4.3, reviews: '280+', eta: '30-45 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'Cold Stone Creamery', cuisine: 'Ice cream • Desserts', rating: 4.8, reviews: '320+', eta: '20-30 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'KFC', cuisine: 'Fast food', rating: 4.2, reviews: '600+', eta: '25-35 min', status: 'Open', dot: 'bg-kiwi' },
  { name: 'Shoprite', cuisine: 'Groceries • Pharmacy', rating: 4.1, reviews: '400+', eta: '40-60 min', status: 'Open again at 8:00 AM', dot: 'bg-gray-400' },
]

const pins = [
  { className: 'top-[30%] left-[22%]' },
  { className: 'top-[46%] left-[52%]' },
  { className: 'top-[60%] left-[36%]' },
  { className: 'top-[24%] left-[68%]' },
]

function LivePin({ className }) {
  return (
    <button type="button" className={`absolute ${className} group`} aria-label="Restaurant location">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-kiwi opacity-40 scale-90 animate-ping" />
        <span className="relative inline-flex rounded-full bg-white p-0.5 shadow-lg transition-transform group-hover:scale-110">
          <LocationPin size={24} color="#02C27F" />
        </span>
      </span>
    </button>
  )
}

function RestaurantRow({ restaurant }) {
  return (
    <div className="flex items-center py-3 px-2 border-b border-black/10 last:border-b-0 hover:bg-white/50 transition-colors cursor-pointer">
      <span className="flex-1 min-w-0">
        <span className="block truncate font-bold text-base">{restaurant.name}</span>
        <span className="block truncate text-sm text-gray-500">
          {restaurant.cuisine} <span className="mx-1">•</span> {restaurant.rating}⭐ ({restaurant.reviews})
        </span>
      </span>
      <span className="text-right ml-3">
        <span className="block text-sm font-semibold">{restaurant.eta}</span>
        <span className="flex items-center justify-end mt-1">
          <span className={`h-2.5 w-2.5 rounded-full ${restaurant.dot}`} />
          <span className="text-xs text-gray-600 ml-1">{restaurant.status}</span>
        </span>
      </span>
    </div>
  )
}

function LiveLocation() {
  return (
    <div
      className="relative pt-48"
      style={{ backgroundImage: 'url(/illustrations/Paper-Texture.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="container">
        <div className="border-4 border-black rounded-3xl overflow-hidden grid lg:grid-cols-5 lg:h-[800px]">
          <div className="lg:col-span-3 h-full">
            <div
              className="relative flex flex-col h-[400px] md:h-[700px] lg:h-full"
              style={{ backgroundImage: 'url(/illustrations/LiveLocationBG.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
              {pins.map((pin) => (
                <LivePin key={pin.className} className={pin.className} />
              ))}

              <div className="relative bg-white mt-auto text-center w-full md:w-fit mx-auto border-4 border-white md:rounded-full md:bg-opacity-60 p-3 backdrop-blur-md md:mb-12">
                <LocationPin className="inline" size={17} color="#02C27F" />
                <span className="ml-1 font-medium text-sm">
                  Click on any live location to order from restaurants near you
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 border-t-4 lg:border-t-0 lg:border-l-4 border-black">
            <span className="flex h-20 items-center border-b-4 border-black bg-mint px-6">
              <span className="relative block h-4 w-4 rounded-full border-4 border-black bg-jollof mr-3">
                <span className="absolute inset-0 rounded-full bg-jollof animate-ping" />
              </span>
              <h3 className="text-[28px] font-semibold -tracking-[1px]">Restaurants</h3>
            </span>
            <div className="my-3 px-4 mr-2 max-h-[600px] lg:max-h-[680px] overflow-y-auto">
              <div className="grid">
                {restaurants.map((restaurant) => (
                  <RestaurantRow key={restaurant.name} restaurant={restaurant} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveLocation