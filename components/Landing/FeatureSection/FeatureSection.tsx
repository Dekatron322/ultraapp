"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useState } from "react"

interface FeatureSectionProps {
  currentTheme: string | undefined
}

// Precision Rounded Flag Component for crisp rendering in both dark and light modes
export function RoundedFlag({ code, size = "size-5", className = "" }: { code: string; size?: string; className?: string }) {
  const clipId = `rounded-flag-${code.toLowerCase()}`
  
  switch (code) {
    case "USD":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-usd`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-usd)`}>
            <rect width="32" height="32" fill="#B22234" />
            <path d="M0 4.92h32M0 9.85h32M0 14.77h32M0 19.69h32M0 24.62h32M0 29.54h32" stroke="#FFFFFF" strokeWidth="2.46" />
            <rect width="14" height="15" fill="#3C3B6E" />
            <circle cx="3.5" cy="3.7" r="0.9" fill="#FFF" />
            <circle cx="7" cy="3.7" r="0.9" fill="#FFF" />
            <circle cx="10.5" cy="3.7" r="0.9" fill="#FFF" />
            <circle cx="5.25" cy="7.4" r="0.9" fill="#FFF" />
            <circle cx="8.75" cy="7.4" r="0.9" fill="#FFF" />
            <circle cx="3.5" cy="11.1" r="0.9" fill="#FFF" />
            <circle cx="7" cy="11.1" r="0.9" fill="#FFF" />
            <circle cx="10.5" cy="11.1" r="0.9" fill="#FFF" />
          </g>
        </svg>
      )
    case "EUR":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-eur`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-eur)`}>
            <rect width="32" height="32" fill="#003399" />
            <g fill="#FFCC00" transform="translate(16,16) scale(0.68)">
              <circle cx="0" cy="-12" r="1.5" />
              <circle cx="6" cy="-10.4" r="1.5" />
              <circle cx="10.4" cy="-6" r="1.5" />
              <circle cx="12" cy="0" r="1.5" />
              <circle cx="10.4" cy="6" r="1.5" />
              <circle cx="6" cy="10.4" r="1.5" />
              <circle cx="0" cy="12" r="1.5" />
              <circle cx="-6" cy="10.4" r="1.5" />
              <circle cx="-10.4" cy="6" r="1.5" />
              <circle cx="-12" cy="0" r="1.5" />
              <circle cx="-10.4" cy="-6" r="1.5" />
              <circle cx="-6" cy="-10.4" r="1.5" />
            </g>
          </g>
        </svg>
      )
    case "GBP":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-gbp`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-gbp)`}>
            <rect width="32" height="32" fill="#012169" />
            <path d="M0 0L32 32M32 0L0 32" stroke="#FFFFFF" strokeWidth="4.5" />
            <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2" />
            <path d="M16 0V32M0 16H32" stroke="#FFFFFF" strokeWidth="7" />
            <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="4.2" />
          </g>
        </svg>
      )
    case "CAD":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-cad`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-cad)`}>
            <rect width="32" height="32" fill="#FFFFFF" />
            <rect width="8.5" height="32" fill="#FF0000" />
            <rect x="23.5" width="8.5" height="32" fill="#FF0000" />
            <path d="M16 8l1.5 3.5 3.5-.8-1.5 3.3 3.5 2.5-4 .8.5 4.5-3.5-2.5-3.5 2.5.5-4.5-4-.8 3.5-2.5-1.5-3.3 3.5.8z" fill="#FF0000" />
            <path d="M15.3 22h1.4v4h-1.4z" fill="#FF0000" />
          </g>
        </svg>
      )
    case "JPY":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-jpy`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-jpy)`}>
            <rect width="32" height="32" fill="#FFFFFF" />
            <circle cx="16" cy="16" r="8" fill="#BC002D" />
          </g>
        </svg>
      )
    case "AUD":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-aud`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-aud)`}>
            <rect width="32" height="32" fill="#00008B" />
            <path d="M0 0L16 16M16 0L0 16" stroke="#FFF" strokeWidth="2.5" />
            <path d="M8 0V16M0 8H16" stroke="#FFF" strokeWidth="4" />
            <path d="M8 0V16M0 8H16" stroke="#C8102E" strokeWidth="2.5" />
            <circle cx="24" cy="8" r="1.5" fill="#FFF" />
            <circle cx="26" cy="14" r="1.5" fill="#FFF" />
            <circle cx="22" cy="18" r="1.5" fill="#FFF" />
            <circle cx="25" cy="24" r="1.5" fill="#FFF" />
            <circle cx="10" cy="24" r="2.5" fill="#FFF" />
          </g>
        </svg>
      )
    case "CHF":
      return (
        <svg className={`${size} shrink-0 rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/20 ${className}`} viewBox="0 0 32 32">
          <defs>
            <clipPath id={`${clipId}-chf`}>
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId}-chf)`}>
            <rect width="32" height="32" fill="#D52B1E" />
            <rect x="13.5" y="7" width="5" height="18" fill="#FFFFFF" rx="0.5" />
            <rect x="7" y="13.5" width="18" height="5" fill="#FFFFFF" rx="0.5" />
          </g>
        </svg>
      )
    default:
      return (
        <div className={`${size} rounded-full bg-blue-600 text-[10px] font-bold text-white flex items-center justify-center ring-1 ring-black/10 dark:ring-white/20 ${className}`}>
          {code.slice(0, 2)}
        </div>
      )
  }
}

const FeatureSection = ({ currentTheme }: FeatureSectionProps) => {
  const isDark = currentTheme === "dark"

  // Card 1: Virtual Card States
  const [isCardFrozen, setIsCardFrozen] = useState(false)
  const [showCardNumber, setShowCardNumber] = useState(false)

  // Card 2: Multi-Currency Wallet States
  const [selectedWallet, setSelectedWallet] = useState<"USD" | "EUR" | "GBP" | "CAD">("USD")

  // Card 3: Interactive FX Converter States
  const [swapAmount, setSwapAmount] = useState<string>("2,500")
  const [fromCurr, setFromCurr] = useState<"USD" | "EUR" | "GBP">("USD")
  const [toCurr, setToCurr] = useState<"EUR" | "GBP" | "USD">("EUR")
  const [isSwapping, setIsSwapping] = useState(false)

  const rates: Record<string, Record<string, number>> = {
    USD: { EUR: 0.924, GBP: 0.789, USD: 1.0 },
    EUR: { USD: 1.082, GBP: 0.854, EUR: 1.0 },
    GBP: { USD: 1.267, EUR: 1.171, GBP: 1.0 },
  }

  const handleSwapCurrencies = () => {
    setIsSwapping(true)
    const temp = fromCurr
    setFromCurr(toCurr as any)
    setToCurr(temp as any)
    setTimeout(() => setIsSwapping(false), 300)
  }

  const numericAmount = parseFloat(swapAmount.replace(/,/g, "")) || 0
  const rate = rates[fromCurr]?.[toCurr] || 1
  const convertedAmount = (numericAmount * rate).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

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

  const cardHover = {
    initial: { y: 0 },
    hover: {
      y: -6,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 4, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  const walletData = {
    USD: {
      balance: "$48,250.00",
      change: "+4.2% this week",
      iban: "US91 ULTR 0021 8840 19",
      currencyName: "US Dollar",
      symbol: "$",
    },
    EUR: {
      balance: "€32,180.50",
      change: "+2.8% this week",
      iban: "DE89 ULTR 0042 1982 77",
      currencyName: "Euro",
      symbol: "€",
    },
    GBP: {
      balance: "£14,640.00",
      change: "+1.9% this week",
      iban: "GB82 ULTR 0048 2901 88",
      currencyName: "British Pound",
      symbol: "£",
    },
    CAD: {
      balance: "C$9,800.00",
      change: "+3.1% this week",
      iban: "CA12 ULTR 0098 7741 23",
      currencyName: "Canadian Dollar",
      symbol: "C$",
    },
  }

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="size-[650px] rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      {/* Section Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-300">
          {isDark ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
          <span className="text-xs font-semibold uppercase tracking-wider">Next-Gen Architecture</span>
        </div>

        <h2
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Explore Our Innovative Financial <span className="crypto-text">Solutions</span>
        </h2>

        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          A unified, high-performance financial operating system designed for frictionless borderless money management.
        </p>
      </motion.div>

      {/* 4-Pillar Interactive Bento Grid */}
      <div className="relative z-10 mt-14 grid w-full max-w-[1240px] gap-6 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
        {/* CARD 1: Ultra Virtual Card & Tap-to-Pay */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className={`group flex flex-col justify-between overflow-hidden rounded-3xl border p-6 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800 bg-[#0d1527] hover:border-blue-500/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "border-gray-200 bg-white hover:border-blue-300 shadow-md hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-500/20">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Tap & Pay Enabled
              </span>
            </div>

            <h3 className={`mt-5 text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Ultra Virtual Debit Card
            </h3>
            <p className={`mt-2 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Issue instant virtual debit cards with granular spending limits, one-tap freezing, and seamless Apple Pay & Google Pay compatibility.
            </p>
          </div>

          {/* Interactive Card Widget */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-br from-gray-900 via-[#0e172a] to-blue-950 p-6 text-white shadow-xl dark:border-gray-800">
            {/* Glossy Virtual Card Face */}
            <div className="relative flex flex-col justify-between rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-700 to-cyan-500 p-5 shadow-2xl">
              {/* Top Row: Chip & Contactless */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-md bg-amber-300/80 border border-amber-200 shadow-inner flex items-center justify-center">
                    <div className="size-5 rounded border border-amber-500/50"></div>
                  </div>
                  <svg className="size-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <span className="font-extrabold tracking-widest text-lg italic text-white/90">ULTRA</span>
              </div>

              {/* Card Number */}
              <div className="my-5 flex items-center justify-between">
                <div className="font-mono text-base sm:text-lg tracking-widest font-semibold">
                  {showCardNumber ? "4829 • 1084 • 9920 • 8829" : "•••• •••• •••• 8829"}
                </div>
                <button
                  onClick={() => setShowCardNumber(!showCardNumber)}
                  className="rounded-lg bg-white/10 px-2 py-1 text-[11px] font-medium hover:bg-white/20 transition-colors"
                >
                  {showCardNumber ? "Hide" : "Reveal"}
                </button>
              </div>

              {/* Bottom Card Row */}
              <div className="flex items-end justify-between text-xs">
                <div>
                  <div className="text-[10px] uppercase text-white/70">Cardholder</div>
                  <div className="font-semibold tracking-wider">GLOBAL CITIZEN</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-white/70">Expires</div>
                  <div className="font-semibold">08/29</div>
                </div>
                <div className="flex items-center gap-1 font-bold text-sm tracking-tighter">
                  <span className="size-5 rounded-full bg-red-500/90 inline-block -mr-2"></span>
                  <span className="size-5 rounded-full bg-amber-400/90 inline-block"></span>
                </div>
              </div>
            </div>

            {/* Quick Card Controls */}
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
              <div className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${isCardFrozen ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`}></span>
                <span className="text-gray-300">Status: <strong className="text-white">{isCardFrozen ? "Frozen" : "Active"}</strong></span>
              </div>
              <button
                onClick={() => setIsCardFrozen(!isCardFrozen)}
                className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                  isCardFrozen
                    ? "bg-emerald-600 text-white hover:bg-emerald-500"
                    : "bg-white/10 text-gray-200 hover:bg-red-500/80 hover:text-white"
                }`}
              >
                {isCardFrozen ? "Unfreeze Card" : "Freeze Card"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Multi-Currency Global Accounts */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className={`group flex flex-col justify-between overflow-hidden rounded-3xl border p-6 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800 bg-[#0d1527] hover:border-blue-500/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "border-gray-200 bg-white hover:border-blue-300 shadow-md hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border border-indigo-500/20">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Dedicated IBANs
              </span>
            </div>

            <h3 className={`mt-5 text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Multi-Currency Global Accounts
            </h3>
            <p className={`mt-2 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Hold, receive, and manage funds in 50+ currencies with native account numbers, local clearing rails, and zero maintenance fees.
            </p>
          </div>

          {/* Interactive Account Switcher Widget */}
          <div className="mt-8 rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-[#111c34]">
            {/* Wallet Selector Pills with Rounded Flags */}
            <div className="grid grid-cols-4 gap-2">
              {(["USD", "EUR", "GBP", "CAD"] as const).map((curr) => {
                const isActive = selectedWallet === curr
                return (
                  <button
                    key={curr}
                    onClick={() => setSelectedWallet(curr)}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2 px-1 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                        : isDark
                        ? "bg-[#0d1527] text-gray-300 border border-gray-700/60 hover:bg-gray-800"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <RoundedFlag code={curr} size="size-4" />
                    <span>{curr}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Account Overview */}
            <div className="mt-4 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm dark:border-gray-700/60 dark:bg-[#0d1527]">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Available Balance ({selectedWallet})</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{walletData[selectedWallet].change}</span>
              </div>
              <div className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {walletData[selectedWallet].balance}
              </div>

              {/* Dedicated Account details */}
              <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-xs font-mono text-gray-700 dark:bg-[#15223e] dark:text-gray-200 border border-gray-100 dark:border-gray-700/40">
                <span>{walletData[selectedWallet].iban}</span>
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-900/80 dark:text-blue-300 font-sans">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Sub-account metrics */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 px-1">
              <span>Local Clearing: <strong className="text-gray-800 dark:text-gray-200">ACH, SEPA, FPS</strong></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Instant Inbound</span>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Instant Currency Exchange */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className={`group flex flex-col justify-between overflow-hidden rounded-3xl border p-6 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800 bg-[#0d1527] hover:border-blue-500/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "border-gray-200 bg-white hover:border-blue-300 shadow-md hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 border border-cyan-500/20">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Interbank Rates
              </span>
            </div>

            <h3 className={`mt-5 text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Instant Currency Exchange
            </h3>
            <p className={`mt-2 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Convert between global currencies at true interbank exchange rates with zero hidden markups and sub-second settlement.
            </p>
          </div>

          {/* Interactive Swap Calculator */}
          <div className="mt-8 space-y-3 rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-[#111c34]">
            {/* From Box */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-3.5 shadow-sm dark:border-gray-700/70 dark:bg-[#0d1527]">
              <div className="w-2/3">
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">You convert</span>
                <input
                  type="text"
                  value={swapAmount}
                  onChange={(e) => setSwapAmount(e.target.value)}
                  className="w-full bg-transparent text-xl font-extrabold text-gray-900 dark:text-white outline-none"
                  placeholder="0.00"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-800 dark:border-gray-700 dark:bg-[#162340] dark:text-gray-100 shadow-sm">
                <RoundedFlag code={fromCurr} size="size-5" />
                <span>{fromCurr}</span>
              </div>
            </div>

            {/* Flip / Exchange Rate Indicator */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span className="size-2 rounded-full bg-blue-500"></span>
                <span>1 {fromCurr} = {rate} {toCurr}</span>
              </div>
              <button
                onClick={handleSwapCurrencies}
                className={`flex size-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform duration-300 hover:scale-110 active:scale-95 ${
                  isSwapping ? "rotate-180" : ""
                }`}
                title="Swap Direction"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">0% Spread</span>
            </div>

            {/* To Box */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-3.5 shadow-sm dark:border-gray-700/70 dark:bg-[#0d1527]">
              <div>
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">You receive</span>
                <div className="text-xl font-extrabold text-gray-900 dark:text-white">
                  {convertedAmount}
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-800 dark:border-gray-700 dark:bg-[#162340] dark:text-gray-100 shadow-sm">
                <RoundedFlag code={toCurr} size="size-5" />
                <span>{toCurr}</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200/60 pt-2 text-[11px] text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <span>Execution Speed: <strong className="text-blue-600 dark:text-blue-400">&lt; 1.2s (Instant)</strong></span>
              <span>Network Fee: <strong className="text-emerald-600 dark:text-emerald-400">$0.00</strong></span>
            </div>
          </div>
        </motion.div>

        {/* CARD 4: Cross-Border Settlement Rails */}
        <motion.div
          variants={cardHover}
          initial="initial"
          whileHover="hover"
          className={`group flex flex-col justify-between overflow-hidden rounded-3xl border p-6 md:p-8 transition-all duration-300 ${
            isDark
              ? "border-gray-800 bg-[#0d1527] hover:border-blue-500/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "border-gray-200 bg-white hover:border-blue-300 shadow-md hover:shadow-xl"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/20">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                180+ Countries
              </span>
            </div>

            <h3 className={`mt-5 text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Autonomous Cross-Border Rails
            </h3>
            <p className={`mt-2 text-sm md:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Direct routing through SEPA Instant, UK Faster Payments, and SWIFT eliminates intermediary bank delays and exorbitant fees.
            </p>
          </div>

          {/* Interactive Settlement Pipeline Monitor */}
          <div className="mt-8 space-y-3 rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-[#111c34]">
            {/* Live Pipeline Rail Steps */}
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Live Transaction Pipeline
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Clearing Online
              </span>
            </div>

            {/* Transfer 1: London to Frankfurt */}
            <div className="rounded-xl border border-gray-200/70 bg-white p-3.5 shadow-sm dark:border-gray-700/60 dark:bg-[#0d1527]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RoundedFlag code="GBP" size="size-7" />
                  <div>
                    <div className="text-xs font-bold text-gray-900 dark:text-white">London &rarr; Frankfurt</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400">SEPA Instant Settlement Rail</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">€24,500.00</div>
                  <div className="text-[10px] font-medium text-blue-600 dark:text-blue-400">⚡ Cleared in 1.4s</div>
                </div>
              </div>
            </div>

            {/* Transfer 2: New York to Tokyo */}
            <div className="rounded-xl border border-gray-200/70 bg-white p-3.5 shadow-sm dark:border-gray-700/60 dark:bg-[#0d1527]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RoundedFlag code="USD" size="size-7" />
                  <div>
                    <div className="text-xs font-bold text-gray-900 dark:text-white">New York &rarr; Tokyo</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Direct Zengin Interbank Gateway</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-extrabold text-gray-900 dark:text-white">$12,800.00</div>
                  <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">✓ Settled</div>
                </div>
              </div>
            </div>

            {/* Rail Indicators */}
            <div className="flex items-center justify-between border-t border-gray-200/60 pt-2 text-[11px] text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <span>Security: <strong className="text-gray-800 dark:text-gray-200">256-Bit Bank Grade</strong></span>
              <span>Uptime: <strong className="text-emerald-600 dark:text-emerald-400">99.99%</strong></span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="group mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          href="/feature"
          className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
        >
          <span>Explore All Features</span>
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
    </section>
  )
}

export default FeatureSection
