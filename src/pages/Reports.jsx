import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { MdDelete } from "react-icons/md";
import { getItems } from "@/services/apiService";
import TableSkeleton from "@/components/ui/TableSkeleton";
import SortableTable from "@/components/SortableTable";

const Reports = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, []);
  const totalBundles = items.length;
  const totalQuantity = items.reduce(
    (sum, bundle) => sum + Number(bundle.quantity || 0),
    0
  );
  const totalCost = items.reduce(
    (sum, bundle) => sum + Number(bundle.cost || 0),
    0
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold ">Reports</h2>
      </div>
      <div className="border-b-2 p-4 rounded shadow">
        <p>Total Bundles Received: {totalBundles}</p>
        <p>Total Quantity of Items: {totalQuantity}</p>
        <p>Total Cost: PKR {Math.round(totalCost.toFixed(2))}</p>
      </div>
      <div className="mt-4">
        {loading ? (
          <TableSkeleton rows={10} columns={6} />
        ) : (
          <SortableTable data={items} title="Detailed Bundles Report" />
        )}
      </div>
    </div>
  );
};

export default Reports;
