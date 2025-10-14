"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import { useState } from "react"
import Image from "next/image"
import DownloadAppModal from "components/DownloadAppModal"

interface ComingSoonProps {
  currentTheme: string | undefined
}

export default function GetUltraApp({ currentTheme }: ComingSoonProps) {
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
    <div className="flex w-full max-w-[1240px] flex-col max-sm:p-4 md:my-24">
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <div className="flex ">
        <div className="flex w-full gap-12 max-md:flex-col max-md:px-0 ">
          {/* Text Content */}
          <motion.div className="flex  flex-col" initial="hidden" animate="visible" variants={fadeInUp}>
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="max-sm:w-full"
            >
              <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-md:justify-center max-sm:text-xs ">
                {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
                Get the app
              </div>
            </motion.div>
            <motion.h2
              className="text-[46px] font-bold leading-[1.2] max-sm:text-center max-sm:text-3xl "
              variants={fadeInUp}
            >
              Ready to transform your crypto <span className="crypto-text">journey?</span>
            </motion.h2>
            <p className="mt-6 max-sm:text-center max-sm:text-sm">
              Unlock immediate access to crucial financial data with our advanced real- time analytics, allowing you to
              stay ahead of the curve. Whether it&apos;s tracking cash flow, monitoring expenses, or forecasting trends,
              our platform provides you with the insights you need—instantly and effortlessly.
            </p>
            <button
              onClick={handleDownloadClick}
              className="download-style mt-10 flex w-fit items-center gap-2 transition-all duration-300 group-hover:gap-3 max-sm:mx-auto max-sm:w-auto"
            >
              <div className="flex items-center">
                <AppleIcon />
                <div className="mx-2 h-4 w-px bg-[#ffffff]"></div>
              </div>
              <GooglePlayIcon />
              <span>Download App</span>
            </button>
          </motion.div>
          {currentTheme === "dark" ? (
            <motion.img src="/Container2.png" alt="UltraApp main screen" className="md:w-[390px]" />
          ) : (
            <motion.img src="/Container.png" alt="UltraApp main screen" className="md:w-[390px]" />
          )}
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
      className="img-card-bg flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl p-4"
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
