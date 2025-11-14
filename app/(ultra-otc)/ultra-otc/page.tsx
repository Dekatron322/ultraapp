"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import UltraOtcHeroSection from "components/Landing/UltraOtcSection/UltraOtcHeroSection"
import WhyOtc from "components/Landing/UltraOtcSection/WhyOtc"
import HowItWorks from "components/Landing/UltraOtcSection/HowItWorks"
import RelationshipDesk from "components/Landing/UltraOtcSection/RelationshipDesk"

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

        <UltraOtcHeroSection mounted={mounted} currentTheme={currentTheme} />
        {/* <Teams /> */}

        <WhyOtc currentTheme={currentTheme} />

        <HowItWorks currentTheme={currentTheme} />

        {/* <RelationshipDesk currentTheme={currentTheme} /> */}
      </section>
      <Footer />
    </>
  )
}
