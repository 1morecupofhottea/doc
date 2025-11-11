import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import About from "./pages/About"
import GettingStarted from "./pages/GettingStarted"
import Home from "./pages/Home"
import Installation from "./pages/Installation"
import Model from "./pages/Model"
import Datasets from "./pages/Datasets"

// Setup pages
import EnvironmentSetup from "./pages/EnvironmentSetup"
import Troubleshooting from "./pages/Troubleshooting"

// Annotation pages
import ImageAnnotation from "./pages/annotation/ImageAnnotation"
import AudioAnnotation from "./pages/annotation/AudioAnnotation"
import Shortcuts from "./pages/annotation/Shortcuts"
import Export from "./pages/annotation/Export"

// AI pages
import AIOverview from "./pages/ai/Overview"
import AutoLabeling from "./pages/ai/AutoLabeling"
import ArksorIntegration from "./pages/ai/ArksorIntegration"

// Arksor pages
import Architecture from "./pages/arksor/Architecture"
import Training from "./pages/arksor/Training"
import Performance from "./pages/arksor/Performance"

// Dataset pages
import Formats from "./pages/datasets/Formats"
import Upload from "./pages/datasets/Upload"
import Structure from "./pages/datasets/Structure"

// API pages
import Endpoints from "./pages/api/Endpoints"
import Auth from "./pages/api/Auth"
import Examples from "./pages/api/Examples"

// Contributing pages
import Guide from "./pages/contributing/Guide"
import DevSetup from "./pages/contributing/DevSetup"
import CodeStructure from "./pages/contributing/CodeStructure"
import Roadmap from "./pages/contributing/Roadmap"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="about" element={<About />} />
          
          {/* Setup Routes */}
          <Route path="installation" element={<Installation />} />
          <Route path="environment-setup" element={<EnvironmentSetup />} />
          <Route path="troubleshooting" element={<Troubleshooting />} />
          
          {/* Annotation Routes */}
          <Route path="annotation/image" element={<ImageAnnotation />} />
          <Route path="annotation/audio" element={<AudioAnnotation />} />
          <Route path="annotation/shortcuts" element={<Shortcuts />} />
          <Route path="annotation/export" element={<Export />} />
          
          {/* AI Routes */}
          <Route path="ai/overview" element={<AIOverview />} />
          <Route path="ai/auto-labeling" element={<AutoLabeling />} />
          <Route path="ai/arksor-integration" element={<ArksorIntegration />} />
          
          {/* Arksor Routes */}
          <Route path="arksor/architecture" element={<Architecture />} />
          <Route path="arksor/training" element={<Training />} />
          <Route path="arksor/performance" element={<Performance />} />
          <Route path="model" element={<Model />} />
          
          {/* Dataset Routes */}
          <Route path="datasets" element={<Datasets />} />
          <Route path="datasets/formats" element={<Formats />} />
          <Route path="datasets/upload" element={<Upload />} />
          <Route path="datasets/structure" element={<Structure />} />
          
          {/* API Routes */}
          <Route path="api/endpoints" element={<Endpoints />} />
          <Route path="api/auth" element={<Auth />} />
          <Route path="api/examples" element={<Examples />} />
          
          {/* Contributing Routes */}
          <Route path="contributing/guide" element={<Guide />} />
          <Route path="contributing/dev-setup" element={<DevSetup />} />
          <Route path="contributing/code-structure" element={<CodeStructure />} />
          <Route path="contributing/roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App
