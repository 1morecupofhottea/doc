// Layout.tsx
import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
// import Footer from "../components/Footer"

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex flex-col bg-slate-950 text-white min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 ml-0 md:ml-100 bg-slate-950 pt-16">
        <main className="w-full bg-slate-950">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
