import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Invoice from "../Component/Invoice";

const pdf = ({ bundles }) => {
  return (
    <PDFViewer>
      <Invoice bundle={bundles} />
    </PDFViewer>
  );
};

export default pdf;
