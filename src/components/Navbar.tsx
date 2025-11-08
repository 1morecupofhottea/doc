import React from "react"

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  toggleSidebar: () => void 
}

const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  toggleSidebar
}) => {
  const pages = ["Home", "Installation", "About"]

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-20">
      <div className="flex items-center gap-4">
        {/* Hamburger button visible on mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-indigo-600">MyDocs</h1>
      </div>

      <div className="hidden md:flex gap-6">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`font-medium hover:text-indigo-500 ${
              currentPage === page
                ? "text-indigo-600 underline"
                : "text-gray-700"
            }`}>
            {page}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
