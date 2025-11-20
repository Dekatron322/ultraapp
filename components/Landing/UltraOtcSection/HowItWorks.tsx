"use client"
import { motion } from "framer-motion"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import { useState } from "react"
import Image from "next/image"
import DownloadAppModal from "components/DownloadAppModal"
import Link from "next/link"

interface HowItWorksProps {
  currentTheme: string | undefined
}

export default function HowItWorks({ currentTheme }: HowItWorksProps) {
  const [isPhonesHovered, setIsPhonesHovered] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

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

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true)
  }

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  return (
    <div className="grey-bg flex w-full flex-col items-center justify-center p-20 max-sm:my-6 max-sm:p-4">
      <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      <div className="flex ">
        <div className="flex w-full gap-6 max-md:px-0 ">
          {/* Text Content */}
          <motion.div
            className="flex w-full max-w-[1000px] flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-center"
            >
              <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-sm:text-xs">
                {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
                How It Works
              </div>
            </motion.div>
            <motion.h2
              className="text-[46px] font-bold leading-[1.2] max-sm:text-center max-sm:text-3xl"
              variants={fadeInUp}
            >
              How Ultra OTC <span className="crypto-text">Works</span>
            </motion.h2>
            <motion.p className="smaller-text mt-2" variants={fadeInUp}>
              Choose your preferred access pathway based on your privacy requirements and trading needs. Both routes
              deliver institutional-grade execution with tailored service levels.Access flexible lending options and
              borrow against your crypto assets effortlessly.
            </motion.p>
            <div className=" mt-10 grid  gap-6 md:grid-cols-2">
              <div className="features-cards flex-col rounded-lg p-6 ">
                <Image src="/icons/anon.svg" alt="Lending" width={40} height={40} />
                <div className="mt-4 flex items-center gap-2">
                  <Image src="/icons/Icon.svg" alt="Lending" width={24} height={24} />
                  <motion.p className="text-xl" variants={fadeInUp}>
                    Secure Initial Contact
                  </motion.p>
                </div>
                <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                  Initiate contact via{" "}
                  <Link className="text-[#2B7FFF]" href="mailto:otc@ultraapp.co">
                    otc@ultraapp.co
                  </Link>{" "}
                  or by completing our secure online form—no personal details required upfront for small to mid-volume
                  trades.
                </motion.p>

                <div className="mt-4 flex items-center gap-2">
                  <Image src="/icons/Icon.svg" alt="Lending" width={24} height={24} />
                  <motion.p className="text-xl" variants={fadeInUp}>
                    Human Desk Assignment
                  </motion.p>
                </div>
                <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                  Our expert OTC desk responds directly, providing personalized quotes tailored to your trade request,
                  all through confidential communication channels.
                </motion.p>

                <div className="mt-4 flex items-center gap-2">
                  <Image src="/icons/Icon.svg" alt="Lending" width={24} height={24} />
                  <motion.p className="text-xl" variants={fadeInUp}>
                    No Early Identity Disclosure
                  </motion.p>
                </div>
                <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                  Trade with confidence and anonymity. There&apos;s no need to reveal your identity during the initial
                  quoting and negotiation phase, ensuring privacy for discreet transactions.
                </motion.p>

                <motion.div
                  className="group mt-4 max-md:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <button
                    onClick={handleContactClick}
                    className="button-style4 flex w-full items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3"
                  >
                    <span>Get Started</span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-20 transition-colors duration-300"
                    >
                      <path
                        d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>

              <div className="features-cards flex-col rounded-lg p-6 ">
                <Image src="/icons/anon.svg" alt="Lending" width={40} height={40} />
                <div className="mt-4 flex items-center gap-2">
                  <Image src="/icons/Icon.svg" alt="Lending" width={24} height={24} />
                  <motion.p className="text-xl" variants={fadeInUp}>
                    KYC Verification
                  </motion.p>
                </div>
                <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                  Become a verified UltraApp user through secure KYC onboarding. This unlocks your access to our full
                  suite of OTC products.
                </motion.p>

                <div className="mt-4 flex items-center gap-2">
                  <Image src="/icons/Icon.svg" alt="Lending" width={24} height={24} />
                  <motion.p className="text-xl" variants={fadeInUp}>
                    Unlock Advanced Products
                  </motion.p>
                </div>
                <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                  Gain seamless entry to premium financial instruments—automated spot pricing, forward contracts, custom
                  swaps, and powerful hedging solutions—engineered for sophisticated market strategies.
                </motion.p>

                <div className="mt-4 flex items-center gap-2">
                  <Image src="/icons/Icon.svg" alt="Lending" width={24} height={24} />
                  <motion.p className="text-xl" variants={fadeInUp}>
                    Efficiency & Scale
                  </motion.p>
                </div>
                <motion.p className="smaller-text mt-2" variants={fadeInUp}>
                  Enjoy faster trade execution, larger transaction limits, and direct digital settlement. Automation
                  enables real-time market access, audit-ready reporting, and reduced manual intervention.
                </motion.p>

                <motion.div
                  className="group mt-4 max-md:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <button
                    onClick={handleContactClick}
                    className="button-style4 flex w-full items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3"
                  >
                    <span>Get Started</span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-20 transition-colors duration-300"
                    >
                      <path
                        d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Contact Modal Component
interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

// Inquiry Type Enum
enum InquiryType {
  General = 0,
  Technical = 1,
  Sales = 2,
  Partnership = 3,
  Otc = 4,
  Other = 5,
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
    { value: InquiryType.General, label: "General Inquiry" },
    { value: InquiryType.Technical, label: "Technical Support" },
    { value: InquiryType.Sales, label: "Sales" },
    { value: InquiryType.Partnership, label: "Partnership" },
    { value: InquiryType.Otc, label: "OTC Trading" },
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
        // Auto close after success
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        const errorData = await response.json()
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
            Fill out the form below and we&apos;ll get back to you soon
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300"
          >
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300"
          >
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
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
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-[#0a0a0a] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
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
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-[#0a0a0a] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-[#0a0a0a] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Inquiry Type *
            </label>
            <div className="relative">
              <button
                id="inquiryType"
                type="button"
                className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-left text-sm text-[#0a0a0a] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
                onClick={() => setIsInquiryTypeOpen((prev) => !prev)}
              >
                <span>{selectedInquiryOption?.label ?? "Select inquiry type"}</span>
                <svg
                  className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isInquiryTypeOpen && (
                <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white py-1 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-900">
                  {inquiryOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`flex w-full cursor-pointer items-center px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        option.value === formData.inquiryType
                          ? "bg-gray-50 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
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
              className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-[#0a0a0a] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
              placeholder="Tell us how we can help you..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-blue-800"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Or contact us directly at{" "}
            <Link href="mailto:otc@ultraapp.co" className="text-blue-600 hover:underline dark:text-blue-400">
              otc@ultraapp.co
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function PhoneImages({
  currentTheme,
  isPhonesHovered,
  setIsPhonesHovered,
}: {
  currentTheme: string | undefined
  isPhonesHovered: boolean
  setIsPhonesHovered: (hovered: boolean) => void
}) {
  const floatAnimation = {
    initial: { y: 0 },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const leftPhoneVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      rotate: 14,
      y: 20,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const centerPhoneVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
    hover: {
      rotate: 2,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const rightPhoneVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
    hover: {
      rotate: -10,
      y: -75,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="img-card-bg flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.div
        className="relative flex items-end justify-center -space-x-24"
        onHoverStart={() => setIsPhonesHovered(true)}
        onHoverEnd={() => setIsPhonesHovered(false)}
      >
        {/* Left Phone */}
        <motion.div
          className="z-10"
          initial="hidden"
          animate={isPhonesHovered ? "hover" : "visible"}
          variants={leftPhoneVariants}
        >
          {currentTheme === "dark" ? (
            <motion.img
              src="/png2-dark.png"
              alt="UltraApp feature 1"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
            />
          ) : (
            <motion.img
              src="/png2.png"
              alt="UltraApp feature 1"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
            />
          )}
        </motion.div>

        {/* Center Phone (Main) */}
        <motion.div
          className="z-20"
          initial="hidden"
          animate={isPhonesHovered ? "hover" : "visible"}
          variants={centerPhoneVariants}
        >
          {currentTheme === "dark" ? (
            <motion.img
              src="/png1-dark.png"
              alt="UltraApp main screen"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 0.5 }}
            />
          ) : (
            <motion.img
              src="/png1.png"
              alt="UltraApp main screen"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 0.5 }}
            />
          )}
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="z-10"
          initial="hidden"
          animate={isPhonesHovered ? "hover" : "visible"}
          variants={rightPhoneVariants}
        >
          {currentTheme === "dark" ? (
            <motion.img
              src="/png3-dark.png"
              alt="UltraApp feature 2"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 1 }}
            />
          ) : (
            <motion.img
              src="/png3.png"
              alt="UltraApp feature 2"
              className="w-full drop-shadow-2xl"
              initial="initial"
              animate={isPhonesHovered ? "initial" : "float"}
              variants={floatAnimation}
              transition={{ delay: 1 }}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
