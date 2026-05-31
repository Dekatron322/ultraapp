"use client"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { FiAlertTriangle, FiArrowRight, FiCheckCircle, FiInfo, FiTrash2 } from "react-icons/fi"

interface DeleteAccountSectionProps {
  currentTheme: string | undefined
}

const DeleteAccountSection = ({ currentTheme }: DeleteAccountSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    otherReason: "",
    feedback: "",
    confirmText: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.confirmText !== "DELETE") {
      return
    }
    if (!formData.agreeToTerms) {
      return
    }

    setIsSubmitting(true)

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  const reasons = [
    "Privacy or data collection concerns",
    "Security concerns / Account compromised",
    "High fees or transactional costs",
    "Technical issues or app bugs",
    "I found a better alternative",
    "No longer need or use this account",
    "Other",
  ]

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.reason !== "" &&
    formData.confirmText === "DELETE" &&
    formData.agreeToTerms

  return (
    <section className="mx-auto mt-10 w-full max-w-[1240px] px-4 md:mb-20">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="delete-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-12"
          >
            {/* Informational Panel / Checklist */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-5"
            >
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-500">
                  <FiAlertTriangle className="size-3.5 animate-pulse" /> Permanent Action
                </span>
                <h3 className="large-text mt-3 text-3xl font-bold">What happens when you delete your account?</h3>
                <p className="smaller-text mt-4 leading-relaxed">
                  Before you proceed with closing your account, please review the consequences. This operation cannot be reversed.
                </p>
              </div>

              {/* Consequence Cards */}
              <div className="space-y-4">
                {[
                  {
                    title: "Asset and Wallet Loss",
                    desc: "Any remaining crypto balances, fiat wallets, or rewards must be withdrawn prior to deletion. Leftover assets will be permanently inaccessible.",
                    icon: <FiTrash2 className="size-5 text-red-500" />,
                  },
                  {
                    title: "Transaction History",
                    desc: "Your historical bank statement, ledger entries, tax forms, and transfer reports will be completely wiped from our system.",
                    icon: <FiInfo className="size-5 text-blue-500" />,
                  },
                  {
                    title: "Personal Information Deletion",
                    desc: "Your profiles, custom preferences, and KYC verification files will be purged in compliance with our standard privacy data guidelines.",
                    icon: <FiCheckCircle className="size-5 text-green-500" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="features-cards border-style flex items-start space-x-4 rounded-xl p-5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="large-text font-semibold text-lg">{item.title}</h4>
                      <p className="smaller-text mt-1 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 text-sm">
                <h5 className="font-semibold text-blue-500 flex items-center gap-2 mb-1">
                  <FiInfo /> Need help instead?
                </h5>
                <p className="smaller-text text-xs leading-relaxed">
                  If you are experiencing technical difficulties, account verification hurdles, or have questions about transactional speed, please reach out to our{" "}
                  <a href="/contact-us" className="text-blue-500 hover:underline inline-flex items-center gap-0.5">
                    support team <FiArrowRight className="size-3" />
                  </a>{" "}
                  first. We might be able to help solve your problems!
                </p>
              </div>
            </motion.div>

            {/* Interactive Form Panel */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="features-cards border-style rounded-2xl p-6 shadow-sm md:p-8">
                <h3 className="large-text mb-2 text-2xl font-bold">Account Deletion Request</h3>
                <p className="smaller-text mb-8 text-sm">
                  Please provide your identity details and reasons below to help us process your request securely.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="small-text mb-2 block font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                      placeholder="Enter your registered name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="small-text mb-2 block font-medium">
                      Registered Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                      placeholder="e.g. name@example.com"
                    />
                  </div>

                  {/* Reason Dropdown */}
                  <div>
                    <label htmlFor="reason" className="small-text mb-2 block font-medium">
                      Primary reason for leaving *
                    </label>
                    <div className="relative">
                      <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                        className="input-field focus:input-field-focus border-style w-full appearance-none rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
                      >
                        <option value="" disabled>Select a reason</option>
                        {reasons.map((r, i) => (
                          <option key={i} value={r}>{r}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Other Reason Input */}
                  {formData.reason === "Other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <label htmlFor="otherReason" className="small-text block font-medium">
                        Please specify *
                      </label>
                      <input
                        type="text"
                        id="otherReason"
                        name="otherReason"
                        value={formData.otherReason}
                        onChange={handleInputChange}
                        required={formData.reason === "Other"}
                        className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                        placeholder="Please elaborate on your reason"
                      />
                    </motion.div>
                  )}

                  {/* Feedback Textarea */}
                  <div>
                    <label htmlFor="feedback" className="small-text mb-2 block font-medium">
                      Do you have any feedback to help us improve? (Optional)
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-field focus:input-field-focus border-style w-full resize-none rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                      placeholder="Share your experience or suggestions..."
                    />
                  </div>

                  {/* Danger Zone Confirmation Text input */}
                  <div className="rounded-xl border border-red-500/25 bg-red-500/5 p-4 md:p-6 space-y-4">
                    <div>
                      <h4 className="text-red-500 font-bold text-base flex items-center gap-1.5">
                        <FiAlertTriangle className="size-4 animate-bounce" /> Confirm Action
                      </h4>
                      <p className="smaller-text mt-1 text-xs leading-relaxed">
                        To double-verify that you want to delete your account, please type the word{" "}
                        <strong className="text-red-500 dark:text-red-400 font-mono text-sm tracking-wider bg-red-500/10 px-1.5 py-0.5 rounded">DELETE</strong>{" "}
                        in the box below.
                      </p>
                    </div>

                    <input
                      type="text"
                      id="confirmText"
                      name="confirmText"
                      value={formData.confirmText}
                      onChange={handleInputChange}
                      required
                      className="input-field border-red-500/30 focus:border-red-500 w-full rounded-lg px-4 py-2.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/30 text-center font-mono font-bold tracking-widest bg-transparent"
                      placeholder="Type DELETE"
                    />

                    {/* Terms Checklist */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 size-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <label htmlFor="agreeToTerms" className="smaller-text text-xs leading-relaxed select-none">
                        I clearly understand the rules and consequences. I authorize the irreversible deletion of my wallet logs, transactional histories, preferences, and personal information.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover={isFormValid ? "hover" : ""}
                    whileTap={isFormValid ? "tap" : ""}
                    className={`button-style flex w-full transform justify-center items-center gap-2 whitespace-nowrap rounded-lg px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                      isFormValid
                        ? "bg-red-600 hover:bg-red-700 active:bg-red-800 border-red-600 text-white cursor-pointer"
                        : "bg-gray-300 dark:bg-gray-800 border-transparent text-gray-500 dark:text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing request...
                      </>
                    ) : (
                      <>
                        <FiTrash2 className="size-5" /> Delete My Account Permanently
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* SUCCESS STATE PANEL */
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mx-auto max-w-2xl text-center py-16 px-4 md:py-24"
          >
            <div className="features-cards border-style rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="flex size-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-6"
              >
                <FiCheckCircle className="size-12 animate-pulse" />
              </motion.div>

              <h2 className="large-text text-3xl font-extrabold mb-4">Request Submitted Successfully</h2>
              <p className="smaller-text max-w-lg mb-8 leading-relaxed">
                Thank you for your feedback. We have successfully registered your account deletion request for{" "}
                <strong className="text-blue-500">{formData.email}</strong>.
              </p>

              <div className="w-full text-left space-y-4 rounded-xl bg-gray-50 dark:bg-gray-950 p-6 border-style mb-8 text-sm">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Next Steps:</h4>
                <ol className="list-decimal list-inside space-y-2.5 text-xs smaller-text leading-relaxed">
                  <li>
                    A secure verification link has been sent to <span className="underline font-medium">{formData.email}</span>. You must click the link within 24 hours to confirm your request.
                  </li>
                  <li>
                    Once verified, your account access will be locked instantly.
                  </li>
                  <li>
                    Your personal information, wallets, histories, and other data records will be purged from our database within <span className="font-semibold">7 business days</span>.
                  </li>
                </ol>
              </div>

              <div className="flex gap-4">
                <a
                  href="/"
                  className="button-style inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-base transition-all duration-200 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 border-blue-600"
                >
                  Return to Home
                </a>
                <a
                  href="/contact-us"
                  className="button-style inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-base transition-all duration-200 bg-transparent text-blue-500 hover:bg-blue-500/5 border-blue-500/30"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DeleteAccountSection
