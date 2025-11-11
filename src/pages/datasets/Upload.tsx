import React from "react";
import { Upload as UploadIcon, FolderPlus, Eye, Edit3, Trash2, Archive, GitBranch, CheckCircle2, Shield } from "lucide-react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`border border-gray-800 bg-linear-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

const StepCard: React.FC<{ 
  number: number; 
  title: string; 
  description: string;
  icon: React.ReactNode;
}> = ({ number, title, description, icon }) => (
  <div className="relative group">
    <div className="absolute -left-4 top-0 w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>
    <Card className="ml-12 group-hover:border-indigo-500/50">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Card>
  </div>
);

const ManagementFeature: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  badge?: string;
}> = ({ icon, title, description, badge }) => (
  <div className="p-6 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-purple-500/50 transition-all group">
    <div className="flex items-start justify-between mb-3">
      <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      {badge && (
        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Upload: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-950 p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
              <UploadIcon size={20} className="text-purple-400" />
            </div>
            <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">
              Dataset Management
            </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Upload & Manage
            </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
            Seamlessly upload, organize, and manage your annotation datasets with powerful tools and automation
              </p>
              
              <div className="flex items-center justify-center gap-4 mt-8">
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-gray-300">🚀 Batch Upload</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-gray-300">✨ Auto Validation</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-gray-300">📊 Smart Organization</span>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Upload Process</h2>
          <div className="space-y-6">
            <StepCard
              number={1}
              icon={<FolderPlus size={24} />}
              title="Create New Dataset"
              description="Click 'New Dataset' on your dashboard to begin the upload process."
            />
            <StepCard
              number={2}
              icon={<CheckCircle2 size={24} />}
              title="Select Dataset Type"
              description="Choose between Image or Audio dataset type based on your annotation needs."
            />
            <StepCard
              number={3}
              icon={<UploadIcon size={24} />}
              title="Add Your Files"
              description="Drag & drop your files or select a folder from your device. Supports batch uploads."
            />
            <StepCard
              number={4}
              icon={<Shield size={24} />}
              title="Automatic Validation"
              description="Files are automatically validated and processed. Click Upload to complete."
            />
          </div>
        </div>

        {/* Auto-validation Info */}
        <Card className="mb-16 bg-linear-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Validation</h3>
              <p className="text-gray-300 mb-3">
                Jomnam automatically validates your uploads to ensure data quality and consistency.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-gray-300">File type checking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-gray-300">Size validation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-gray-300">Duplicate detection</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Dataset Management Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">Dataset Management Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ManagementFeature
              icon={<Eye size={24} />}
              title="Preview Samples"
              description="View image thumbnails or play audio clips directly in the browser without downloading."
            />
            <ManagementFeature
              icon={<Edit3 size={24} />}
              title="Rename Datasets"
              description="Edit dataset names anytime to keep your workspace organized and descriptive."
            />
            <ManagementFeature
              icon={<Trash2 size={24} />}
              title="Delete Datasets"
              description="Permanently remove old or unused datasets to free up storage space."
            />
            <ManagementFeature
              icon={<Archive size={24} />}
              title="Archive Projects"
              description="Archive completed projects while preserving all data for future reference."
            />
            <ManagementFeature
              icon={<GitBranch size={24} />}
              title="Version Control"
              description="Track annotation updates and changes over time with built-in versioning."
              badge="Coming Soon"
            />
            <ManagementFeature
              icon={<FolderPlus size={24} />}
              title="Project Groups"
              description="Organize related datasets into projects for better workflow management."
            />
          </div>
        </div>

        {/* Pro Tip */}
        <Card className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pro Tip</h3>
              <p className="text-gray-300">
                Group datasets by <span className="text-purple-400 font-semibold">project</span> to keep 
                related annotations organized. This makes it easier to manage large-scale annotation workflows 
                and collaborate with team members.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Upload;
