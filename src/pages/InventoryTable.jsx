import React from "react";
import { MdDelete } from "react-icons/md";
const InventoryTable = ({ bundles }) => {
  return (
    <table className="w-full border-collapse border mt-4">
      <thead className="text-start">
        <tr className="bg-gray-200">
          <th className="custom-cell">Supplier</th>
          <th className="custom-cell">Quantity</th>
          <th className="custom-cell">Cost</th>
          <th className="custom-cell">Date Received</th>
          <th className="custom-cell">Delete</th>
          <th className="custom-cell">Status</th>
        </tr>
      </thead>
      <tbody>
        {bundles.map((bundle, index) => {
          const date = new Date(bundle.receivedAt).toLocaleDateString("en-GB");
          return (
            <tr key={index}>
              <td className="custom-cell">{bundle.supplier}</td>
              <td className="custom-cell">{bundle.quantity}</td>
              <td className="custom-cell">{bundle.cost}</td>
              <td className="custom-cell">{date}</td>
              <td className="custom-cell">
                <MdDelete />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InventoryTable;
