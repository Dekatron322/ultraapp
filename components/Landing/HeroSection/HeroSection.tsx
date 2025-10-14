"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"
import DownloadAppModal from "components/DownloadAppModal"

interface HeroSectionProps {
  mounted: boolean
  currentTheme: string | undefined
}

export default function HeroSection({ mounted, currentTheme }: HeroSectionProps) {
  const [typedLetters, setTypedLetters] = useState<Set<string>>(new Set())
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [showCoins, setShowCoins] = useState(false)
  const animationStarted = useRef(false)

  const fullText = "Own Your Finances: Beyond Bank Into Crypto"
  const words = fullText.split(" ")

  useEffect(() => {
    if (animationStarted.current) return

    animationStarted.current = true
    let currentIndex = 0
    const totalLetters = fullText.length

    const typeText = () => {
      if (currentIndex <= totalLetters) {
        const currentText = fullText.substring(0, currentIndex)
        const lettersArray = currentText.split("")
        const newTypedLetters = new Set<string>()

        lettersArray.forEach((letter, index) => {
          newTypedLetters.add(`${index}-${letter}`)
        })

        setTypedLetters(newTypedLetters)
        currentIndex++
        setTimeout(typeText, 50)
      }
    }

    typeText()
  }, [fullText])

  // Show coins after a delay to ensure they load last
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCoins(true)
    }, 1000) // 1 second delay to ensure other content loads first

    return () => clearTimeout(timer)
  }, [])

  const isLetterTyped = (positionIndex: number, letter: string) => {
    return typedLetters.has(`${positionIndex}-${letter}`)
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  let positionIndex = 0
  const renderAnimatedText = () => {
    return words.map((word, wordIndex) => {
      const letters = word.split("")
      const isCryptoWord = word === "Crypto"

      const wordElement = (
        <span key={`word-${wordIndex}`} className={`word ${isCryptoWord ? "crypto-text" : ""}`}>
          {letters.map((letter, letterIndex) => {
            const currentPosition = positionIndex++
            const isTyped = isLetterTyped(currentPosition, letter)
            return (
              <span key={`letter-${wordIndex}-${letterIndex}`} className={`letter ${isTyped ? "typed" : ""}`}>
                {letter}
              </span>
            )
          })}
        </span>
      )

      if (wordIndex < words.length - 1) {
        const spacePosition = positionIndex++
        const isSpaceTyped = isLetterTyped(spacePosition, " ")
        return (
          <span key={`word-space-${wordIndex}`}>
            {wordElement}
            <span className={`word-space ${isSpaceTyped ? "typed" : ""}`}> </span>
          </span>
        )
      }

      return wordElement
    })
  }

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const getBackgroundImage = () => {
    if (!mounted) return "url('/BG.png')"
    return currentTheme === "dark" ? "url('/BG1.png')" : "url('/BG.png')"
  }

  return (
    <motion.div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat max-md:px-4 max-md:pt-16"
      style={{
        backgroundImage: getBackgroundImage(),
      }}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="absolute inset-0 bg-white/5 dark:bg-black/5"></div>

      {/* Coins Section - Conditionally rendered */}
      {showCoins && <CoinsSection />}

      <div className="large-text relative z-10 mx-auto mt-16 flex w-full max-w-6xl flex-col items-center justify-center text-center md:mt-56 md:px-10">
        <motion.div
          className="text-5xl font-bold leading-tight max-sm:text-4xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="min-h-[1.2em]">{renderAnimatedText()}</h1>
        </motion.div>

        <motion.p
          className="small-text mt-6 max-w-2xl text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Enjoy rapid transfers with Ultra App. Swap crypto to Naira, pay bills, make Ultra-to-Ultra transfers, and use
          virtual debit cards—limitless transactions await!
        </motion.p>

        <HeroButtons svgVariants={svgVariants} onDownloadClick={() => setIsDownloadModalOpen(true)} />
      </div>

      <HeroImages />

      <TextAnimationStyles />

      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </motion.div>
  )
}

function CoinsSection() {
  const coinVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      {/* Left Side Coins */}
      <div>
        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.2 }}
          className="absolute left-4 top-1/4 z-0 flex flex-col gap-8 md:left-[350px]"
        >
          <Image
            src="/coins/bitcoin1.png"
            alt="Bitcoin"
            width={174}
            height={144}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100 max-md:h-16 max-md:w-16"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.4 }}
          className="absolute left-10 top-2/4 z-0 flex flex-col max-md:h-16 max-md:w-16 md:left-[500px]"
        >
          <Image
            src="/coins/doge.png"
            alt="Dogecoin"
            width={153}
            height={109}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.4 }}
          className="absolute left-10 top-[60%] z-0 flex flex-col max-md:hidden md:left-[700px]"
        >
          <Image
            src="/coins/bitcoin2.png"
            alt="Bitcoin"
            width={79}
            height={62}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100 max-md:h-16 max-md:w-16"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.4 }}
          className="absolute left-10 top-[80%] z-0 flex flex-col md:left-[750px]"
        >
          <Image
            src="/coins/bitcoin3.png"
            alt="Bitcoin"
            width={92}
            height={76}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100 max-md:hidden"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.4 }}
          className="absolute left-10 top-[95%] z-0 flex flex-col md:left-[800px]"
        >
          <Image
            src="/coins/bitcoin4.png"
            alt="Bitcoin"
            width={57}
            height={47}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.div>
      </div>

      {/* Right Side Coins */}
      <div>
        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.3 }}
          className="absolute right-4 top-1/3 z-0 flex flex-col gap-8 md:right-[350px]"
        >
          <Image
            src="/coins/binance.png"
            alt="Binance"
            width={196}
            height={169}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100 max-md:h-16 max-md:w-16"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          className="absolute right-4 top-2/4 z-0 flex flex-col gap-8 md:right-[600px]"
        >
          <Image
            src="/coins/dai.png"
            alt="DAI"
            width={44}
            height={62}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.7 }}
          className="absolute right-4 top-[60%] z-0 flex flex-col gap-8 max-md:hidden md:right-[350px]"
        >
          <Image
            src="/coins/usdc.png"
            alt="USDC"
            width={134}
            height={115}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={coinVariants}
          transition={{ delay: 0.9 }}
          className="absolute right-4 top-3/4 z-0 flex flex-col gap-8 max-md:hidden md:right-[500px]"
        >
          <Image
            src="/coins/eth.png"
            alt="Ethereum"
            width={120}
            height={99}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.div>
      </div>
    </>
  )
}

function HeroButtons({ svgVariants, onDownloadClick }: { svgVariants: any; onDownloadClick: () => void }) {
  return (
    <motion.div
      className="mb-20 mt-8 flex gap-4 max-md:mb-10 max-sm:flex-col max-sm:items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Link
        href="#"
        target="_blank"
        className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
      >
        <span>Get Started</span>
        <motion.svg
          width="1em"
          height="1em"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-20 transition-colors duration-300 group-hover:text-black"
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

      <button
        onClick={onDownloadClick}
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
  )
}

function HeroImages() {
  return (
    <motion.div
      className="mt-auto flex items-center justify-center gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div>
        <motion.img
          src="/img2.png"
          alt="decorative line"
          className="w-[336px] max-w-full max-md:hidden"
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.05,
            rotate: -5,
            transition: { duration: 0.3 },
          }}
        />
        <motion.img
          src="/img3.png"
          alt="decorative line"
          className="mt-4 w-[336px] max-w-full max-md:hidden"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.2,
            type: "spring",
            damping: 15,
          }}
          whileHover={{
            scale: 1.08,
            y: -5,
            transition: { duration: 0.3 },
          }}
        />
      </div>

      <motion.img
        src="/img1.png"
        alt="decorative line"
        className="max-w-full max-md:px-4 md:w-[336px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 1.1,
          type: "spring",
          stiffness: 120,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 3,
          transition: { duration: 0.3 },
        }}
      />

      <div>
        <motion.img
          src="/Swap.png"
          alt="decorative line"
          className="w-[336px] max-w-full max-md:hidden"
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        />
        <motion.img
          src="/img4.png"
          alt="decorative line"
          className="mt-4 w-[336px] max-w-full max-md:hidden"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.4,
            type: "spring",
            damping: 15,
          }}
          whileHover={{
            scale: 1.08,
            y: 5,
            transition: { duration: 0.3 },
          }}
        />
      </div>
    </motion.div>
  )
}

function TextAnimationStyles() {
  return (
    <style jsx global>{`
      .word {
        white-space: nowrap;
        display: inline;
      }
      .word-space {
        opacity: 0;
        display: inline;
        transform: scale(0.8);
      }
      .letter {
        opacity: 0;
        display: inline-block;
        transform: scale(0.8);
      }
      .letter.typed,
      .word-space.typed {
        animation: letterAppear 0.2s ease-in forwards;
      }
      @keyframes letterAppear {
        0% {
          opacity: 0;
          transform: scale(0.8);
        }
        60% {
          opacity: 1;
          transform: scale(1.1);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `}</style>
  )
}
