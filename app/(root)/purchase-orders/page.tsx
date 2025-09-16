"use client";

import React from "react";
import { Search } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import {
  Button,
  CustomTable,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components";

export type PurchaseOrder = {
  id: string;
  poNumber: string;
  attention: string;
  country: string;
  amount: number;
  status: "pending" | "processing" | "approved" | "rejected";
};

const data: PurchaseOrder[] = [
  {
    id: "po-1001",
    poNumber: "PO-001",
    attention: "John Doe",
    country: "India",
    amount: 1500,
    status: "approved",
  },
  {
    id: "po-1002",
    poNumber: "PO-002",
    attention: "Jane Smith",
    country: "USA",
    amount: 2200,
    status: "pending",
  },
  {
    id: "po-1003",
    poNumber: "PO-003",
    attention: "Michael Lee",
    country: "Germany",
    amount: 1800,
    status: "processing",
  },
  {
    id: "po-1004",
    poNumber: "PO-004",
    attention: "Emily Davis",
    country: "UAE",
    amount: 1750,
    status: "rejected",
  },
  {
    id: "po-1005",
    poNumber: "PO-005",
    attention: "Robert Brown",
    country: "UK",
    amount: 2100,
    status: "approved",
  },
];

export const columns: ColumnDef<PurchaseOrder>[] = [
  {
    accessorKey: "poNumber",
    header: "PO NUMBER",
  },
  {
    accessorKey: "attention",
    header: "ATTENTION",
  },
  {
    accessorKey: "country",
    header: "COUNTRY",
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return (
        <span className="font-medium">
          ₹{new Intl.NumberFormat("en-IN").format(amount)}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const colorClass =
        status === "approved"
          ? "text-green-600 bg-green-100"
          : status === "pending"
          ? "text-yellow-600 bg-yellow-100"
          : status === "processing"
          ? "text-blue-600 bg-blue-100"
          : "text-red-600 bg-red-100";

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

const PurchaseOrders = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          PO ({data.length})
        </h1>

        <div className="space-y-2 px-4">
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
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-[82%]">
        <div className="flex p-3.5 border-b mb-6 justify-between items-center">
          <div className="relative w-[250px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input
              type="text"
              className="pl-8 w-full"
              placeholder="Search by PO Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Create PO</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="poNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrders;