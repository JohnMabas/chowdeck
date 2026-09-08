export function Wordmark({ className = "" }) {
  return <img src="/images/logo/wordmark.svg" alt="Chowdeck" className={className} />
}

export function LogoMark({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.52 83.51" width="21" height="24" className={className}>
      <path
        d="M84.34 48.29c-3.59 19.39-20.88 35.2-41.31 35.2a43.1 43.1 0 0 1-24.5-7.65S.05 83.32.05 83.32l7.23-18.88C2.99 57.99.46 50.31.46 42.03c0-23.05 19.52-42 42.57-42 21.45 0 39.11 16.18 41.46 37-22.12-.3-28.84-4.16-33.17-7.18a11.03 11.03 0 0 0-2.6-1.33c-1.89-.83-3.98-1.29-6.17-1.29-8.48 0-14.53 5.21-14.53 13.7s6.46 13.69 14.94 13.69c1.32 0 2.61-.17 3.83-.48 2.22-.48 3.65-1.27 3.65-1.27C64 45.4 80.86 47.18 84.33 48.3Z"
        style={{ fill: "#ffcf1f", stroke: "#ffcf1f", strokeMiterlimit: 10, strokeWidth: "0.05px" }}
      />
    </svg>
  )
}

export function FooterStar({ className = "" }) {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" className={className}>
      <path d="M64 124c33.137 0 60-26.863 60-60S97.137 4 64 4 4 30.863 4 64s26.863 60 60 60Z" fill="#0C513F" stroke="#fff" strokeWidth="7.09" strokeMiterlimit="10" />
      <path d="M64.5 25l5.03 23.49L91 49.9l-18.47 12.6 11 22.13L64.5 69.03l-19.03 15.6 11-22.13L38 49.9l21.47-1.41L64.5 25Z" fill="#FFC501" />
    </svg>
  )
}