"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

const Teams = () => {
  const teams = [
    { name: "logo1", logo: "/9psb.png" },
    { name: "logo2", logo: "/termii.png" },
    { name: "logo3", logo: "/resend.svg", logoLight: "/resend.svg", logoDark: "/resend-white.svg" },
    { name: "logo4", logo: "/dojah.svg" },
    { name: "logo4", logo: "/cngn.png" },
    { name: "logo5", logo: "/onesignal.svg", logoLight: "/onesignal.svg", logoDark: "/onesignal-white.svg" },
    { name: "logo1", logo: "/9psb.png" },
    { name: "logo2", logo: "/termii.png" },
    { name: "logo3", logo: "/resend.svg", logoLight: "/resend.svg", logoDark: "/resend-white.svg" },
    { name: "logo4", logo: "/dojah.svg" },
    { name: "logo4", logo: "/cngn.png" },
    { name: "logo5", logo: "/onesignal.svg", logoLight: "/onesignal.svg", logoDark: "/onesignal-white.svg" },
    { name: "logo1", logo: "/9psb.png" },
    { name: "logo2", logo: "/termii.png" },
    { name: "logo3", logo: "/resend.svg", logoLight: "/resend.svg", logoDark: "/resend-white.svg" },
    { name: "logo4", logo: "/dojah.svg" },
    { name: "logo4", logo: "/cngn.png" },
    { name: "logo5", logo: "/onesignal.svg", logoLight: "/onesignal.svg", logoDark: "/onesignal-white.svg" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  }

  // Infinite scroll animation (seamless)
  const infiniteScrollVariants = {
    animate: {
      x: ["0%", "-50%"], // move half the width (since list is duplicated)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45,
          ease: "linear",
        },
      },
    },
  }

  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const currentTheme = resolvedTheme || theme

  return (
    <motion.div
      className="my-20 w-full max-w-[1240px] overflow-hidden "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-12 text-center max-md:px-4">
        <h3 className="text-3xl font-bold">Trusted by other Partners</h3>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="teams-gradient-left" />
        <div className="teams-gradient-right" />

        {/* Scrolling Logos */}
        <motion.div className="flex w-max gap-20" variants={infiniteScrollVariants} animate="animate">
          {[...teams, ...teams].map((team, index) => {
            const key = `${team.name}-${index}`
            return (
              <motion.div key={key} className="shrink-0" variants={logoVariants} whileHover="hover">
                <div className="flex h-16 w-40 items-center justify-center">
                  {broken[key] ? (
                    <div className="flex h-12 w-28 items-center justify-center rounded border border-[#292929] bg-[#0f0f0f]">
                      <span className="text-xs opacity-70">{team.name}</span>
                    </div>
                  ) : (
                    (() => {
                      const preferred =
                        team.logoDark && team.logoLight
                          ? mounted && currentTheme === "dark"
                            ? team.logoDark
                            : team.logoLight
                          : team.logo
                      return (
                        <Image
                          src={preferred}
                          alt={team.name}
                          width={112}
                          height={44}
                          className=" h-11 w-28 object-contain"
                          onError={() => setBroken((prev) => ({ ...prev, [key]: true }))}
                        />
                      )
                    })()
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Teams
