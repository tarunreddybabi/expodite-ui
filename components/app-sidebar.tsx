"use client"

import * as React from "react"
import {
  Home,
  FileText,
  ShoppingCart,
  Truck,
  CreditCard,
  FileSignature,
  Boxes,
  ShieldCheck,
  Repeat,
  Landmark,
  BadgeDollarSign,
  Users,
  Banknote,
  Factory,
  Settings,
  BarChart2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Expodite",
    email: "admin@expodite.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Overview", url: "/overview", icon: Home },
    { title: "Quotations", url: "/quotations", icon: FileText },
    { title: "Orders", url: "/orders", icon: ShoppingCart },
    { title: "Shipments", url: "/shipments", icon: Truck },
    { title: "Payments", url: "/payments", icon: CreditCard },
    { title: "PO", url: "/purchase-orders", icon: FileSignature },
    { title: "Inventory", url: "/inventory", icon: Boxes },
    { title: "Insurance", url: "/insurance", icon: ShieldCheck },
    { title: "Forward Contract", url: "/forward-contract", icon: Repeat },
    { title: "EPCG", url: "/epcg", icon: Landmark },
    { title: "Advance License", url: "/advance-license", icon: BadgeDollarSign },
    { title: "Clients", url: "/clients", icon: Users },
    { title: "Bank Guarantee", url: "/bank-guarantee", icon: Banknote },
    { title: "Vendors", url: "/vendors", icon: Factory },
    { title: "Admin", url: "/admin", icon: Settings },
    { title: "Reports", url: "/reports", icon: BarChart2 },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
