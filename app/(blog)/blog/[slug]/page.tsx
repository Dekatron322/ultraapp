"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import DashboardNav from "components/Navbar/DashboardNav"
import { useTheme } from "next-themes"
import Footer from "components/Footer/Footer"
import GetUltraApp from "components/Landing/ComingSoon/GetUltraApp"

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

interface GhostPostsResponse {
  posts: GhostPost[]
}

const GHOST_CONFIG = {
  url: "https://ultra-app.ghost.io",
  key: "d80b5c24b579fa3eb7c69d96f8",
  version: "v5.0",
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<GhostPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Use resolvedTheme to avoid hydration mismatch
  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const apiUrl = `${GHOST_CONFIG.url}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_CONFIG.key}&include=tags,authors`

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.status}`)
        }

        const data = (await response.json()) as GhostPostsResponse
        const fetchedPost = data.posts?.[0] ?? null
        setPost(fetchedPost)
        if (!fetchedPost) {
          setError("Post not found.")
        } else {
          setError(null)
        }
      } catch (err) {
        console.error("Error fetching Ghost post:", err)
        setError("Failed to load blog post.")
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Loading state with full layout
  if (loading) {
    return (
      <>
        <section className="flex size-full flex-col items-center justify-center">
          <DashboardNav />
          <div className="container mx-auto mt-20 max-w-4xl px-4 py-8">
            {/* Back Button Skeleton */}
            <div className="mb-8 animate-pulse">
              <div className="h-6 w-32 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>

            {/* Header Skeleton */}
            <div className="mb-8 animate-pulse">
              <div className="mb-4 h-8 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-4 h-12 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>

            {/* Featured Image Skeleton */}
            <div className="mb-8 h-96 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>

            {/* Content Skeleton */}
            <div className="animate-pulse space-y-4">
              <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-8 rounded bg-gray-200 dark:bg-gray-700"></div> {/* Bigger heading skeleton */}
              <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <GetUltraApp currentTheme={currentTheme} />
          <Footer />
        </section>
      </>
    )
  }

  if (error || !post) {
    return (
      <>
        <section className="flex size-full flex-col items-center justify-center">
          <DashboardNav />
          <div className="container mx-auto mt-20 max-w-4xl px-4 py-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Post Not Found</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {error || "The requested blog post could not be found."}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 underline transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10.5 13L6 8.5 10.5 4l1 1-3.5 3.5 3.5 3.5-1 1z" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <GetUltraApp currentTheme={currentTheme} />
          <Footer />
        </section>
      </>
    )
  }

  return (
    <>
      <section className="flex size-full flex-col items-center justify-center">
        <DashboardNav />

        {/* Main Blog Content */}
        <article className="container mx-auto mt-20 max-w-4xl px-4 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-gray-600 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="transform transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                <path d="M10.5 13L6 8.5 10.5 4l1 1-3.5 3.5 3.5 3.5-1 1z" />
              </svg>
              <span className="border-b border-transparent group-hover:border-gray-600 dark:group-hover:border-gray-400">
                All Articles
              </span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.id}
                  className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight max-sm:text-2xl  sm:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && <p className="smaller-text mb-6 text-xl leading-relaxed max-sm:text-lg">{post.excerpt}</p>}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 max-sm:gap-2">
              <div className="flex items-center gap-2">
                {post.primary_author.profile_image && (
                  <img
                    src={post.primary_author.profile_image}
                    alt={post.primary_author.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                )}
                <span className="font-medium text-gray-700 dark:text-gray-300">{post.primary_author.name}</span>
              </div>
              <span>•</span>
              <span>{formatDate(post.published_at)}</span>
              <span>•</span>
              <span>{post.reading_time} min read</span>
            </div>
          </motion.header>

          {/* Featured Image */}
          {post.feature_image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <img src={post.feature_image} alt={post.title} className="w-full rounded-2xl object-cover shadow-xl" />
              {post.feature_image.includes("founders") && (
                <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                  ThankGod Izime and Emmanuel Chijioke - Founders of Ultra App
                </p>
              )}
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="article-content"
          >
            <div
              className="prose prose-lg dark:prose-invert /* 
                         Main title styling */ prose-h1:text-4xl
                         prose-h1:sm:text-5xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-6 /*
                         
                         Section titles (h2) - Smaller on mobile */ prose-h2:text-2xl
                         prose-h2:sm:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:mt-12 
                         prose-h2:mb-6  /*
                         
                         Subsection titles (h3) - Smaller on mobile */ prose-h3:text-xl
                         prose-h3:sm:text-2xl prose-h3:font-semibold prose-h3:tracking-tight prose-h3:mt-10
                         prose-h3:mb-4 prose-h3:text-gray-800 prose-h3:dark:text-gray-200 /*
                         
                         Paragraph styling */ prose-p:smaller-text prose-p:leading-relaxed prose-p:mb-6 /*
                         
                         Link styling */ prose-a:text-blue-600
                         prose-a:no-underline hover:prose-a:text-blue-700 dark:prose-a:text-blue-400 
                         dark:hover:prose-a:text-blue-300 /*
                         
                         Strong text */
                         prose-strong:dark:text-white prose-strong:font-semibold /*
                         
                         Blockquotes */ prose-blockquote:border-l-blue-500
                         prose-blockquote:bg-gray-50 prose-blockquote:dark:bg-gray-800/50 
                         prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl 
                         prose-blockquote:my-8 prose-blockquote:text-gray-600
                         prose-blockquote:dark:text-gray-400 prose-blockquote:text-lg
                         /*
                         
                         Lists */ prose-ul:list-disc
                         prose-ol:list-decimal prose-li:text-gray-700
                         prose-li:dark:text-gray-300 prose-li:mb-2 /*
                         
                         Images */ prose-img:rounded-xl
                         prose-img:shadow-lg prose-img:my-8 /*
                         
                         Horizontal rules */ prose-hr:border-gray-200
                         prose-hr:dark:border-gray-700 prose-hr:my-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700"
          >
            <div className="flex items-start gap-4">
              {post.primary_author.profile_image && (
                <img
                  src={post.primary_author.profile_image}
                  alt={post.primary_author.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold ">{post.primary_author.name}</h3>
                {post.primary_author.bio && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{post.primary_author.bio}</p>
                )}
                {(post.primary_author.website || post.primary_author.twitter) && (
                  <div className="mt-3 flex gap-4">
                    {post.primary_author.website && (
                      <a
                        href={post.primary_author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Website
                      </a>
                    )}
                    {post.primary_author.twitter && (
                      <a
                        href={post.primary_author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Related Articles or Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex justify-between border-t border-gray-200 pt-8 dark:border-gray-700"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-gray-600 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="transform transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                <path d="M10.5 13L6 8.5 10.5 4l1 1-3.5 3.5 3.5 3.5-1 1z" />
              </svg>
              <span className="border-b border-transparent group-hover:border-gray-600 dark:group-hover:border-gray-400">
                Back to Blog
              </span>
            </Link>

            <div className="text-sm text-gray-500 dark:text-gray-400">Published on {formatDate(post.published_at)}</div>
          </motion.div>
        </article>

        {/* Get Ultra App Section */}
        <GetUltraApp currentTheme={currentTheme} />

        {/* Footer */}
      </section>
      <Footer />

      <style jsx global>{`
        .article-content {
        }

        /* Enforce blue hyperlinks in article content */
        .article-content a {
          color: #2563eb !important; /* tailwind blue-600 */
          text-decoration: none;
        }
        .article-content a:hover {
          color: #1d4ed8 !important; /* tailwind blue-700 */
        }
        .article-content a:visited {
          color: #2563eb !important; /* keep visited links blue */
        }
        .dark .article-content a {
          color: #60a5fa !important; /* tailwind blue-400 */
        }
        .dark .article-content a:hover {
          color: #93c5fd !important; /* tailwind blue-300 */
        }
        .dark .article-content a:visited {
          color: #60a5fa !important; /* keep visited links blue in dark */
        }

        /* Additional styling for section titles - Smaller on mobile */
        .article-content h2 {
          font-size: 1.5rem !important; /* text-2xl for mobile */
          line-height: 2rem !important;
          font-weight: 700 !important;

          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
          letter-spacing: -0.025em !important;
        }

        .dark .article-content h2 {
          color: #f9fafb !important;
        }

        @media (min-width: 640px) {
          .article-content h2 {
            font-size: 1.875rem !important; /* text-3xl for desktop */
            line-height: 2.25rem !important;
            margin-top: 3rem !important;
            margin-bottom: 1.5rem !important;
          }
        }

        /* H3 styling for mobile */
        .article-content h3 {
          font-size: 1.25rem !important; /* text-xl for mobile */
          line-height: 1.75rem !important;
        }

        @media (min-width: 640px) {
          .article-content h3 {
            font-size: 1.5rem !important; /* text-2xl for desktop */
            line-height: 2rem !important;
          }
        }

        .article-content .kg-card {
          margin: 2rem 0;
        }

        .article-content .kg-image-card {
          text-align: center;
        }

        .article-content .kg-image-card img {
          margin: 0 auto;
        }

        .article-content .kg-callout-card {
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
        }

        .dark .article-content .kg-callout-card {
          background: #1e293b;
        }

        .article-content .kg-bookmark-card {
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .dark .article-content .kg-bookmark-card {
          border-color: #374151;
        }
      `}</style>
    </>
  )
}
