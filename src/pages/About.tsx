import React from "react"
import FeatureCard from "../components/FeatureCard"

const About: React.FC = () => {
  const features = [
    {
      title: "Simple API",
      description:
        "Load, play, and control audio with just a few lines of code — perfect for both beginners and pros."
    },
    {
      title: "Waveform & Spectrum",
      description:
        "Instantly extract waveform and frequency data for visualization and sound analysis."
    },
    {
      title: "Visualization Ready",
      description:
        "Integrates easily with libraries like Chart.js or D3.js for beautiful visual audio displays."
    },
    {
      title: "Web Audio API",
      description:
        "Built on top of modern Web Audio technology for high performance and precision."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-slate-950 text-white">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">About Sense Audio</h1>
        <p className="mb-6">
          Sense Audio is a lightweight JavaScript library designed to help
          developers analyze, visualize, and interact with sound effortlessly.
          Whether you’re building an audio player, a waveform visualizer, or an
          AI-based sound analysis tool, Sense Audio provides the building blocks
          you need.
        </p>

        <p className="mb-6">
          Our goal is to make audio development accessible to everyone — from
          beginners exploring sound processing to professionals building
          advanced audio applications.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Core Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <p>
          Sense Audio is open source and actively maintained by developers who
          believe sound is one of the most powerful forms of interaction. We
          welcome contributions, feedback, and ideas to make it even better.
        </p>
      </section>
    </div>
  )
}

export default About
