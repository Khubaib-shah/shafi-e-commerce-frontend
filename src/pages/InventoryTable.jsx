import React, { useEffect, useState } from "react";
import { getItems } from "@/services/apiService";
import SortableTable from "@/components/SortableTable";
import TableSkeleton from "@/components/ui/TableSkeleton";
const InventoryTable = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
        console.log("data fetched from inventory", data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="mt-4">
      {loading ? (
        <TableSkeleton rows={10} columns={6} />
      ) : (
        <SortableTable data={items} title="Detailed Bundles Report" />
      )}
    </div>
  );
};

export default InventoryTable;
