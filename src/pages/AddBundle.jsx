import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { createItem } from "@/services/apiService";
import { Button } from "@/components/ui/Button";

const AddBundle = ({ onAddBundle }) => {
  const [formData, setFormData] = useState({
    supplier: "",
    quantity: "",
    cost: "",
    receivedAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createItem(formData);
      onAddBundle(data);
      toast("New Bundle created.");
      setFormData({
        supplier: "",
        quantity: "",
        cost: "",
        receivedAt: "",
      });
    } catch (err) {
      console.error("Failed to add bundle", err);
    }
  };

  return (
    <Card className="max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Bundle</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="supplier">Supplier Name</Label>
            <Input
              type="text"
              id="supplier"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="cost">Cost</Label>
            <Input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="receivedAt">Date Received</Label>
            <Input
              type="date"
              id="receivedAt"
              name="receivedAt"
              value={formData.receivedAt}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Add Bundle
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddBundle;
