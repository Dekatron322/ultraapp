"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import GetUltraApp from "components/Landing/ComingSoon/GetUltraApp"
import FAQSection from "components/Features/FaqsSection"
import HeroSection from "components/Landing/AboutSection/HeroSection"
import NewAboutSection from "components/Landing/AboutSection/NewAboutSection"
import CoreValues from "components/Landing/AboutSection/CoreValues"
import TeamSection from "components/Landing/AboutSection/TeamSection"

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

        <NewAboutSection currentTheme={currentTheme} />

        <CoreValues currentTheme={currentTheme} />

        <TeamSection currentTheme={currentTheme} />

        <GetUltraApp currentTheme={currentTheme} />
      </section>
      <Footer />
    </>
  )
}
