import React from "react";
import useSortableData from "@/hooks/useSortableData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "./ui/switch";
import { MdDelete } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const SortableTable = ({ data, title }) => {
  const { items, requestSort, sortConfig } = useSortableData(data);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold">
            Sort By
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              type="button"
              onClick={() => requestSort("supplier")}
              className={getClassNamesFor("supplier")}
            >
              A to Z
            </DropdownMenuItem>
            <DropdownMenuItem
              type="button"
              onClick={() => requestSort("quantity")}
              className={getClassNamesFor("quantity")}
            >
              Quantity
            </DropdownMenuItem>
            <DropdownMenuItem
              type="button"
              onClick={() => requestSort("cost")}
              className={getClassNamesFor("cost")}
            >
              Cost
            </DropdownMenuItem>
            <DropdownMenuItem
              type="button"
              onClick={() => requestSort("receivedAt")}
              className={getClassNamesFor("receivedAt")}
            >
              Date
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Supplier</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Date Received</TableHead>
            <TableHead>Delete</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((bundle, index) => {
            const date = new Date(bundle.receivedAt).toLocaleDateString(
              "en-GB"
            );
            return (
              <TableRow key={index}>
                <TableCell>{bundle.supplier}</TableCell>
                <TableCell>{bundle.quantity}</TableCell>
                <TableCell>{bundle.cost}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <button>
                    <MdDelete />
                  </button>
                </TableCell>
                <TableCell>
                  <Switch
                    checked={bundle.status === "active"}
                    onCheckedChange={(checked) =>
                      handleStatusChange(bundle.id, checked)
                    }
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default SortableTable;
