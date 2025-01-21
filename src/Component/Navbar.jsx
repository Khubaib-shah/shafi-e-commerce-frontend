import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-4 text-white  flex justify-between">
      <h1 className="text-xl font-bold">Uniform Business Management</h1>
      <nav className="flex justify-around gap-4">
        <Link to={"/add-bundle"}>Add Bundle</Link>
        <Link to={"/inventory"}>Inventory</Link>
        <Link to={"/reports"}>Reports</Link>
      </nav>
    </header>
  );
};

export default Navbar;
