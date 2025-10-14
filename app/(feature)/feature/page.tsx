"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import TestimonialSection from "components/Landing/TestimonialSection/TestimonialSection"
import BlogSection from "components/Landing/BlogSection/BlogSection"
import DownloadSection from "components/Landing/DownloadSection/DownloadSection"
import Footer from "components/Footer/Footer"
import Teams from "components/Teams/page"
import HeroSection from "components/Landing/HeroSection/FeatureHeroSection"
import KeyFeatureSection from "components/Landing/FeatureSection/KeyFeatureSection"
import FeatureComingSoon from "components/Landing/ComingSoon/FeatureComingSoon"
import GetUltraApp from "components/Landing/ComingSoon/GetUltraApp"
import FAQSection from "components/Features/FaqsSection"

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
        <Teams />

        <KeyFeatureSection currentTheme={currentTheme} />

        <FeatureComingSoon currentTheme={currentTheme} />

        <GetUltraApp currentTheme={currentTheme} />

        <FAQSection currentTheme={currentTheme} />
      </section>
      <Footer />
    </>
  )
}
