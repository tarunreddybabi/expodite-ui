"use client";

import React from "react";
import { Search } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import {
  Button,
  CustomTable,
  DatePicker,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components";

export type InsuranceItem = {
  id: string;
  policyName: string;
  policyNumber: string;
  policyProvider: string;
  policyType: string;
  policyEndDate: string;
  balanceAmount: number;
  coverageAmount: number;
};

const data: InsuranceItem[] = [
  {
    id: "pol-1001",
    policyName: "Health Secure Plan",
    policyNumber: "HS-001",
    policyProvider: "BlueShield Insurance",
    policyType: "Health",
    policyEndDate: "2026-01-10",
    balanceAmount: 5000,
    coverageAmount: 100000,
  },
  {
    id: "pol-1002",
    policyName: "Safe Drive Cover",
    policyNumber: "SD-002",
    policyProvider: "State Auto Insurance",
    policyType: "Auto",
    policyEndDate: "2025-12-05",
    balanceAmount: 1200,
    coverageAmount: 50000,
  },
  {
    id: "pol-1003",
    policyName: "Life Secure Policy",
    policyNumber: "LS-003",
    policyProvider: "Aetna Life",
    policyType: "Life",
    policyEndDate: "2030-11-20",
    balanceAmount: 20000,
    coverageAmount: 250000,
  },
  {
    id: "pol-1004",
    policyName: "Home Protect Plan",
    policyNumber: "HP-004",
    policyProvider: "Allstate Insurance",
    policyType: "Home",
    policyEndDate: "2027-05-15",
    balanceAmount: 800,
    coverageAmount: 150000,
  },
  {
    id: "pol-1005",
    policyName: "Travel Shield",
    policyNumber: "TS-005",
    policyProvider: "AXA Insurance",
    policyType: "Travel",
    policyEndDate: "2025-08-08",
    balanceAmount: 300,
    coverageAmount: 10000,
  },
  {
    id: "pol-1006",
    policyName: "Family Health Plan",
    policyNumber: "FH-006",
    policyProvider: "United Healthcare",
    policyType: "Health",
    policyEndDate: "2028-03-12",
    balanceAmount: 7500,
    coverageAmount: 200000,
  },
  {
    id: "pol-1007",
    policyName: "Business Liability Cover",
    policyNumber: "BL-007",
    policyProvider: "Nationwide Insurance",
    policyType: "Business",
    policyEndDate: "2026-09-30",
    balanceAmount: 4500,
    coverageAmount: 300000,
  },
  {
    id: "pol-1008",
    policyName: "Senior Life Plan",
    policyNumber: "SL-008",
    policyProvider: "MetLife",
    policyType: "Life",
    policyEndDate: "2035-04-18",
    balanceAmount: 10000,
    coverageAmount: 400000,
  },
  {
    id: "pol-1009",
    policyName: "Pet Care Policy",
    policyNumber: "PC-009",
    policyProvider: "PetSecure",
    policyType: "Pet",
    policyEndDate: "2026-07-21",
    balanceAmount: 200,
    coverageAmount: 8000,
  },
  {
    id: "pol-1010",
    policyName: "Student Travel Insurance",
    policyNumber: "ST-010",
    policyProvider: "Travel Guard",
    policyType: "Travel",
    policyEndDate: "2025-12-01",
    balanceAmount: 100,
    coverageAmount: 15000,
  },
  {
    id: "pol-1011",
    policyName: "Comprehensive Car Plan",
    policyNumber: "CC-011",
    policyProvider: "Geico",
    policyType: "Auto",
    policyEndDate: "2026-02-17",
    balanceAmount: 2200,
    coverageAmount: 60000,
  },
  {
    id: "pol-1012",
    policyName: "Term Life Policy",
    policyNumber: "TL-012",
    policyProvider: "Prudential",
    policyType: "Life",
    policyEndDate: "2032-09-09",
    balanceAmount: 18000,
    coverageAmount: 500000,
  },
  {
    id: "pol-1013",
    policyName: "Mortgage Protect Plan",
    policyNumber: "MP-013",
    policyProvider: "Liberty Mutual",
    policyType: "Home",
    policyEndDate: "2029-11-11",
    balanceAmount: 500,
    coverageAmount: 200000,
  },
  {
    id: "pol-1014",
    policyName: "Critical Illness Cover",
    policyNumber: "CI-014",
    policyProvider: "Cigna",
    policyType: "Health",
    policyEndDate: "2027-05-23",
    balanceAmount: 3500,
    coverageAmount: 120000,
  },
  {
    id: "pol-1015",
    policyName: "Luxury Home Policy",
    policyNumber: "LH-015",
    policyProvider: "Chubb Insurance",
    policyType: "Home",
    policyEndDate: "2030-10-30",
    balanceAmount: 1000,
    coverageAmount: 500000,
  },
  {
    id: "pol-1016",
    policyName: "Young Driver Cover",
    policyNumber: "YD-016",
    policyProvider: "Progressive",
    policyType: "Auto",
    policyEndDate: "2026-06-14",
    balanceAmount: 900,
    coverageAmount: 40000,
  },
  {
    id: "pol-1017",
    policyName: "Cancer Care Policy",
    policyNumber: "CC-017",
    policyProvider: "Aflac",
    policyType: "Health",
    policyEndDate: "2028-04-02",
    balanceAmount: 6000,
    coverageAmount: 250000,
  },
  {
    id: "pol-1018",
    policyName: "Accidental Death Cover",
    policyNumber: "AD-018",
    policyProvider: "Guardian Life",
    policyType: "Life",
    policyEndDate: "2031-01-25",
    balanceAmount: 7500,
    coverageAmount: 350000,
  }
];

export const columns: ColumnDef<InsuranceItem>[] = [
  {
    accessorKey: "policyName",
    header: "POLICY NAME",
  },
  {
    accessorKey: "policyNumber",
    header: "POLICY NUMBER",
  },
  {
    accessorKey: "policyProvider",
    header: "POLICY PROVIDER",
  },
  {
    accessorKey: "policyType",
    header: "POLICY TYPE",
  },
  {
    accessorKey: "policyEndDate",
    header: "POLICY END DATE",
  },
  {
    accessorKey: "balanceAmount",
    header: "BALANCE AMOUNT",
    cell: ({ row }) => `$${row.getValue("balanceAmount")}`,
  },
  {
    accessorKey: "coverageAmount",
    header: "COVERAGE AMOUNT",
    cell: ({ row }) => `$${row.getValue("coverageAmount")}`,
  },
];

const Insurance = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">
          Insurances ({data.length})
        </h1>
        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Policy End Date</p>
          <DatePicker className="w-full" />
        </div>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Policy Provider</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Providers</SelectLabel>
                <SelectItem value="blueshield">BlueShield Insurance</SelectItem>
                <SelectItem value="stateauto">State Auto Insurance</SelectItem>
                <SelectItem value="aetna">Aetna Life</SelectItem>
                <SelectItem value="allstate">Allstate Insurance</SelectItem>
                <SelectItem value="axa">AXA Insurance</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 px-4">
          <p className="text-sm font-medium">Policy Type</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Types</SelectLabel>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="life">Life</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
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
              placeholder="Search by Policy Name"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <Button>Add Insurance</Button>
        </div>

        <div className="ml-6">
          <CustomTable
            data={data}
            columns={columns}
            filter={search}
            filterKey="policyName"
          />
        </div>
      </div>
    </div>
  );
};

export default Insurance;
