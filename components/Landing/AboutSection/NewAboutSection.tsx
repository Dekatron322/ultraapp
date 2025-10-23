import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React from "react"

interface FeatureSectionProps {
  currentTheme: string | undefined
}

const NewAboutSection = ({ currentTheme }: FeatureSectionProps) => {
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

  return (
    <div className="mt-20  px-4 max-md:my-10 md:max-w-[1240px]">
      <div className="grid w-full  md:grid-cols-2 md:justify-between md:gap-4">
        <div>
          <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-sm:text-xs">
            {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
            About the App
          </div>
          <motion.h2
            className="mb-4 text-[46px] font-semibold  max-md:text-center max-sm:text-3xl md:mb-10 md:w-[800px]"
            variants={fadeInUp}
          >
            Unlock the future of <br />
            <span className="crypto-text"> UltraApp</span>
          </motion.h2>
        </div>

        <div className="smaller-text">
          <p className="max-md:text-center max-md:text-sm">
            Empowering Nigerians to Seamlessly Access Crypto and Web3 Finance
          </p>
          <p className="mt-2 max-md:text-center max-md:text-sm">
            Ultra App is a next-generation fintech and crypto platform designed to make cryptocurrency and Web3 finance
            simple, secure, and accessible for every Nigerian. We bridge the gap between traditional finance and
            decentralized systems through an all-in-one mobile experience thats as easy to use as your everyday banking
            app.
          </p>

          <p className="my-2 max-md:text-center max-md:text-sm">
            At Ultra, we believe digital finance should be effortless. That&apos;s why we’ve built a unified platform
            that allows users to buy and sell crypto with Naira, swap between cryptocurrencies, send and receive
            payments, pay bills, and manage everyday financial transactions, all in one app.
          </p>
          <p className="max-md:text-center max-md:text-sm">
            Our ecosystem includes innovative solutions we&apos;re building such as Ultra Vault, a secure digital asset
            storage system, and the Ultra Crypto Virtual Debit Card, which enables convenient tap-to-pay and online
            purchases via Apple Pay. We&apos;re also developing DeFi lending and borrowing features to give users
            greater financial freedom and control over their digital assets.
          </p>
        </div>
      </div>

      <motion.div className="mt-10 max-sm:mt-4">
        {currentTheme === "dark" ? (
          <img src="/Container copy.png" alt="Download" className="relative z-0 w-full" />
        ) : (
          <img src="/Container copy.png" alt="Download" className="relative z-0 w-full" />
        )}
      </motion.div>

      {/* Card 2 */}
    </div>
  )
}

export default NewAboutSection
