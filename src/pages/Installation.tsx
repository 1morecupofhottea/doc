import React from "react"
import CodeBlock from "../components/CodeBlock"
import NoteBox from "../components/NoteBox"
import { Package, Terminal, Zap, CheckCircle2, Sparkles } from "lucide-react"

// Reusable Card Component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`border border-gray-800 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-gray-700 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const StepCard: React.FC<{
  number: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ number, icon, title, children }) => (
  <Card className="group hover:scale-[1.02]">
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm text-indigo-400 font-semibold mb-1">Step {number}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="ml-16">{children}</div>
  </Card>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
    <p className="text-gray-300">{text}</p>
  </div>
);

const Installation: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        {/* Hero Section */}
        <header className="mb-16 relative">
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Quick & Easy Setup
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
          Installation
              </span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Get started with{" "}
              <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-bold">
          Arksor
              </span>{" "}
              in minutes. Follow our streamlined setup process and start detecting Khmer text with cutting-edge AI technology.
            </p>
          </div>
        </header>

        {/* Intro Card */}
        <Card className="mb-12 p-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Arksor is a powerful Khmer scene text detection model built on{" "}
            <span className="text-indigo-400 font-semibold">YOLOv8</span>. 
            Whether you're building an annotation tool, analyzing documents, or 
            extracting text from images — this model provides accurate and fast 
            detection capabilities optimized for Khmer script.
          </p>
        </Card>

        {/* Installation Steps */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <StepCard number="1" icon={<Package className="w-6 h-6" />} title="Install Dependencies">
            <p className="text-gray-300 mb-6">
              First, install the required packages using{" "}
              <code className="bg-slate-800 text-indigo-300 px-2 py-1 rounded-md">pip</code>.
              Make sure you have Python 3.8+ installed.
            </p>
            <CodeBlock code="pip install ultralytics opencv-python numpy" />
            <div className="mt-4 flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-blue-400">Pro Tip:</span> Use a virtual environment 
                to keep your dependencies isolated and organized.
              </p>
            </div>
          </StepCard>

          {/* Step 2 */}
          <StepCard number="2" icon={<Terminal className="w-6 h-6" />} title="Load the Model">
            <p className="text-gray-300 mb-6">
              Import the Arksor model and load it with just a few lines of code. 
              The model will automatically download if it's your first time running it.
            </p>
            <CodeBlock
              code={`from ultralytics import YOLO

# Load the Arksor model
model = YOLO('arksor.pt')

# Run inference on an image
results = model('path/to/khmer_text_image.jpg')

# Display results
results[0].show()`}
            />
            <p className="text-gray-400 mt-6 leading-relaxed">
              The model will detect Khmer text regions and return bounding boxes with 
              confidence scores. Results are ready to visualize or export immediately.
            </p>
          </StepCard>

          {/* Step 3 */}
          <StepCard number="3" icon={<CheckCircle2 className="w-6 h-6" />} title="Process Results">
            <p className="text-gray-300 mb-6">
              Access detection results programmatically to integrate with your workflow:
            </p>
            <CodeBlock
              code={`# Get detection data
for result in results:
    boxes = result.boxes
    for box in boxes:
        # Get bounding box coordinates
        x1, y1, x2, y2 = box.xyxy[0]
        
        # Get confidence score
        confidence = box.conf[0]
        
        # Get class (text region)
        cls = box.cls[0]
        
        print(f"Detected text at ({x1}, {y1}), ({x2}, {y2})")
        print(f"Confidence: {confidence:.2f}")`}
            />
          </StepCard>
        </div>

        {/* Why Arksor Section */}
        <Card className="mb-12 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl font-bold">Why Arksor?</h2>
          </div>
          <p className="text-gray-300 mb-6 text-lg">
            Arksor was specifically designed to handle the unique challenges of Khmer script detection, 
            including complex character shapes, stacked glyphs, and varying text orientations.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <FeatureItem text="High accuracy detection trained on 10,000+ Khmer text images" />
            <FeatureItem text="Real-time inference powered by YOLOv8 architecture" />
            <FeatureItem text="Works with natural scenes, documents, and street signs" />
            <FeatureItem text="Easy integration with existing Python projects" />
            <FeatureItem text="Handles various fonts, sizes, and text orientations" />
            <FeatureItem text="Export-ready bounding box annotations" />
          </div>
        </Card>

        {/* Note Section */}
        <div className="mb-12">
          <NoteBox>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-indigo-400">Important:</span> For best performance, 
                use GPU acceleration if available. Install{" "}
                <code className="bg-slate-800 text-indigo-300 px-2 py-1 rounded-md">torch</code> with 
                CUDA support for significantly faster inference on NVIDIA GPUs.
              </div>
            </div>
          </NoteBox>
        </div>

        {/* Success Section */}
        <div className="relative overflow-hidden text-center py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              You're All Set! 🎉
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Start detecting Khmer text with Arksor. Try it out on the{" "}
              <span className="font-semibold">Live Demo</span> page or explore our{" "}
              <span className="font-semibold">Dataset</span> to see sample results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/model"
                className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl"
              >
                Try Live Demo
              </a>
              <a
                href="/datasets"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                View Datasets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Installation
