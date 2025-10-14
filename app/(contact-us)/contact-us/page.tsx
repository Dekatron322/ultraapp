"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import GetUltraApp from "components/Landing/ComingSoon/GetUltraApp"
import HeroSection from "components/TermSections/HeroSection"
import ContactSection from "components/CareerSection/ContactSection"

export default function Dashboard() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Use resolvedTheme to avoid hydration mismatch
  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section className="flex size-full flex-col items-center justify-center md:mb-40">
        <DashboardNav />

        <HeroSection mounted={mounted} currentTheme={currentTheme} />
        <ContactSection currentTheme={currentTheme} />
        <GetUltraApp currentTheme={currentTheme} />
      </section>
      <Footer />
    </>
  )
}
