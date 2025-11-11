import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, ChevronRight } from "lucide-react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

interface SubLink {
  name: string
  path: string
}

interface NavLink {
  name: string
  path?: string
  subLinks?: SubLink[]
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Setup",
    "Arksor Model",
    "Datasets"
  ])

  const links: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Getting Started", path: "/getting-started" },
    {
      name: "Setup",
      subLinks: [
        { name: "Installation", path: "/installation" },
        { name: "Environment Setup", path: "/environment-setup" },
        { name: "Troubleshooting", path: "/troubleshooting" }
      ]
    },
    {
      name: "Annotation Guide",
      subLinks: [
        { name: "Image Annotation", path: "/annotation/image" },
        { name: "Audio Annotation", path: "/annotation/audio" },
        { name: "Shortcuts & UI", path: "/annotation/shortcuts" },
        { name: "Exporting Data", path: "/annotation/export" }
      ]
    },
    {
      name: "AI Assistance",
      subLinks: [
        { name: "Overview", path: "/ai/overview" },
        { name: "Auto-Labeling", path: "/ai/auto-labeling" },
        { name: "Arksor Integration", path: "/ai/arksor-integration" }
      ]
    },
    {
      name: "Arksor Model",
      subLinks: [
        { name: "Architecture", path: "/arksor/architecture" },
        { name: "Training Details", path: "/arksor/training" },
        { name: "Performance", path: "/arksor/performance" },
        { name: "Usage in Jomnam", path: "/model" }
      ]
    },
    {
      name: "Datasets",
      subLinks: [
        { name: "Data Formats", path: "/datasets/formats" },
        { name: "Upload & Manage", path: "/datasets/upload" },
        { name: "Dataset Structure", path: "/datasets/structure" },
        { name: "Examples", path: "/datasets" }
      ]
    },
    {
      name: "API Reference",
      subLinks: [
        { name: "Endpoints", path: "/api/endpoints" },
        { name: "Authentication", path: "/api/auth" },
        { name: "Examples", path: "/api/examples" }
      ]
    },
    {
      name: "Contributing",
      subLinks: [
        { name: "How to Contribute", path: "/contributing/guide" },
        { name: "Dev Environment", path: "/contributing/dev-setup" },
        { name: "Code Structure", path: "/contributing/code-structure" },
        { name: "Issues & Roadmap", path: "/contributing/roadmap" }
      ]
    },
    { name: "About", path: "/about" }
  ]

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    )
  }

  const isExpanded = (sectionName: string) => expandedSections.includes(sectionName)

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 md:left-35 z-40 h-screen w-64 flex flex-col bg-slate-950 text-white transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
        {/* Navigation Links */}
        <div className="flex flex-col gap-0.5 px-3 py-4 mt-16 pl-6 overflow-y-auto flex-1">
          {links.map(link => (
            <div key={link.name}>
              {/* Link with no dropdown */}
              {link.path && !link.subLinks && (
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 flex items-center ${
                    location.pathname === link.path
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                  }`}>
                  {link.name}
                </Link>
              )}

              {/* Dropdown Section */}
              {link.subLinks && (
                <div>
                  <button
                    onClick={() => toggleSection(link.name)}
                    className="w-full rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 flex items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white">
                    <span>{link.name}</span>
                    {isExpanded(link.name) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {/* Sub-links */}
                  {isExpanded(link.name) && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.subLinks.map(subLink => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={onClose}
                          className={`block rounded-lg px-3 py-2 text-sm transition-all duration-150 ${
                            location.pathname === subLink.path
                              ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                          }`}>
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  )
}

export default Sidebar
