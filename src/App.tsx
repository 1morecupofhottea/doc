import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import About from "./pages/About"
import GettingStarted from "./pages/GettingStarted"
import Home from "./pages/Home"
import Installation from "./pages/Installation"
import Model from "./pages/Model"
import Datasets from "./pages/Datasets"
const App: React.FC = () => {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<Home />} />{" "}
          <Route path="getting-started" element={<GettingStarted />} />{" "}
          <Route path="installation" element={<Installation />} />{" "}
          <Route path="model" element={<Model />} />{" "}
          <Route path="datasets" element={<Datasets />} />{" "}
          <Route path="about" element={<About />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </Router>
  )
}
export default App
