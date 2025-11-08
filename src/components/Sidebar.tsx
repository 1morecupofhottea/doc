import React from "react"

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  setCurrentPage,
  isOpen,
  closeSidebar
}) => {
  const pages = ["Home", "Installation", "About"]

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-25 z-10 transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white p-6 border-r z-20 transform transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
        <ul className="space-y-2">
          {pages.map(page => (
            <li key={page}>
              <button
                onClick={() => {
                  setCurrentPage(page)
                  closeSidebar()
                }}
                className={`block w-full text-left px-2 py-1 rounded hover:bg-indigo-50 ${
                  currentPage === page
                    ? "font-bold text-indigo-600"
                    : "text-gray-700"
                }`}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
