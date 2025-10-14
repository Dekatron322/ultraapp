"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface Career {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

const CareerSection = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")

  const router = useRouter()

  const careers: Career[] = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Lorem ipsum dolor sit amet conse cte tur euismod augue fermentum aliquam velit in nunc amet tempus tortor non.",
      requirements: ["5+ years experience", "React/Next.js", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Lorem ipsum dolor sit amet conse cte tur euismod augue fermentum aliquam velit in nunc amet tempus tortor non.",
      requirements: ["3+ years experience", "Figma", "User Research", "Prototyping"],
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Data",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Lorem ipsum dolor sit amet conse cte tur euismod augue fermentum aliquam velit in nunc amet tempus tortor non.",
      requirements: ["4+ years experience", "Python", "Machine Learning", "SQL"],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description:
        "Lorem ipsum dolor sit amet conse cte tur euismod augue fermentum aliquam velit in nunc amet tempus tortor non.",
      requirements: ["4+ years experience", "AWS/Azure", "Docker", "Kubernetes"],
    },
    {
      id: 5,
      title: "UX Researcher",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description:
        "Lorem ipsum dolor sit amet conse cte tur euismod augue fermentum aliquam velit in nunc amet tempus tortor non.",
      requirements: ["2+ years experience", "User Testing", "Analytics", "Qualitative Research"],
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Lorem ipsum dolor sit amet conse cte tur euismod augue fermentum aliquam velit in nunc amet tempus tortor non.",
      requirements: ["3+ years experience", "JavaScript", "React", "CSS"],
    },
  ]

  const departments = ["all", ...Array.from(new Set(careers.map((career) => career.department)))]

  const filteredCareers =
    selectedDepartment === "all" ? careers : careers.filter((career) => career.department === selectedDepartment)

  return (
    <div className="min-h-screen px-4 py-16 md:px-6">
      <div className="mx-auto max-w-full md:w-[1240px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="large-text mb-6 text-4xl font-bold md:text-5xl">Join Our Team</h1>
          <p className="small-text text-xl md:mx-auto md:max-w-3xl">
            Discover opportunities to grow and succeed with us. We&apos;re building the future and we want you to be
            part of it.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex  items-center justify-between gap-4 "
        >
          {/* Department Filter */}
          <div className="flex items-center gap-4">
            <label className="small-text text-sm font-medium max-md:hidden">Department:</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="search-bg rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept.charAt(0).toUpperCase() + dept.slice(1)}
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

        {/* Careers Grid/List */}
        <motion.div
          key={viewMode + selectedDepartment}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`
            ${viewMode === "grid" ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-6"}
          `}
        >
          {filteredCareers.map((career, index) => (
            <CareerCard key={career.id} career={career} viewMode={viewMode} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCareers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
            <div className="smaller-text text-lg">No positions found in this department.</div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

interface CareerCardProps {
  career: Career
  viewMode: "grid" | "list"
  index: number
}

const CareerCard: React.FC<CareerCardProps> = ({ career, viewMode, index }) => {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        features-cards border-style rounded-xl shadow-sm transition-all duration-300 
        hover:shadow-md
        ${viewMode === "list" ? "flex flex-col p-6 lg:flex-row lg:items-center" : "p-6"}
      `}
    >
      {/* Career Icon/Image */}
      <div className={`${viewMode === "list" ? "mb-4 lg:mb-0 lg:mr-6" : "mb-4"}`}>
        <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
          <svg className="size-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
            />
          </svg>
        </div>
      </div>

      {/* Career Content */}
      <div className={`flex-1 ${viewMode === "list" ? "lg:flex lg:items-center lg:justify-between" : ""}`}>
        <div className={viewMode === "list" ? "lg:mr-6 lg:flex-1" : ""}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
              {career.department}
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900/30 dark:text-green-200">
              {career.type}
            </span>
          </div>

          <h3 className="large-text mb-2 text-xl font-semibold">{career.title}</h3>

          <p className="small-text mb-4 line-clamp-2">{career.description}</p>

          <div className="smaller-text mb-4 flex items-center text-sm">
            <svg className="mr-1 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {career.location}
          </div>

          {/* Requirements */}
          <div className="mb-4 flex flex-wrap gap-2">
            {career.requirements.slice(0, 3).map((req, i) => (
              <span
                key={i}
                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {req}
              </span>
            ))}
            {career.requirements.length > 3 && (
              <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                +{career.requirements.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Apply Button */}
        <button className="button-style mt-auto w-full lg:w-auto">Apply Now</button>
      </div>
    </motion.div>
  )
}

export default CareerSection
