import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React from "react"

interface BlogSectionProps {
  currentTheme: string | undefined
}

const BlogSection = ({ currentTheme }: BlogSectionProps) => {
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

  return (
    <>
      <div className="email relative mb-6 flex h-10 w-32 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
        {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
        Features
      </div>
      <motion.h2
        className="text-center text-[46px] font-semibold leading-[1.2] max-md:px-4 max-sm:text-3xl md:w-[500px]"
        variants={fadeInUp}
      >
        Maximizing the value of business <span className="crypto-text">data</span>
      </motion.h2>
      <p className="smaller-text mb-10 text-center max-md:px-4">
        Our provide valuable insights, and establish your brand as a thought leader in the financial space.
      </p>
      <div className="grid w-full gap-4 max-md:px-4 md:max-w-[1240px] md:grid-cols-3 ">
        <div className="border-style flex flex-col  rounded-2xl p-4">
          <img src="/blog/blog1.png" alt="" />
          <div className="my-3 flex items-center gap-2">
            <div className="email relative  flex h-10  cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
              Crypto
            </div>
            <div className="email relative  flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
              Finance
            </div>
          </div>
          <h6 className="mb-4 text-2xl font-medium">
            How real-time analytics can revolutionize your financial strategy
          </h6>
          <p className="smaller-text ">
            Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your
            finances with ease.
          </p>
          <button className="button-style3 border-style mt-3 justify-center text-center">Read More</button>
        </div>
        <div className="border-style flex flex-col  rounded-2xl p-4">
          <img src="/blog/blog1.png" alt="" />
          <div className="my-3 flex items-center gap-2">
            <div className="email relative  flex h-10  cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
              Crypto
            </div>
            <div className="email relative  flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
              Finance
            </div>
          </div>
          <h6 className="mb-4 text-2xl font-medium">
            How real-time analytics can revolutionize your financial strategy
          </h6>
          <p className="smaller-text ">
            Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your
            finances with ease.
          </p>
          <button className="button-style3 border-style mt-3 justify-center text-center">Read More</button>
        </div>
        <div className="border-style flex flex-col  rounded-2xl p-4">
          <img src="/blog/blog1.png" alt="" />
          <div className="my-3 flex items-center gap-2">
            <div className="email relative  flex h-10  cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
              Crypto
            </div>
            <div className="email relative  flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
              Finance
            </div>
          </div>
          <h6 className="mb-4 text-2xl font-medium">
            How real-time analytics can revolutionize your financial strategy
          </h6>
          <p className="smaller-text ">
            Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your
            finances with ease.
          </p>
          <button className="button-style3 border-style mt-3 justify-center text-center">Read More</button>
        </div>
      </div>
      <motion.div
        className="group mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          href="/blog"
          className="button-style  flex items-center gap-2 transition-all duration-300 group-hover:gap-3 max-md:text-sm"
        >
          <span>Learn More</span>
          <motion.svg
            width="1em"
            height="1em"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-20 transition-colors duration-300"
            variants={svgVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <path
              d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
              fill="currentColor"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </>
  )
}

export default BlogSection
