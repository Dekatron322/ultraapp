import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useState } from "react"

interface FeatureSectionProps {
  currentTheme: string | undefined
}

const FeatureSection = ({ currentTheme }: FeatureSectionProps) => {
  const [activeCurrency, setActiveCurrency] = useState("USD")

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

  const cardHover = {
    initial: { y: 0 },
    hover: {
      y: -6,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  return (
    <>
      <div className="email relative mb-6 flex h-10 w-32 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
        {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
        Features
      </div>
      <motion.h2
        className="mb-10 text-center text-[46px] font-semibold leading-[1.2] max-sm:text-3xl md:w-[800px]"
        variants={fadeInUp}
      >
        Explore Our Innovative Financial <span className="crypto-text">Solutions</span>
      </motion.h2>
      <div className="grid w-full max-w-[1240px] gap-6 max-md:px-4 md:grid-cols-2">
        {/* Card 1: Multi-Currency Accounts */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className="border-style card2-bg relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl md:p-8"
        >
          <div>
            <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold max-sm:text-2xl">Multi-Currency Accounts</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Get your unique digital account for easy deposits, holding, and withdrawals in multiple global currencies.
            </p>
          </div>

          {/* Interactive UI Widget */}
          <div className="mt-8 rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white/90 to-blue-50/50 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:from-gray-900/90 dark:to-blue-950/20">
            <div className="flex items-center justify-between border-b border-gray-200/60 pb-3 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Primary Account</span>
              </div>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                Active • Global Rail
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Total Net Balance</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">$48,250.00</span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">+3.8% this month</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-gray-100/80 px-2 py-1 text-xs font-mono text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <span>IBAN: GB82 ULTR 0048 2901 88</span>
              </div>
            </div>

            {/* Currency Sub-accounts */}
            <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
              <div className="rounded-xl border border-gray-100 bg-white/80 p-2.5 shadow-sm dark:border-gray-800 dark:bg-gray-800/80">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">USD</span>
                  <span>🇺🇸</span>
                </div>
                <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">$24,100</div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white/80 p-2.5 shadow-sm dark:border-gray-800 dark:bg-gray-800/80">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">EUR</span>
                  <span>🇪🇺</span>
                </div>
                <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">€16,420</div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white/80 p-2.5 shadow-sm dark:border-gray-800 dark:bg-gray-800/80">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">GBP</span>
                  <span>🇬🇧</span>
                </div>
                <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">£6,850</div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white/80 p-2.5 shadow-sm dark:border-gray-800 dark:bg-gray-800/80">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">CAD</span>
                  <span>🇨🇦</span>
                </div>
                <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">C$1,200</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Instant Currency Exchange */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className="border-style card2-bg relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl md:p-8"
        >
          <div>
            <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold max-sm:text-2xl">Instant Currency Exchange</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Quickly convert between global currencies at real-time interbank exchange rates with zero hidden markups.
            </p>
          </div>

          {/* Interactive UI Widget */}
          <div className="mt-8 space-y-3 rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white/90 to-blue-50/50 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:from-gray-900/90 dark:to-blue-950/20">
            {/* From Box */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-3.5 shadow-sm dark:border-gray-700/80 dark:bg-gray-800/90">
              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">You send</span>
                <div className="text-xl font-bold text-gray-900 dark:text-white">$5,000.00</div>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100">
                <span>🇺🇸</span>
                <span>USD</span>
              </div>
            </div>

            {/* Exchange Indicator */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                <span className="size-1.5 rounded-full bg-blue-500"></span>
                <span>1 USD = 0.9240 EUR</span>
              </div>
              <div className="flex size-7 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform duration-300 hover:rotate-180">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">0% Markup</span>
            </div>

            {/* To Box */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-3.5 shadow-sm dark:border-gray-700/80 dark:bg-gray-800/90">
              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">You receive</span>
                <div className="text-xl font-bold text-gray-900 dark:text-white">€4,620.00</div>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100">
                <span>🇪🇺</span>
                <span>EUR</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200/60 pt-2 text-[11px] text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <span>Transfer Fee: <strong className="text-emerald-600 dark:text-emerald-400">$0.00 (Free)</strong></span>
              <span>Delivery: <strong className="text-blue-600 dark:text-blue-400">Instant (&lt; 5s)</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Cross-Border Payments */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className="border-style card2-bg relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl md:p-8"
        >
          <div>
            <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold max-sm:text-2xl">Cross-Border Payments</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Send and receive money seamlessly across 180+ countries with local currency settlement.
            </p>
          </div>

          {/* Interactive UI Widget */}
          <div className="mt-8 space-y-2.5 rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white/90 to-blue-50/50 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:from-gray-900/90 dark:to-blue-950/20">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Live Global Rail Feed</span>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-500"></span>
                180+ Countries Connected
              </span>
            </div>

            {/* Transfer Item 1 */}
            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white/90 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-800/90">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                  <span>🇬🇧</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">Apex Global Ltd (London)</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">Direct UK Faster Payments</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-gray-900 dark:text-white">-£4,250.00</div>
                <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">⚡ Settled in 2s</div>
              </div>
            </div>

            {/* Transfer Item 2 */}
            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white/90 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-800/90">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300">
                  <span>🇪🇺</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">Zurich Enterprise (SEPA)</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">Inbound Direct Settlement</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+€8,900.00</div>
                <div className="text-[10px] font-medium text-blue-600 dark:text-blue-400">✓ Instant</div>
              </div>
            </div>

            {/* Transfer Item 3 */}
            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white/90 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-800/90">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300">
                  <span>🇯🇵</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">Tokyo Studio (Japan)</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">Local Zengin Rail</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-gray-900 dark:text-white">-¥380,000</div>
                <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">⚡ Settled</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Global Multi-Currency Support */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className="border-style card2-bg relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl md:p-8"
        >
          <div>
            <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold max-sm:text-2xl">Global Multi-Currency Support</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Access over 40+ international fiat currencies with 24/7 liquidity and instant multi-currency management.
            </p>
          </div>

          {/* Interactive UI Widget */}
          <div className="mt-8 rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white/90 to-blue-50/50 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:from-gray-900/90 dark:to-blue-950/20">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Supported Currencies</span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                40+ Available
              </span>
            </div>

            {/* Currency Grid */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { code: "USD", symbol: "$", flag: "🇺🇸", name: "US Dollar" },
                { code: "EUR", symbol: "€", flag: "🇪🇺", name: "Euro" },
                { code: "GBP", symbol: "£", flag: "🇬🇧", name: "British Pound" },
                { code: "CAD", symbol: "C$", flag: "🇨🇦", name: "Canadian Dollar" },
                { code: "AUD", symbol: "A$", flag: "🇦🇺", name: "Australian Dollar" },
                { code: "JPY", symbol: "¥", flag: "🇯🇵", name: "Japanese Yen" },
                { code: "CHF", symbol: "₣", flag: "🇨🇭", name: "Swiss Franc" },
                { code: "SGD", symbol: "S$", flag: "🇸🇬", name: "Singapore Dollar" },
              ].map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setActiveCurrency(curr.code)}
                  className={`flex flex-col items-center justify-center rounded-xl border p-2.5 transition-all duration-200 ${
                    activeCurrency === curr.code
                      ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-300"
                      : "border-gray-100 bg-white/80 text-gray-700 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-800/80 dark:text-gray-300"
                  }`}
                >
                  <span className="text-base">{curr.flag}</span>
                  <span className="mt-1 text-xs font-bold">{curr.code}</span>
                  <span className="text-[10px] opacity-75">{curr.symbol}</span>
                </button>
              ))}
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-200/60 pt-3 text-center dark:border-gray-800">
              <div>
                <div className="text-base font-bold text-gray-900 dark:text-white">40+</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">Currencies</div>
              </div>
              <div>
                <div className="text-base font-bold text-gray-900 dark:text-white">180+</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">Liquidity</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="group mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          href="/feature"
          className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
        >
          <span>Learn More</span>
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
        </Link>
      </motion.div>
    </>
  )
}

export default FeatureSection
