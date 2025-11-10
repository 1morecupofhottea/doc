import { Menu } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0f172a] shadow-lg flex items-center justify-between px-4 sm:px-6 lg:px-8 z-50">
      {/* Left: Logo + Title */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/images/Raw.png"
          alt="Logo"
          className="h-10 w-12 object-contain"
        />
        <span className="text-xl font-bold text-white">My Docs</span>
      </Link>

      {/* Right: Desktop Navigation + Mobile Menu */}
      <div className="flex items-center gap-6">
        <button className="md:hidden text-white hover:text-gray-200 transition" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header
