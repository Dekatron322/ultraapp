"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React from "react"
import Image from "next/image"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"

interface DownloadAppModalProps {
  isOpen: boolean
  onClose: () => void
}

const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  // Smart URL that redirects based on platform
  const smartDownloadUrl = "https://qr-code-sand-seven.vercel.app/"

  // Direct URLs for the buttons
  const appStoreUrl = "https://apps.apple.com/ng/app/ultra-app/id6450269232"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.ahmadhabib.ultraappfrontend"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full p-1 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800"
        >
          ×
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Download Ultra App</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Scan the QR code to download our app</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* QR Code */}
          <div className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-48 items-center justify-center">
                <Image
                  src="/qr-code.png"
                  alt="QR Code for Ultra App Download"
                  width={192}
                  height={192}
                  className="size-full object-contain"
                  onError={(e) => {
                    // Fallback if QR code image doesn't exist
                    const target = e.target as HTMLElement
                    target.innerHTML = `
                      <div class="flex size-full items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
                        <div class="text-center">
                          <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">QR Code</div>
                          <div class="text-xs text-gray-400 dark:text-gray-500">Scan with your phone</div>
                        </div>
                      </div>
                    `
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Scan with your phone camera to download</p>
            </div>
          </div>

          <div className="flex gap-4 max-sm:flex-col">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-black px-4 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-black px-4 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Available on iOS and Android devices</p>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              The QR code will automatically detect your device
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface FeatureSectionProps {
  currentTheme: string | undefined
}

const KeyFeatureSection = ({ currentTheme }: FeatureSectionProps) => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = React.useState(false)

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  const openDownloadModal = () => {
    setIsDownloadModalOpen(true)
  }

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false)
  }

  return (
    <>
      <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-sm:text-xs">
        {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
        Key Features
      </div>
      <motion.h2
        className="mb-10 w-full text-center text-[46px] font-semibold leading-[1.2] max-md:px-4 max-sm:text-3xl md:w-[800px]"
        variants={fadeInUp}
      >
        Boost your finances with
        <span className="crypto-text"> UltraApp</span>
      </motion.h2>
      <div className="grid w-full max-w-[1240px]  max-sm:px-4 md:grid-cols-2 md:gap-32">
        {/* Card 1 */}
        <div className="flex flex-col gap-4">
          {currentTheme === "dark" ? (
            <img src="/icons/central-wallet-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/central-wallet.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-md:text-3xl">Personalized Naira Wallets</h3>
          <p className="smaller-text mb-10">
            Unlock immediate access to crucial financial data with our advanced real- time analytics, allowing you to
            stay ahead of the curve. Whether it&apos;s tracking cash flow, monitoring expenses, or forecasting trends,
            our platform provides you with the insights you need—instantly and effortlessly.
          </p>
        </div>
        <div className="relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl max-md:pt-5">
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div>
              {currentTheme === "dark" ? (
                <img src="/Margin-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 max-md:pt-16">
          {currentTheme === "dark" ? (
            <img src="/icons/ramping-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/ramping.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-md:text-3xl">Instant On/Off Ramping</h3>
          <p className="smaller-text mb-10">
            Bridge the gap between traditional and digital finance in a single click. Our seamless on/off ramping
            service lets you convert cash to crypto and back again instantly, ensuring your assets are always accessible
            and ready to use whenever you need them.
          </p>
        </div>
        <div className="">
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div>
              {currentTheme === "dark" ? (
                <img src="/Margin2-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin2.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 max-md:pt-16">
          {currentTheme === "dark" ? (
            <img src="/icons/crypto-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/crypto.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-md:text-3xl">Cross-Border Payments</h3>
          <p className="smaller-text mb-10">
            Experience the freedom to send and receive cryptocurrency from anywhere in the world. Our platform ensures
            that your transactions are settled instantly in your local currency, making it easier than ever to manage
            your digital assets. Enjoy seamless transfers that connect you globally while providing the convenience of
            local currency settlements.
          </p>
        </div>
        <div className="">
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div>
              {currentTheme === "dark" ? (
                <img src="/Margin3-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin3.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col gap-4 max-md:pt-16">
          {currentTheme === "dark" ? (
            <img src="/icons/support-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/support.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-md:text-3xl">20+ Cryptocurrency Support</h3>
          <p className="smaller-text mb-10">
            Unlock immediate access to crucial financial data with our advanced real- time analytics, allowing you to
            stay ahead of the curve. Whether it&apos;s tracking cash flow, monitoring expenses, or forecasting trends,
            our platform provides you with the insights you need—instantly and effortlessly.
          </p>
        </div>
        <div className="">
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div>
              {currentTheme === "dark" ? (
                <img src="/Margin4-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin4.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="group my-20 max-md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover="hover"
        whileTap="tap"
      >
        <button
          onClick={openDownloadModal}
          className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
        >
          <span>Get Started</span>
          <motion.svg
            width="1em"
            height="1em"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-20 transition-colors duration-300"
            variants={svgVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <path
              d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
              fill="currentColor"
            />
          </motion.svg>
        </button>
      </motion.div>

      {/* Download App Modal */}
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={closeDownloadModal} />
    </>
  )
}

export default KeyFeatureSection
