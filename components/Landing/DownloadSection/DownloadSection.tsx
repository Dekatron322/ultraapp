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

interface DownloadSectionProps {
  currentTheme: string | undefined
}

export default function DownloadSection({ currentTheme }: DownloadSectionProps) {
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
    <div className="flex w-full justify-center max-md:my-10">
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <div className="img-card-bg flex w-full max-w-[1240px] flex-col rounded-2xl pt-10 max-md:mx-4 md:my-20 md:px-10">
        <div className="flex ">
          <div className="flex w-full gap-6 max-md:flex-col max-md:px-0 ">
            {/* Text Content */}
            <motion.div className="flex w-full flex-col" initial="hidden" animate="visible" variants={fadeInUp}>
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="max-sm:w-full"
              >
                <div className=" relative mb-6 max-md:text-center">Download the UltraApp</div>
              </motion.div>
              <motion.h2
                className="text-[46px] font-bold leading-[1.2] max-md:px-4 max-md:text-center max-sm:text-3xl"
                variants={fadeInUp}
              >
                UltraApp makes crypto <span className="crypto-text">simple.</span>
              </motion.h2>

              <motion.div
                className="mt-auto flex gap-4 max-md:pt-4 max-sm:flex-col max-sm:items-center md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button className="flex items-center rounded-md bg-[#155DFC] px-6 py-2 text-white">
                  Join the Community
                </button>
                <button
                  onClick={handleDownloadClick}
                  className="download-style flex items-center gap-2 border border-[#333E4F] transition-all duration-300 group-hover:gap-3"
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
      className=" flex w-full items-center justify-center overflow-hidden rounded-2xl px-10 md:h-[420px] "
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

        {/* Center Phone (Main) */}
        <motion.div className="z-20" initial="hidden" variants={centerPhoneVariants}>
          <motion.img
            src="/iphone.png"
            alt="UltraApp main screen"
            className="w-full drop-shadow-2xl"
            initial="initial"
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        {/* Right Phone */}
        <motion.div className="z-10" initial="hidden" variants={rightPhoneVariants}>
          {currentTheme === "dark" ? (
            <motion.img
              src="/superfast.png"
              alt="UltraApp feature 2"
              className="mb-10 w-full drop-shadow-2xl"
              initial="initial"
              variants={floatAnimation}
              transition={{ delay: 1 }}
            />
          ) : (
            <motion.img
              src="/superfast-light.png"
              alt="UltraApp feature 2"
              className="w-full drop-shadow-2xl"
              initial="initial"
              variants={floatAnimation}
              transition={{ delay: 1 }}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
