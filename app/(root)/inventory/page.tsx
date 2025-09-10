"use client";

import React from "react";
import CustomTable from "@/components/CustomTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

export type InventoryItem = {
  id: string;
  batchNumber: string;
  mfgDate: string;
  expDate: string;
  quantity: number;
  status: "in-stock" | "low-stock" | "out-of-stock" | "expired";
};

const data: InventoryItem[] = [
  {
    id: "inv-1001",
    batchNumber: "BATCH-001",
    mfgDate: "2023-01-10",
    expDate: "2025-01-10",
    quantity: 500,
    status: "in-stock",
  },
  {
    id: "inv-1002",
    batchNumber: "BATCH-002",
    mfgDate: "2022-12-05",
    expDate: "2024-12-05",
    quantity: 50,
    status: "low-stock",
  },
  {
    id: "inv-1003",
    batchNumber: "BATCH-003",
    mfgDate: "2021-11-20",
    expDate: "2023-11-20",
    quantity: 0,
    status: "expired",
  },
  {
    id: "inv-1004",
    batchNumber: "BATCH-004",
    mfgDate: "2023-05-15",
    expDate: "2026-05-15",
    quantity: 200,
    status: "in-stock",
  },
  {
    id: "inv-1005",
    batchNumber: "BATCH-005",
    mfgDate: "2022-08-08",
    expDate: "2024-08-08",
    quantity: 0,
    status: "out-of-stock",
  },
];

export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: "batchNumber",
    header: "BATCH NUMBER",
  },
  {
    accessorKey: "mfgDate",
    header: "MFG. DATE",
  },
  {
    accessorKey: "expDate",
    header: "EXP. DATE",
  },
  {
    accessorKey: "quantity",
    header: "QUANTITY",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const colorClass =
        status === "in-stock"
          ? "text-green-600 bg-green-100"
          : status === "low-stock"
          ? "text-yellow-600 bg-yellow-100"
          : status === "out-of-stock"
          ? "text-red-600 bg-red-100"
          : "text-gray-600 bg-gray-100";

      return (
        <span
          className={`capitalize px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}
        >
          {status}
        </span>
      );
    },
  },
];

const Inventory = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full p-4 space-y-4">
        <h1 className="text-xl font-semibold border-b pb-3">
          Inventory ({data.length})
        </h1>
        <div className="space-y-2">
          <p className="text-sm font-medium">Shipment Date</p>
          <DatePicker className="w-full" />
        </div>

          <div className="space-y-2">
          <p className="text-sm font-medium">Category</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="chemicals">Chemicals</SelectItem>
                <SelectItem value="dyedTextiles">Dyed Textiles</SelectItem>
                <SelectItem value="embroideredTextiles">Embroidered Textiles</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Status</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-[82%]">
        <div className="flex px-6 py-2.5 border-b mb-6 justify-between items-center shadow-sm">
          <div className="relative w-[250px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input
              type="text"
              className="pl-8 w-full"
              placeholder="Search by Batch Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Add Batch</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="batchNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
