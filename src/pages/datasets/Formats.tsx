import React from "react";
import { FileImage, FileAudio, AlertCircle, CheckCircle2, Info } from "lucide-react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`border border-gray-800 bg-linear-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

const FormatCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  formats: string[]; 
  description: string;
  color: string;
}> = ({ icon, title, formats, description, color }) => (
  <div className={`p-6 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-${color}-500/50 transition-all`}>
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-3 rounded-lg bg-${color}-500/10 text-${color}-400`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="mb-3">
      <span className="text-sm font-semibold text-gray-400">Supported Formats:</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {formats.map((format, idx) => (
          <span key={idx} className={`px-3 py-1 rounded-full text-xs font-semibold bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
            {format}
          </span>
        ))}
      </div>
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const OutputFormatItem: React.FC<{ 
  title: string; 
  description: string;
  recommended?: boolean;
}> = ({ title, description, recommended }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-gray-800 hover:border-gray-700 transition-all">
    <div className={`shrink-0 mt-1 ${recommended ? 'text-green-400' : 'text-indigo-400'}`}>
      <CheckCircle2 size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
        {title}
        {recommended && (
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
            Recommended
          </span>
        )}
      </h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

const Formats: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-12">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
            <FileImage size={16} className="text-indigo-400" />
            <span className="text-indigo-300 font-semibold text-sm">
              Multi-Format Support
            </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dataset Formats
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
            Jomnam supports multiple data types and output formats for flexible annotation workflows
              </p>
            </div>
          </div>
        </div>

        {/* Input Formats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">Input Data Formats</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FormatCard
              icon={<FileImage size={24} />}
              title="Image Data"
              formats={['.jpg', '.png', '.jpeg', '.bmp']}
              description="Used for object detection and scene text annotation. Perfect for visual data labeling tasks."
              color="blue"
            />
            <FormatCard
              icon={<FileAudio size={24} />}
              title="Audio Data"
              formats={['.wav', '.mp3', '.flac']}
              description="Used for speech and sound event annotation. Ideal for audio classification and transcription."
              color="purple"
            />
          </div>
        </div>

        {/* Best Practices */}
        <Card className="mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Info size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Best Practices</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Images:</span> Keep resolution below{" "}
                  <span className="text-amber-400 font-semibold">4000×4000px</span> for optimal performance
                </p>
                <p>
                  <span className="font-semibold text-white">Audio:</span> Limit samples to under{" "}
                  <span className="text-amber-400 font-semibold">10 minutes</span> per file
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Output Formats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">Annotation Output Formats</h2>
          <div className="space-y-4">
            <OutputFormatItem
              title="YOLO TXT"
              description="Bounding box format optimized for YOLO models. Best choice for Arksor training and object detection tasks."
              recommended={true}
            />
            <OutputFormatItem
              title="COCO JSON"
              description="Comprehensive format supporting detection, segmentation, and keypoints. Widely used in computer vision research."
            />
            <OutputFormatItem
              title="CSV"
              description="Simple tabular format for audio metadata, classification labels, and basic annotations. Easy to process and analyze."
            />
          </div>
        </div>

        {/* Arksor Integration Note */}
        <Card className="bg-linear-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-green-500/10 text-green-400 shrink-0">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Arksor Integration</h3>
              <p className="text-gray-300">
                If you're training with <span className="text-green-400 font-semibold">Arksor</span>, 
                the YOLO format is recommended for better compatibility and optimal performance with the YOLOv8 architecture.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Formats;