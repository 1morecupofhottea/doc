import React from "react"

const Installation: React.FC = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-3xl font-bold text-indigo-600">Installation</h1>
    <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800">
      {`# Clone repo
git clone https://github.com/yourname/my-docs.git

# Install dependencies
pnpm install

# Run dev server
pnpm dev`}
    </pre>
  </div>
)

export default Installation
