import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React from "react"

interface FeatureSectionProps {
  currentTheme: string | undefined
}

const FeatureSection = ({ currentTheme }: FeatureSectionProps) => {
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

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.6,
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
      <div className="email relative mb-6 flex h-10 w-32 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
        {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
        Features
      </div>
      <motion.h2
        className="mb-10 text-center text-[46px] font-semibold leading-[1.2] max-sm:text-3xl md:w-[800px]"
        variants={fadeInUp}
      >
        Explore Our Innovative Financial <span className="crypto-text">Solutions</span>
      </motion.h2>
      <div className="grid w-full max-w-[1240px] gap-5 max-md:px-4 md:grid-cols-2">
        {/* Card 1 */}
        <div className="border-style card2-bg relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl p-6">
          {currentTheme === "dark" ? (
            <img src="/icons/central-wallet-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/central-wallet.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-sm:text-2xl">Personalized Naira Wallets</h3>
          <p className="mb-10 max-sm:text-sm">Get your unique Naira wallet for easy deposits and withdrawals.</p>
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div variants={imageVariants} initial="initial" whileHover="hover">
              {currentTheme === "dark" ? (
                <img src="/Margin-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
          <div className="teams-gradient-bottom"></div>
        </div>

        {/* Card 2 */}
        <div className="border-style card2-bg relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl p-6">
          {currentTheme === "dark" ? (
            <img src="/icons/ramping-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/ramping.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-sm:text-2xl">Instant On/Off Ramping</h3>
          <p className="mb-10 max-sm:text-sm">Quickly convert your crypto to fiat and vice versa.</p>
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div variants={imageVariants} initial="initial" whileHover="hover">
              {currentTheme === "dark" ? (
                <img src="/Margin2-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin2.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
          <div className="teams-gradient-bottom"></div>
        </div>

        {/* Card 3 */}
        <div className="border-style card2-bg relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl p-6">
          {currentTheme === "dark" ? (
            <img src="/icons/crypto-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/crypto.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium  max-sm:text-2xl">Cross-Border Payments</h3>
          <p className="mb-10 max-sm:text-sm">Send and receive crypto globally, settle instantly in local currency.</p>
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div variants={imageVariants} initial="initial" whileHover="hover">
              {currentTheme === "dark" ? (
                <img src="/Margin3-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin3.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
          <div className="teams-gradient-bottom"></div>
        </div>

        {/* Card 4 */}
        <div className="border-style card2-bg relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl p-6">
          {currentTheme === "dark" ? (
            <img src="/icons/support-dark.svg" alt="Download" className="size-12" />
          ) : (
            <img src="/icons/support.svg" alt="Download" className="size-12" />
          )}
          <h3 className="text-4xl font-medium max-sm:text-2xl">20+ Cryptocurrency Support</h3>
          <p className="mb-10 max-sm:text-sm">Access a wide range of cryptocurrencies for your transactions.</p>
          <div className="relative z-0 mt-auto flex w-full items-end justify-center">
            <motion.div variants={imageVariants} initial="initial" whileHover="hover">
              {currentTheme === "dark" ? (
                <img src="/Margin4-dark.png" alt="Download" className="relative z-0 w-[444px]" />
              ) : (
                <img src="/Margin4.png" alt="Download" className="relative z-0 w-[444px]" />
              )}
            </motion.div>
          </div>
          <div className="teams-gradient-bottom"></div>
        </div>
      </div>
      <motion.div
        className="group mt-10"
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

export default FeatureSection
