export function Sparkle({ className = "", size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Wave({ className = "", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 55 20" fill="none" className={className}>
      <path d="M19.739 0A20.261 20.261 0 0 1 40 20.261v3.88H0v-4.402A19.739 19.739 0 0 1 19.739 0Z" fill="currentColor" />
    </svg>
  )
}

export function StarBurst({ className = "", size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 43 41" fill="none" className={className}>
      <path
        d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LocationPin({ className = "", size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 172 170" fill="none" color={color} className={className}>
      <path
        d="M147.088 74.442a55.722 55.722 0 0 1-2.791 17.472 73.102 73.102 0 0 1-26.43 39.198h-.015L73.823 168l-48.089-40.248C12.806 114.703 1.991 97.022 1 76.475a72.934 72.934 0 0 1 144.595-16.647c.078.427.04.868-.111 1.275a55.929 55.929 0 0 1 1.605 13.34Z"
        fill="currentColor"
      />
      <path
        d="M74.248 89.583c15.853 0 28.703-12.85 28.703-28.703 0-15.852-12.85-28.703-28.703-28.703-15.852 0-28.703 12.85-28.703 28.703 0 15.852 12.85 28.703 28.703 28.703Z"
        fill="white"
      />
    </svg>
  )
}

export function CartIcon({ className = "" }) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
      <path
        d="M9 20.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.75 20.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        fill="#02C27F"
        stroke="#02C27F"
        strokeWidth="2"
      />
      <path
        d="M4.966 6.75h16.818l-2.475 8.662a1.49 1.49 0 0 1-1.443 1.088H8.884a1.49 1.49 0 0 1-1.443-1.088L4.047 3.544A.75.75 0 0 0 3.325 3H1.75"
        stroke="#02C27F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronDownCircle({ className = "" }) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="24"
      width="24"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 11l-3 3l-3 -3" />
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
    </svg>
  )
}

export function ArrowDown({ className = "", size = 24 }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height={size}
      width={size}
      className={className}
    >
      <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
    </svg>
  )
}

export function ArrowRight({ className = "" }) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="1em"
      width="1em"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

export function ChevronRight({ className = "", size = 24 }) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} className={className}>
      <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
    </svg>
  )
}

export function ChevronLeft({ className = "", size = 24 }) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={size} width={size} className={className}>
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  )
}

export function GooglePlayIcon({ className = "" }) {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" className={className}>
      <path d="m6.848 7.641-6.785 7.03.001.004A1.825 1.825 0 0 0 1.834 16c.339 0 .657-.09.93-.246l.022-.013 7.637-4.301L6.848 7.64Z" fill="#EA4335" />
      <path d="m13.713 6.444-.007-.004-3.297-1.866L6.694 7.8l3.728 3.638 3.28-1.847c.575-.303.965-.894.965-1.577 0-.677-.385-1.266-.954-1.57Z" fill="#FBBC04" />
      <path d="M.062 1.33c-.04.146-.062.3-.062.46v12.42c0 .16.021.315.062.46l7.02-6.849L.061 1.33Z" fill="#4285F4" />
      <path d="m6.898 8 3.512-3.427L2.78.256A1.871 1.871 0 0 0 1.834 0C.986 0 .27.563.063 1.327v.002L6.897 8Z" fill="#34A853" />
    </svg>
  )
}

