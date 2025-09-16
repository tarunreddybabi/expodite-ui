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

export type ForwardContractItem = {
  id: string;
  dealId: string;
  bookingRate: number;
  validityFrom: string;
  validityTo: string;
  foreignCurrency: string;
  bookingAmount: number;
  balanceAmount: number;
  status: "active" | "completed" | "expired" | "pending";
};

const data: ForwardContractItem[] = [
  {
    id: "fc-1001",
    dealId: "DL-001",
    bookingRate: 82.5,
    validityFrom: "2025-01-10",
    validityTo: "2025-06-10",
    foreignCurrency: "USD",
    bookingAmount: 100000,
    balanceAmount: 20000,
    status: "active",
  },
  {
    id: "fc-1002",
    dealId: "DL-002",
    bookingRate: 90.3,
    validityFrom: "2024-12-01",
    validityTo: "2025-05-30",
    foreignCurrency: "EUR",
    bookingAmount: 80000,
    balanceAmount: 10000,
    status: "completed",
  },
  {
    id: "fc-1003",
    dealId: "DL-003",
    bookingRate: 74.2,
    validityFrom: "2024-06-15",
    validityTo: "2025-01-15",
    foreignCurrency: "GBP",
    bookingAmount: 60000,
    balanceAmount: 5000,
    status: "expired",
  },
  {
    id: "fc-1004",
    dealId: "DL-004",
    bookingRate: 110.8,
    validityFrom: "2025-03-01",
    validityTo: "2025-09-01",
    foreignCurrency: "JPY",
    bookingAmount: 120000,
    balanceAmount: 60000,
    status: "active",
  },
  {
    id: "fc-1005",
    dealId: "DL-005",
    bookingRate: 68.7,
    validityFrom: "2025-02-20",
    validityTo: "2025-08-20",
    foreignCurrency: "AUD",
    bookingAmount: 90000,
    balanceAmount: 45000,
    status: "pending",
  },
];

export const columns: ColumnDef<ForwardContractItem>[] = [
  {
    accessorKey: "dealId",
    header: "DEAL ID",
  },
  {
    accessorKey: "bookingRate",
    header: "BOOKING RATE",
  },
  {
    accessorKey: "validityFrom",
    header: "VALIDITY FROM",
  },
  {
    accessorKey: "validityTo",
    header: "VALIDITY TO",
  },
  {
    accessorKey: "foreignCurrency",
    header: "FOREIGN CURRENCY",
  },
  {
    accessorKey: "bookingAmount",
    header: "BOOKING AMOUNT",
    cell: ({ row }) => `$${row.getValue("bookingAmount")}`,
  },
  {
    accessorKey: "balanceAmount",
    header: "BALANCE AMOUNT",
    cell: ({ row }) => `$${row.getValue("balanceAmount")}`,
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colorClass =
        status === "active"
          ? "text-green-600 bg-green-100"
          : status === "completed"
          ? "text-blue-600 bg-blue-100"
          : status === "expired"
          ? "text-red-600 bg-red-100"
          : "text-yellow-600 bg-yellow-100";

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

const ForwardContract = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          Forward Contracts ({data.length})
        </h1>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Currency</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Currencies</SelectLabel>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
                <SelectItem value="aud">AUD</SelectItem>
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
              placeholder="Search by Deal Id"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Add Forward Contract</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="dealId"
          />
        </div>
      </div>
    </div>
  );
};

export default ForwardContract;
