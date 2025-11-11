import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Zap, Globe, Sparkles } from "lucide-react"

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`border border-gray-800 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-gray-700 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
)

const FeatureCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}> = ({ icon, title, description }) => (
  <Card className="group hover:scale-105">
    <div className="mb-4 text-indigo-400 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">
      {title}
    </h3>
    <p className="text-gray-300 leading-relaxed">
      {description}
    </p>
  </Card>
)

const Home: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
              ✨ AI Asist Annotation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering AI with{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Jomnam
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              An advanced annotation tool built to simplify and accelerate image
              and audio labeling — designed to support AI innovation in Cambodia
              with smart automation and Khmer text detection.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/getting-started"
                className="group px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/model"
                className="px-8 py-4 bg-slate-800 border border-gray-700 text-white rounded-xl font-semibold hover:bg-slate-700 hover:border-gray-600 transition-all duration-200"
              >
                Try Live Demo
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:shadow-indigo-500/20 transition-shadow duration-300">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/JSFG-IE8n_c?si=5P-3tziQtpcEhKfu"
              title="Jomnam Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-24">
          <Card className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">10,000+</div>
            <p className="text-gray-400">Annotated Images</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">95%+</div>
            <p className="text-gray-400">Detection Accuracy</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">50%</div>
            <p className="text-gray-400">Faster Annotation</p>
          </Card>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-indigo-400">Jomnam</span>
          </h2>
          <Card className="p-8">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Jomnam is developed to support AI development in Cambodia,
                offering a seamless and efficient annotation experience powered
                by AI-assisted workflows.
              </p>
              <p>
                Users can easily create, manage, and review annotations, while
                intelligent automation features help reduce manual effort and
                improve productivity. It integrates{" "}
                <span className="text-indigo-400 font-semibold">Arksor</span> —
                a Khmer scene text detection model — capable of
                accurately detecting and localizing Khmer text in natural scenes.
              </p>
              <p>
                By blending human precision with AI power, Jomnam enables faster,
                smarter, and more accurate annotations for researchers,
                developers, and organizations focused on Khmer language and
                computer vision projects.
              </p>
            </div>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-12 h-12" />}
              title="AI-Assisted Annotation"
              description="Leverage models like Arksor to automate and accelerate your annotation workflow efficiently with cutting-edge AI technology."
            />
            <FeatureCard
              icon={<Globe className="w-12 h-12" />}
              title="Khmer Text Detection"
              description="Advanced detection model trained to recognize and localize Khmer script in real-world scenes with high precision."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12" />}
              title="Intuitive & Easy to Use"
              description="Clean interface designed for researchers, developers, and annotators — simple yet powerful workflow."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden text-center py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Start Building Smarter AI Today
            </h2>
            <p className="text-gray-100 mb-8 text-lg max-w-2xl mx-auto">
              Try Jomnam and experience faster, more accurate Khmer data
              annotation powered by AI. Join the future of annotation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/getting-started"
                className="group px-10 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl flex items-center gap-2"
              >
                Get Started for Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/datasets"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                View Datasets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
