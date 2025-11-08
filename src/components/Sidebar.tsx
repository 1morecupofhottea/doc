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
    { name: "About", path: "/about" }
  ]

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full flex-col bg-white text-black shadow-lg transition-transform duration-300
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
                  ? "bg-slate-200 text-slate-900"
                  : "hover:bg-slate-100"
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
