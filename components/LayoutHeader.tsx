"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function LayoutHeader() {
  const pathname = usePathname();

  const routeName =
    pathname
      .split("/")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" / ") || "Home";

  return (
    <div className="flex items-center px-6 py-4 border-b">
      <SidebarTrigger />
      {/* <h1 className="text-lg font-semibold ml-2">Overview of {routeName}</h1> */}
    </div>
  );
}
