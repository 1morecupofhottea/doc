import React from "react"
import { Link, useLocation } from "react-router-dom"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "Getting Started", path: "/getting-started" },
    { name: "Installation", path: "/installation" },
    { name: "Model", path: "/model" },
    { name: "Datasets", path: "/datasets" },
    { name: "About", path: "/about" }
  ]

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 md:left-64 z-40 h-screen w-64 flex flex-col bg-slate-950 text-white transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
        {/* Navigation Links */}
        <div className="flex flex-col gap-0.5 px-3 py-4 mt-16 pl-6 overflow-y-auto flex-1">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                location.pathname === link.path
                  ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  )
}

export default Sidebar
