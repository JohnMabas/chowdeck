import { AppStoreIcon, GooglePlayIcon } from '../../ui/Icons'

function VendorAppStoreButton({ href, icon, children }) {
  return (
    <a
      className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-5 font-medium text-white bg-chow-green transition-all duration-300 hover:scale-105 active:scale-95"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {icon}
      {children}
    </a>
  )
}

function VendorDownload() {
  return (
    <div className="container pt-10 pb-20">
      <h3 className="section-title text-center pb-6">Get started, download the app.</h3>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-4">
        <VendorAppStoreButton
          href="https://play.google.com/store/apps/details?id=com.chowdeck.vendor"
          icon={<GooglePlayIcon className="mr-2" />}
        >
          Download on Google Play
        </VendorAppStoreButton>
        <VendorAppStoreButton
          href="https://apps.apple.com/ng/app/chowdeck-vendor-hub/id6448729189"
          icon={<AppStoreIcon className="mr-2" color="#fff" />}
        >
          Download on App Store
        </VendorAppStoreButton>
      </div>
    </div>
  )
}

export default VendorDownload