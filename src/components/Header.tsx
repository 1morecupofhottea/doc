import { Menu } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-slate-950 border-b border-gray-800 flex items-center justify-between px-6 md:px-8">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 pl-30">
        <img
          src="/images/Raw.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-lg font-semibold text-white">Jomnam Docs</span>
      </Link>

      {/* Mobile menu button */}
      <div className="flex items-center gap-4">
        <button className="md:hidden text-white hover:text-gray-200 transition" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header
