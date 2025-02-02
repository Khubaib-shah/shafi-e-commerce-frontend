import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBundle from "./pages/AddBundle";
import Inventory from "./pages/InventoryTable";
import Reports from "./pages/Reports";
import { Toaster } from "sonner";
import BundleDetails from "./pages/BundleDetails";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<AddBundle />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/bundle/:id" element={<BundleDetails />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
