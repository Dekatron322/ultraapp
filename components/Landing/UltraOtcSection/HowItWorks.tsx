"use client"
import { motion } from "framer-motion"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import { useState } from "react"
import Link from "next/link"

interface HowItWorksProps {
  currentTheme: string | undefined
}

export default function HowItWorks({ currentTheme }: HowItWorksProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
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
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  return (
    <div
      className={`w-full py-20 px-4 transition-colors duration-300 ${isDark ? "bg-[#060b14]" : "bg-gray-50/70"
        }`}
    >
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} isDark={isDark} />

      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={fadeInUp}>
            <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-500 max-sm:text-xs">
              {isDark ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
              <span>How It Works</span>
            </div>
          </motion.div>

          <motion.h2
            className={`text-[46px] font-bold leading-[1.2] max-sm:text-3xl ${isDark ? "text-white" : "text-gray-900"
              }`}
            variants={fadeInUp}
          >
            How Ultra OTC <span className="crypto-text">Works</span>
          </motion.h2>

          <motion.p
            className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${isDark ? "text-gray-400" : "text-gray-600"
              }`}
            variants={fadeInUp}
          >
            Choose your preferred execution pathway based on your privacy requirements and transaction volume. Both pathways deliver institutional-grade execution with zero slippage.
          </motion.p>
        </motion.div>

        {/* Execution Pathways Grid */}
        <motion.div
          className="mt-14 grid w-full gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pathway 1: Private Concierge Desk */}
          <motion.div
            className={`relative flex flex-col justify-between rounded-3xl border p-8 md:p-10 transition-all duration-300 ${isDark
                ? "border-gray-800 bg-[#0c1322] shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-gray-700"
                : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-xl"
              }`}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500 dark:bg-blue-500/20 dark:text-blue-400">
                    Pathway 01
                  </span>
                  <h3 className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Private Concierge Desk
                  </h3>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>

              {/* Steps */}
              <div className="mt-8 space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-500/20">
                    1
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Secure Initial Contact
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Reach out directly via{" "}
                      <Link className="font-medium text-blue-500 hover:underline dark:text-blue-400" href="mailto:otc@ultraapp.co">
                        otc@ultraapp.co
                      </Link>{" "}
                      or submit our encrypted desk form without public disclosure.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-500/20">
                    2
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Dedicated Desk Assignment
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      A senior OTC relationship manager is assigned to formulate custom quotes, lock fixed pricing, and structure your trade.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-500/20">
                    3
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Private Execution & Settlement
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Execute with total discretion and zero slippage. Funds settle rapidly into your designated account.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 px-6 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700"
              >
                <span>Initiate Private Desk</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M4.166 10h11.667M10.833 5l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Pathway 2: Institutional Suite Access */}
          <motion.div
            className={`relative flex flex-col justify-between rounded-3xl border p-8 md:p-10 transition-all duration-300 ${isDark
                ? "border-gray-800 bg-[#0c1322] shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-gray-700"
                : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-xl"
              }`}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400">
                    Pathway 02
                  </span>
                  <h3 className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Institutional Suite Access
                  </h3>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
              </div>

              {/* Steps */}
              <div className="mt-8 space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-md shadow-emerald-500/20">
                    1
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Streamlined Verification
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Complete fast-track institutional compliance onboarding to access higher transaction limits and enhanced capabilities.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-md shadow-emerald-500/20">
                    2
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Advanced Financial Instruments
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Gain seamless access to forward contracts, automated spot execution, custom currency swaps, and tailored hedging tools.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-md shadow-emerald-500/20">
                    3
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Scale & Direct Settlement
                    </h4>
                    <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Benefit from high-capacity volume limits, audit-ready reporting, automated reconciliation, and prioritized delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 px-6 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-700"
              >
                <span>Access Institutional Suite</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M4.166 10h11.667M10.833 5l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Contact Modal Component
interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  isDark?: boolean
}

enum InquiryType {
  General = 0,
  Technical = 1,
  Sales = 2,
  Partnership = 3,
  Otc = 4,
  Other = 5,
}

function ContactModal({ isOpen, onClose, isDark }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiryType: InquiryType.Otc,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isInquiryTypeOpen, setIsInquiryTypeOpen] = useState(false)

  const inquiryOptions = [
    { value: InquiryType.Otc, label: "OTC Desk Execution" },
    { value: InquiryType.Sales, label: "Institutional Sales" },
    { value: InquiryType.Partnership, label: "Partnership & Liquidity" },
    { value: InquiryType.Technical, label: "Technical Support" },
    { value: InquiryType.General, label: "General Inquiry" },
    { value: InquiryType.Other, label: "Other" },
  ]

  const selectedInquiryOption =
    inquiryOptions.find((option) => option.value === formData.inquiryType) ?? inquiryOptions[0]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "inquiryType" ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("https://ultra-service-79baffa4bc31.herokuapp.com/ContactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          inquiryType: InquiryType.Otc,
          message: "",
        })
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setSubmitStatus("error")
        setErrorMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className={`relative w-full max-w-lg rounded-2xl border p-8 shadow-2xl transition-all ${isDark
            ? "border-gray-800 bg-[#0c1322] text-white shadow-black/80"
            : "border-gray-200 bg-white text-gray-900 shadow-xl"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-lg transition-colors ${isDark
              ? "text-gray-400 hover:bg-gray-800 hover:text-white"
              : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            }`}
        >
          ×
        </button>

        <div className="mb-6 text-center">
          <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Contact Ultra OTC Desk</h2>
          <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Connect with our execution team directly for confidential quotes and liquidity solutions.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-600 dark:text-emerald-400"
          >
            <div className="flex items-center text-sm font-medium">
              <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Message received. An OTC relationship manager will reach out shortly.
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-600 dark:text-red-400"
          >
            <div className="flex items-center text-sm font-medium">
              <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {errorMessage}
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all ${isDark
                  ? "border-gray-700 bg-gray-800/80 text-white placeholder-gray-500 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                }`}
              placeholder="Your full name or entity"
            />
          </div>

          <div>
            <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all ${isDark
                  ? "border-gray-700 bg-gray-800/80 text-white placeholder-gray-500 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                }`}
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Phone / Telegram Handle
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all ${isDark
                  ? "border-gray-700 bg-gray-800/80 text-white placeholder-gray-500 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                }`}
              placeholder="+1 (555) 000-0000 or @username"
            />
          </div>

          <div>
            <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Inquiry Focus *
            </label>
            <div className="relative">
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm outline-none transition-all ${isDark
                    ? "border-gray-700 bg-gray-800/80 text-white focus:border-blue-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:bg-white"
                  }`}
                onClick={() => setIsInquiryTypeOpen((prev) => !prev)}
              >
                <span>{selectedInquiryOption?.label ?? "Select inquiry focus"}</span>
                <svg
                  className="size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isInquiryTypeOpen && (
                <div
                  className={`absolute z-30 mt-1.5 w-full rounded-xl border py-1.5 shadow-xl ${isDark ? "border-gray-700 bg-[#111927]" : "border-gray-200 bg-white"
                    }`}
                >
                  {inquiryOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`flex w-full cursor-pointer items-center px-4 py-2.5 text-left text-sm transition-colors ${option.value === formData.inquiryType
                          ? "bg-blue-600/10 font-semibold text-blue-500 dark:text-blue-400"
                          : isDark
                            ? "text-gray-300 hover:bg-gray-800"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          inquiryType: option.value,
                        }))
                        setIsInquiryTypeOpen(false)
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Transaction Details / Volume Requirements *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={3}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all ${isDark
                  ? "border-gray-700 bg-gray-800/80 text-white placeholder-gray-500 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                }`}
              placeholder="Estimated volume, currency pairs, or settlement preferences..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
            className="w-full rounded-xl bg-blue-600 py-3.5 px-6 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting Desk Request..." : "Send Request to Desk"}
          </motion.button>
        </form>

        <div className="mt-5 text-center">
          <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            Or contact directly via{" "}
            <Link href="mailto:otc@ultraapp.co" className="font-medium text-blue-500 hover:underline dark:text-blue-400">
              otc@ultraapp.co
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
