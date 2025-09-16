"use client";

import CustomTable from "@/components/CustomTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
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
import { Search } from "lucide-react";
import React from "react";

export type Shipment = {
  id: string;
  shipmentNumber: string;
  attention: string;
  accountManager: string;
  amount: number;
  status: "pending" | "success" | "processing" | "failed";
};

const data: Shipment[] = [
  {
    id: "ord-1001",
    amount: 316,
    shipmentNumber: "INV-001",
    attention: "John Doe",
    accountManager: "Alice Smith",
    status: "success",
  },
  {
    id: "ord-1002",
    amount: 242,
    shipmentNumber: "INV-002",
    attention: "Jane Parker",
    accountManager: "Bob Johnson",
    status: "pending",
  },
  {
    id: "ord-1003",
    amount: 837,
    shipmentNumber: "INV-003",
    attention: "Michael Lee",
    accountManager: "Catherine Wu",
    status: "processing",
  },
  {
    id: "ord-1004",
    amount: 874,
    shipmentNumber: "INV-004",
    attention: "Emily Davis",
    accountManager: "David Kim",
    status: "failed",
  },
  {
    id: "ord-1005",
    amount: 1250,
    shipmentNumber: "INV-005",
    attention: "Robert Brown",
    accountManager: "Sophia Martinez",
    status: "success",
  },
  {
    id: "ord-1006",
    amount: 560,
    shipmentNumber: "INV-006",
    attention: "Laura Wilson",
    accountManager: "James Lee",
    status: "pending",
  },
  {
    id: "ord-1007",
    amount: 940,
    shipmentNumber: "INV-007",
    attention: "Chris Evans",
    accountManager: "Alice Smith",
    status: "success",
  },
  {
    id: "ord-1008",
    amount: 480,
    shipmentNumber: "INV-008",
    attention: "Megan Taylor",
    accountManager: "Bob Johnson",
    status: "processing",
  },
  {
    id: "ord-1009",
    amount: 1299,
    shipmentNumber: "INV-009",
    attention: "Daniel King",
    accountManager: "Catherine Wu",
    status: "failed",
  },
  {
    id: "ord-1010",
    amount: 699,
    shipmentNumber: "INV-010",
    attention: "Sophia Turner",
    accountManager: "David Kim",
    status: "success",
  },
  {
    id: "ord-1011",
    amount: 530,
    shipmentNumber: "INV-011",
    attention: "Matthew Scott",
    accountManager: "Sophia Martinez",
    status: "pending",
  },
  {
    id: "ord-1012",
    amount: 1420,
    shipmentNumber: "INV-012",
    attention: "Grace Adams",
    accountManager: "James Lee",
    status: "processing",
  },
  {
    id: "ord-1013",
    amount: 380,
    shipmentNumber: "INV-013",
    attention: "Kevin Harris",
    accountManager: "Alice Smith",
    status: "success",
  },
  {
    id: "ord-1014",
    amount: 950,
    shipmentNumber: "INV-014",
    attention: "Olivia Clark",
    accountManager: "Bob Johnson",
    status: "failed",
  },
  {
    id: "ord-1015",
    amount: 620,
    shipmentNumber: "INV-015",
    attention: "William Walker",
    accountManager: "Catherine Wu",
    status: "success",
  },
];

export const columns: ColumnDef<Shipment>[] = [
  {
    accessorKey: "shipmentNumber",
    header: "SHIPMENT NUMBER",
  },
  {
    accessorKey: "attention",
    header: "ATTENTION",
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
        status === "success"
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

const Shipments = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">Shipments ({data?.length})</h1>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Shipment Date</p>
          <DatePicker className="w-full" />
        </div>

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
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Shipper Address</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Shipper" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Shippers</SelectLabel>
                <SelectItem value="ny">New York Warehouse</SelectItem>
                <SelectItem value="la">Los Angeles Hub</SelectItem>
                <SelectItem value="tx">Texas Distribution</SelectItem>
                <SelectItem value="fl">Florida Center</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Products</p>
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

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Clients</p>
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

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Account Manager</p>
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
      </div>

      <div className="w-[82%]">
        <div className="flex p-3.5 border-b mb-6 justify-between items-center">
          <div className="relative w-[250px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input
              type="text"
              className="pl-8 w-full"
              placeholder="Search by Shipment Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Create Shipment</Button>
        </div>
        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="shipmentNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default Shipments;
