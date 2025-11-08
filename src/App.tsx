import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import About from "./pages/About";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Installation":
        return <Installation />;
      case "About":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          toggleSidebar={toggleSidebar}
        />
        <main className="p-6">{renderPage()}</main>
      </div>
    </div>
  );
};

export default App;
