import React from "react"

interface FeatureCardProps {
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default FeatureCard
