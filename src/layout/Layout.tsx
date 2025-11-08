// Layout.tsx
import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex bg-white text-black min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 ml-0 md:ml-64">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="pt-16">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
