"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"

interface ContactSectionProps {
  currentTheme: string | undefined
}

// Inquiry Type Enum (copied from first example)
enum InquiryType {
  General = 0,
  Technical = 1,
  Sales = 2,
  Partnership = 3,
  Otc = 4,
  Other = 5,
}

const ContactSection = ({ currentTheme }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiryType: InquiryType.General,
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isInquiryTypeOpen, setIsInquiryTypeOpen] = useState(false)

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
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
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

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

  const handleSelectInquiryType = (value: InquiryType) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }))
    setIsInquiryTypeOpen(false)
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
          inquiryType: InquiryType.General,
          message: "",
        })
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

  const contactInfo = [
    {
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      emails: [
        { address: "info@ultraapp.co", label: "Admin" },
        { address: "support@ultraapp.co", label: "Support" },
        { address: "otc@ultraapp.co", label: "OTC" },
      ],
    },
    {
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      content: "+234 703 551 8215",
      link: "tel:+2347035518215",
    },
  ]

  return (
    <section className="mx-auto mt-20 w-full max-w-[1240px] px-4">
      {/* Header Section */}
      <motion.div
        className="mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="large-text mb-6 text-5xl font-bold max-sm:text-4xl" variants={fadeInUp}>
          Get In Touch
        </motion.h2>
        <motion.p
          className="smaller-text mx-auto max-w-2xl text-xl leading-relaxed max-md:text-base"
          variants={fadeInUp}
        >
          Need Any Help? Send us a message using the form below and we&apos;ll get back to you promptly!
        </motion.p>
      </motion.div>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-300"
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

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300"
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

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={slideInLeft}>
            <h3 className="large-text mb:mb-6 text-2xl font-semibold">Let&apos;s start a conversation</h3>
            <p className="smaller-text mb-8 leading-relaxed">
              We&apos;re here to help you bring your ideas to life. Whether you need a new website, mobile app, or
              digital solution, our team is ready to discuss your project.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={slideInLeft}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="features-cards border-style group flex items-start space-x-4 rounded-xl p-4 transition-colors duration-300 hover:shadow-lg"
              >
                <div className="contact-icon-bg flex size-12 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="large-text mb-1 text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">
                    {item.title}
                  </h4>

                  {/* Render emails individually if they exist */}
                  {item.emails ? (
                    <div className="space-y-1">
                      {item.emails.map((email, emailIndex) => (
                        <motion.a
                          key={emailIndex}
                          href={`mailto:${email.address}`}
                          className="smaller-text block leading-relaxed text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {email.label}: {email.address}
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    /* Render regular content for non-email items */
                    <motion.a
                      href={item.link}
                      className="smaller-text block whitespace-pre-line leading-relaxed text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.content}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div variants={slideInLeft} className="pt-6">
            <h4 className="large-text mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", icon: <FaXTwitter />, link: "https://x.com/getultraapp?s=21" },
                { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/company/myultraapp/" },
                {
                  name: "Instagram",
                  icon: <AiFillInstagram />,
                  link: "https://www.instagram.com/getultraapp?igsh=M203ZjN2MnE0OXM%3D&utm_source=qr",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="features-cards border-style flex size-12 items-center justify-center rounded-lg text-lg transition-colors duration-300 hover:shadow-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="features-cards border-style rounded-2xl p-4 shadow-sm md:p-8"
        >
          <motion.h3 variants={slideInRight} className="large-text mb-2 text-2xl font-semibold">
            Send us a message
          </motion.h3>
          <motion.p variants={slideInRight} className="smaller-text mb-8">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <motion.div variants={scaleIn}>
                <label htmlFor="fullName" className="small-text mb-2 block font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div variants={scaleIn}>
                <label htmlFor="email" className="small-text mb-2 block font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </motion.div>
            </div>

            <motion.div variants={scaleIn}>
              <label htmlFor="phoneNumber" className="small-text mb-2 block font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </motion.div>

            {/* Inquiry Type Selector */}
            <motion.div variants={scaleIn}>
              <label htmlFor="inquiryType" className="small-text mb-2 block font-medium">
                Inquiry Type *
              </label>
              <div className="relative">
                <button
                  id="inquiryType"
                  type="button"
                  className="input-field focus:input-field-focus border-style flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className={`flex w-full cursor-pointer items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          option.value === formData.inquiryType
                            ? "bg-gray-50 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                        onClick={() => handleSelectInquiryType(option.value)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div variants={scaleIn}>
              <label htmlFor="message" className="small-text mb-2 block font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="input-field focus:input-field-focus border-style w-full resize-none rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project or inquiry..."
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              disabled={isSubmitting}
              className="button-style flex w-full transform items-center justify-center whitespace-nowrap rounded-lg px-6 py-4 text-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
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

          <motion.p variants={fadeInUp} className="smaller-text mt-6 text-center text-sm">
            We respect your privacy and will never share your information with third parties.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection