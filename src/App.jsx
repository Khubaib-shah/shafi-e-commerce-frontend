import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import AddBundle from "./pages/AddBundle";
import Inventory from "./pages/InventoryTable";
import Reports from "./pages/Reports";

const App = () => {
  const [bundles, setBundles] = useState([]);

  const handleAddBundle = (newBundle) => {
    setBundles([...bundles, newBundle]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-bundle"
            element={<AddBundle onAddBundle={handleAddBundle} />}
          />
          <Route path="/inventory" element={<Inventory bundles={bundles} />} />
          <Route path="/reports" element={<Reports bundles={bundles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
