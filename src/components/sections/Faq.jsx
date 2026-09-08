import { useState, useRef } from 'react'
import { LocationPin } from '../ui/Icons'

const faqs = [
  {
    question: 'What is Chowdeck?',
    answer:
      'Chowdeck is a technology-powered delivery platform that connects you with your favourite restaurants, food vendors, groceries, and medicine providers. Order what you need and have it delivered fast.',
  },
  {
    question: 'How do I create a Chowdeck account?',
    answer:
      'Download the Chowdeck app from the Google Play Store or App Store, tap "Create one" and fill in your first name, last name, phone number, and email address. You\u2019ll get a one-time password (OTP) via SMS and email to verify your account \u2014 then you\u2019re ready to order.',
  },
  {
    question: 'Can I order from the Chowdeck website?',
    answer:
      'Yes. You can browse restaurants and place orders on chowdeck.com, and live updates on your order will still show in the app. The app remains the fastest way to track deliveries.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Tap Orders in the app and select your ongoing order. Your order moves through the timeline \u2014 Order Received, Preparing Your Order, Order Ready, Rider Accepted Order, Rider At The Restaurant, Order In Transit, Order Arrived, and Order Delivered \u2014 so you always know where your meal is.',
  },
  {
    question: 'What payment methods are available?',
    answer:
      'You can pay with your debit/credit card, or fund your Chowdeck wallet which you can top up and withdraw from. Available options are shown before you place each order.',
  },
  {
    question: 'How can I get a promo code?',
    answer:
      'Follow Chowdeck on social media and keep an eye on the app for seasonal offers. New users can also use promo code CDNWEB for \u20a6300 off their first order.',
  },
  {
    question: 'Which areas does Chowdeck deliver to?',
    answer:
      'Chowdeck is live in Lagos, Abuja, Port Harcourt, Ilorin, Abeokuta, Enugu, Kaduna, Owerri, Benin, Oyo, Ife, Kano, and Ghana. We\u2019re expanding quickly, so more cities are added often.',
  },
  {
    question: 'How do I sell on Chowdeck?',
    answer:
      'If you own a restaurant, store, or pharmacy, join our Vendors page and our team will help you reach new customers on the platform. Riders can also join our delivery league through the Riders page.',
  },
]

function QuestionList({ current, onSelect, buttonRefs }) {
  return (
    <div className="mt-4 max-h-[610px] overflow-y-auto pb-14">
      {faqs.map((faq, i) => {
        const active = i === current
        return (
          <button
            key={faq.question}
            type="button"
            ref={(el) => {
              buttonRefs.current[i] = el
            }}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => onSelectKey(e, i, buttonRefs, onSelect)}
            aria-current={active ? 'true' : undefined}
            className={`group flex items-center gap-4 w-full py-6 text-left border-b-4 border-black transition-colors cursor-pointer ${
              active ? 'text-chow-green' : 'hover:text-chow-green'
            }`}
          >
            <span
              className={`shrink-0 grid place-items-center h-9 w-9 md:h-11 md:w-11 rounded-full border-4 border-black font-bold transition-all duration-300 ${
                active ? 'bg-chow-yellow' : 'bg-white'
              }`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-lg md:text-2xl font-bold tracking-tight">
              {faq.question}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function onSelectKey(e, i, buttonRefs, onSelect) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    const next = (i + 1) % faqs.length
    onSelect(next)
    buttonRefs.current[next]?.focus()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    const prev = (i - 1 + faqs.length) % faqs.length
    onSelect(prev)
    buttonRefs.current[prev]?.focus()
  } else if (e.key === 'Home') {
    e.preventDefault()
    onSelect(0)
    buttonRefs.current[0]?.focus()
  } else if (e.key === 'End') {
    e.preventDefault()
    onSelect(faqs.length - 1)
    buttonRefs.current[faqs.length - 1]?.focus()
  }
}

function Faq() {
  const [current, setCurrent] = useState(0)
  const buttonRefs = useRef([])
  const active = faqs[current]

  return (
    <div id="faqs" className="container scroll-mt-24">
      {/* Desktop: two-column layout */}
      <div className="hidden lg:flex bg-white border-4 border-black rounded-2xl p-8 flex-col h-[800px] overflow-hidden">
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left: questions */}
          <div>
            <h3 className="text-chow-green section-title flex items-center justify-between mb-10">
              FAQs.
              <span className="hidden md:flex items-center gap-3" aria-hidden="true">
                <span className="block h-5 w-5 rounded-full border-4 border-black bg-chow-yellow" />
                <span className="block h-5 w-5 rounded-full border-4 border-black bg-cucumber" />
                <span className="block h-5 w-5 rounded-full border-4 border-black bg-jollof" />
              </span>
            </h3>
            <QuestionList current={current} onSelect={setCurrent} buttonRefs={buttonRefs} />
          </div>

          {/* Right: answer */}
          <div>
            <h3 className="text-chow-green section-title flex items-center justify-between mb-10">
              Ans.
            </h3>
            <div className="mt-4 p-2 rounded-2xl bg-chow-yellow-100">
              <div className="pb-4 overflow-y-auto h-[600px] p-8 order-2">
                <LocationPin size={36} color="#0C513F" className="text-black mb-8" />
                <p
                  key={active.question}
                  className="text-lg lg:text-2xl leading-6 lg:leading-normal animate-tip-in"
                >
                  {active.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: single-column */}
      <div className="lg:hidden bg-chow-yellow-100 border-4 border-black rounded-2xl p-4 h-[600px] flex flex-col">
        <h3 className="text-chow-green text-3xl font-bold flex items-center justify-between">
          FAQs.
          <LocationPin size={32} className="text-black lg:hidden" />
        </h3>

        {/* Small: scrollable list on top, answer on selector below */}
        <div className="flex flex-col h-full">
          <div className="mt-4 h-[400px] overflow-y-auto pb-4">
            <div>
              {faqs.map((faq, i) => {
                const isActive = i === current
                return (
                  <button
                    key={faq.question}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`group flex items-center gap-4 w-full py-5 text-left border-b-2 border-black/40 transition-colors cursor-pointer ${
                      isActive ? 'text-chow-green' : 'hover:text-chow-green'
                    }`}
                  >
                    <span
                      className={`shrink-0 grid place-items-center h-8 w-8 rounded-full border-2 border-black font-bold text-xs ${
                        isActive ? 'bg-chow-yellow' : 'bg-white'
                      }`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-bold text-base tracking-tight">{faq.question}</span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="mt-auto overflow-x-auto">
            <p
              key={active.question}
              className="text-base leading-6 p-2 animate-tip-in"
            >
              {active.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq