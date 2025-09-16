"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export function LayoutHeader() {

  return (
    <div className="flex items-center px-6 py-4 border-b">
      <SidebarTrigger />
    </div>
  );
}
