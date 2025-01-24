import axios from "axios";
import React, { useState } from "react";
import MyModal from "../Component/MyModal";
import Button from "../Component/Button";

const AddBundle = ({ onAddBundle }) => {
  let [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    supplier: "",
    quantity: "",
    cost: "",
    receivedAt: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddBundle(formData);

    try {
      const response = await axios.post(
        "http://localhost:3333/api/bundles",
        formData
      );
      console.log("Bundle added:", response.data);
      // Optionally, reset the form or provide feedback to the user
    } catch (err) {
      console.error("Failed to add bundle", err);
    }
    setIsOpen(true);
    setFormData({
      supplier: "",
      quantity: "",
      cost: "",
      receivedAt: "",
      // image: "",
    });
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
        <Button type={"submit"} title={"Add Bundle"} />
      </form>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AddBundle;
