"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  mounted: boolean
  currentTheme: string | undefined
}

export default function HeroSection({ mounted, currentTheme }: HeroSectionProps) {
  const [typedLetters, setTypedLetters] = useState<Set<string>>(new Set())
  const animationStarted = useRef(false)

  const fullText = "Delete Account"
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
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
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
          We are sorry to see you go. Please fill out the deletion request form below to initiate your account deletion process.
        </motion.p>
      </div>

      <TextAnimationStyles />
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
