"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import { GoMoon } from "react-icons/go"
import { AnimatePresence, motion } from "framer-motion"
import UltraIcon from "public/icons/ultra-icon"
import Link from "next/link"
import UltraLogoDark from "public/icons/ultra-logo-dark"
import { usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const DashboardNav = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Ensure we only render after component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    setTimeout(() => setLoading(false), 3000)

    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // Get the actual current theme, considering system preference
  const currentTheme = theme === "system" ? systemTheme : theme

  const toggleTheme = () => {
    // Toggle based on the actual current theme
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-NG", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  // SVG animation variants
  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  // Link animation variants
  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -2, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { y: 0, transition: { duration: 0.1 } },
  }

  const navLinks = [
    { name: "Feature", href: "/feature" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ]

  // Function to check if a link is active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href || pathname.startsWith(href + "/")
  }

  // Mobile menu variants for framer-motion
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const mobileLinkVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  }

  // Don't render theme-dependent content until mounted on client
  if (!mounted) {
    return (
      <nav className="z-150 fixed left-0 right-0 top-0 z-20 flex justify-center py-2 backdrop-blur">
        <div className="z-50 flex w-full items-center justify-between backdrop-blur max-sm:flex-row max-sm:px-4 md:max-w-[1240px]">
          {/* Logo placeholder */}
          <div className="h-10 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>

          {/* Desktop Navigation Links placeholder */}
          <div className="flex items-center gap-5 max-md:hidden">
            <div className="flex items-center justify-center gap-10 rounded-full">
              {navLinks.map((link) => (
                <div key={link.name} className="h-6 w-16 rounded bg-gray-300 dark:bg-gray-600"></div>
              ))}
            </div>
          </div>

          {/* Desktop Right Section placeholder */}
          <div className="flex items-center gap-5 max-md:hidden">
            <div className="h-12 w-20 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-12 w-32 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          </div>

          {/* Mobile Menu Button placeholder */}
          <div className="hidden max-md:flex max-md:items-center max-md:gap-3">
            <div className="h-9 w-14 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-10 w-10 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="z-150 fixed left-0 right-0 top-0 z-20 flex justify-center py-2 backdrop-blur"
      >
        <div className="z-50 flex w-full items-center justify-between backdrop-blur max-sm:flex-row max-sm:px-4 md:max-w-[1240px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center whitespace-nowrap rounded-full text-center font-semibold backdrop-blur"
          >
            {currentTheme === "dark" ? (
              <UltraLogoDark className="h-10 w-auto" />
            ) : (
              <UltraIcon className="h-10 w-auto" />
            )}
          </Link>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="flex items-center gap-5 max-md:hidden">
            <div className="flex items-center justify-center gap-10 rounded-full">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <motion.div
                    key={link.name}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link
                      href={link.href}
                      className={`nav-link relative px-2 py-1 transition-all duration-300 ${
                        isActive ? "nav-link-active" : "nav-link-inactive"
                      }`}
                    >
                      {link.name}
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="nav-link-underline"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {/* Hover effect - only show if not active */}
                      {!isActive && (
                        <motion.div
                          className="nav-link-hover-underline"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Desktop Right Section - Hidden on mobile */}
          <div className="flex items-center gap-5 max-md:hidden">
            <div
              className="containerbg flex cursor-pointer items-center rounded-full p-1 transition duration-300"
              onClick={toggleTheme}
              style={{
                position: "relative",
                width: "80px",
                height: "45px",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: currentTheme === "dark" ? "2px" : "calc(100% - 42px)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "right 0.3s ease",
                }}
              >
                {currentTheme === "dark" ? (
                  <GoMoon style={{ color: "#fff", fontSize: "24px" }} />
                ) : (
                  <WbSunnyIcon style={{ color: "#000", fontSize: "24px" }} />
                )}
              </div>
            </div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="#"
                target="_blank"
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
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="hidden max-md:flex max-md:items-center max-md:gap-3">
            {/* Theme Toggle for Mobile */}
            <div
              className="containerbg flex cursor-pointer items-center rounded-full p-1 transition duration-300"
              onClick={toggleTheme}
              style={{
                position: "relative",
                width: "60px",
                height: "35px",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: currentTheme === "dark" ? "2px" : "calc(100% - 32px)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "right 0.3s ease",
                }}
              >
                {currentTheme === "dark" ? (
                  <GoMoon style={{ color: "#fff", fontSize: "18px" }} />
                ) : (
                  <WbSunnyIcon style={{ color: "#000", fontSize: "18px" }} />
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center rounded-lg p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseIcon className="text-xl" /> : <MenuIcon className="text-xl" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobiletab-bg fixed inset-0 z-10 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Content */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mobiletab-bg fixed bottom-0 left-0 right-0 top-16 z-20 overflow-y-auto border-b backdrop-blur-lg md:hidden"
            >
              <div className="px-4 py-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => {
                    const isActive = isLinkActive(link.href)
                    return (
                      <motion.div
                        key={link.name}
                        variants={mobileLinkVariants}
                        transition={{ delay: index * 0.1 }}
                        className="pb-4 last:border-b-0 last:pb-0 dark:border-gray-700"
                      >
                        <Link
                          href={link.href}
                          onClick={toggleMobileMenu}
                          className={`nav-link relative flex items-center px-2 py-2 text-lg font-medium transition-all duration-200 ${
                            isActive ? "nav-link-active" : "nav-link-inactive"
                          }`}
                        >
                          {link.name}
                          {isActive && <span className="ml-2 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default DashboardNav
