"use client";

import React from "react";
import { Search } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { CustomTable } from "@/components/rootComponents/CustomTable";

export type EpcgItem = {
  id: string;
  licenseNumber: string;
  importDutySaved: number;
  seoAmount: number;
  seoEndDate: string;
  seoFulfilled: number;
  pendingSeo: number;
  status: "active" | "completed" | "expired" | "pending";
};

const data: EpcgItem[] = [
  {
    id: "epcg-1001",
    licenseNumber: "EPCG-001",
    importDutySaved: 500000,
    seoAmount: 1000000,
    seoEndDate: "2027-03-15",
    seoFulfilled: 600000,
    pendingSeo: 400000,
    status: "active",
  },
  {
    id: "epcg-1002",
    licenseNumber: "EPCG-002",
    importDutySaved: 300000,
    seoAmount: 800000,
    seoEndDate: "2026-12-01",
    seoFulfilled: 800000,
    pendingSeo: 0,
    status: "completed",
  },
  {
    id: "epcg-1003",
    licenseNumber: "EPCG-003",
    importDutySaved: 450000,
    seoAmount: 900000,
    seoEndDate: "2025-09-30",
    seoFulfilled: 500000,
    pendingSeo: 400000,
    status: "pending",
  },
  {
    id: "epcg-1004",
    licenseNumber: "EPCG-004",
    importDutySaved: 250000,
    seoAmount: 600000,
    seoEndDate: "2024-11-20",
    seoFulfilled: 250000,
    pendingSeo: 350000,
    status: "expired",
  },
];

export const columns: ColumnDef<EpcgItem>[] = [
  { accessorKey: "licenseNumber", header: "EPCG LICENSE NUMBER" },
  {
    accessorKey: "importDutySaved",
    header: "IMPORT DUTY SAVED",
    cell: ({ row }) => `₹${row.getValue("importDutySaved")}`,
  },
  {
    accessorKey: "seoAmount",
    header: "SEO AMOUNT",
    cell: ({ row }) => `₹${row.getValue("seoAmount")}`,
  },
  { accessorKey: "seoEndDate", header: "SEO END DATE" },
  {
    accessorKey: "seoFulfilled",
    header: "SEO FULFILLED",
    cell: ({ row }) => `₹${row.getValue("seoFulfilled")}`,
  },
  {
    accessorKey: "pendingSeo",
    header: "PENDING SEO",
    cell: ({ row }) => `₹${row.getValue("pendingSeo")}`,
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

const Epcg = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          EPCG Licenses ({data.length})
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
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
              placeholder="Search by EPCG License Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Add EPCG License</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="licenseNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default Epcg;
