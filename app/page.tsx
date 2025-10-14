"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import HeroSection from "components/Landing/HeroSection/HeroSection"

// Lazy-load below-the-fold sections to cut initial bundle size
const AboutSection = dynamic(() => import("components/Landing/AboutSection/AboutSection"), {
  loading: () => null,
})
const FeatureSection = dynamic(() => import("components/Landing/FeatureSection/FeatureSection"), {
  loading: () => null,
})
const ComingSoon = dynamic(() => import("components/Landing/ComingSoon/ComingSoon"), {
  loading: () => null,
})
const TestimonialSection = dynamic(
  () => import("components/Landing/TestimonialSection/TestimonialSection"),
  { loading: () => null }
)
const BlogSection = dynamic(() => import("components/Landing/BlogSection/BlogSection"), {
  loading: () => null,
})
const DownloadSection = dynamic(
  () => import("components/Landing/DownloadSection/DownloadSection"),
  { loading: () => null }
)
const Footer = dynamic(() => import("components/Footer/Footer"), { loading: () => null })

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
