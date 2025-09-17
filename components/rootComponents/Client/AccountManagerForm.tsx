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
import { CustomInput } from "../CustomInput";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." })
});

export const AccountManagerForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Submitted Contact:", values);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h1>Account Manager</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Account Manager</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <DialogHeader>
                <DialogTitle>Add Account Manager</DialogTitle>
                <DialogDescription>
                  Fill out the details below to add a new account manager.
                </DialogDescription>
              </DialogHeader>

              <div className="gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter First Name"
                  required
                />
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
