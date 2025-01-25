import React, { useEffect, useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/Button";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { ContextMenuContent } from "@radix-ui/react-context-menu";
import { Link } from "react-router-dom";
import { DeleteById } from "@/services/apiService";

const SortableTable = ({ data, title }) => {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const [bundeId, setBundeId] = useState();
  const [open, setOpen] = useState(false);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const handleConfirm = (id) => {
    setBundeId(id);
    setOpen(false);
    console.log("Confirmed!");
    location.reload();
  };
  useEffect(() => {
    const HandleDelete = async () => {
      try {
        if (bundeId) {
          await DeleteById(bundeId);
          console.log(`Deleted bundle with ID: ${bundeId}`);
        }
      } catch (error) {
        console.error("Error deleting bundle:", error);
      }
    };

    if (bundeId) {
      DeleteById(bundeId);
      HandleDelete();
    }
  }, [bundeId]);
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
            <TableHead>Action</TableHead>
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
                  <Dialog open={open} onOpenChange={setOpen}>
                    <ContextMenu>
                      <ContextMenuTrigger>Right click</ContextMenuTrigger>
                      <ContextMenuContent>
                        <Link to={`/bundle/${bundle._id}`}>
                          <ContextMenuItem>Open</ContextMenuItem>
                        </Link>
                        <ContextMenuItem>Edit</ContextMenuItem>
                        <ContextMenuItem>Download</ContextMenuItem>
                        <DialogTrigger asChild>
                          <ContextMenuItem>
                            <span>Delete</span>
                          </ContextMenuItem>
                        </DialogTrigger>
                      </ContextMenuContent>
                    </ContextMenu>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. Are you sure you want to
                          permanently delete this file from our servers?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button onClick={() => handleConfirm(bundle._id)}>
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>{bundle.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default SortableTable;
