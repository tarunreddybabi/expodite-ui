import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectFormProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  formLabel: string;
  placeholder: string;
  selectOptions: SelectOption[];
  required?: boolean;
  defaultValue?: string;
  labelColor?: string;
  className?: string;
}

export const CustomSelect = <T extends FieldValues>({
  control,
  name,
  formLabel,
  placeholder,
  selectOptions,
  required = false,
  defaultValue,
  labelColor,
  className,
}: CustomSelectFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel
            className={cn(
              "block mb-2 font-medium",
              labelColor ?? "text-gray-700 dark:text-gray-300"
            )}
            htmlFor={name}
          >
            {formLabel}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>

          <Select
            onValueChange={field.onChange}
            value={field.value || defaultValue}
          >
            <FormControl>
              <SelectTrigger
                className={cn(
                  "h-11 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors",
                  className
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>

            <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              {selectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-500 mt-1" />
        </FormItem>
      )}
    />
  );
};
