import { Document, Page, StyleSheet, Text } from "@react-pdf/renderer";
import { Table, TH, TR, TD } from "@ag-media/react-pdf-table";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});

// Invoice component
const Invoice = ({ bundles }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Bundle Invoice</Text>
      <Table
        data={bundles}
        th
        align="center"
        colWidths={[0.25, 0.25, 0.25, 0.25]}
      >
        <TR>
          <TH>Supplier</TH>
          <TH>Quantity</TH>
          <TH>Cost</TH>
          <TH>Received At</TH>
        </TR>
        {bundles.map((bundle) => (
          <TR key={bundle._id}>
            <TD>{bundle.supplier}</TD>
            <TD>{bundle.quantity}</TD>
            <TD>{bundle.cost}</TD>
            <TD>{new Date(bundle.receivedAt).toLocaleDateString()}</TD>
          </TR>
        ))}
      </Table>
    </Page>
  </Document>
);

export default Invoice;
