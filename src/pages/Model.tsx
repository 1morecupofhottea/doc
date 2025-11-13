import React, { useState } from "react";
import axios from "axios";
import { Upload, Sliders, Image as ImageIcon, Sparkles } from "lucide-react";

const API_URL = "https://yolo-api-jvka.onrender.com/predict";

interface Detection {
  object: string;
  confidence: string;
  box: number[];
}

// Reusable Card Component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`border border-gray-800 bg-linear-to-b from-slate-900 to-slate-950 rounded-2xl p-8 hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

// Reusable Button Component
const Button: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}> = ({ onClick, disabled, children, variant = "primary" }) => {
  const baseStyles = "relative overflow-hidden px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:transform-none disabled:cursor-not-allowed shadow-2xl";
  const variants = {
    primary: `
      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
      hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
      disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-800
      text-white
      shadow-indigo-500/50 hover:shadow-purple-500/60
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
      before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
      disabled:before:translate-x-0
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 to-slate-800 
      hover:from-slate-600 hover:to-slate-700
      text-white
      shadow-slate-500/20 hover:shadow-slate-500/40
    `
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-60' : 'opacity-100'}`}
    >
      {children}
    </button>
  );
};

const Demo: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [annotated, setAnnotated] = useState<string | null>(null);
  const [detections, setDetections] = useState<Detection[]>([]);
  const [conf, setConf] = useState<number>(0.4);
  const [iou, setIou] = useState<number>(0.5);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) return alert("Please upload an image first!");

    setLoading(true);
    setDetections([]);
    setAnnotated(null);

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("conf", conf.toString());
    formData.append("iou", iou.toString());

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { annotated_image, detections } = response.data;
      setAnnotated(`data:image/jpeg;base64,${annotated_image}`);
      setDetections(detections);
    } catch (err) {
      console.error(err);
      alert("Error during inference. Make sure the backend is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 font-semibold text-sm flex items-center gap-2">
              <Sparkles size={16} />
              Powered by YOLOv8
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Try Our Model
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Experience Arksor's Khmer scene text detection in action
          </p>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Arksor is a Khmer scene text detection model built on the YOLOv8 architecture and trained with our custom Khmer sense text{" "}
            <a href='/datasets' className='text-indigo-400 font-semibold underline hover:text-indigo-300 transition-colors'>dataset</a>.
            {" "}It is designed to accurately detect and localize Khmer text in natural images, handling the script's complex shapes and stacked characters with high speed and precision.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Upload size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Upload Image</h3>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-400
              file:mr-4 file:py-3 file:px-6
              file:rounded-xl file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-600 file:text-white
              hover:file:bg-indigo-700 cursor-pointer
              file:transition-all file:duration-200"
          />
          
          {/* Preview Image Only - Hidden after prediction */}
          {preview && !annotated && (
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <ImageIcon size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">Preview</h4>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-slate-950">
                <img
                  src={preview}
                  alt="Uploaded preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </Card>

        {/* Detection Results - Image and Table Side by Side */}
        {annotated && detections.length > 0 && (
          <Card className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Detection Results</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Detection Result Image */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                    <ImageIcon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Annotated Image</h4>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-slate-950">
                  <img
                    src={annotated}
                    alt="Detection result"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Detection Details Table */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Detection Details</h4>
                <div className="overflow-x-auto rounded-xl border border-gray-800 mb-4">
                  <table className="w-full">
                    <thead className="bg-slate-900/50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Class</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Confidence</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Box</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {detections.map((det, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                          <td className="px-4 py-3 text-white font-medium">{det.object}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                              {det.confidence}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-400 font-mono">
                            [{det.box.map((v: number) => v.toFixed(1)).join(", ")}]
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Summary Stats */}
                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <p className="text-sm text-indigo-300">
                    <span className="font-semibold">Total Detections:</span> {detections.length} object{detections.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Sliders Section */}
        <Card className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
              <Sliders size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Detection Parameters</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <label className="block">
              <span className="text-sm font-semibold text-gray-300 mb-3 block">
                Confidence Threshold: <span className="text-indigo-400">{conf.toFixed(2)}</span>
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={conf}
                onChange={(e) => setConf(parseFloat(e.target.value))}
                className="w-full mt-2 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-300 mb-3 block">
                IOU Threshold: <span className="text-purple-400">{iou.toFixed(2)}</span>
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={iou}
                onChange={(e) => setIou(parseFloat(e.target.value))}
                className="w-full mt-2 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </label>
          </div>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Running Inference...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles size={20} />
                Run Inference
              </span>
            )}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Demo;