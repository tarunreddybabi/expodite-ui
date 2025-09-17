import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onChange: (file: File | null) => void;
  className?: string;
}

export const FileUpload = ({ onChange, className }: FileUploadProps) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFileName(file?.name ?? "");
    onChange(file);
  };

  return (
    <label
      className={cn(
        "w-40 h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-gray-500 dark:hover:border-gray-400 transition-colors",
        className
      )}
    >
      <span className="text-gray-500 dark:text-gray-400 text-center text-sm">
        Drag & drop or click to upload
      </span>
      {fileName && (
        <span className="mt-2 text-sm text-gray-700 dark:text-gray-200 truncate max-w-full text-center">
          {fileName}
        </span>
      )}
      <Input
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />
    </label>
  );
};
