"use client";

import CustomTable from "@/components/CustomTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React from "react";

export type Invoice = {
  id: string;
  invoiceNumber: string;
  companyName: string;
  balanceAmount: number;
  amount: number;
  status: "pending" | "paid" | "overdue" | "processing";
};

const data: Invoice[] = [
  {
    id: "inv-1001",
    invoiceNumber: "INV-001",
    companyName: "ABC Exports Pvt Ltd",
    balanceAmount: 500,
    amount: 1500,
    status: "paid",
  },
  {
    id: "inv-1002",
    invoiceNumber: "INV-002",
    companyName: "Global Traders Inc",
    balanceAmount: 1200,
    amount: 2200,
    status: "pending",
  },
  {
    id: "inv-1003",
    invoiceNumber: "INV-003",
    companyName: "BlueOcean Logistics",
    balanceAmount: 0,
    amount: 1800,
    status: "paid",
  },
  {
    id: "inv-1004",
    invoiceNumber: "INV-004",
    companyName: "Sunrise Textiles",
    balanceAmount: 750,
    amount: 1750,
    status: "overdue",
  },
  {
    id: "inv-1005",
    invoiceNumber: "INV-005",
    companyName: "GreenLeaf Pharma",
    balanceAmount: 200,
    amount: 2200,
    status: "processing",
  },
  {
    id: "inv-1006",
    invoiceNumber: "INV-006",
    companyName: "Starlight Electronics",
    balanceAmount: 1000,
    amount: 3200,
    status: "pending",
  },
  {
    id: "inv-1007",
    invoiceNumber: "INV-007",
    companyName: "Silverline Industries",
    balanceAmount: 0,
    amount: 1450,
    status: "paid",
  },
  {
    id: "inv-1008",
    invoiceNumber: "INV-008",
    companyName: "OceanWave Shipping",
    balanceAmount: 450,
    amount: 2750,
    status: "processing",
  },
  {
    id: "inv-1009",
    invoiceNumber: "INV-009",
    companyName: "Everest Mining Co",
    balanceAmount: 1500,
    amount: 3000,
    status: "overdue",
  },
  {
    id: "inv-1010",
    invoiceNumber: "INV-010",
    companyName: "Skyline Constructions",
    balanceAmount: 250,
    amount: 1950,
    status: "paid",
  },
  {
    id: "inv-1011",
    invoiceNumber: "INV-011",
    companyName: "BrightFuture Energy",
    balanceAmount: 600,
    amount: 2600,
    status: "pending",
  },
  {
    id: "inv-1012",
    invoiceNumber: "INV-012",
    companyName: "NextGen Software Ltd",
    balanceAmount: 0,
    amount: 3500,
    status: "paid",
  },
  {
    id: "inv-1013",
    invoiceNumber: "INV-013",
    companyName: "Harmony Foods",
    balanceAmount: 400,
    amount: 1600,
    status: "processing",
  },
  {
    id: "inv-1014",
    invoiceNumber: "INV-014",
    companyName: "Prime Healthcare Pvt Ltd",
    balanceAmount: 900,
    amount: 2800,
    status: "overdue",
  },
  {
    id: "inv-1015",
    invoiceNumber: "INV-015",
    companyName: "GoldenLeaf Furniture",
    balanceAmount: 100,
    amount: 2100,
    status: "paid",
  },
];

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoiceNumber",
    header: "INVOICE NUMBER",
  },
  {
    accessorKey: "companyName",
    header: "COMPANY NAME",
  },
  {
    accessorKey: "balanceAmount",
    header: "BALANCE AMOUNT",
    cell: ({ row }) => {
      const balance = row.getValue("balanceAmount") as number;
      return (
        <span className="font-medium">
          ₹{new Intl.NumberFormat("en-IN").format(balance)}
        </span>
      );
    },
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
        status === "paid"
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

const Invoices = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full p-4 space-y-4">
        <h1 className="text-xl font-semibold border-b pb-3">
          Invoices ({data.length})
        </h1>

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
              placeholder="Search by Invoice Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Create Invoice</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="invoiceNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
