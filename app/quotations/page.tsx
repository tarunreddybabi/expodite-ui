"use client";

import React from "react";
import CustomTable from "@/components/custom-table";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
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
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";

export type Quotation = {
  id: string;
  quotationNumber: string;
  attention: string;
  accountManager: string;
  amount: number;
  status: "draft" | "passed" | "accepted";
  country: string;
};

const data: Quotation[] = [
  {
    id: "ord-1001",
    amount: 316,
    quotationNumber: "INV-001",
    attention: "John Doe",
    accountManager: "Alice Smith",
    status: "passed",
    country: "India",
  },
  {
    id: "ord-1002",
    amount: 242,
    quotationNumber: "INV-002",
    attention: "Jane Parker",
    accountManager: "Bob Johnson",
    status: "draft",
    country: "USA",
  },
  {
    id: "ord-1003",
    amount: 837,
    quotationNumber: "INV-003",
    attention: "Michael Lee",
    accountManager: "Catherine Wu",
    status: "accepted",
    country: "UK",
  },
  {
    id: "ord-1004",
    amount: 874,
    quotationNumber: "INV-004",
    attention: "Emily Davis",
    accountManager: "David Kim",
    status: "draft",
    country: "Russia",
  },
  {
    id: "ord-1005",
    amount: 1250,
    quotationNumber: "INV-005",
    attention: "Robert Brown",
    accountManager: "Sophia Martinez",
    status: "passed",
    country: "China",
  },
  {
    id: "ord-1006",
    amount: 560,
    quotationNumber: "INV-006",
    attention: "Laura Wilson",
    accountManager: "James Lee",
    status: "draft",
    country: "India",
  },
  {
    id: "ord-1007",
    amount: 940,
    quotationNumber: "INV-007",
    attention: "Chris Evans",
    accountManager: "Alice Smith",
    status: "passed",
    country: "USA",
  },
  {
    id: "ord-1008",
    amount: 480,
    quotationNumber: "INV-008",
    attention: "Megan Taylor",
    accountManager: "Bob Johnson",
    status: "accepted",
    country: "UK",
  },
  {
    id: "ord-1009",
    amount: 1299,
    quotationNumber: "INV-009",
    attention: "Daniel King",
    accountManager: "Catherine Wu",
    status: "draft",
    country: "Russia",
  },
  {
    id: "ord-1010",
    amount: 699,
    quotationNumber: "INV-010",
    attention: "Sophia Turner",
    accountManager: "David Kim",
    status: "passed",
    country: "China",
  },
  {
    id: "ord-1011",
    amount: 530,
    quotationNumber: "INV-011",
    attention: "Matthew Scott",
    accountManager: "Sophia Martinez",
    status: "draft",
    country: "India",
  },
  {
    id: "ord-1012",
    amount: 1420,
    quotationNumber: "INV-012",
    attention: "Grace Adams",
    accountManager: "James Lee",
    status: "accepted",
    country: "USA",
  },
  {
    id: "ord-1013",
    amount: 380,
    quotationNumber: "INV-013",
    attention: "Kevin Harris",
    accountManager: "Alice Smith",
    status: "passed",
    country: "UK",
  },
  {
    id: "ord-1014",
    amount: 950,
    quotationNumber: "INV-014",
    attention: "Olivia Clark",
    accountManager: "Bob Johnson",
    status: "draft",
    country: "Russia",
  },
  {
    id: "ord-1015",
    amount: 620,
    quotationNumber: "INV-015",
    attention: "William Walker",
    accountManager: "Catherine Wu",
    status: "passed",
    country: "China",
  },
];

export const columns: ColumnDef<Quotation>[] = [
  {
    accessorKey: "quotationNumber",
    header: "QUOTATION NUMBER",
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
    accessorKey: "accountManager",
    header: "ACCOUNT MANAGER",
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
        status === "accepted"
          ? "text-green-600 bg-green-100"
          : status === "draft"
          ? "text-yellow-600 bg-yellow-100"
          : status === "passed"
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

const Quotations = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full p-4 space-y-4">
        <h1 className="text-xl font-semibold border-b pb-3">Quotations (0)</h1>

        <div className="space-y-2">
          <p className="text-sm font-medium  ">Created Date</p>
          <DatePicker className="w-full" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium  ">Clients</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Client" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Clients</SelectLabel>
                <SelectItem value="client1">Acme Corp</SelectItem>
                <SelectItem value="client2">Globex Ltd</SelectItem>
                <SelectItem value="client3">Initech</SelectItem>
                <SelectItem value="client4">Umbrella Inc</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium  ">Products</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Products</SelectLabel>
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="phone">Smartphone</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="accessory">Accessory</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium  ">Account Manager</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Manager" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Managers</SelectLabel>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="sarah">Sarah Lee</SelectItem>
                <SelectItem value="michael">Michael Chen</SelectItem>
                <SelectItem value="emma">Emma Johnson</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium  ">Country</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="russia">Russia</SelectItem>
                <SelectItem value="china">China</SelectItem>
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
              placeholder="Search by Quotation Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Create Quotation</Button>
        </div>
        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="quotationNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default Quotations;
