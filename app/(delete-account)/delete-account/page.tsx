"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import DeleteAccountSection from "components/DeleteAccountSection/DeleteAccountSection"
import HeroSection from "components/DeleteAccountSection/HeroSection"
import Footer from "components/Footer/Footer"
import GetUltraApp from "components/Landing/ComingSoon/GetUltraApp"
import DashboardNav from "components/Navbar/DashboardNav"

export default function DeleteAccountPage() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section className="flex size-full flex-col items-center justify-center md:mb-20">
        <DashboardNav />

        <HeroSection mounted={mounted} currentTheme={currentTheme} />
        <DeleteAccountSection currentTheme={currentTheme} />
        <GetUltraApp currentTheme={currentTheme} />
      </section>
      <Footer />
    </>
  )
}
