"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Teams = () => {
  const teams = [
    { name: "logo1", logo: "" },
    { name: "logo2", logo: "" },
    { name: "logo3", logo: "" },
    { name: "logo4", logo: "" },
    { name: "logo5", logo: "" },
    { name: "logo6", logo: "" },
    { name: "logo7", logo: "" },
    { name: "logo8", logo: "" },
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
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  const [broken, setBroken] = useState<Record<string, boolean>>({})

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
                    <Image
                      src={team.logo}
                      alt={team.name}
                      width={112}
                      height={44}
                      className="logo-mono h-11 w-28 object-contain"
                      onError={() => setBroken((prev) => ({ ...prev, [key]: true }))}
                    />
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
