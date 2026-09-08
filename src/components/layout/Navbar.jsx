import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBowlFood,
  FaShop,
  FaTruckFast,
  FaBagShopping,
  FaBullhorn,
  FaBriefcase,
  FaNewspaper,
  FaEnvelope,
} from 'react-icons/fa6'
import { TbBike } from 'react-icons/tb'
import { LuSparkles } from 'react-icons/lu'
import {
  CartIcon,
  ChevronDownCircle,
  CloseIcon,
  MenuIcon,
  TwitterIcon,
  InstagramIcon,
} from '../ui/Icons'
import { LogoMark, Wordmark } from '../ui/Logo'

function ChevronRotate() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-2 transition-transform duration-300 group-hover:rotate-180" height="1em" width="1em">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707-1.414-1.414z" />
    </svg>
  )
}

function MoreChevron() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="ml-2 transition-transform duration-200 group-hover:rotate-180" height="18" width="18">
      <path d="M147.6 210.7c-7.5 7.5-7.5 19.8 0 27.3l95.7 95.4c7.3 7.3 19.1 7.5 26.6.6l94.3-94c3.8-3.8 5.7-8.7 5.7-13.7 0-4.9-1.9-9.9-5.6-13.6-7.5-7.5-19.7-7.6-27.3 0l-81 79.8-81.1-81.9c-7.5-7.5-19.7-7.5-27.3.1z" />
      <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm332.4-124.4C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6z" />
    </svg>
  )
}

function Flag({ src, alt }) {
  return <img src={src} alt={alt} className="w-[20px] h-[20px]" />
}

function CountrySelector() {
  return (
    <span className="block relative group">
      <span className="flex items-center h-[50px] space-x-2 bg-white rounded-full px-4 w-fit cursor-pointer">
        <Flag src="/images/NigeriaFlag.svg" alt="nigeria" />
        <span className="hidden md:inline-block text-sm font-semibold">NG</span>
        <ChevronDownCircle className="hidden md:inline-block text-cucumber" />
      </span>
      <span className="hidden group-hover:flex flex-col items-end w-full absolute top-[100%] right-0 pt-2 min-w-max animate__animated animate__fadeIn">
        <button className="py-3 px-6 rounded-full bg-white border border-slate-200 mb-2 text-black font-semibold capitalize flex items-center space-x-2 cursor-pointer hover:bg-slate-50">
          <Flag src="/images/GhanaFlag.svg" alt="ghana" />
          <span className="capitalize flex items-center space-x-2"><span>ghana</span></span>
        </button>
        <button className="py-3 px-6 rounded-full bg-white border border-slate-200 text-black font-semibold capitalize flex items-center space-x-2 cursor-pointer hover:bg-slate-50">
          <Flag src="/images/NigeriaFlag.svg" alt="nigeria" />
          <span className="capitalize flex items-center space-x-2"><span>nigeria</span></span>
        </button>
      </span>
    </span>
  )
}

function ProductsDropdown() {
  return (
    <li className="relative cursor-pointer group">
      <a className="py-4 pl-6 text-center inline-flex items-center font-semibold">
        Products
        <ChevronRotate />
      </a>
      <div className="absolute top-0 pt-14 left-0 w-max">
        <div className="rounded-2xl transform origin-top transition-all duration-200 ease-out scale-y-0 group-hover:scale-y-100">
          <div className="hidden group-hover:flex flex-col p-4 space-y-3">
            <a className="py-2 px-5 rounded-full w-fit bg-white border border-slate-200 text-black font-semibold capitalize hover:text-[#8C77EC] hover:border-[#8C77EC] transition-all duration-200 transform hover:scale-105 hover:shadow-md" href="/chowpass">Chowpass</a>
            <a className="py-2 px-5 ml-auto rounded-full w-fit bg-white border border-slate-200 text-black font-semibold capitalize hover:text-relay-main hover:border-relay-main transition-all duration-200 transform hover:scale-105 hover:shadow-md" href="/relay">Relay</a>
            <a className="py-2 px-5 ml-auto rounded-full w-fit bg-white border border-slate-200 text-black font-semibold capitalize hover:text-[#004699] hover:border-[#004699] transition-all duration-200 transform hover:scale-105 hover:shadow-md" href="/ads">Ads</a>
            <a className="py-2 px-5 ml-auto rounded-full w-fit bg-white border border-slate-200 text-black font-semibold capitalize hover:text-pepper hover:border-pepper transition-all duration-200 transform hover:scale-105 hover:shadow-md" href="/chowstore">Chowstore</a>
          </div>
        </div>
      </div>
    </li>
  )
}

