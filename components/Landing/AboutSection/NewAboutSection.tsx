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
      <div className="grid w-full items-center md:grid-cols-2 md:justify-between md:gap-48">
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
        <p className="max-md:text-center max-md:text-sm">
          At Ultra App, we’re revolutionizing your financial management. As a leading fintech company, we provide
          innovative solutions for easy payments and utility services. Our goal is to equip you with secure and
          affordable tools for all your financial needs. Our intuitive platform simplifies traditional systems, making
          financial management accessible. From bill payments to transaction management, we deliver the convenience you
          deserve.
        </p>
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
