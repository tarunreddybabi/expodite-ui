"use client";

import React from "react";
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
  Input,
  Label,
} from "@/components/ui";

import { CustomSelect } from "./CustomSelect";
import { Form } from "../ui";

type AddressFormValues = {
  addressType: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  additionalInfo: string;
};

export const AddAddressDialog = () => {
  const form = useForm<AddressFormValues>({
    defaultValues: {
      addressType: "",
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
    console.log(values);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Address</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Add Address</DialogTitle>
              <DialogDescription>
                Fill out the details below to add a new address.
              </DialogDescription>
            </DialogHeader>

            <div >
              <Label htmlFor="addressType">Address Type</Label>
              <CustomSelect
                control={form.control}
                name="addressType"
                formLabel=""
                placeholder="Select Address Type"
                selectOptions={[
                  { value: "home", label: "Home" },
                  { value: "office", label: "Office" },
                  { value: "other", label: "Other" },
                ]}
                required
                className="w-[50%]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["address1", "address2", "address3", "address4"].map(
                (field, idx) => (
                  <div className="grid gap-2" key={field}>
                    <Label htmlFor={field}>{`Address ${idx + 1}`}</Label>
                    <Input
                      id={field}
                      {...form.register(field as keyof AddressFormValues)}
                      placeholder={`Enter Address ${idx + 1}`}
                    />
                  </div>
                )
              )}
            </div>

            {[
              { name: "country", placeholder: "Enter Country" },
              { name: "state", placeholder: "Enter State" },
              { name: "city", placeholder: "Enter City" },
              { name: "postalCode", placeholder: "Enter Postal Code" },
            ].map((field) => (
              <div className="grid gap-2" key={field.name}>
                <Label htmlFor={field.name}>
                  {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </Label>
                <Input
                  id={field.name}
                  {...form.register(field.name as keyof AddressFormValues)}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            {/* Additional Info - Rich Text Editor */}
            <div className="grid gap-2">
              <Label htmlFor="additionalInfo">Additional Info</Label>
            </div>

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
