"use client"
import { motion } from "framer-motion"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import Image from "next/image"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"

interface CoreValuesProps {
  currentTheme: string | undefined
}

export default function CoreValues({ currentTheme }: CoreValuesProps) {
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

  return (
    <div className="grey-bg flex w-full flex-col items-center justify-center  max-sm:p-4 md:mt-32">
      <div className="flex ">
        <div className="flex w-full gap-6 max-md:px-0 ">
          {/* Text Content */}
          <motion.div
            className="flex w-full max-w-[1240px] flex-col items-center justify-center md:mt-20"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="max-sm:w-full"
            >
              <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-sm:text-xs">
                {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
                Core Values
              </div>
            </motion.div>
            <motion.h2 className="text-center text-[46px] font-bold leading-[1.2] max-sm:text-3xl" variants={fadeInUp}>
              Our Core Values Guide <span className="crypto-text">Everything</span>
            </motion.h2>
            <div className=" mt-10 grid max-md:gap-4  md:grid-cols-3 md:gap-16">
              <div className="flex flex-col gap-14 max-md:gap-4">
                <div className="features-cards flex-col rounded-lg p-6 ">
                  <div className="flex items-center gap-4">
                    <Image src="/icons/Background+Border.svg" alt="Lending" width={40} height={40} />
                    <motion.p className="mt-2 text-xl" variants={fadeInUp}>
                      Customer Success
                    </motion.p>
                  </div>
                  <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                    Our customers are at the heart of everything we do. From onboarding to ongoing support, we’re here
                    to ensure our platform delivers real value and drives results.
                  </motion.p>
                </div>

                <div className="features-cards flex-col rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <Image src="/icons/transparent.svg" alt="Stake" width={40} height={40} />
                    <motion.p className="mt-2 text-xl" variants={fadeInUp}>
                      Transparency
                    </motion.p>
                  </div>
                  <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                    We believe in clear communication, honest business practices, and providing our customers with the
                    insights they need to make informed decisions.
                  </motion.p>
                </div>
              </div>
              <img src="/Margin copy.png" alt="" className="max-md:hidden" />
              <div className="flex flex-col max-sm:gap-4 md:gap-14">
                <div className="features-cards flex-col rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <Image src="/icons/transparent.svg" alt="Stake" width={40} height={40} />
                    <motion.p className="mt-2 text-xl" variants={fadeInUp}>
                      Efficiency
                    </motion.p>
                  </div>
                  <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                    We’re committed to helping businesses operate more efficiently by simplifying financial processes
                    and eliminating unnecessary complexity.
                  </motion.p>
                </div>
                <div className="features-cards flex-col rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <Image src="/icons/collaborate.svg" alt="Stake" width={40} height={40} />
                    <motion.p className="mt-2 text-xl" variants={fadeInUp}>
                      Collaboration
                    </motion.p>
                  </div>
                  <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                    We believe that the best solutions come from working together. Whether it’s within our team or with
                    our customers, collaboration is key to our success.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
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
