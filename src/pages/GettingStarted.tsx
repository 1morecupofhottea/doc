import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Music, Sparkles, Settings, Globe, Monitor, CheckCircle2, Cpu, HardDrive, ArrowRight } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`border border-gray-800 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

const RequirementItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-gray-700 transition-all">
    <div className="text-indigo-400 flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

const GettingStarted: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-indigo-300 font-medium text-sm">Documentation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white">
            Getting Started with Jomnam
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Learn how to set up and configure Jomnam for your annotation projects
          </p>
        </div>

        <Card className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Welcome to Jomnam</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Jomnam is a powerful multi-modal annotation tool designed for both image and audio data annotation. 
              With integrated AI assistance powered by the Arksor model, you can streamline your annotation workflow 
              and achieve higher accuracy in less time.
            </p>
            <p>
              Whether you are working on computer vision projects, audio classification tasks, or multi-modal AI research, 
              Jomnam provides the tools you need to create high-quality labeled datasets efficiently.
            </p>
          </div>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Image size={32} />}
              title="Image & Audio Annotation"
              description="Support for both image and audio data with specialized annotation tools for each modality."
            />
            <FeatureCard
              icon={<Sparkles size={32} />}
              title="AI-Assisted Labeling"
              description="Leverage the power of Arksor AI model to automatically suggest and generate labels."
            />
            <FeatureCard
              icon={<Settings size={32} />}
              title="Dataset Management"
              description="Organize, version, and export your datasets in multiple formats with ease."
            />
            <FeatureCard
              icon={<Monitor size={32} />}
              title="Customizable Workflow"
              description="Configure annotation tools and keyboard shortcuts to match your team's workflow."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Web-Based Interface"
              description="Access your annotation projects from anywhere with our modern web interface."
            />
            <FeatureCard
              icon={<Music size={32} />}
              title="Multi-Modal Support"
              description="Seamlessly switch between image and audio annotation in a single unified platform."
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RequirementItem
              icon={<Monitor size={24} />}
              title="Operating System"
              description="Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)"
            />
            <RequirementItem
              icon={<CheckCircle2 size={24} />}
              title="Python Version"
              description="Python 3.9 or higher required for backend services"
            />
            <RequirementItem
              icon={<Globe size={24} />}
              title="Node.js"
              description="Node.js 18+ and npm for running the web interface"
            />
            <RequirementItem
              icon={<Cpu size={24} />}
              title="GPU (Optional)"
              description="CUDA-compatible GPU recommended for AI features"
            />
            <RequirementItem
              icon={<HardDrive size={24} />}
              title="Memory"
              description="Minimum 8GB RAM, 16GB recommended for large datasets"
            />
            <RequirementItem
              icon={<HardDrive size={24} />}
              title="Storage"
              description="At least 5GB free disk space for installation and cache"
            />
          </div>
        </div>

        <Card className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Installation Options</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-green-400" size={24} />
                Quick Installation
              </h3>
              <p className="text-gray-400 mb-4">
                Get up and running quickly with our automated installation script. Perfect for most users.
              </p>
              <Link 
                to="/installation" 
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                View Installation Guide <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Settings className="text-indigo-400" size={24} />
                Custom Environment Setup
              </h3>
              <p className="text-gray-400 mb-4">
                Need more control? Set up a custom environment with specific Python versions, GPU support, or Docker.
              </p>
              <Link 
                to="/environment-setup" 
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                Advanced Setup Options <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Card>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Annotating?</h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Follow our installation guide to set up Jomnam and begin creating high-quality labeled datasets.
            </p>
            <Link 
              to="/installation"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Install Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
