import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getItemById } from "@/services/apiService";

const BundleDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSingleBundle = async () => {
      try {
        const response = await getItemById(id);
        setData(response);
      } catch (error) {}
    };
    fetchSingleBundle();
  }, []);
  const { _id, supplier, quantity, cost, status, receivedAt, __v } = data;

  const getStatusBadge = (status) => {
    switch (status) {
      case "sold":
        return <Badge variant="success">Sold</Badge>;
      case "Ready_For_Sale":
        return <Badge variant="info">Ready For Sale</Badge>;
      case "In_Production":
        return <Badge variant="warning">In Production</Badge>;
      case "Received":
        return <Badge variant="secondary">Received</Badge>;
      default:
        return <Badge variant="default">{"Received"}</Badge>;
    }
  };
  const date = new Date(receivedAt).toLocaleDateString();

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Bundle Details</CardTitle>
          <CardDescription>Details for bundle ID: {_id}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Supplier:</span>
            <span>{supplier}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Cost:</span>
            <span>${cost}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Quantity:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Received At:</span>
            <span>{date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Status:</span>
            {getStatusBadge(status)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BundleDetails;
