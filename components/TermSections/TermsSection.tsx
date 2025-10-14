"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useEffect } from "react"

interface TermsSectionProps {
  currentTheme: string | undefined
}

const TermsSection = ({ currentTheme }: TermsSectionProps) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.98 },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const svgVariants = {
    initial: { x: 0 },
    hover: { x: 3, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { x: 1, transition: { duration: 0.1 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const tapEffect = {
    scale: 0.98,
  }

  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId.replace("#", ""))
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Handle click on table of contents items
  const handleTableOfContentsClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    const html = document.documentElement
    html.style.scrollBehavior = "smooth"

    return () => {
      html.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <>
      <div className="flex w-full gap-8 max-md:px-4 md:max-w-[1240px]">
        {/* Main Content */}
        <div className="flex-1">
          <div className="mt-16 w-full gap-4">
            <motion.h2
              id="terms-condition"
              className="mb-4 text-[46px] font-semibold leading-[1.2] max-sm:text-3xl"
              variants={fadeInUp}
            >
              Terms & Condition
            </motion.h2>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
          </div>

          <div className="mt-16 w-full gap-4">
            <motion.h2
              id="privacy-policy"
              className="mb-4 text-[46px] font-semibold leading-[1.2] max-sm:text-3xl"
              variants={fadeInUp}
            >
              Privacy Policy
            </motion.h2>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
          </div>

          <div className="mt-16 w-full gap-4">
            <motion.h2
              id="user-policy"
              className="mb-4 text-[46px] font-semibold leading-[1.2] max-sm:text-3xl"
              variants={fadeInUp}
            >
              User policy
            </motion.h2>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
          </div>

          <div className="mt-16 w-full gap-4">
            <motion.h2
              id="user-responsibilities"
              className="mb-4 text-[46px] font-semibold leading-[1.2] max-sm:text-3xl"
              variants={fadeInUp}
            >
              User responsibilities
            </motion.h2>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
            <p className="smaller-text mb-4">
              Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum tempor. Leo facilisis
              aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet enim laoreet dictum pellentesque.
              Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales
              lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
              amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat vel amet
              enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. Duis fermentum nibh volutpat morbi. Et
              ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris. Venenatis sollicitudin posuere elit
              consequat et enim. Neque tortor amet dictum tempor. Leo facilisis aliquet viverra scelerisque eleifend
              viverra est. At massa erat vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus.
              Duis fermentum nibh volutpat morbi. Et ac sed ultricies ut nunc sodales lectus. Ultricies pharetra mauris.
            </p>
          </div>
        </div>

        {/* Table of Contents - Fixed Position on the Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="sticky top-20 hidden h-fit w-64 lg:block"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg p-6 backdrop-blur-sm">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mb-4  text-xl font-bold"
            >
              Table of Contents
            </motion.h2>
            <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" animate="show">
              {[
                { href: "#terms-condition", text: "Terms & Condition" },
                { href: "#privacy-policy", text: "Privacy Policy" },
                { href: "#user-policy", text: "User Policy" },
                { href: "#user-responsibilities", text: "User Responsibilities" },
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInRight}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleTableOfContentsClick(e, item.href)}
                    className="small-text text-hover block transition-colors duration-200"
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={tapEffect}
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default TermsSection
