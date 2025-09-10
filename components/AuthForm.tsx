"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (type: FormType) => {
  return z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
    fullName:
      type === "sign-up"
        ? z
            .string()
            .min(2, "Full name must be at least 2 characters")
            .max(50, "Full name must be at most 50 characters")
        : z.string().optional(),
  });
};

interface AuthFormProps {
  type: FormType;
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));
      console.log("Form submitted:", values);
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h1 className="text-4xl font-bold text-center mb-6">
              {type === "sign-in" ? "Sign In" : "Sign Up"}
            </h1>

            {type === "sign-up" && (
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="w-full text-lg h-14 px-4 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 mt-1" />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="w-full text-lg h-14 px-4 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 mt-1" />
                </FormItem>
              )}
            />

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-medium"
            >
              {isLoading && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loading"
                  width={24}
                  height={24}
                  className="animate-spin mr-2"
                />
              )}
              {type === "sign-in" ? "Sign In" : "Sign Up"}
            </Button>

            <div className="text-center mt-6">
              <p className="text-gray-600 text-lg">
                {type === "sign-in"
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <Link
                  href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                  className="text-blue-600 font-semibold"
                >
                  {type === "sign-in" ? "Sign Up" : "Sign In"}
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
