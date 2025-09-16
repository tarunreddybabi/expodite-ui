"use client";

import React from "react";
import { Search } from "lucide-react";

import {
  AccountManagerForm,
  Button,
  ContactForm,
  DetailsForm,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components";

const Clients = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full space-y-4">
        <h1 className="text-xl font-semibold border-b p-6 pb-3">Clients (5)</h1>

        <div className="relative w-[96%] pl-4">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <Input
            type="text"
            className="pl-8 w-full h-10"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <Button></Button>
      </div>

      <div className="w-[82%]">
        <div className="flex p-5 border-b mb-2 justify-between items-center">
          <h1>Clients header</h1>
        </div>
        <div>
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="accountManager">Account Manager</TabsTrigger>
            </TabsList>
            <TabsContent className="ml-4" value="details">
              <DetailsForm />
            </TabsContent>
            <TabsContent className="ml-4" value="contact">
              <ContactForm />
            </TabsContent>
            <TabsContent className="ml-4" value="accountManager">
              <AccountManagerForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Clients;
