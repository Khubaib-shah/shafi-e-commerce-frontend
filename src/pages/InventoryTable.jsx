import React from "react";

const InventoryTable = ({ bundles }) => {
  return (
    <table className="w-full border-collapse border mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Supplier</th>
          <th className="border p-2">Quantity</th>
          <th className="border p-2">Cost</th>
          <th className="border p-2">Date Received</th>
        </tr>
      </thead>
      <tbody>
        {bundles.map((bundle, index) => (
          <tr key={index}>
            <td className="border p-2">{bundle.supplier}</td>
            <td className="border p-2">{bundle.quantity}</td>
            <td className="border p-2">{bundle.cost}</td>
            <td className="border p-2">{bundle.receivedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
