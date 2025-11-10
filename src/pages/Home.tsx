import React from "react"

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-slate-950 text-white">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Sense Audio</h1>
        <p className="mb-6">
          Sense Audio helps you understand and visualize sound with ease. Watch
          the quick introduction video below to get started.
        </p>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-slate-950 ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/JSFG-IE8n_c?si=5P-3tziQtpcEhKfu"
            title="Sense Audio Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </section>
    </div>
  )
}

export default Home
