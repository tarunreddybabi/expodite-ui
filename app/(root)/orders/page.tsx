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
import Link from "next/link";

export type Order = {
  id: string;
  orderNumber: string;
  attention: string;
  accountManager: string;
  shipments: string;
  poNumber: string;
  amount: number;
  status: "pending" | "success" | "processing" | "failed";
};

const data: Order[] = [
  {
    id: "ord-1001",
    amount: 316,
    orderNumber: "INV-001",
    attention: "John Doe",
    shipments: "SHIP-9001",
    accountManager: "Alice Smith",
    status: "success",
    poNumber: "PO-1001",
  },
  {
    id: "ord-1002",
    amount: 242,
    orderNumber: "INV-002",
    attention: "Jane Parker",
    shipments: "SHIP-9002",
    accountManager: "Bob Johnson",
    status: "pending",
    poNumber: "PO-1002",
  },
  {
    id: "ord-1003",
    amount: 837,
    orderNumber: "INV-003",
    attention: "Michael Lee",
    shipments: "SHIP-9003",
    accountManager: "Catherine Wu",
    status: "processing",
    poNumber: "PO-1003",
  },
  {
    id: "ord-1004",
    amount: 874,
    orderNumber: "INV-004",
    attention: "Emily Davis",
    shipments: "SHIP-9004",
    accountManager: "David Kim",
    status: "failed",
    poNumber: "PO-1004",
  },
  {
    id: "ord-1005",
    amount: 1250,
    orderNumber: "INV-005",
    attention: "Robert Brown",
    shipments: "SHIP-9005",
    accountManager: "Sophia Martinez",
    status: "success",
    poNumber: "PO-1005",
  },
  {
    id: "ord-1006",
    amount: 560,
    orderNumber: "INV-006",
    attention: "Laura Wilson",
    shipments: "SHIP-9006",
    accountManager: "James Lee",
    status: "pending",
    poNumber: "PO-1006",
  },
  {
    id: "ord-1007",
    amount: 940,
    orderNumber: "INV-007",
    attention: "Chris Evans",
    shipments: "SHIP-9007",
    accountManager: "Alice Smith",
    status: "success",
    poNumber: "PO-1007",
  },
  {
    id: "ord-1008",
    amount: 480,
    orderNumber: "INV-008",
    attention: "Megan Taylor",
    shipments: "SHIP-9008",
    accountManager: "Bob Johnson",
    status: "processing",
    poNumber: "PO-1008",
  },
  {
    id: "ord-1009",
    amount: 1299,
    orderNumber: "INV-009",
    attention: "Daniel King",
    shipments: "SHIP-9009",
    accountManager: "Catherine Wu",
    status: "failed",
    poNumber: "PO-1009",
  },
  {
    id: "ord-1010",
    amount: 699,
    orderNumber: "INV-010",
    attention: "Sophia Turner",
    shipments: "SHIP-9010",
    accountManager: "David Kim",
    status: "success",
    poNumber: "PO-1010",
  },
  {
    id: "ord-1011",
    amount: 530,
    orderNumber: "INV-011",
    attention: "Matthew Scott",
    shipments: "SHIP-9011",
    accountManager: "Sophia Martinez",
    status: "pending",
    poNumber: "PO-1011",
  },
  {
    id: "ord-1012",
    amount: 1420,
    orderNumber: "INV-012",
    attention: "Grace Adams",
    shipments: "SHIP-9012",
    accountManager: "James Lee",
    status: "processing",
    poNumber: "PO-1012",
  },
  {
    id: "ord-1013",
    amount: 380,
    orderNumber: "INV-013",
    attention: "Kevin Harris",
    shipments: "SHIP-9013",
    accountManager: "Alice Smith",
    status: "success",
    poNumber: "PO-1013",
  },
  {
    id: "ord-1014",
    amount: 950,
    orderNumber: "INV-014",
    attention: "Olivia Clark",
    shipments: "SHIP-9014",
    accountManager: "Bob Johnson",
    status: "failed",
    poNumber: "PO-1014",
  },
  {
    id: "ord-1015",
    amount: 620,
    orderNumber: "INV-015",
    attention: "William Walker",
    shipments: "SHIP-9015",
    accountManager: "Catherine Wu",
    status: "success",
    poNumber: "PO-1015",
  },
];

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderNumber",
    header: "ORDER NUMBER",
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
    accessorKey: "shipments",
    header: "SHIPMENTS",
    cell: ({ row }) => {
      const shipmentId = row.getValue("shipments") as string;
      return (
        <Link
          href={`/shipments/${shipmentId}`}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          {shipmentId}
        </Link>
      );
    },
  },
  {
    accessorKey: "poNumber",
    header: "PO NO",
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

const Orders = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">Orders ({data?.length})</h1>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Order Date</p>
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
              placeholder="Search by Order Number"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Create Order</Button>
        </div>
        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="orderNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
