"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";

import { CustomCard, CustomTable } from "@/components";

export type Payment = {
  id: string;
  amount: number;
  orderNumber: string;
  email: string;
  attention: string;
  country: string;
  accountManager: string;
  status: "pending" | "success" | "processing" | "failed";
};

const data: Payment[] = [
  {
    id: "ord-1001",
    amount: 316,
    orderNumber: "INV-001",
    attention: "John Doe",
    country: "USA",
    accountManager: "Alice Smith",
    status: "success",
    email: "john.doe@example.com",
  },
  {
    id: "ord-1002",
    amount: 242,
    orderNumber: "INV-002",
    attention: "Jane Parker",
    country: "Canada",
    accountManager: "Bob Johnson",
    status: "pending",
    email: "jane.parker@example.com",
  },
  {
    id: "ord-1003",
    amount: 837,
    orderNumber: "INV-003",
    attention: "Michael Lee",
    country: "UK",
    accountManager: "Catherine Wu",
    status: "processing",
    email: "michael.lee@example.com",
  },
  {
    id: "ord-1004",
    amount: 874,
    orderNumber: "INV-004",
    attention: "Emily Davis",
    country: "Germany",
    accountManager: "David Kim",
    status: "failed",
    email: "emily.davis@example.com",
  },
  {
    id: "ord-1005",
    amount: 1250,
    orderNumber: "INV-005",
    attention: "Robert Brown",
    country: "Australia",
    accountManager: "Sophia Martinez",
    status: "success",
    email: "robert.brown@example.com",
  },
  {
    id: "ord-1006",
    amount: 560,
    orderNumber: "INV-006",
    attention: "Laura Wilson",
    country: "France",
    accountManager: "James Lee",
    status: "pending",
    email: "laura.wilson@example.com",
  },
  {
    id: "ord-1007",
    amount: 940,
    orderNumber: "INV-007",
    attention: "Chris Evans",
    country: "USA",
    accountManager: "Alice Smith",
    status: "success",
    email: "chris.evans@example.com",
  },
  {
    id: "ord-1008",
    amount: 480,
    orderNumber: "INV-008",
    attention: "Megan Taylor",
    country: "Canada",
    accountManager: "Bob Johnson",
    status: "processing",
    email: "megan.taylor@example.com",
  },
  {
    id: "ord-1009",
    amount: 1299,
    orderNumber: "INV-009",
    attention: "Daniel King",
    country: "UK",
    accountManager: "Catherine Wu",
    status: "failed",
    email: "daniel.king@example.com",
  },
  {
    id: "ord-1010",
    amount: 699,
    orderNumber: "INV-010",
    attention: "Sophia Turner",
    country: "Germany",
    accountManager: "David Kim",
    status: "success",
    email: "sophia.turner@example.com",
  },
  {
    id: "ord-1011",
    amount: 530,
    orderNumber: "INV-011",
    attention: "Matthew Scott",
    country: "Australia",
    accountManager: "Sophia Martinez",
    status: "pending",
    email: "matthew.scott@example.com",
  },
  {
    id: "ord-1012",
    amount: 1420,
    orderNumber: "INV-012",
    attention: "Grace Adams",
    country: "France",
    accountManager: "James Lee",
    status: "processing",
    email: "grace.adams@example.com",
  },
  {
    id: "ord-1013",
    amount: 380,
    orderNumber: "INV-013",
    attention: "Kevin Harris",
    country: "USA",
    accountManager: "Alice Smith",
    status: "success",
    email: "kevin.harris@example.com",
  },
  {
    id: "ord-1014",
    amount: 950,
    orderNumber: "INV-014",
    attention: "Olivia Clark",
    country: "Canada",
    accountManager: "Bob Johnson",
    status: "failed",
    email: "olivia.clark@example.com",
  },
  {
    id: "ord-1015",
    amount: 620,
    orderNumber: "INV-015",
    attention: "William Walker",
    country: "UK",
    accountManager: "Catherine Wu",
    status: "success",
    email: "william.walker@example.com",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "orderNumber",
    header: "ORDER NUMBER",
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

const OverView = () => {
  return (
    <>
      <div className="flex px-6 py-4 border-b  mb-6">
        <h1 className="text-2xl font-semibold ml-[10%] mr-[12%]">
          Overview of{" "}
        </h1>
      </div>
      <div className="flex flex-col ml-[12%] mr-[12%]">
        <div className="flex gap-4">
          <CustomCard
            title="ORDERS"
            description={
              <>
                <div className="flex justify-between">
                  <p>NEW ORDERS TODAY</p>
                  <b>10</b>
                </div>
                <div className="flex justify-between">
                  <p>TOTAL ORDERS</p>
                  <b>20</b>
                </div>
              </>
            }
          />
          <CustomCard
            title="STOCK AVAILABLE"
            description={
              <>
                <div className="flex justify-between">
                  <p></p>
                  <b></b>
                </div>
                <div className="flex justify-between">
                  <p></p>
                  <b></b>
                </div>
              </>
            }
          />
          <CustomCard
            title="TOTAL DUE"
            description={
              <>
                <div className="flex justify-between">
                  <p></p>
                  <b></b>
                </div>
                <div className="flex justify-between">
                  <p></p>
                  <b></b>
                </div>
              </>
            }
          />
          <CustomCard
            title="TOTAL PAST DUE"
            description={
              <>
                <div className="flex justify-between">
                  <p></p>
                  <b></b>
                </div>
                <div className="flex justify-between">
                  <p></p>
                  <b></b>
                </div>
              </>
            }
          />
        </div>
        <br />
        <div className="flex justify-between">
          <p>New Orders Pending</p>
          <b>
            <Link
              href="/orders"
              className="inline-flex items-center gap-1 font-bold"
            >
              <p className="mb-0.5">See all orders</p>
              <ChevronRight className="font-bold w-5 h-5" />
            </Link>
          </b>
        </div>
        <br />
        <CustomTable data={data} columns={columns} />
      </div>
    </>
  );
};

export default OverView;