export function AppStoreIcon({ className = "", color = "#0C513F" }) {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" style={{ color }} className={className}>
      <path
        d="M11.802 8.509a3.648 3.648 0 0 1 1.774-3.051 3.885 3.885 0 0 0-3.004-1.585c-1.264-.13-2.489.738-3.133.738-.656 0-1.648-.726-2.716-.704-1.391.044-2.689.816-3.366 2.004-1.455 2.46-.37 6.076 1.025 8.065.697.974 1.512 2.062 2.58 2.023 1.043-.042 1.433-.65 2.693-.65 1.248 0 1.614.65 2.703.626 1.12-.018 1.825-.979 2.499-1.962a7.976 7.976 0 0 0 1.142-2.272c-1.316-.543-2.195-1.837-2.197-3.232ZM9.747 2.565c.61-.716.911-1.636.838-2.565a3.761 3.761 0 0 0-2.414 1.22 3.387 3.387 0 0 0-.86 2.47 3.151 3.151 0 0 0 2.436-1.125Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TwitterIcon({ className = "" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 0s-.5 10.394-12 12c0 0 9.872.19 12 12 0 0 .678-10.21 12-12 0 0-10.758-1.514-12-12Z" fill="#99C8FF" />
    </svg>
  )
}

export function InstagramIcon({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className={className}>
      <path d="M13 25c6.627 0 12-5.373 12-12S19.627 1 13 1 1 6.373 1 13s5.373 12 12 12Z" fill="#8C77EC" />
      <path d="M13 24.063c6.11 0 11.063-4.953 11.063-11.063S19.11 1.937 13 1.937 1.937 6.89 1.937 13 6.89 24.063 13 24.063Z" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
      <path
        d="m13.733 1.223.579 1.627a1.84 1.84 0 0 0 2.523 1.045l1.56-.741c1.563-.743 3.194.888 2.451 2.451l-.741 1.56a1.838 1.838 0 0 0 1.045 2.523l1.627.578c1.63.58 1.63 2.886 0 3.467l-1.627.579a1.84 1.84 0 0 0-1.045 2.523l.741 1.56c.743 1.563-.888 3.194-2.451 2.451l-1.56-.741a1.839 1.839 0 0 0-2.523 1.044l-.579 1.628c-.58 1.63-2.886 1.63-3.466 0l-.579-1.628a1.84 1.84 0 0 0-2.523-1.044l-1.56.74c-1.563.744-3.194-.887-2.451-2.45l.741-1.56A1.84 1.84 0 0 0 2.85 14.31l-1.627-.578c-1.63-.58-1.63-2.887 0-3.467l1.627-.578a1.84 1.84 0 0 0 1.048-2.523l-.742-1.56c-.743-1.564.888-3.195 2.452-2.452l1.56.742A1.84 1.84 0 0 0 9.69 2.85l.578-1.627c.578-1.63 2.884-1.63 3.464 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function FacebookIcon({ className = "" }) {
  return (
    <svg width="35" height="16" viewBox="0 0 65 30" fill="none" className={className}>
      <path d="M19.739 0A20.261 20.261 0 0 1 40 20.261v3.88H0v-4.402A19.739 19.739 0 0 1 19.739 0Z" fill="currentColor" />
    </svg>
  )
}

export function LinkedInDot({ className = "" }) {
  return <span className={`w-5 h-5 border-4 bg-jollof border-white border-opacity-40 rounded-full mr-2 ${className}`} />
}

export function MenuIcon({ className = "" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3.75 12h16.5M3.75 6h16.5M3.75 18h16.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon({ className = "" }) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32" width="32" className={className}>
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
    </svg>
  )
}

export function SearchPin({ className = "" }) {
  return (
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" className={className}>
      <path
        d="M20 10.74c0 .783-.128 1.56-.382 2.303a9.629 9.629 0 0 1-3.616 5.166H16l-6.024 4.862-6.58-5.304c-1.769-1.72-3.249-4.05-3.384-6.759-.123-2.437.72-4.827 2.36-6.687C4.01 2.46 6.321 1.27 8.837.99a10.261 10.261 0 0 1 7.082 1.827c2.035 1.453 3.42 3.596 3.876 5.996a.31.31 0 0 1-.015.168c.146.576.22 1.166.219 1.758Z"
        fill="#05AA70"
        fillRule="evenodd"
      />
      <circle cx="9.993" cy="9.679" r="3.214" fill="#fff" />
    </svg>
  )
}