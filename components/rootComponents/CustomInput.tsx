import { cn } from "@/lib/utils";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { ReactNode } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
  renderInput?: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
}

export const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
  required = false,
  renderInput,
}: CustomInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>
            {label}
            {required && <span className="text-red-500"> *</span>}
          </FormLabel>
          <FormControl>
            {renderInput ? (
              renderInput(field)
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                required={required}
                {...field}
                className={cn(
                  "h-11 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors",
                  className
                )}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
