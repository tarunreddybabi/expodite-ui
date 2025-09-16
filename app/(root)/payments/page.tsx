"use client";

import React from "react";
import { Search } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import {
  Button,
  DatePicker,
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

export type Payment = {
  id: string;
  clientName: string;
  type: string;
  paymentDate: string;
  currency: "INR" | "USD" | "EUR";
  amount: number;
  amountInINR: number;
  invoiceNumber: string;
  status: "pending" | "success" | "processing" | "failed";
};

const data: Payment[] = [
  {
    id: "pay-1001",
    clientName: "Acme Corp",
    type: "Bank Transfer",
    paymentDate: "2025-09-01",
    currency: "USD",
    amount: 1200,
    amountInINR: 99600,
    invoiceNumber: "INV-001",
    status: "success",
  },
  {
    id: "pay-1002",
    clientName: "Globex Ltd",
    type: "Credit Card",
    paymentDate: "2025-09-02",
    currency: "INR",
    amount: 75000,
    amountInINR: 75000,
    invoiceNumber: "INV-002",
    status: "pending",
  },
  {
    id: "pay-1003",
    clientName: "Initech",
    type: "Wire Transfer",
    paymentDate: "2025-09-03",
    currency: "EUR",
    amount: 500,
    amountInINR: 45000,
    invoiceNumber: "INV-003",
    status: "processing",
  },
  {
    id: "pay-1004",
    clientName: "Umbrella Inc",
    type: "Cheque",
    paymentDate: "2025-09-05",
    currency: "USD",
    amount: 2200,
    amountInINR: 182600,
    invoiceNumber: "INV-004",
    status: "failed",
  },
];

export const columns: ColumnDef<Payment>[] = [
  { accessorKey: "id", header: "PAYMENT ID" },
  { accessorKey: "clientName", header: "CLIENT NAME" },
  { accessorKey: "type", header: "TYPE OF PAYMENT" },
  { accessorKey: "paymentDate", header: "PAYMENT DATE" },
  { accessorKey: "currency", header: "CURRENCY" },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      const currency = row.getValue("currency") as string;
      return (
        <span className="font-medium">
          {currency} {new Intl.NumberFormat().format(amount)}
        </span>
      );
    },
  },
  {
    accessorKey: "amountInINR",
    header: "AMOUNT IN INR",
    cell: ({ row }) => {
      const amountInINR = row.getValue("amountInINR") as number;
      return (
        <span className="font-medium">
          ₹{new Intl.NumberFormat("en-IN").format(amountInINR)}
        </span>
      );
    },
  },
  { accessorKey: "invoiceNumber", header: "INVOICE NUMBER" },
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

const Payments = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          Payments ({data?.length})
        </h1>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Payment Date</p>
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
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
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
                <SelectItem value="Acme Corp">Acme Corp</SelectItem>
                <SelectItem value="Globex Ltd">Globex Ltd</SelectItem>
                <SelectItem value="Initech">Initech</SelectItem>
                <SelectItem value="Umbrella Inc">Umbrella Inc</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Currency</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Currency</SelectLabel>
                <SelectItem value="INR">INR</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
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
              placeholder="Search by Payment ID"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Create Payment</Button>
        </div>
        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="id"
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;
