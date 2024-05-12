"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "~/components/ui/button";

const SubmitButton = ({ children }: { children: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {children}
      {pending && <Loader2 className="ml-4 h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default SubmitButton;
