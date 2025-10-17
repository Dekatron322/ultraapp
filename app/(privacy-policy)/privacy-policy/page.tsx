"use client"
import { useEffect, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import GetUltraApp from "components/Landing/ComingSoon/GetUltraApp"

import PolicySection from "components/PolicySection/PolicySection"
import HeroSection from "components/PolicySection/HeroSection"

export default function Dashboard() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section className="flex size-full flex-col items-center justify-center md:mb-40">
        <DashboardNav />

        <HeroSection mounted={mounted} currentTheme={currentTheme} />
        <PolicySection currentTheme={currentTheme} />
        <GetUltraApp currentTheme={currentTheme} />
      </section>
      <Footer />
    </>
  )
}
