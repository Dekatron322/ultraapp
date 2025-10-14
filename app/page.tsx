"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import HeroSection from "components/Landing/HeroSection/HeroSection"
import AboutSection from "components/Landing/AboutSection/AboutSection"
import FeatureSection from "components/Landing/FeatureSection/FeatureSection"
import ComingSoon from "components/Landing/ComingSoon/ComingSoon"
import TestimonialSection from "components/Landing/TestimonialSection/TestimonialSection"
import BlogSection from "components/Landing/BlogSection/BlogSection"
import DownloadSection from "components/Landing/DownloadSection/DownloadSection"
import Footer from "components/Footer/Footer"

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

        <AboutSection currentTheme={currentTheme} />

        <FeatureSection currentTheme={currentTheme} />

        <ComingSoon currentTheme={currentTheme} />

        <TestimonialSection currentTheme={currentTheme} />

        <BlogSection currentTheme={currentTheme} />

        <DownloadSection currentTheme={currentTheme} />
      </section>
      <Footer />
    </>
  )
}
