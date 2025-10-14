"use client"

import UltraIcon from "public/icons/ultra-icon"
import React from "react"

interface PreloaderProps {
  visible: boolean
}

export default function Preloader({ visible }: PreloaderProps) {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-300 dark:bg-[#030712] ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* You can replace this with your logo for branding */}
      <div className="flex items-center gap-3">
        <UltraIcon className="h-10 w-auto" />
      </div>
    </div>
  )
}
