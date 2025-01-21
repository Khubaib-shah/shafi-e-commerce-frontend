import React, { useState } from "react";

const AddBundle = ({ onAddBundle }) => {
  const [formData, setFormData] = useState({
    supplier: "",
    quantity: "",
    cost: "",
    receivedAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBundle(formData);
    setFormData({ supplier: "", quantity: "", cost: "", receivedAt: "" });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Bundle</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label className="block mb-1">Supplier Name</label>
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Cost</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Date Received</label>
          <input
            type="date"
            name="receivedAt"
            value={formData.receivedAt}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Bundle
        </button>
      </form>
    </div>
  );
};

export default AddBundle;
