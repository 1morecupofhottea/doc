import React from "react";
import { Database, Image as ImageIcon, MapPin, CheckCircle2, Download, ExternalLink } from "lucide-react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`border border-gray-800 bg-linear-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}
  >
    {children}
  </div>
);

const Datasets: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Khmer Text Dataset
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Our comprehensive dataset powers the <span className="text-blue-400 font-semibold">Arksor</span> model — 
            designed to detect and localize Khmer text in natural scene images with high precision
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-3">6,000+</div>
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Total Images</div>
          </Card>
          <Card className="text-center">
            <div className="text-5xl font-bold text-indigo-400 mb-3">50,000+</div>
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Text Regions</div>
          </Card>
          <Card className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-3">15+</div>
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Categories</div>
          </Card>
        </div>

        {/* Sample Images Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sample Images from Dataset</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
          <img src="/public/images/workflow-01.png" alt="Street Signs" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
          <p className="text-sm text-gray-400">Street Signs</p>
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
          <img src="/public/images/workflow-02.png" alt="Shop Fronts" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
          <p className="text-sm text-gray-400">Shop Fronts</p>
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
          <img src="/public/images/workflow-03.png" alt="Product Labels" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
          <p className="text-sm text-gray-400">Product Labels</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Dataset Card */}
        <Card className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400">
              <ImageIcon size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Khmer Scene Text Detection Dataset</h2>
              <p className="text-gray-400">
          Curated collection of real-world images containing Khmer text from diverse environments
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Data Sources */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-blue-400" size={20} />
                <h3 className="text-xl font-bold text-white">Data Sources</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
                  <span>Urban street signs and shop fronts across Cambodia</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
                  <span>Product packaging and brand labels</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
                  <span>Historical documents and manuscripts</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
                  <span>Modern digital typography and signage</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
                  <span>Natural scene text in various contexts</span>
                </li>
              </ul>
            </div>

            {/* Dataset Features */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-indigo-400" size={20} />
                <h3 className="text-xl font-bold text-white">Dataset Features</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={18} />
                  <span>Manually verified by Khmer linguists</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={18} />
                  <span>High-resolution images (up to 4000×4000px)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={18} />
                  <span>YOLO format annotations with bounding boxes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={18} />
                  <span>Diverse lighting and environmental conditions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-indigo-400 shrink-0 mt-1" size={18} />
                  <span>Train/validation/test split ready</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              <Download size={20} />
              Download Dataset
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:border-blue-500/50 hover:text-blue-400 transition-all">
              <ExternalLink size={20} />
              View Documentation
            </button>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-bold text-white mb-3">Annotation Format</h3>
            <p className="text-gray-400">
              All text regions are labeled in <span className="text-blue-400 font-semibold">YOLO format</span> including 
              bounding box coordinates and class IDs for seamless integration with YOLOv8.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
            <p className="text-gray-400">
              Each image undergoes rigorous validation to ensure accuracy, with multiple rounds of 
              review by native Khmer speakers and computer vision experts.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-3">License & Usage</h3>
            <p className="text-gray-400">
              Free for research and educational purposes. Contact us for commercial licensing 
              or collaboration opportunities on extended datasets.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Datasets;

