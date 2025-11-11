import React from "react";
import { FolderTree, FileCode, Lightbulb, CheckCircle2, AlertTriangle, Folder, FileText } from "lucide-react";
import CodeBlock from "../../components/CodeBlock";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`border border-gray-800 bg-linear-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

const BestPracticeItem: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  type: 'success' | 'warning';
}> = ({ icon, title, description, type }) => {
  const colors = {
    success: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    warning: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
  };
  
  return (
    <div className={`flex items-start gap-4 p-5 rounded-xl border ${colors[type]} transition-all hover:scale-[1.02]`}>
      <div className="shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const NamingExample: React.FC<{ 
  label: string; 
  filename: string;
  icon: React.ReactNode;
}> = ({ label, filename, icon }) => (
  <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-gray-800">
    <div className="text-indigo-400">
      {icon}
    </div>
    <div>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</div>
      <code className="text-indigo-300 font-mono text-sm">{filename}</code>
    </div>
  </div>
);

const DatasetStructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative mb-20">
          {/* Background gradient blur */}
          <div className="absolute inset-0 -top-20 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 mb-8 hover:border-emerald-500/50 transition-all">
              <div className="p-1 rounded-full bg-emerald-500/20">
            <FolderTree size={14} className="text-emerald-400" />
              </div>
              <span className="text-emerald-300 font-semibold text-sm tracking-wide">
            Organization & Structure
              </span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Dataset
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Structure
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              A well-organized dataset ensures smoother annotation and better model performance
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Build production-ready datasets for systems like <span className="text-cyan-400 font-semibold">Arksor</span>
            </p>
            
            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-gray-800">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-sm text-gray-400">Optimized</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-gray-800">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
            <span className="text-sm text-gray-400">Scalable</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-gray-800">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm text-gray-400">Production-Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Folder Structure Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
              <FolderTree size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Recommended Folder Structure</h2>
          </div>
          
          <Card>
            <CodeBlock
              code={`dataset/
├── images/
│   ├── train/
│   ├── val/
│   └── test/
├── labels/
│   ├── train/
│   ├── val/
│   └── test/
└── metadata.json`}
            />
            
            <div className="mt-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <div className="flex items-start gap-3">
                <FileCode className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-indigo-300">
                  <span className="font-semibold">metadata.json</span> includes version info, class names, 
                  dataset statistics, and other important metadata for your annotation project.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Naming Conventions Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Naming Conventions</h2>
          </div>

          <Card className="mb-8">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <CheckCircle2 className="text-teal-400 mb-2" size={20} />
                <p className="text-sm text-gray-300">Use lowercase letters</p>
              </div>
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <CheckCircle2 className="text-teal-400 mb-2" size={20} />
                <p className="text-sm text-gray-300">Separate with underscores</p>
              </div>
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <CheckCircle2 className="text-teal-400 mb-2" size={20} />
                <p className="text-sm text-gray-300">Avoid special characters</p>
              </div>
            </div>

            <div className="space-y-3">
              <NamingExample
                label="Image File"
                filename="road_sign_01.jpg"
                icon={<Folder size={20} />}
              />
              <NamingExample
                label="Label File"
                filename="road_sign_01.txt"
                icon={<FileText size={20} />}
              />
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-amber-300">
                  <span className="font-semibold">Important:</span> Keep label filenames identical to their 
                  corresponding image or audio files (only the extension should differ).
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Best Practices Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Dataset Best Practices</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <BestPracticeItem
              icon={<CheckCircle2 size={20} />}
              title="Balanced Classes"
              description="Maintain a balanced distribution across all classes to prevent model bias and improve accuracy."
              type="success"
            />
            <BestPracticeItem
              icon={<CheckCircle2 size={20} />}
              title="Proper Data Split"
              description="Use 70% for training, 20% for validation, and 10% for testing to ensure robust model evaluation."
              type="success"
            />
            <BestPracticeItem
              icon={<AlertTriangle size={20} />}
              title="Remove Duplicates"
              description="Eliminate duplicate samples to prevent overfitting and ensure dataset quality."
              type="warning"
            />
            <BestPracticeItem
              icon={<AlertTriangle size={20} />}
              title="Quality Control"
              description="Remove low-quality, blurry, or corrupted samples that could negatively impact training."
              type="warning"
            />
          </div>
        </div>

        {/* Split Ratio Visualization */}
        <Card className="bg-linear-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">Recommended Data Split</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">70%</div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Training</div>
              <p className="text-xs text-gray-500">Used to train the model</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">20%</div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Validation</div>
              <p className="text-xs text-gray-500">Tune hyperparameters</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10%</div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Testing</div>
              <p className="text-xs text-gray-500">Final evaluation</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DatasetStructure;
