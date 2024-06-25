"use client";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Prisma } from "@prisma/client";
import { Ban, Check, Loader2, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { cancelAppointment, confirmAppointment } from "~/lib/actions";
import { type Roles } from "~/types/globals";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  meetingLink: z.string().url(),
  meetingTime: z.string(),
});

type Props = {
  appointment: Prisma.AppointmentGetPayload<{
    include: {
      specialist: true;
    };
  }>;
};

const AppointmentCardActionButton = ({ appointment }: Props) => {
  const { user } = useUser();

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [validationModalOpen, setValdiationModalOpen] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await confirmAppointment({ ...values, appointmentId: appointment.id });

      toast({
        title: "Meeting Confirmer",
        description: new Date().toDateString(),
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Un probleme est survenu",
        variant: "destructive",
      });
    }
  }

  async function handleCancel() {
    try {
      await cancelAppointment(appointment.id);
      toast({
        title: "Consultation annulee",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Un probleme est survenu",
        variant: "destructive",
      });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="shrink-0">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {(user?.publicMetadata?.role as Roles) === "specialist" &&
          appointment.status === "scheduled" && (
            <DropdownMenuItem
              onClick={() => setValdiationModalOpen((prev) => !prev)}
            >
              <Check className="mr-2 h-4 w-4" />
              Valider
            </DropdownMenuItem>
          )}

        {appointment.status !== "cancelled" &&
          appointment.status !== "completed" && (
            <DropdownMenuItem
              onClick={() => setCancelModalOpen((prev) => !prev)}
            >
              <Ban className="mr-2 h-4 w-4" />
              Annuler
            </DropdownMenuItem>
          )}
      </DropdownMenuContent>

      <Dialog
        onOpenChange={(value) => setValdiationModalOpen(value)}
        open={validationModalOpen}
        defaultOpen={false}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Validation du rendez-vous</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="meetingLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lien du meeting</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Example: https://meet.google.com/qvg-tcfp-dty"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Creez un{" "}
                      <a
                        href="https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        meeting google
                      </a>
                      , et ajoutez le lien ici
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="meetingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heure du meeting</FormLabel>
                    <FormControl>
                      <Input {...field} type="time" />
                    </FormControl>
                    <FormDescription>
                      Le patient recevra un message lui informant de la
                      confirmation du rendez-vous.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={form.formState.isSubmitting} type="submit">
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        onOpenChange={(value) => setCancelModalOpen(value)}
        open={cancelModalOpen}
        defaultOpen={false}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Etes vous absolument sur?</AlertDialogTitle>
            <AlertDialogDescription>
              Etes vous sur de vouloir annuler ce rendez-vous? L&apos;annulation
              a repetition des rendez-vous peut conduire a des sanctions graves.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Retour</AlertDialogCancel>
            <AlertDialogAction onClick={handleCancel}>
              Je Suis Sur
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};

export default AppointmentCardActionButton;
