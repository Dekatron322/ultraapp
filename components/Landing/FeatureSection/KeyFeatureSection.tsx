"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import AppleIcon from "public/icons/Apple"
import GooglePlayIcon from "public/icons/GooglePlay"
import { 
  FiArrowUpRight, 
  FiArrowDownLeft, 
  FiRepeat, 
  FiShield, 
  FiCheck, 
  FiGlobe, 
  FiTrendingUp, 
  FiZap, 
  FiLock,
  FiSend,
  FiClock,
  FiActivity,
  FiChevronRight
} from "react-icons/fi"
import { TbBuildingBank, TbWorldUpload } from "react-icons/tb"
import { RiExchangeDollarLine } from "react-icons/ri"
import { HiOutlineSparkles } from "react-icons/hi"

interface DownloadAppModalProps {
  isOpen: boolean
  onClose: () => void
}

const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const smartDownloadUrl = "https://qr-code-sand-seven.vercel.app/"
  const appStoreUrl = "https://apps.apple.com/app/ultra-app/id6450269232"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.ahmadhabib.ultraappfrontend"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl dark:border-gray-800 dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800"
        >
          ✕
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Download Ultra App</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Scan the QR code to get the app immediately</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="mx-auto mb-3 flex size-44 items-center justify-center">
                <Image
                  src="/qr-code.png"
                  alt="QR Code for Ultra App Download"
                  width={176}
                  height={176}
                  className="size-full object-contain"
                  onError={(e) => {
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
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Scan with your phone camera</p>
            </div>
          </div>

          <div className="flex w-full gap-3 max-sm:flex-col">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-black px-4 py-3 text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-black px-4 py-3 text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-[10px] leading-tight opacity-80">Get it on</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Available on iOS & Android • Auto-detects device</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface FeatureSectionProps {
  currentTheme: string | undefined
}

const KeyFeatureSection = ({ currentTheme: propTheme }: FeatureSectionProps) => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = resolvedTheme || theme || propTheme || "light"
  const isDark = mounted ? currentTheme === "dark" : propTheme === "dark"

  // Interactive state for tabs / preview
  const [activeCurrency, setActiveCurrency] = useState<"USD" | "EUR" | "GBP" | "CAD">("USD")
  const [fxAmount, setFxAmount] = useState<number>(2500)

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  const currenciesData = {
    USD: { symbol: "$", balance: "48,250.00", flag: "🇺🇸", change: "+14.8%", rate: "1.0000", iban: "US49 •••• 8820" },
    EUR: { symbol: "€", balance: "32,180.50", flag: "🇪🇺", change: "+9.2%", rate: "0.9245", iban: "DE89 •••• 0532" },
    GBP: { symbol: "£", balance: "19,840.20", flag: "🇬🇧", change: "+16.5%", rate: "0.7890", iban: "GB29 •••• 1331" },
    CAD: { symbol: "CA$", balance: "14,600.00", flag: "🇨🇦", change: "+6.4%", rate: "1.3720", iban: "CA12 •••• 9982" },
  }

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-16 sm:px-6 md:py-24">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="size-[600px] rounded-full bg-blue-600/15 blur-[140px]" />
      </div>

      {/* Header Tag & Title */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-300 shadow-sm">
          {isDark ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
          <span className="text-xs font-semibold uppercase tracking-wider">Key Features</span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[46px] leading-tight">
          Boost your finances with <span className="crypto-text">UltraApp</span>
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          Everything you need to manage, exchange, and move your money globally with institutional precision and speed.
        </p>
      </motion.div>

      {/* 4-Card Bento Grid */}
      <div className="relative z-10 mt-14 grid w-full max-w-[1200px] gap-8 md:grid-cols-2">
        
        {/* =========================================================================
            CARD 1: Multi-Currency Accounts
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800/80 bg-[#0d1527]/90 hover:border-blue-500/40 shadow-xl"
              : "border-gray-200/90 bg-white/90 hover:border-blue-300 shadow-lg hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                <TbBuildingBank className="text-2xl" />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                <span className="size-1.5 rounded-full bg-blue-500" />
                Dedicated IBANs
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
              Multi-Currency Accounts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Hold, receive, and manage funds in USD, EUR, GBP, and CAD with dedicated local routing details, real-time analytics, and zero maintenance fees.
            </p>
          </div>

          {/* Interactive UI Display */}
          <div className="mt-6 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4 dark:border-gray-800 dark:bg-gray-900/70">
            {/* Currency Selector Pills */}
            <div className="flex gap-1.5 rounded-xl bg-gray-200/60 p-1 dark:bg-gray-800/80">
              {(["USD", "EUR", "GBP", "CAD"] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setActiveCurrency(curr)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-bold transition-all ${
                    activeCurrency === curr
                      ? "bg-white text-blue-600 shadow-sm dark:bg-gray-700 dark:text-white"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  <span>{currenciesData[curr].flag}</span>
                  <span>{curr}</span>
                </button>
              ))}
            </div>

            {/* Account Card Preview */}
            <div className="mt-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-[#0c1322]">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Total Balance ({activeCurrency})</span>
                <span className="font-semibold text-emerald-500">{currenciesData[activeCurrency].change}</span>
              </div>
              <div className="mt-1 text-2xl font-extrabold text-gray-900 dark:text-white">
                {currenciesData[activeCurrency].symbol} {currenciesData[activeCurrency].balance}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2 text-xs font-mono text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <span>{currenciesData[activeCurrency].iban}</span>
                <span className="flex items-center gap-1 text-[11px] font-sans font-semibold text-blue-600 dark:text-blue-400">
                  <FiCheck /> Active & Verified
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 2: Instant Currency Exchange
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800/80 bg-[#0d1527]/90 hover:border-emerald-500/40 shadow-xl"
              : "border-gray-200/90 bg-white/90 hover:border-emerald-300 shadow-lg hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                <RiExchangeDollarLine className="text-2xl" />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                <span className="size-1.5 animate-ping rounded-full bg-emerald-500" />
                Live Mid-Market
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
              Instant Currency Exchange
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Convert between multiple global currencies instantly with transparent exchange rates, zero hidden markups, and sub-second settlement.
            </p>
          </div>

          {/* FX Converter Preview */}
          <div className="mt-6 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4 dark:border-gray-800 dark:bg-gray-900/70">
            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-[#0c1322]">
              <div>
                <span className="text-[11px] font-medium text-gray-400">You Send</span>
                <p className="text-lg font-bold text-gray-900 dark:text-white">${fxAmount.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                <span>🇺🇸</span>
                <span>USD</span>
              </div>
            </div>

            {/* Rate Ticker Bar */}
            <div className="my-2 flex items-center justify-between px-2 text-xs font-medium text-gray-500 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400">1 USD = 0.9245 EUR</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">0% Markup</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-[#0c1322]">
              <div>
                <span className="text-[11px] font-medium text-gray-400">You Receive (Instant)</span>
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  €{(fxAmount * 0.9245).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                <span>🇪🇺</span>
                <span>EUR</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 3: Cross-Border Payments
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800/80 bg-[#0d1527]/90 hover:border-indigo-500/40 shadow-xl"
              : "border-gray-200/90 bg-white/90 hover:border-indigo-300 shadow-lg hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                <TbWorldUpload className="text-2xl" />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                <FiZap className="text-xs" />
                Instant Rails
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
              Cross-Border Payments
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Send and receive funds worldwide with automated clearing network routing, instant local currency settlement, and end-to-end tracking.
            </p>
          </div>

          {/* Route & Status Visualizer */}
          <div className="mt-6 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4 dark:border-gray-800 dark:bg-gray-900/70">
            <div className="flex items-center justify-between border-b border-gray-200/60 pb-3 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇺🇸</span>
                <div>
                  <p className="text-[10px] text-gray-400">From</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">New York (USD)</p>
                </div>
              </div>
              <div className="flex items-center px-2 text-blue-500">
                <div className="h-0.5 w-6 bg-blue-500 sm:w-10" />
                <FiZap className="mx-1 text-xs" />
                <div className="h-0.5 w-6 bg-emerald-500 sm:w-10" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇬🇧</span>
                <div>
                  <p className="text-[10px] text-gray-400">To</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">London (GBP)</p>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm dark:bg-[#0c1322]">
              <div className="flex items-center gap-2.5">
                <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                  <FiCheck />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Settlement Complete</p>
                  <p className="text-[10px] text-gray-400">Delivered via Faster Payments</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">&lt; 0.8s</span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 4: Global Currency Support
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800/80 bg-[#0d1527]/90 hover:border-purple-500/40 shadow-xl"
              : "border-gray-200/90 bg-white/90 hover:border-purple-300 shadow-lg hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                <FiGlobe className="text-2xl" />
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                <FiActivity className="text-xs" />
                160+ Countries
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
              Global Currency Support
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Access seamless multi-currency support and real-time transaction updates across 160+ countries and 50+ currencies with institutional liquidity depth.
            </p>
          </div>

          {/* Currency Matrix Node Preview */}
          <div className="mt-6 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4 dark:border-gray-800 dark:bg-gray-900/70">
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: "USD", flag: "🇺🇸", status: "Instant" },
                { code: "EUR", flag: "🇪🇺", status: "Instant" },
                { code: "GBP", flag: "🇬🇧", status: "Instant" },
                { code: "CAD", flag: "🇨🇦", status: "Instant" },
                { code: "NGN", flag: "🇳🇬", status: "Instant" },
                { code: "AED", flag: "🇦🇪", status: "Instant" },
              ].map((item) => (
                <div
                  key={item.code}
                  className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-2 text-xs font-bold text-gray-800 shadow-sm dark:border-gray-800 dark:bg-[#0c1322] dark:text-gray-200"
                >
                  <span className="flex items-center gap-1">
                    <span>{item.flag}</span>
                    <span>{item.code}</span>
                  </span>
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-gray-200/60 pt-2 text-[11px] text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <span>Network Uptime: <strong className="text-emerald-500">99.99%</strong></span>
              <span>Supported: <strong className="text-blue-500">50+ Currencies</strong></span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Primary CTA Button */}
      <motion.div
        className="group my-16 max-md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => setIsDownloadModalOpen(true)}
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

      {/* Download App Modal */}
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </section>
  )
}

export default KeyFeatureSection
