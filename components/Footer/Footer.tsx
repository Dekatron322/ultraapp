"use client"
import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiCheckCircle } from "react-icons/fi"
import { GoCopy } from "react-icons/go"
import { HiOutlineMail } from "react-icons/hi"
import { useTheme } from "next-themes"
import UltraLogoDark from "public/icons/ultra-logo-dark"
import UltraIcon from "public/icons/ultra-icon"

const Footer = () => {
  const [email, setEmail] = useState("")

  const { theme, resolvedTheme } = useTheme()
  const currentTheme = resolvedTheme || theme

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed with:", email)
    setEmail("")
  }

  return (
    <footer className="flex  items-center justify-center bg-gray-900 px-4 py-12 text-white sm:px-6 ">
      <div className="mx-auto mt-auto max-w-[1240px]">
        {/* Main Footer Content */}
        <div className="mb-8  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 lg:justify-evenly">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {currentTheme === "dark" ? (
              <UltraLogoDark className="h-10 w-auto" />
            ) : (
              <UltraLogoDark className="h-10 w-auto" />
            )}
            <p className="mb-4 max-w-md text-gray-400">
              Ultra is a technology platform - it is not a bank and does not hold or claim to hold a banking license.
              The banking services/financial services offered on the Ultra platform are provided by licensed banks and
              financial institutions.
            </p>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-[260px]">
            <h3 className="mb-4 font-semibold">Useful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full lg:w-[260px]">
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="https://web.facebook.com/myultraapp"
                  target="_blank"
                  className="transition-colors hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/myultraapp_"
                  target="_blank"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/myultraapp/"
                  target="_blank"
                  className="transition-colors hover:text-white"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://x.com/myultraapp" target="_blank" className="transition-colors hover:text-white">
                  X
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div className="w-full lg:w-[260px]">
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="mb-6 space-y-2 text-gray-400">
              <li>
                <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
                  Privacy policy
                </Link>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="flex w-full flex-col lg:col-span-2">
              <h3 className="mb-4 font-semibold">Subscribe our newsletter</h3>
              <div className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 sm:w-[350px]">
                <form
                  onSubmit={handleSubscribe}
                  className="flex w-full  flex-row flex-nowrap items-center gap-2 sm:items-center"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 transition-colors focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto "
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
