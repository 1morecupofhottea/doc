import React from "react"

const Roadmap: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <h1 className="text-5xl font-bold mb-6">Issues & Roadmap</h1>
        <p className="text-xl text-gray-300 mb-8">
          Report issues and view the project roadmap for upcoming features.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>Content coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
