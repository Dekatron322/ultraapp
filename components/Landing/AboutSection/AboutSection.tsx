"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import { useState } from "react"
import DownloadAppModal from "components/DownloadAppModal"

interface AboutSectionProps {
  currentTheme: string | undefined
}

export default function AboutSection({ currentTheme }: AboutSectionProps) {
  const [isPhonesHovered, setIsPhonesHovered] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

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

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true)
  }

  return (
    <div className="flex w-full max-w-[1240px] flex-col max-md:my-10 max-sm:p-4 md:my-32">
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <div className="flex ">
        <div className="flex w-full gap-6 max-md:flex-col max-md:px-0 ">
          {/* Text Content */}
          <motion.div className="flex w-full flex-col" initial="hidden" animate="visible" variants={fadeInUp}>
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="max-md:flex max-md:justify-center max-sm:w-full"
            >
              <div className="email relative mb-6 flex h-10 w-32 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
                {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
                About Us
              </div>
            </motion.div>
            <motion.h2
              className="text-[46px] font-bold leading-[1.2] max-md:text-center max-sm:text-3xl"
              variants={fadeInUp}
            >
              Used and trusted by a community of <span className="crypto-text">millions</span>
            </motion.h2>
            <motion.p className="small-text mt-2 dark:text-gray-300 max-md:text-center" variants={fadeInUp}>
              UltraApp is changing the DeFi scene in Nigeria with 15,000+ users. Our platform makes cryptocurrency easy
              and practical for daily use.
            </motion.p>

            <motion.div
              className="mt-8 flex gap-4 max-sm:flex-col max-sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={handleDownloadClick}
                className="download-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
              >
                <div className="flex items-center">
                  <AppleIcon />
                  <div className="mx-2 h-4 w-px bg-[#ffffff]"></div>
                </div>
                <GooglePlayIcon />
                <span>Download App</span>
              </button>
            </motion.div>
          </motion.div>

          <PhoneImages
            currentTheme={currentTheme}
            isPhonesHovered={isPhonesHovered}
            setIsPhonesHovered={setIsPhonesHovered}
          />
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="border-style flex items-center gap-2 rounded-2xl  p-2">
          {currentTheme === "dark" ? (
            <img src="/icons/download-dark.svg" alt="Download" />
          ) : (
            <img src="/icons/download.svg" alt="Download" />
          )}
          <h3 className="text-5xl font-semibold max-sm:text-2xl">30K</h3>
          <p>App downloads</p>
        </div>
        <div className="border-style flex items-center gap-2 rounded-2xl  p-2">
          {currentTheme === "dark" ? (
            <img src="/icons/user-dark.svg" alt="Download" />
          ) : (
            <img src="/icons/user.svg" alt="Download" />
          )}
          <h3 className="text-5xl font-semibold max-sm:text-2xl">19K</h3>
          <p>Active users</p>
        </div>
        <div className="border-style flex items-center gap-2 rounded-2xl  p-2">
          {currentTheme === "dark" ? (
            <img src="/icons/wallet-dark.svg" alt="Download" />
          ) : (
            <img src="/icons/wallet.svg" alt="Download" />
          )}
          <h3 className="text-5xl font-semibold max-sm:text-2xl">200K</h3>
          <p>Wallets Created</p>
        </div>
      </div>
    </div>
  )
}

function PhoneImages({
  currentTheme,
  isPhonesHovered,
  setIsPhonesHovered,
}: {
  currentTheme: string | undefined
  isPhonesHovered: boolean
  setIsPhonesHovered: (hovered: boolean) => void
}) {
  const floatAnimation = {
    initial: { y: 0 },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const leftPhoneVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      rotate: 14,
      y: 20,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const centerPhoneVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
    hover: {
      rotate: 2,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const rightPhoneVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
    hover: {
      rotate: -10,
      y: -75,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="img-card-bg flex w-full items-center justify-center overflow-hidden rounded-2xl p-4 md:h-[400px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.div
        className="relative flex items-end justify-center -space-x-24"
        onHoverStart={() => setIsPhonesHovered(true)}
        onHoverEnd={() => setIsPhonesHovered(false)}
      >
        {/* Left Phone */}
        <motion.div
          className="z-10"
          initial="hidden"
          animate={isPhonesHovered ? "hover" : "visible"}
          variants={leftPhoneVariants}
        >
          {currentTheme === "dark" ? (
            <motion.img
              src="/png2-dark.png"
              alt="UltraApp feature 1"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
            />
          ) : (
            <motion.img
              src="/png2.png"
              alt="UltraApp feature 1"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
            />
          )}
        </motion.div>

        {/* Center Phone (Main) */}
        <motion.div
          className="z-20"
          initial="hidden"
          animate={isPhonesHovered ? "hover" : "visible"}
          variants={centerPhoneVariants}
        >
          {currentTheme === "dark" ? (
            <motion.img
              src="/png1-dark.png"
              alt="UltraApp main screen"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 0.5 }}
            />
          ) : (
            <motion.img
              src="/png1.png"
              alt="UltraApp main screen"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 0.5 }}
            />
          )}
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="z-10"
          initial="hidden"
          animate={isPhonesHovered ? "hover" : "visible"}
          variants={rightPhoneVariants}
        >
          {currentTheme === "dark" ? (
            <motion.img
              src="/png3-dark.png"
              alt="UltraApp feature 2"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 1 }}
            />
          ) : (
            <motion.img
              src="/png3.png"
              alt="UltraApp feature 2"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 1 }}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