const mobileLinks = [
  { label: 'Customers', href: '/', color: 'text-chow-yellow', icon: <FaBowlFood size={24} /> },
  { label: 'Chowpass', href: '/chowpass', color: 'text-onion', icon: <LuSparkles size={24} /> },
  { label: 'Relay', href: '/relay', color: 'text-candy', icon: <FaTruckFast size={24} /> },
  { label: 'Vendors', href: '/vendors', color: 'text-jollof', icon: <FaShop size={24} /> },
  { label: 'Riders', href: '/riders', color: 'text-kiwi', icon: <TbBike size={24} /> },
  { label: 'Chowstore', href: '/chowstore', color: 'text-pepper', icon: <FaBagShopping size={24} /> },
  { label: 'Ads', href: '/ads', color: 'text-ads-blue', icon: <FaBullhorn size={24} /> },
  { label: 'Company', href: '/company', color: 'text-white', icon: <FaBriefcase size={24} /> },
  { label: 'Blog', href: '/blog', color: 'text-white', icon: <FaNewspaper size={24} /> },
  { label: 'Contact', href: '/contact', color: 'text-chow-yellow', icon: <FaEnvelope size={24} /> },
  { label: 'Twitter', href: 'https://twitter.com/chowdeck', color: 'text-mint', icon: <TwitterIcon size={24} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/chowdeck', color: 'text-onion', icon: <InstagramIcon size={26} /> },
]

function MobileDrawer({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-[1000] overflow-y-auto transition-all ${open ? 'translate-x-0' : '-translate-x-[100%]'}`}
    >
      <div className="flex flex-col h-full">
        <div className="sticky top-0 left-0 w-full bg-black flex items-center justify-end space-x-2 pt-10 pb-6 border-b border-b-white/20">
          <a className="inline-flex items-center justify-center bg-white rounded-full w-12 h-12" target="_blank" rel="noreferrer" href="https://chowdeck.com/store">
            <CartIcon />
          </a>
          <button className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white" onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <div>
          {mobileLinks.map(({ label, href, color, icon }) => (
            <a
              key={label}
              rel="noreferrer"
              className={`flex items-center space-x-3 hover:bg-chow-green text-white font-medium text-xl capitalize h-20 pl-10 border-b border-b-white/20 transition ${color}`}
              href={href}
              onClick={onClose}
            >
              <span className="w-6 flex items-center">{icon}</span>
              <span className="text-white font-semibold">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function MoreDropdown() {
  return (
    <span className="hidden lg:flex lg:mr-2">
      <span className="relative block group">
        <button className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-white text-black font-semibold capitalize cursor-pointer">
          More
          <MoreChevron />
        </button>
        <div className="absolute top-[100%] right-[-10px] min-w-max">
          <div className="rounded-2xl overflow-hidden transform origin-top transition-all duration-200 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-y-0 group-hover:scale-y-100">
            <div className="hidden group-hover:flex flex-col py-4 space-y-3 px-2">
              {['Contact Us', 'FAQs', 'Blog'].map((item) => (
                <button
                  key={item}
                  className="py-3 px-6 rounded-full ml-auto bg-white border border-slate-200 text-black font-semibold capitalize hover:scale-105 hover:shadow-md hover:border-black transition-all duration-200 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </span>
    </span>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-[500] py-6 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-[0_10px_25px_0_hsla(0,0%,64%,0.322)]' : ''
        }`}
      >
        <nav className="container grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 items-center h-20">
          <span className="col-span-1 flex items-center space-x-3">
            <span className="xl:hidden">
              <Link
                to="/"
                className="bg-chow-green inline-flex items-center justify-center rounded-full w-12 h-12"
                aria-label="Chowdeck home"
              >
                <LogoMark />
              </Link>
            </span>
            <span className="hidden xl:flex">
              <Link to="/" className="bg-chow-green inline-flex items-center justify-center text-white py-3 px-6 rounded-full font-semibold h-[45px]">
                <Wordmark className="w-[100px] h-[30px]" />
              </Link>
            </span>
            <CountrySelector />
          </span>

          <span className="hidden lg:col-span-3 xl:col-span-1 lg:flex justify-center">
            <ul className="bg-white rounded-full flex items-center px-4 w-fit">
              <li>
                <Link to="/company" className="py-4 px-6 text-center inline-block font-semibold">Company</Link>
              </li>
              <li>
                <Link to="/vendors" className="py-4 px-6 text-center inline-block font-semibold">Vendors</Link>
              </li>
              <li>
                <Link to="/riders" className="py-4 px-6 text-center inline-block font-semibold">Riders</Link>
              </li>
              <ProductsDropdown />
            </ul>
          </span>

          <span className="flex items-center min-w-fit justify-end">
            <MoreDropdown />
            <a
              className="inline-flex items-center gap-2 bg-white rounded-full px-3 h-12 mr-2 font-medium text-base active:scale-95 transition-transform shadow-sm"
              href="https://chowdeck.com/store/sign-in"
            >
              <CartIcon />
            </a>
            <span className="lg:hidden">
              <button
                className="bg-chow-green inline-flex items-center justify-center rounded-full w-12 h-12 cursor-pointer"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
            </span>
          </span>
        </nav>
      </header>

      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar