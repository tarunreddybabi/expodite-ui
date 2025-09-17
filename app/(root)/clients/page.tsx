"use client";

import React from "react";
import { FileSpreadsheet, Plus, Search } from "lucide-react";

import {
  Button,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import {
  AccountManagerForm,
  ContactForm,
  DetailsForm,
} from "@/components/rootComponents/Client";

const Clients = () => {
  const [search, setSearch] = React.useState("");
  const [selectedClient, setSelectedClient] = React.useState<string | null>(null);

  const clients = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Williams",
    "Eva Taylor",
  ];

  const filteredClients = clients.filter((client) =>
    client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full flex flex-col space-y-4">
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h1 className="text-lg font-semibold">Clients ({clients.length})</h1>
          <div className="flex space-x-2">
            <Button
              className="w-9 h-9 rounded-full flex items-center justify-center"
              aria-label="Add client"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <Button
              className="w-9 h-9 rounded-full flex items-center justify-center"
              aria-label="Import Excel"
            >
              <FileSpreadsheet className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative px-4">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <Input
            type="text"
            className="pl-10 w-full h-10"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <div className="flex flex-col px-4 space-y-2 overflow-y-auto">
          {filteredClients.map((client, index) => (
            <Button
              key={index}
              variant={selectedClient === client ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setSelectedClient(client)}
            >
              {client}
            </Button>
          ))}
        </div>
      </div>

      <div className="w-[82%] flex flex-col">
        <div className="flex px-6 py-4 border-b mb-2 justify-between items-center">
          <h1 className="text-lg font-medium">
            {selectedClient ? selectedClient : "Select a client"}
          </h1>
        </div>

        <div>
          <Tabs defaultValue="details" className="w-full">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="accountManager">Account Manager</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="px-6 py-4 pt-4">
              <DetailsForm />
            </TabsContent>
            <TabsContent value="contact" className="px-6 py-4 pt-4">
              <ContactForm />
            </TabsContent>
            <TabsContent value="accountManager" className="px-6 py-4 pt-4">
              <AccountManagerForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Clients;
