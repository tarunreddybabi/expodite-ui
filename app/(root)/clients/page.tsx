"use client";

import React from "react";
import { FileSpreadsheet, Plus, Search } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Form,
  DialogTitle,
  DialogDescription,
} from "@/components/ui";
import {
  AccountManagerForm,
  ContactForm,
  DetailsForm,
} from "@/components/rootComponents/Client";
import { CustomInput } from "@/components/rootComponents/CustomInput";
import { CustomSelect } from "@/components/rootComponents/CustomSelect";
import { FileUpload } from "@/components/rootComponents/CustomUpload";

const clients = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Williams",
  "Eva Taylor",
];
const formSchema = z.object({
  organizationName: z
    .string()
    .min(2, { message: "Organization name must be at least 2 characters." }),
  website: z.string().url({ message: "Please enter a valid website URL." }),
  status: z.string().min(1, { message: "Please select a status." }),
  destinationCountry: z
    .string()
    .min(1, { message: "Please select a destination country." }),
  clientCode: z
    .string()
    .min(2, { message: "Client code must be at least 2 characters." }),
  portofLoading: z
    .string()
    .min(2, { message: "Port of loading must be at least 2 characters." }),
  portofDischarge: z
    .string()
    .min(2, { message: "Port of discharge must be at least 2 characters." }),
  cityofFinalDestination: z.string().min(2, {
    message: "City of final destination must be at least 2 characters.",
  }),
  endUseCode: z.string().min(1, { message: "Please select an end use code." }),
  currency: z.string().min(1, { message: "Please select a currency." }),
});

const Clients = () => {
  const [search, setSearch] = React.useState("");
  const [selectedClient, setSelectedClient] = React.useState<string | null>(
    clients.length > 0 ? clients[0] : null
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      website: "",
      status: "",
      destinationCountry: "",
      clientCode: "",
      portofLoading: "",
      portofDischarge: "",
      cityofFinalDestination: "",
      endUseCode: "",
      currency: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  const filteredClients = clients.filter((client) =>
    client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-full">
      <div className="w-[18%] border-r h-full flex flex-col space-y-4">
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h1 className="text-lg font-semibold">Clients ({clients.length})</h1>
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  aria-label="Add client"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-none">
              <DialogTitle>Add New Client</DialogTitle>
              <DialogDescription>
                Fill out the details below to create a new client.
              </DialogDescription>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomInput
                        control={form.control}
                        name="organizationName"
                        label="Organization Name"
                        placeholder="e.g. OpenAI"
                        required
                      />
                      <CustomInput
                        control={form.control}
                        name="website"
                        label="Website URL"
                        placeholder="https://example.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomSelect
                        control={form.control}
                        name="status"
                        formLabel="Status"
                        placeholder="Select status"
                        selectOptions={[
                          { value: "active", label: "Active" },
                          { value: "inactive", label: "Inactive" },
                        ]}
                        required
                        className="w-full"
                      />
                      <CustomSelect
                        control={form.control}
                        name="destinationCountry"
                        formLabel="Country of Final Destination"
                        placeholder="Select a country"
                        selectOptions={[
                          { value: "us", label: "United States" },
                          { value: "uk", label: "United Kingdom" },
                          { value: "de", label: "Germany" },
                          { value: "in", label: "India" },
                          { value: "jp", label: "Japan" },
                        ]}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomInput
                        control={form.control}
                        name="clientCode"
                        label="Client Code"
                        placeholder="e.g. CL12345"
                        required
                      />
                      <CustomInput
                        control={form.control}
                        name="portofLoading"
                        label="Port of Loading"
                        placeholder="e.g. Shanghai Port"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomInput
                        control={form.control}
                        name="portofDischarge"
                        label="Port of Discharge"
                        placeholder="e.g. Los Angeles Port"
                        required
                      />
                      <CustomInput
                        control={form.control}
                        name="cityofFinalDestination"
                        label="City of Final Destination"
                        placeholder="e.g. Los Angeles"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomSelect
                        control={form.control}
                        name="endUseCode"
                        formLabel="End Use Code"
                        placeholder="Select end use code"
                        selectOptions={[
                          { value: "personal", label: "Personal" },
                          { value: "commercial", label: "Commercial" },
                          { value: "government", label: "Government" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                        className="w-full"
                      />
                      <CustomSelect
                        control={form.control}
                        name="currency"
                        formLabel="Currency"
                        placeholder="Select currency"
                        selectOptions={[
                          { value: "usd", label: "USD - US Dollar" },
                          { value: "eur", label: "EUR - Euro" },
                          { value: "gbp", label: "GBP - British Pound" },
                          { value: "inr", label: "INR - Indian Rupee" },
                          { value: "jpy", label: "JPY - Japanese Yen" },
                        ]}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 font-medium">Upload Logo</h3>
                      <FileUpload onChange={(file) => console.log(file)} />
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit">Submit</Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
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
