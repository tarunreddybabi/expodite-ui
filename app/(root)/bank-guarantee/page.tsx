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

export type BankGuaranteeItem = {
  id: string;
  bgNumber: string;
  bgAmount: number;
  issuanceDate: string;
  expiryDate: string;
  effectiveDate: string;
  claimPeriodEndDate: string;
  linkedEntity: string;
  type: "performance" | "financial" | "advance" | "bid";
  status: "active" | "expired" | "claimed" | "released";
};

const data: BankGuaranteeItem[] = [
  {
    id: "BG-1001",
    bgNumber: "BG-001",
    bgAmount: 500000,
    issuanceDate: "2023-01-15",
    expiryDate: "2026-01-15",
    effectiveDate: "2023-02-01",
    claimPeriodEndDate: "2026-06-15",
    linkedEntity: "ABC Exports Ltd.",
    type: "performance",
    status: "active",
  },
  {
    id: "BG-1002",
    bgNumber: "BG-002",
    bgAmount: 300000,
    issuanceDate: "2022-07-10",
    expiryDate: "2025-07-10",
    effectiveDate: "2022-08-01",
    claimPeriodEndDate: "2025-12-10",
    linkedEntity: "XYZ Manufacturing Pvt. Ltd.",
    type: "financial",
    status: "released",
  },
  {
    id: "BG-1003",
    bgNumber: "BG-003",
    bgAmount: 800000,
    issuanceDate: "2021-05-05",
    expiryDate: "2024-05-05",
    effectiveDate: "2021-05-20",
    claimPeriodEndDate: "2024-10-05",
    linkedEntity: "LMN Construction Co.",
    type: "advance",
    status: "expired",
  },
  {
    id: "BG-1004",
    bgNumber: "BG-004",
    bgAmount: 200000,
    issuanceDate: "2024-03-01",
    expiryDate: "2027-03-01",
    effectiveDate: "2024-03-15",
    claimPeriodEndDate: "2027-08-01",
    linkedEntity: "PQR Traders",
    type: "bid",
    status: "claimed",
  },
];

export const columns: ColumnDef<BankGuaranteeItem>[] = [
  { accessorKey: "bgNumber", header: "BG NUMBER" },
  {
    accessorKey: "bgAmount",
    header: "BG AMOUNT",
    cell: ({ row }) => `₹${row.getValue("bgAmount")}`,
  },
  { accessorKey: "issuanceDate", header: "ISSUANCE DATE" },
  { accessorKey: "expiryDate", header: "EXPIRY DATE" },
  { accessorKey: "effectiveDate", header: "EFFECTIVE DATE" },
  { accessorKey: "claimPeriodEndDate", header: "CLAIM PERIOD END DATE" },
  { accessorKey: "linkedEntity", header: "LINKED ENTITY" },
  { accessorKey: "type", header: "TYPE" },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colorClass =
        status === "active"
          ? "text-green-600 bg-green-100"
          : status === "released"
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

const BankGuarantee = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          Bank Guarantee ({data.length})
        </h1>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Type</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Types</SelectLabel>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="advance">Advance</SelectItem>
                <SelectItem value="bid">Bid</SelectItem>
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
              placeholder="Search by BG Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Add Bank Guarantee</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="bgNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default BankGuarantee;
