"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "~/components/ui/button";

type Props = ButtonProps;

const SubmitButton = ({ children, ...rest }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...rest} disabled={pending}>
      {!pending ? children : "Loading"}
      {pending && <Loader2 className="ml-4 h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default SubmitButton;
