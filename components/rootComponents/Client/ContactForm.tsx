"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { CustomSelect } from "../CustomSelect";
import { CustomInput } from "../CustomInput";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  contactType: z.string().min(1, { message: "Please select a contact type." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(7, { message: "Phone number is required." }),
  ext: z.string().optional(),
  giveUserAccess: z.boolean().optional(),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactType: "",
      email: "",
      phoneNumber: "",
      ext: "",
      giveUserAccess: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Submitted Contact:", values);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h1>Contacts</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Contact</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <DialogHeader>
                <DialogTitle>Add Contact</DialogTitle>
                <DialogDescription>
                  Fill out the details below to add a new contact.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter First Name"
                  required
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  required
                />
              </div>

              <CustomSelect
                control={form.control}
                name="contactType"
                formLabel="Select Contact"
                placeholder="Select Contact"
                selectOptions={[
                  { value: "client", label: "Client" },
                  { value: "vendor", label: "Vendor" },
                  { value: "partner", label: "Partner" },
                ]}
                required
                className="w-full"
              />

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter Email"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  control={form.control}
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  required
                />
                <CustomInput
                  control={form.control}
                  name="ext"
                  label="Ext"
                  placeholder="Enter Ext"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="giveUserAccess"
                  {...form.register("giveUserAccess")}
                />
                <label htmlFor="giveUserAccess" className="text-sm font-medium">
                  Give User Access
                </label>
              </div>

              <DialogFooter className="flex justify-end gap-4 mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save Contact</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
