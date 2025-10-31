"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import LogoIcon from "public/icons/logo-icon"
import LogoIconDark from "public/icons/logo-icon-dark"
import React, { useEffect, useState } from "react"

interface BlogSectionProps {
  currentTheme: string | undefined
}

// Ghost API Types
interface GhostPost {
  id: string
  slug: string
  title: string
  excerpt: string
  html: string
  feature_image: string
  featured: boolean
  visibility: string
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt: string
  codeinjection_head: string | null
  codeinjection_foot: string | null
  custom_template: string | null
  canonical_url: string | null
  authors: Array<{
    id: string
    name: string
    slug: string
    profile_image: string | null
    cover_image: string | null
    bio: string | null
    website: string | null
    location: string | null
    facebook: string | null
    twitter: string | null
    meta_title: string | null
    meta_description: string | null
    url: string
  }>
  tags: Array<{
    id: string
    name: string
    slug: string
    description: string | null
    feature_image: string | null
    visibility: string
    meta_title: string | null
    meta_description: string | null
    url: string
  }>
  primary_author: {
    id: string
    name: string
    slug: string
    profile_image: string | null
    cover_image: string | null
    bio: string | null
    website: string | null
    location: string | null
    facebook: string | null
    twitter: string | null
    meta_title: string | null
    meta_description: string | null
    url: string
  }
  primary_tag: {
    id: string
    name: string
    slug: string
    description: string | null
    feature_image: string | null
    visibility: string
    meta_title: string | null
    meta_description: string | null
    url: string
  } | null
  url: string
  reading_time: number
}

interface Blog {
  id: string
  title: string
  category: string
  author: string
  date: string
  readTime: string
  description: string
  image: string
  tags: string[]
  slug: string
}

// Ghost API Configuration
const GHOST_CONFIG = {
  url: "https://ultra-app.ghost.io",
  key: "d80b5c24b579fa3eb7c69d96f8",
  version: "v5.0",
}

const BlogSection = ({ currentTheme }: BlogSectionProps) => {
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  // Fetch featured posts from Ghost API
  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true)
        const apiUrl = `${GHOST_CONFIG.url}/ghost/api/content/posts/?key=${GHOST_CONFIG.key}&include=tags,authors&limit=3&order=published_at DESC`

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        const data = (await response.json()) as { posts: GhostPost[] }

        // Transform Ghost posts to our Blog format
        const transformedBlogs: Blog[] = data.posts.map((post) => ({
          id: post.id,
          title: post.title,
          category: post.primary_tag?.name || "Uncategorized",
          author: post.primary_author?.name || "Unknown Author",
          date: post.published_at,
          readTime: `${post.reading_time || 5} min read`,
          description: post.excerpt || post.custom_excerpt || "No description available",
          image: post.feature_image || "/blog/blog1.png", // Fallback image
          tags: post.tags.slice(0, 2).map((tag) => tag.name), // Limit to 2 tags
          slug: post.slug,
        }))

        setFeaturedBlogs(transformedBlogs)
        setError(null)
      } catch (err) {
        console.error("Error fetching Ghost posts:", err)
        setError("Failed to load featured posts.")
        // Fallback to sample data if API fails
        setFeaturedBlogs(getSampleBlogs())
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedPosts()
  }, [])

  // Sample data as fallback
  const getSampleBlogs = (): Blog[] => [
    {
      id: "1",
      title: "How real-time analytics can revolutionize your financial strategy",
      category: "Crypto",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      description:
        "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease.",
      image: "/blog/blog1.png",
      tags: ["Crypto", "Finance"],
      slug: "real-time-analytics-financial-strategy",
    },
    {
      id: "2",
      title: "Understanding Blockchain Technology for Business",
      category: "Blockchain",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "8 min read",
      description:
        "Deep dive into blockchain technology and its applications beyond cryptocurrency for modern businesses.",
      image: "/blog/blog1.png",
      tags: ["Blockchain", "Technology"],
      slug: "understanding-blockchain-business",
    },
    {
      id: "3",
      title: "Maximizing Data Value in Financial Decisions",
      category: "Finance",
      author: "Emma Davis",
      date: "2024-01-10",
      readTime: "6 min read",
      description: "Learn how to leverage data analytics to make better financial decisions and drive business growth.",
      image: "/blog/blog1.png",
      tags: ["Data", "Finance"],
      slug: "maximizing-data-value-financial-decisions",
    },
  ]

  const handleReadMore = (slug: string) => {
    // Navigate to the internal blog detail page
    window.location.href = `/blog/${slug}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
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

      {/* Loading State */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid w-full gap-4 max-md:px-4 md:max-w-[1240px] md:grid-cols-3"
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-style flex flex-col rounded-2xl p-4">
              <div className="skeleton h-48 w-full rounded-xl bg-gray-200 dark:bg-gray-700"></div>
              <div className="my-3 flex items-center gap-2">
                <div className="skeleton h-10 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="skeleton h-10 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="skeleton mb-4 h-6 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="skeleton h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="skeleton mt-2 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="skeleton mt-3 h-10 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Error State */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20"
        >
          <div className="text-center text-red-800 dark:text-red-200">{error}</div>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      {!loading && (
        <motion.div
          className="grid w-full gap-4 max-md:px-4 md:max-w-[1240px] md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="border-style flex flex-col rounded-2xl p-4 transition-all duration-300 hover:shadow-lg"
              variants={fadeInUp}
              whileHover="hover"
            >
              {/* Blog Image */}
              <motion.div className="overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="size-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = "/blog-light.png"
                  }}
                />
              </motion.div>

              {/* Tags */}
              <div className="my-3 flex items-center gap-2">
                <div className="email relative flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs">
                  {blog.category}
                </div>
                {blog.tags.slice(0, 1).map((tag, i) => (
                  <div
                    key={i}
                    className="email relative flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition-all duration-500 max-sm:text-xs"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* Title */}
              <h6 className="mb-4 line-clamp-2 text-2xl font-medium">{blog.title}</h6>

              {/* Description */}
              <p className="smaller-text line-clamp-3">{blog.description}</p>

              {/* Meta Info */}
              <div className="smaller-text mt-3 flex items-center gap-2 text-sm text-gray-500">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{formatDate(blog.date)}</span>
              </div>

              <Link href={`/blog/${blog.slug}`}>
                <motion.button
                  className="button-style3 border-style mt-3 justify-center text-center"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && !error && featuredBlogs.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="smaller-text text-lg">No featured posts available.</div>
        </motion.div>
      )}

      {/* Learn More Button */}
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
          className="button-style flex items-center gap-2 transition-all duration-300 group-hover:gap-3 max-md:text-sm"
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
