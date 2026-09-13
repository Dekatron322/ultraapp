"use client"
import { motion } from "framer-motion"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import Image from "next/image"

interface WhyOtcProps {
  currentTheme: string | undefined
}

export default function WhyOtc({ currentTheme }: WhyOtcProps) {
  const isDark = currentTheme === "dark"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
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

  return (
    <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center max-sm:p-4 md:my-28">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={fadeInUp}>
          <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-500 max-sm:text-xs">
            {isDark ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
            <span>Ultra OTC</span>
          </div>
        </motion.div>

        <motion.h2
          className={`text-[46px] font-bold leading-[1.2] max-sm:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}
          variants={fadeInUp}
        >
          Why <span className="crypto-text">Ultra OTC</span>
        </motion.h2>

        <motion.p
          className={`mt-4 max-w-2xl text-base md:text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
          variants={fadeInUp}
        >
          Move institutional volumes with total privacy, zero slippage, and dedicated relationship execution tailored to your needs.
        </motion.p>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div
        className="mt-12 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1: Absolute Discretion */}
        <motion.div
          className={`flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300 ${isDark
              ? "border-gray-800 bg-[#0c1322] hover:border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
            }`}
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div>
            <div
              className={`mb-5 flex size-12 items-center justify-center rounded-xl transition-colors ${isDark ? "border border-gray-700/60 bg-gray-800/80" : "border border-gray-200/80 bg-gray-100"
                }`}
            >
              <Image src="/icons/anonymous.svg" alt="Discretion" width={28} height={28} />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Absolute Discretion</h3>
            <p className={`mt-3 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Trade large volumes with zero visibility—your intentions remain private, and execution is handled with complete confidentiality.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Competitive Rates */}
        <motion.div
          className={`flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300 ${isDark
              ? "border-gray-800 bg-[#0c1322] hover:border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
            }`}
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div>
            <div
              className={`mb-5 flex size-12 items-center justify-center rounded-xl transition-colors ${isDark ? "border border-gray-700/60 bg-gray-800/80" : "border border-gray-200/80 bg-gray-100"
                }`}
            >
              <Image src="/icons/cash-02.svg" alt="Competitive Rates" width={28} height={28} />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Competitive Rates</h3>
            <p className={`mt-3 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Get market-leading pricing with no hidden fees or slippage, providing transparent and cost-effective execution at scale.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Global Coverage */}
        <motion.div
          className={`flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300 ${isDark
              ? "border-gray-800 bg-[#0c1322] hover:border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
            }`}
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div>
            <div
              className={`mb-5 flex size-12 items-center justify-center rounded-xl transition-colors ${isDark ? "border border-gray-700/60 bg-gray-800/80" : "border border-gray-200/80 bg-gray-100"
                }`}
            >
              <Image src="/icons/globe-02.svg" alt="Global Coverage" width={28} height={28} />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Global Coverage</h3>
            <p className={`mt-3 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Execute transactions from anywhere in the world. Our international liquidity network removes borders and geographical limits.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Lightning Fast Settlement */}
        <motion.div
          className={`flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300 ${isDark
              ? "border-gray-800 bg-[#0c1322] hover:border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
            }`}
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div>
            <div
              className={`mb-5 flex size-12 items-center justify-center rounded-xl transition-colors ${isDark ? "border border-gray-700/60 bg-gray-800/80" : "border border-gray-200/80 bg-gray-100"
                }`}
            >
              <Image src="/icons/zap.svg" alt="Fast Settlement" width={28} height={28} />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Lightning Fast Settlement</h3>
            <p className={`mt-3 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Access instant delivery to your preferred account or local bank account, operating seamlessly every single day.
            </p>
          </div>
        </motion.div>

        {/* Card 5: Personalized Relationship Desk */}
        <motion.div
          className={`flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300 md:col-span-2 ${isDark
              ? "border-gray-800 bg-[#0c1322] hover:border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              : "border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
            }`}
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div>
            <div
              className={`mb-5 flex size-12 items-center justify-center rounded-xl transition-colors ${isDark ? "border border-gray-700/60 bg-gray-800/80" : "border border-gray-200/80 bg-gray-100"
                }`}
            >
              <Image src="/icons/user-switch.svg" alt="Relationship Desk" width={28} height={28} />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Personalized Relationship Desk</h3>
            <p className={`mt-3 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Access a dedicated Ultra OTC specialist for every transaction. Receive bespoke quotes, direct concierge support, and structured settlements tailored specifically to your financial objectives.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
