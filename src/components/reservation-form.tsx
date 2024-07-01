"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import * as z from "zod";
import { createAppointment } from "~/lib/actions";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";
import { useToast } from "./ui/use-toast";

type Props = {
  specialistId: number;
  patientClerkId: string;
  children: React.ReactElement;
};

const formSchema = z.object({
  date: z.coerce.date(),
});

const ReservationForm = ({ specialistId, patientClerkId, children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await createAppointment({
        date: values.date,
        specialistId,
        patientClerkId,
      });
      toast({
        title: "Done",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
    console.log(values);
  };
  return (
    <div className="flex flex-col gap-4">
      {children}

      <AutoForm
        formSchema={formSchema}
        fieldConfig={{
          date: {
            label: "Date de rendez-vous",
          },
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          contentEditable={false}
          name="specialistId"
          value={specialistId}
        />

        <input
          type="hidden"
          contentEditable={false}
          name="patientClerkId"
          value={patientClerkId}
        />

        <AutoFormSubmit className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Valider
        </AutoFormSubmit>
      </AutoForm>
    </div>
  );
};

export default ReservationForm;
