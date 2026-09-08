import { useState } from 'react'

const faqs = [
  {
    question: 'How do I create a Chowdeck account?',
    answer:
      'Download the Chowdeck app from the Google Play Store or App Store, sign up with your phone number or email, then add a delivery address to start ordering from restaurants near you.',
  },
  {
    question: 'Can I order from the Chowdeck website?',
    answer:
      'Yes. You can browse restaurants and place orders on chowdeck.com, and live updates on your order will still show in the app. The app remains the fastest way to track deliveries.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Most orders arrive within 30–45 minutes depending on your location, the restaurant’s prep time, and traffic. Estimated delivery times are shown before you place each order.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Once your order is confirmed, follow it in real time from the app — from the restaurant accepting, to pickup, to when your rider is on the way and finally drops it at your door.',
  },
  {
    question: 'What payment methods are available?',
    answer:
      'You can pay with your debit/credit card, bank transfer, or pay on delivery depending on your location and the area you are ordering to.',
  },
  {
    question: 'How can I get a promo code?',
    answer:
      'Follow Chowdeck on social media and keep an eye on the app for seasonal offers. New users can also use promo code CDNWEB for ₦300 off their first order.',
  },
  {
    question: 'Which areas does Chowdeck deliver to?',
    answer:
      'Chowdeck currently operates across several states in Nigeria and is expanding to new cities. Enter your delivery address to see which restaurants deliver to your area.',
  },
  {
    question: 'How do I sell on Chowdeck?',
    answer:
      'If you own a restaurant, store, or pharmacy, fill the form on our Vendors page and our team will reach out to help you start reaching new customers on the platform.',
  },
]

function FaqItem({ faq, open, onToggle }) {
  return (
    <div className="border-t-4 border-black first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer group"
      >
        <span className="text-lg md:text-2xl font-bold tracking-tight group-hover:text-chow-green transition-colors">
          {faq.question}
        </span>
        <span
          className={`shrink-0 grid place-items-center h-9 w-9 md:h-11 md:w-11 rounded-full border-4 border-black font-bold transition-transform duration-300 ${
            open ? 'bg-chow-yellow rotate-45' : 'bg-white'
          }`}
        >
          +
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-gray-600 md:text-lg pr-10">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div id="faqs" className="container scroll-mt-24">
      <div className="relative bg-slate-100 border-4 border-black p-8 rounded-2xl flex flex-col min-h-[200px]">
        <h3 className="text-chow-green section-title flex items-center justify-between">
          FAQs.
          <span className="hidden md:flex items-center gap-3">
            <span className="block h-5 w-5 rounded-full border-4 border-black bg-chow-yellow" />
            <span className="block h-5 w-5 rounded-full border-4 border-black bg-cucumber" />
            <span className="block h-5 w-5 rounded-full border-4 border-black bg-jollof" />
          </span>
        </h3>
        <div className="mt-4 md:text-lg text-gray-600">
          Everything you need to know about ordering with Chowdeck.
        </div>

        <div className="mt-8 w-full">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              open={i === openIndex}
              onToggle={() => setOpenIndex(i === openIndex ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq