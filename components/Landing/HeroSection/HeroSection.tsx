"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"
import dynamic from "next/dynamic"

const DownloadAppModal = dynamic(() => import("components/DownloadAppModal"), {
  ssr: false,
  loading: () => null,
})

interface HeroSectionProps {
  mounted: boolean
  currentTheme: string | undefined
}

export default function HeroSection({ mounted, currentTheme }: HeroSectionProps) {
  const [typedLetters, setTypedLetters] = useState<Set<string>>(new Set())
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const animationStarted = useRef(false)

  const fullText = "Own Your Finances: Beyond Traditional Banking"
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
      const isCryptoWord = word === "Banking"

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
          Manage, send, and receive global payments instantly with Ultra App. Enjoy rapid payouts, seamless bill payments,
          and effortless transactions. Open your free account today!
        </motion.p>

        <HeroButtons svgVariants={svgVariants} onDownloadClick={() => setIsDownloadModalOpen(true)} />
      </div>

      <HeroImages />

      <TextAnimationStyles />

      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </motion.div>
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
          loading="lazy"
          decoding="async"
          fetchPriority="low"
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
          loading="lazy"
          decoding="async"
          fetchPriority="low"
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
        src="/hero-app.png"
        alt="UltraApp Global Finance Interface"
        className="max-w-full rounded-2xl max-md:px-4 md:w-[336px]"
        loading="eager"
        decoding="async"
        fetchPriority="high"
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
          src="/swap-clean.png"
          alt="Currency Exchange"
          className="w-[336px] max-w-full rounded-2xl max-md:hidden"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
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
          loading="lazy"
          decoding="async"
          fetchPriority="low"
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
