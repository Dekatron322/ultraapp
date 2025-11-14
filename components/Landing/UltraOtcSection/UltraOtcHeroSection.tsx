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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [showCoins, setShowCoins] = useState(false)
  const animationStarted = useRef(false)

  const fullText = "Experience Deep Liquidity & Private Wealth Execution on Ultra OTC Desk"
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
      const isCryptoWord = word === "UltraApp"

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

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true)
  }

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  return (
    <motion.div
      className="relative flex w-full flex-col  items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 max-sm:pt-16"
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

      <div className="large-text relative z-10 mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-center text-center md:mt-48 md:px-10">
        <motion.div
          className="text-4xl font-bold leading-tight max-sm:text-4xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="min-h-[1.2em]">{renderAnimatedText()}</h1>
        </motion.div>

        <motion.p
          className="small-text mt-6 text-lg md:max-w-4xl md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Move significant volumes with unmatched privacy, tailored service, and instant settlement. Ultra OTC bridges
          anonymity and institutional-grade access, letting you execute trades discreetly—minimizing market impact and
          preserving your intent.
        </motion.p>

        <motion.div
          className="my-10 flex gap-4 max-sm:flex-col max-sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div className="group" whileHover="hover" whileTap="tap">
            <button
              onClick={handleContactClick}
              className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
            >
              <span>Get Started</span>
              <motion.svg
                width="1em"
                height="1em"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-20 transition-colors duration-300"
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
            </button>
          </motion.div>
        </motion.div>
      </div>

      <HeroImages />

      <TextAnimationStyles />

      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
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
          transition={{ delay: 0.4 }}
          className="absolute left-10 top-[60%] z-0 flex flex-col md:left-[500px]"
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
          className="absolute left-10 top-[67%]  flex flex-col md:left-[48%]"
        >
          <Image
            src="/coins/bitcoin2.png"
            alt="Bitcoin"
            width={79}
            height={62}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
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
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
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
          className="absolute right-4 top-[60%] z-0 flex flex-col gap-8 md:right-[33%]"
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
          className="absolute right-4 top-[80%] z-0 flex flex-col gap-8 md:right-[25%]"
        >
          <Image
            src="/coins/eth.png"
            alt="USDC"
            width={134}
            height={115}
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
      className="my-16 flex gap-4  max-sm:flex-col max-sm:items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <button
        onClick={onDownloadClick}
        className="download-style flex  items-center gap-2 transition-all duration-300 group-hover:gap-3"
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
      className="z-10 mt-auto flex items-center justify-center gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.img
        src="/featureHero.png"
        alt="decorative line"
        className="z-5 w-[336px] max-w-full"
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

// Contact Modal Component
interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your API call here
    onClose() // Close modal after submission
  }

  if (!isOpen) return null

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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Fill out the form below and we'll get back to you soon
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-gray-700">
              Inquiry Type *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800  dark:focus:border-blue-400 dark:focus:ring-blue-800"
            >
              <option value="" className="text-gray-500">
                Select inquiry type
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership</option>
              <option value="sales">Sales</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Tell us how we can help you..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
          >
            Send Message
          </motion.button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Or contact us directly at{" "}
            <Link href="mailto:otc@ultraapp.com" className="text-blue-600 hover:underline dark:text-blue-400">
              otc@ultraapp.com
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
