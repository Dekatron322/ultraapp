"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"

interface ContactSectionProps {
  currentTheme: string | undefined
}

const ContactSection = ({ currentTheme }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
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
      content: "hello@example.com",
      link: "mailto:hello@example.com",
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
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      content: "123 Business Ave, Suite 100\nNew York, NY 10001",
      link: "https://maps.google.com",
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
          Have a project in mind or want to collaborate? We&apos;d love to hear from you. Let&apos;s create something
          amazing together.
        </motion.p>
      </motion.div>

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
              <motion.a
                key={index}
                href={item.link}
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
                  <p className="smaller-text whitespace-pre-line leading-relaxed">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div variants={slideInLeft} className="pt-6">
            <h4 className="large-text mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", icon: <FaXTwitter />, link: "#" },
                { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
                { name: "Instagram", icon: <AiFillInstagram />, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
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
              <label htmlFor="subject" className="small-text mb-2 block font-medium">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="input-field focus:input-field-focus border-style w-full rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this about?"
              />
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
              className="button-style flex w-full transform justify-center whitespace-nowrap rounded-lg px-6 py-4 text-lg font-semibold transition-all duration-300"
            >
              Send Message
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
