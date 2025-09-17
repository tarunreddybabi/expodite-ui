"use client";

import { AddAddressDialog } from "./ClientAddress";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Form } from "@/components/ui";
import { CustomInput } from "../CustomInput";
import { CustomSelect } from "../CustomSelect";
import { FileUpload } from "../CustomUpload";

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
export const DetailsForm = () => {
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

  const formReset = () => form.reset();
  return (
    <div className="space-y-8">
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Client Details
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <Button
                variant="outline"
                onClick={formReset}
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
              >
                Cancel
              </Button>

              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-medium">Address Details</h2>
        <AddAddressDialog />
      </div>
    </div>
  );
};
