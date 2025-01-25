import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { createItem } from "@/services/apiService";
import { Button } from "@/components/ui/Button";

const AddBundle = () => {
  const [formData, setFormData] = useState({
    supplier: "",
    quantity: "",
    cost: "",
    receivedAt: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { supplier, quantity, cost, receivedAt } = formData;
    if (!supplier || !quantity || !cost || !receivedAt) {
      toast.error("All fields are required.");
      return false;
    }
    if (quantity <= 0 || cost <= 0) {
      toast.error("Quantity and Cost must be positive numbers.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await createItem(formData);
      toast.success("New Bundle created.");

      setFormData({
        supplier: "",
        quantity: "",
        cost: "",
        receivedAt: "",
      });
    } catch (err) {
      toast.error("Failed to add bundle. Please try again.");
      console.error("Failed to add bundle", err);
    } finally {
      setIsSubmitting(false);
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Add Bundle"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddBundle;
