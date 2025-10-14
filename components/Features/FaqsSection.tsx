"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQSectionProps {
  currentTheme: string | undefined
}

export default function FAQSection({ currentTheme }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I get started with the UltraApp?",
      answer:
        "Download the app from the App Store or Google Play, create your account, and follow the onboarding process to set up your portfolio and preferences.",
    },
    {
      id: 2,
      question: "Is my financial data secure?",
      answer:
        "Yes, we use bank-level encryption and security measures to protect your data. All sensitive information is encrypted and we never store your banking credentials.",
    },
    {
      id: 3,
      question: "What cryptocurrencies does UltraApp support?",
      answer:
        "We support all major cryptocurrencies including Bitcoin, Ethereum, Solana, and hundreds of altcoins. Our platform continuously adds new tokens as they gain market traction.",
    },
    {
      id: 4,
      question: "How real-time are the analytics?",
      answer:
        "Our analytics update in real-time with market data streaming directly from multiple exchanges. You'll see price movements and portfolio changes as they happen.",
    },
    {
      id: 5,
      question: "Can I track multiple portfolios?",
      answer:
        "Yes, UltraApp allows you to create and manage multiple portfolios, making it easy to separate personal investments from business or experimental trading.",
    },
    {
      id: 6,
      question: "Is there a desktop version?",
      answer:
        "Currently, UltraApp is mobile-first, but we're developing a web dashboard that will sync seamlessly with your mobile app. Stay tuned for updates!",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  return (
    <div className="flex w-full max-w-[1240px] flex-col max-sm:p-4 md:my-32">
      <div className="flex">
        <div className="flex w-full gap-12 max-md:flex-col max-md:px-0">
          {/* Header */}
          <motion.div className="flex flex-col" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="max-sm:w-full" variants={itemVariants}>
              <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-sm:text-xs">
                <span>FAQ</span>
              </div>
            </motion.div>

            <motion.h2
              className="text-[46px] font-bold leading-[1.2] max-md:text-center max-sm:text-3xl"
              variants={itemVariants}
            >
              Frequently Asked <span className="crypto-text">Questions</span>
            </motion.h2>

            <motion.p className="mt-4 max-w-2xl max-md:text-center" variants={itemVariants}>
              Find quick answers to common questions about UltraApp. If you dont see what you&apos;re looking for, our
              support team is always ready to help.
            </motion.p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            className="flex flex-col gap-4 md:w-[600px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {faqData.map((item) => (
              <motion.div
                key={item.id}
                className={`faq-card cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  currentTheme === "dark"
                    ? "border-gray-700 bg-gray-900 hover:border-gray-500"
                    : "border-gray-200 bg-white hover:border-gray-300"
                } ${openItem === item.id ? "shadow-lg" : ""}`}
                variants={itemVariants}
                onClick={() => toggleItem(item.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`pr-8 text-lg font-semibold ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}
                  >
                    {item.question}
                  </h3>
                  <motion.div
                    variants={iconVariants}
                    animate={openItem === item.id ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M5 7.5L10 12.5L15 7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  variants={contentVariants}
                  initial="closed"
                  animate={openItem === item.id ? "open" : "closed"}
                  className="overflow-hidden"
                >
                  <p className={`mt-4 leading-relaxed ${currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
