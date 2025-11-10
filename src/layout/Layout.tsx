// Layout.tsx
import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex flex-col bg-dark text-white min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 ml-0 md:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        <main className="pt-16 bg-slate-950 min-h-screen">
          <Outlet />
        </main>
      </div>
        <Footer />
    </div>
  )
}

export default Layout
