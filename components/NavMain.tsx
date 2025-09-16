"use client";

import { type LucideIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <div className="flex items-center group-data-[collapsible=icon]:justify-center px-3 py-2">
          <Image
            src="/expodite.png"
            alt="logo"
            width={32}
            height={32}
            className="min-w-[32px] min-h-[32px] w-8 h-8 object-contain transition-all duration-200 group-data-[collapsible=icon]:w-6 group-data-[collapsible=icon]:h-6"
          />
        </div>

        {items.map((item) => {
          const isActive = pathname.startsWith(item.url);

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 cursor-default hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                )}
              >
                <a href={item.url}>
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>

              {item.items?.length ? (
                <SidebarMenuSub>
                  {item.items.map((subItem) => {
                    const isSubActive = pathname.startsWith(subItem.url);

                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={cn(
                            "px-3 py-1.5 text-sm rounded-md transition-colors",
                            isSubActive
                              ? "bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-300 cursor-default hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                          )}
                        >
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
