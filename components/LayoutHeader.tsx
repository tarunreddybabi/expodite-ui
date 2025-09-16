"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function LayoutHeader() {

  return (
    <div className="flex items-center px-6 py-4 border-b">
      <SidebarTrigger />
    </div>
  );
}
