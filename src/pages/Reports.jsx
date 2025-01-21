import React from "react";

const Reports = ({ bundles }) => {
  const totalBundles = bundles.length;
  const totalQuantity = bundles.reduce(
    (sum, bundle) => sum + Number(bundle.quantity || 0),
    0
  );
  const totalCost = bundles.reduce(
    (sum, bundle) => sum + Number(bundle.cost || 0),
    0
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Reports</h2>
      <div className="bg-gray-100 p-4 rounded shadow">
        <p>Total Bundles Received: {totalBundles}</p>
        <p>Total Quantity of Items: {totalQuantity}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Detailed Bundles Report</h3>
        <table className="w-full border-collapse border">
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
                <td className="border p-2">${bundle.cost}</td>
                <td className="border p-2">{bundle.receivedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
