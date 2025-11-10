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
          fixed top-0 left-0 z-50 h-full flex-col bg-[#0f172a] text-white shadow-lg transition-transform duration-300 border-r border-gray-800
          ${open ? "translate-x-0 w-full md:w-64" : "-translate-x-full md:translate-x-0 md:w-64"}
        `}>
        <div className="mt-20 flex flex-col gap-2 px-6">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={`rounded-md px-3 py-2 text-lg font-medium transition ${
                location.pathname === link.path
                  ? "bg-slate-700/50 text-white border-l-2 border-indigo-500"
                  : "text-gray-300 hover:bg-slate-700/30 hover:text-white"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  )
}

export default Sidebar
