/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { cn } from "~/lib/utils";

type Props = {
  children: any;
  className?: string;
};

const SubmitButton = ({ children, className }: Props) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn("btn btn-primary", className)}
      disabled={pending}
    >
      {!pending ? children : "Loading"}
      {pending && <Loader2 className="ml-4 h-4 w-4 animate-spin" />}
    </button>
  );
};

export default SubmitButton;
