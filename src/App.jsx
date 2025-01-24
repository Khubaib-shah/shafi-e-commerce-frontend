import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import AddBundle from "./pages/AddBundle";
import Inventory from "./pages/InventoryTable";
import Reports from "./pages/Reports";
import axios from "axios";
import "./App.css";
import Invoice from "./Component/Invoice";

const App = () => {
  const [bundles, setBundles] = useState([]);
  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const response = await axios.get("http://localhost:3333/api/bundles");
        setBundles(response.data);
      } catch (err) {
        console.log("Failed to fetch bundles", err);
      }
    };

    fetchBundles();
  }, []);
  const handleAddBundle = (newBundle) => {
    setBundles([...bundles, newBundle]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={<AddBundle onAddBundle={handleAddBundle} />}
          />
          <Route path="/inventory" element={<Inventory bundles={bundles} />} />
          <Route path="/reports" element={<Reports bundles={bundles} />} />
          <Route path="/invoice" element={<Invoice bundles={bundles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
