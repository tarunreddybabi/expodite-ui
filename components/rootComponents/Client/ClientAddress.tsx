"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
  Form,
} from "@/components/ui";
import { CustomSelect } from "../CustomSelect";
import { CustomInput } from "../CustomInput";

const addressSchema = z.object({
  addressType: z.string().min(1, { message: "Please select an address type." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  address1: z.string().min(1, { message: "Address line 1 is required." }),
  address2: z.string().optional(),
  address3: z.string().optional(),
  address4: z.string().optional(),
  country: z.string().min(1, { message: "Country is required." }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  postalCode: z.string().min(1, { message: "Postal code is required." }),
  additionalInfo: z.string().optional(),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export const AddAddressDialog = () => {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      addressType: "",
      companyName: "",
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (values: AddressFormValues) => {
    console.log("Submitted Address:", values);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Address</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <DialogHeader>
              <DialogTitle>Add Address</DialogTitle>
              <DialogDescription>
                Fill out the details below to add a new address.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomSelect
                control={form.control}
                name="addressType"
                formLabel="Address Type"
                placeholder="Select Address Type"
                selectOptions={[
                  { value: "home", label: "Home" },
                  { value: "office", label: "Office" },
                  { value: "other", label: "Other" },
                ]}
                required
                className="w-full"
              />
              <CustomInput
                control={form.control}
                name="companyName"
                label="Company Name"
                placeholder="e.g. OpenAI"
                required
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["address1", "address2", "address3", "address4"].map(
                (field, idx) => (
                  <CustomInput
                    key={field}
                    control={form.control}
                    name={field as keyof AddressFormValues}
                    label={`Address ${idx + 1}`}
                    placeholder={`Enter Address ${idx + 1}`}
                    required={field === "address1"}
                  />
                )
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomSelect
                control={form.control}
                name="country"
                formLabel="Country"
                placeholder="Select Country"
                selectOptions={[
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "in", label: "India" },
                  { value: "de", label: "Germany" },
                  { value: "jp", label: "Japan" },
                ]}
                required
                className="w-full"
              />

              <CustomSelect
                control={form.control}
                name="state"
                formLabel="State"
                placeholder="Select State"
                selectOptions={[
                  { value: "ca", label: "California" },
                  { value: "ny", label: "New York" },
                  { value: "tx", label: "Texas" },
                  { value: "mh", label: "Maharashtra" },
                  { value: "ka", label: "Karnataka" },
                ]}
                required
                className="w-full"
              />

              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter City"
                required
              />
              <CustomInput
                control={form.control}
                name="postalCode"
                label="Postal Code"
                placeholder="Enter Postal Code"
                required
              />
            </div>

            <CustomInput
              control={form.control}
              name="additionalInfo"
              label="Additional Info"
              placeholder="Enter any additional details"
            />

            <DialogFooter className="flex justify-end gap-4 mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save Address</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
