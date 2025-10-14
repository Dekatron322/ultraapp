import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React from "react"

interface FeatureSectionProps {
  currentTheme: string | undefined
}

const KeyFeatureSection = ({ currentTheme }: FeatureSectionProps) => {
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
            Unlock immediate access to crucial financial data with our advanced real- time analytics, allowing you to
            stay ahead of the curve. Whether it&apos;s tracking cash flow, monitoring expenses, or forecasting trends,
            our platform provides you with the insights you need—instantly and effortlessly.
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
        <Link
          href="#"
          target="_blank"
          className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
        >
          <span>Learn More</span>
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
        </Link>
      </motion.div>
    </>
  )
}

export default KeyFeatureSection
