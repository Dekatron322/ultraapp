"use client"
import { motion } from "framer-motion"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useState } from "react"

interface CoreValuesProps {
  currentTheme: string | undefined
}

export default function CoreValues({ currentTheme }: CoreValuesProps) {
  const isDark = currentTheme === "dark"
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  }

  const coreValues = [
    {
      id: "01",
      tag: "MISSION",
      title: "Customer First",
      desc: "Our users are at the center of every architectural decision. From instant onboarding to 24/7 dedicated support, we build tools that empower your daily financial life.",
      accent: "from-blue-500/20 to-cyan-500/20",
      iconBg: isDark ? "bg-blue-500/10 text-blue-400 border-blue-500/30" : "bg-blue-50 text-blue-600 border-blue-200",
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "02",
      tag: "INTEGRITY",
      title: "Radical Transparency",
      desc: "We believe in upfront, transparent pricing with zero hidden margins. Real-time exchange rates and verifiable fee breakdowns give you absolute financial confidence.",
      accent: "from-emerald-500/20 to-teal-500/20",
      iconBg: isDark ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-emerald-50 text-emerald-600 border-emerald-200",
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "03",
      tag: "SPEED",
      title: "High Efficiency",
      desc: "Eliminating the lag of legacy banking rails. Automated currency routing and real-time settlement engines ensure your transfers clear in seconds, not days.",
      accent: "from-amber-500/20 to-orange-500/20",
      iconBg: isDark ? "bg-amber-500/10 text-amber-400 border-amber-500/30" : "bg-amber-50 text-amber-600 border-amber-200",
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "04",
      tag: "COMMUNITY",
      title: "Global Collaboration",
      desc: "Financial freedom thrives on connection. We partner with tier-1 liquidity providers and banking networks worldwide to deliver uninterrupted international reach.",
      accent: "from-purple-500/20 to-pink-500/20",
      iconBg: isDark ? "bg-purple-500/10 text-purple-400 border-purple-500/30" : "bg-purple-50 text-purple-600 border-purple-200",
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "05",
      tag: "TRUST",
      title: "Security by Default",
      desc: "Multi-layered defence systems, 256-bit encryption, biometric authorization, and continuous compliance monitoring keep your capital and identity fully safeguarded.",
      accent: "from-indigo-500/20 to-blue-500/20",
      iconBg: isDark ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30" : "bg-indigo-50 text-indigo-600 border-indigo-200",
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: "06",
      tag: "ACCESS",
      title: "Borderless Freedom",
      desc: "Democratizing worldwide finance. Manage 40+ currencies, spend with virtual cards, and execute international settlements effortlessly from anywhere on earth.",
      accent: "from-cyan-500/20 to-emerald-500/20",
      iconBg: isDark ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" : "bg-cyan-50 text-cyan-600 border-cyan-200",
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { label: "Platform Availability", value: "99.99%", sub: "Enterprise Grade" },
    { label: "Global Currencies", value: "40+", sub: "Instant Conversion" },
    { label: "Data Encryption", value: "256-Bit", sub: "Bank-Grade Security" },
    { label: "Average Settlement", value: "< 2s", sub: "Real-Time Rails" },
  ]

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="size-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={fadeInUp}>
            <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-300">
              {isDark ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
              <span className="text-xs font-semibold uppercase tracking-wider">Core Values</span>
            </div>
          </motion.div>

          <motion.h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            variants={fadeInUp}
          >
            Our Core Values Guide <span className="crypto-text">Everything</span>
          </motion.h2>

          <motion.p
            className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            variants={fadeInUp}
          >
            The foundational principles that shape our infrastructure, our security protocols, and our commitment to seamless global finance.
          </motion.p>
        </motion.div>

        {/* 6-Card Values Grid */}
        <motion.div
          className="mt-12 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coreValues.map((item, idx) => {
            const isHovered = hoveredIdx === idx
            return (
              <motion.div
                key={item.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                  isDark
                    ? "border-gray-800 bg-[#0d1527]/90 hover:border-gray-700 hover:bg-[#111c34] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                    : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-xl shadow-sm"
                }`}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Subtle top background glow */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br ${item.accent} blur-2xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10">
                  {/* Top Row: Icon + Number Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          isDark
                            ? "bg-gray-800/80 text-gray-400 border border-gray-700/60"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className={`text-xs font-mono font-semibold ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                        {item.id}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`mt-6 text-xl font-bold tracking-tight transition-colors duration-200 ${
                      isDark ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm md:text-base leading-relaxed ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent indicator line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs font-medium">
                  <span className={isDark ? "text-gray-500" : "text-gray-400"}>Core Standard</span>
                  <div className="flex items-center gap-1 text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                    <span>Explore</span>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Metrics / Trust Strip */}
        <motion.div
          className={`mt-14 w-full rounded-2xl border p-6 md:p-8 backdrop-blur-md ${
            isDark
              ? "border-gray-800 bg-[#0c1322]/80 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
              : "border-gray-200 bg-gray-50/90 shadow-sm"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-gray-200 dark:md:divide-gray-800">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? "md:pl-6" : ""}`}>
                <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className={`mt-1 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {stat.label}
                </span>
                <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


