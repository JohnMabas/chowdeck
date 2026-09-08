import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('That doesn\u2019t look like a valid email \u2014 try again.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <div className="container mt-16 lg:mt-24">
      <div className="flex items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-chow-yellow-soft shrink-0" aria-hidden="true">
          <path d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z" fill="currentColor" />
        </svg>
        <p className="ml-2 lg:flex lg:items-end">
          <span className="block text-[32px] lg:text-5xl text-white font-bold tracking-tighter">Cool stuff only</span>
          <span className="block text-chow-yellow-soft text-base lg:ml-4 lg:text-xl">Subscribe to our newsletter</span>
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-8 flex items-center h-16 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden max-w-2xl focus-within:border-chow-yellow-soft transition-colors"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourname@email.com"
          autoCapitalize="off"
          autoCorrect="off"
          className="flex-1 min-w-0 h-full bg-transparent px-6 text-white placeholder:text-white/40 font-medium focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 h-full px-6 md:px-8 bg-chow-yellow text-black font-semibold hover:bg-chow-yellow-soft transition-colors active:scale-95 cursor-pointer"
        >
          Subscribe
        </button>
      </form>

      {subscribed && !error && (
        <p className="mt-3 text-chow-yellow-soft font-medium">
          Nice one - you're on the list. Talk soon!
        </p>
      )}
      {error && (
        <p className="mt-3 text-candy font-medium">{error}</p>
      )}
    </div>
  )
}

export default Newsletter