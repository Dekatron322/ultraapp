"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"

interface HeroSectionProps {
  mounted: boolean
  currentTheme: string | undefined
}

export default function HeroSection({ mounted, currentTheme }: HeroSectionProps) {
  const [typedLetters, setTypedLetters] = useState<Set<string>>(new Set())
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [showCoins, setShowCoins] = useState(false)
  const animationStarted = useRef(false)

  const fullText = "Terms & Conditions"
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
      const isCryptoWord = word === "success"

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
      className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: getBackgroundImage(),
      }}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="absolute inset-0 bg-white/5 dark:bg-black/5"></div>

      <div className="large-text relative z-10 mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-center text-center max-md:px-4 max-md:py-16 md:my-44 md:px-10">
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
          The rules of the road for using our platform, simply explained.
        </motion.p>
      </div>

      <TextAnimationStyles />

      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </motion.div>
  )
}

function HeroButtons({ svgVariants, onDownloadClick }: { svgVariants: any; onDownloadClick: () => void }) {
  return (
    <motion.div
      className="my-16 flex gap-4 max-sm:flex-col max-sm:items-center"
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

// Download App Modal Component
interface DownloadAppModalProps {
  isOpen: boolean
  onClose: () => void
}

const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  // Smart URL that redirects based on platform
  const smartDownloadUrl = "https://qr-code-sand-seven.vercel.app/"

  // Direct URLs for the buttons
  const appStoreUrl = "https://apps.apple.com/ng/app/ultra-app/id6450269232"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.ahmadhabib.ultraappfrontend"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full p-1 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800"
        >
          ×
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Download Ultra App</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Scan the QR code to download our app</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* QR Code */}
          <div className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-48 items-center justify-center">
                <Image
                  src="/qr-code.png"
                  alt="QR Code for Ultra App Download"
                  width={192}
                  height={192}
                  className="size-full object-contain"
                  onError={(e) => {
                    // Fallback if QR code image doesn't exist
                    const target = e.target as HTMLElement
                    target.innerHTML = `
                      <div class="flex size-full items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
                        <div class="text-center">
                          <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">QR Code</div>
                          <div class="text-xs text-gray-400 dark:text-gray-500">Scan with your phone</div>
                        </div>
                      </div>
                    `
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Scan with your phone camera to download</p>
            </div>
          </div>

          <div className="flex gap-4 max-sm:flex-col">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-black px-4 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-black px-4 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Available on iOS and Android devices</p>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              The QR code will automatically detect your device
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
