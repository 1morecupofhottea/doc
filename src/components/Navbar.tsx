import { Menu } from "lucide-react"
import React from "react"

interface NavbarProps {
  toggleSidebar: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-50">
      <div className="text-xl font-bold">My Docs</div>

      <button className="md:hidden text-black" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
    </nav>
  )
}

export default Navbar