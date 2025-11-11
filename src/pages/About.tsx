import React from "react";
import { Heart, Users, Target, Sparkles, Github, Mail, Globe } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`border border-gray-800 bg-linear-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

const TeamValue: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all group">
    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Annotation",
      description: "Leverage Arksor's YOLOv8 model for intelligent, automated text detection in images and audio classification."
    },
    {
      title: "Multi-Modal Support",
      description: "Seamlessly annotate both image and audio data in a unified platform designed for versatility."
    },
    {
      title: "High Precision",
      description: "Achieve 95%+ accuracy with our custom-trained Khmer text detection model and quality validation tools."
    },
    {
      title: "Team Collaboration",
      description: "Built for teams with project organization, version control, and collaborative annotation features."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <span className="text-pink-400 font-semibold text-sm flex items-center gap-2">
              <Heart size={16} />
              About Us
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Jomnam
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering researchers and developers with intelligent multi-modal annotation tools
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <Target size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Jomnam is a powerful multi-modal annotation platform designed to help developers, 
                  researchers, and data scientists create high-quality labeled datasets for machine learning. 
                  Whether you're working on computer vision, audio classification, or multi-modal AI research, 
                  Jomnam provides the tools you need.
                </p>
                <p>
                  Built with the <span className="text-indigo-400 font-semibold">Arksor</span> AI model at its core, 
                  Jomnam specializes in Khmer scene text detection while supporting diverse annotation workflows. 
                  Our goal is to make annotation accessible, efficient, and accurate for everyone — from beginners 
                  exploring data labeling to professionals building advanced ML systems.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Why Choose Jomnam?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TeamValue
              icon={<Heart size={24} />}
              title="Community First"
              description="We believe in open collaboration and welcome contributions, feedback, and ideas from the community to make Jomnam better."
            />
            <TeamValue
              icon={<Sparkles size={24} />}
              title="Innovation"
              description="Constantly pushing boundaries with AI-assisted features and modern tools that streamline annotation workflows."
            />
            <TeamValue
              icon={<Target size={24} />}
              title="Quality & Accuracy"
              description="Committed to providing tools that ensure high-quality annotations through validation, verification, and expert review."
            />
            <TeamValue
              icon={<Users size={24} />}
              title="Accessibility"
              description="Making advanced annotation tools accessible to everyone, regardless of technical background or experience level."
            />
          </div>
        </div>

        {/* Open Source Section */}
        <Card className="mb-12 bg-linear-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <Github size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Open Source & Community</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Jomnam is open source and actively maintained by developers who believe in the power of 
                collaborative AI development. We're building tools that make data annotation faster, smarter, 
                and more accessible to researchers worldwide.
              </p>
              <p className="text-gray-400 text-sm">
                Join our community, contribute to the project, or share your feedback to help shape the future of annotation tools.
              </p>
            </div>
          </div>
        </Card>

        {/* Contact Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-pink-500/10 text-pink-400">
                <Github size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm mb-4">
              Contribute to our open source project
            </p>
            <a href="#" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors">
              View Repository →
            </a>
          </Card>

          <Card className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400">
                <Mail size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get in touch for support or collaboration
            </p>
            <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              Send Email →
            </a>
          </Card>

          <Card className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Globe size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm mb-4">
              Join discussions and stay updated
            </p>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
              Learn More →
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
