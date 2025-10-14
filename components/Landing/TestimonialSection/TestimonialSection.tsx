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
import StarIcon from "public/icons/star"
import dynamic from "next/dynamic"

const DownloadAppModal = dynamic(() => import("components/DownloadAppModal"), {
  ssr: false,
  loading: () => null,
})

interface TestimonialSectionProps {
  currentTheme: string | undefined
}

export default function TestimonialSection({ currentTheme }: TestimonialSectionProps) {
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
    <div className="flex w-full max-w-[1240px] flex-col max-sm:p-4 md:my-32">
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
              className="max-sm:flex max-sm:w-full max-sm:justify-center"
            >
              <div className="email  relative mb-6 flex h-10 w-36 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
                {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
                Testimonials
              </div>
            </motion.div>
            <motion.h2
              className="text-[46px] font-bold leading-[1.2] max-md:text-center max-sm:text-3xl"
              variants={fadeInUp}
            >
              What our users are <span className="crypto-text"> saying</span>
            </motion.h2>
            <motion.p className="smaller-text mt-2 text-lg max-md:text-center max-md:text-base" variants={fadeInUp}>
              Our financial management platform is transforming the way people manage their money. Here&apos;s what some
              of our users have to say about their experience
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

          {/* Testimonials Container - Updated for horizontal scroll on mobile */}
          <div className="relative flex h-[400px] w-2/3 flex-col overflow-hidden max-md:h-[300px] max-md:w-full">
            {/* Desktop - Vertical Scroll */}
            <motion.div
              className="hidden flex-col gap-4 md:flex"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {/* Set 1 */}
              <motion.div className="border-style w-full flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style w-full flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style w-full flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              {/* Set 2 (duplicate for seamless scroll) */}
              <motion.div className="border-style w-full flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style w-full flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style w-full flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Mobile - Horizontal Scroll */}
            <motion.div
              className="flex gap-4 md:hidden"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {/* Set 1 */}
              <motion.div className="border-style min-w-[300px] flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style min-w-[300px] flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style min-w-[300px] flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              {/* Set 2 (duplicate for seamless scroll) */}
              <motion.div className="border-style min-w-[300px] flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style min-w-[300px] flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/avatar.png"
                    alt="More"
                    width={64}
                    height={64}
                    className="max-md:h-10 max-md:w-10"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>

              <motion.div className="border-style min-w-[300px] flex-col gap-2 rounded-2xl border p-4">
                <div className="flex items-center gap-3">
                  <Image src="/icons/avatar.png" alt="More" width={64} height={64} />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl max-md:text-base">John Clayton</p>
                    <div className="flex gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>

                <motion.p className="smaller-text mt-2 max-md:text-sm" variants={fadeInUp}>
                  UltraApp has streamlined our business operations significantly. We can now accept digital payments,
                  track our expenses, and manage our team&apos;s finances all in one place. The security features are
                  top-notch, giving us peace of mind.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Gradient overlays */}
            <div className="linear-grad-top max-md:hidden" />
            <div className="linear-grad-bottom max-md:hidden" />
            {/* Horizontal gradient overlays for mobile */}
            <div className="linear-grad-left md:hidden" />
            <div className="linear-grad-right md:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}
