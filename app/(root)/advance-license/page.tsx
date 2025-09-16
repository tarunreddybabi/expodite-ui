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

export type AdvanceLicenseItem = {
  id: string;
  licenseNumber: string;
  dateOfIssue: string;
  licenseAmount: number;
  eoEndDate: string;
  eoAmount: number;
  eoFulfilled: number;
  pendingEo: number;
  status: "active" | "completed" | "expired" | "pending";
};

const data: AdvanceLicenseItem[] = [
  {
    id: "AL-1001",
    licenseNumber: "AL-001",
    dateOfIssue: "2023-05-10",
    licenseAmount: 1000000,
    eoEndDate: "2027-05-10",
    eoAmount: 2000000,
    eoFulfilled: 1200000,
    pendingEo: 800000,
    status: "active",
  },
  {
    id: "AL-1002",
    licenseNumber: "AL-002",
    dateOfIssue: "2022-12-01",
    licenseAmount: 750000,
    eoEndDate: "2026-12-01",
    eoAmount: 1500000,
    eoFulfilled: 1500000,
    pendingEo: 0,
    status: "completed",
  },
  {
    id: "AL-1003",
    licenseNumber: "AL-003",
    dateOfIssue: "2021-09-15",
    licenseAmount: 500000,
    eoEndDate: "2025-09-15",
    eoAmount: 1200000,
    eoFulfilled: 700000,
    pendingEo: 500000,
    status: "pending",
  },
  {
    id: "AL-1004",
    licenseNumber: "AL-004",
    dateOfIssue: "2020-08-20",
    licenseAmount: 400000,
    eoEndDate: "2024-08-20",
    eoAmount: 900000,
    eoFulfilled: 400000,
    pendingEo: 500000,
    status: "expired",
  },
];

export const columns: ColumnDef<AdvanceLicenseItem>[] = [
  { accessorKey: "licenseNumber", header: "LICENSE NUMBER" },
  { accessorKey: "dateOfIssue", header: "DATE OF ISSUE" },
  {
    accessorKey: "licenseAmount",
    header: "LICENSE AMOUNT",
    cell: ({ row }) => `₹${row.getValue("licenseAmount")}`,
  },
  { accessorKey: "eoEndDate", header: "EO END DATE" },
  {
    accessorKey: "eoAmount",
    header: "EO AMOUNT",
    cell: ({ row }) => `₹${row.getValue("eoAmount")}`,
  },
  {
    accessorKey: "eoFulfilled",
    header: "EO FULFILLED",
    cell: ({ row }) => `₹${row.getValue("eoFulfilled")}`,
  },
  {
    accessorKey: "pendingEo",
    header: "PENDING EO",
    cell: ({ row }) => `₹${row.getValue("pendingEo")}`,
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

const AdvanceLicense = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          Advance License ({data.length})
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
              placeholder="Search by License Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Add Advance License</Button>
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

export default AdvanceLicense;
