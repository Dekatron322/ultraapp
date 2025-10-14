"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"

interface Blog {
  id: number
  title: string
  category: string
  author: string
  date: string
  readTime: string
  description: string
  image: string
  tags: string[]
}

interface BlogsProps {
  currentTheme: string | undefined
}

export default function Blogs({ currentTheme }: BlogsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

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

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Crypto made simple: A beginner's roadmap to digital currency",
      category: "Beginner",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      description:
        "Lorem ipsum dolor sit amet consectetur. Hac faucibus elit mi viverra lectus nunc a elit. In enim in aliquam enim amet elit.",
      image: "/blog-light.png",
      tags: ["Crypto", "Beginner", "Guide"],
    },
    {
      id: 2,
      title: "Understanding Blockchain Technology",
      category: "Technical",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "8 min read",
      description: "Deep dive into blockchain technology and its applications beyond cryptocurrency.",
      image: "/blog-light.png",
      tags: ["Blockchain", "Technology", "Web3"],
    },
    {
      id: 3,
      title: "NFT Market Trends 2024",
      category: "Market",
      author: "Emma Davis",
      date: "2024-01-10",
      readTime: "6 min read",
      description: "Analysis of current NFT market trends and predictions for the coming year.",
      image: "/blog-light.png",
      tags: ["NFT", "Market", "Trends"],
    },
    {
      id: 4,
      title: "DeFi Protocols Comparison",
      category: "Technical",
      author: "Alex Rodriguez",
      date: "2024-01-08",
      readTime: "10 min read",
      description: "Comprehensive comparison of popular DeFi protocols and their unique features.",
      image: "/blog-light.png",
      tags: ["DeFi", "Comparison", "Protocols"],
    },
    {
      id: 5,
      title: "Crypto Security Best Practices",
      category: "Security",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "7 min read",
      description: "Essential security practices to protect your cryptocurrency investments.",
      image: "/blog-light.png",
      tags: ["Security", "Best Practices", "Wallet"],
    },
    {
      id: 6,
      title: "The Future of Web3 Gaming",
      category: "Gaming",
      author: "Tom Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      description: "Exploring the potential of Web3 gaming and play-to-earn models.",
      image: "/blog-light.png",
      tags: ["Gaming", "Web3", "NFT"],
    },
  ]

  const categories = ["all", ...Array.from(new Set(blogs.map((blog) => blog.category)))]

  const filteredBlogs = selectedCategory === "all" ? blogs : blogs.filter((blog) => blog.category === selectedCategory)

  return (
    <div className="flex w-full flex-col items-center p-20 max-sm:p-4">
      <div className="flex w-full max-w-[1240px] flex-col">
        {/* Header Section */}
        <motion.div
          className="flex w-full flex-col gap-6 max-md:px-0"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="max-sm:w-full"
          >
            <div className="email relative mb-4 flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-md:mx-auto max-sm:text-xs">
              {currentTheme === "dark" ? <LogoIconDark className="size-4" /> : <LogoIcon className="size-4" />}
              Our Blogs
            </div>
          </motion.div>

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="flex-1">
              <motion.h2
                className="text-[46px] font-bold leading-[1.2] max-md:text-center max-sm:text-3xl"
                variants={fadeInUp}
              >
                Articles for <span className="crypto-text">You</span>
              </motion.h2>
              <motion.p className="small-text mt-4 max-w-2xl text-xl max-md:text-center" variants={fadeInUp}>
                Discover the latest insights, trends, and guides in the world of cryptocurrency and blockchain
                technology.
              </motion.p>
            </div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4 max-md:w-full max-md:justify-between"
            >
              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <label className="small-text text-sm font-medium max-md:hidden">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="search-bg rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="card2-bg flex items-center gap-2 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-md p-2 transition-all ${
                    viewMode === "grid"
                      ? "features-cards text-blue-600 shadow-sm dark:text-blue-400"
                      : "smaller-text hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-md p-2 transition-all ${
                    viewMode === "list"
                      ? "features-cards text-blue-600 shadow-sm dark:text-blue-400"
                      : "smaller-text hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Blogs Grid/List */}
        <motion.div
          key={viewMode + selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} viewMode={viewMode} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} viewMode={viewMode} index={index} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
            <div className="smaller-text text-lg">No articles found in this category.</div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

interface BlogCardProps {
  blog: Blog
  viewMode: "grid" | "list"
  index: number
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, viewMode, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`
        features-cards border-style cursor-pointer rounded-xl shadow-sm transition-all duration-300 
        hover:shadow-md
        ${viewMode === "list" ? "flex flex-col p-6 lg:flex-row lg:items-start" : "p-6"}
      `}
    >
      {/* Blog Image */}
      <div className={`${viewMode === "list" ? "mb-4 lg:mb-0 lg:mr-6 lg:w-64" : "mb-4"}`}>
        <div className={`overflow-hidden rounded-lg ${viewMode === "list" ? "h-40 lg:h-32" : "h-48"}`}>
          <img
            src={blog.image}
            alt={blog.title}
            className="size-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className={`flex-1 ${viewMode === "list" ? "lg:flex lg:items-start lg:justify-between" : ""}`}>
        <div className={viewMode === "list" ? "lg:mr-6 lg:flex-1" : ""}>
          {/* Category and Meta */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
              {blog.category}
            </span>
            <span className="smaller-text text-sm text-gray-500">{blog.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="large-text mb-3 line-clamp-2 text-xl font-semibold">{blog.title}</h3>

          {/* Description */}
          <p className="small-text mb-4 line-clamp-2">{blog.description}</p>

          {/* Meta Info */}
          <div className="smaller-text mb-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center">
              <svg className="mr-1 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {blog.author}
            </div>
            <div className="flex items-center">
              <svg className="mr-1 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(blog.date).toLocaleDateString()}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <button className="button-style mt-4 w-full lg:mt-10 lg:w-auto">Read More</button>
      </div>
    </motion.div>
  )
}
