"use client";
import { Ban, Check, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";
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
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const AppointmentCardActionButton = () => {
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [validationModalOpen, setValdiationModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="shrink-0">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setValdiationModalOpen((prev) => !prev)}
        >
          <Check className="mr-2 h-4 w-4" />
          Valider
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCancelModalOpen((prev) => !prev)}>
          <Ban className="mr-2 h-4 w-4" />
          Annuler
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDeleteModalOpen((prev) => !prev)}>
          <Trash className="mr-2 h-4 w-4" />
          Effacer
        </DropdownMenuItem>
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

          <div className="flex flex-col gap-4">
            {/* https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1 */}

            {/* test 
Wednesday, June 19 · 7:08 – 7:23pm
Time zone: Africa/Abidjan
Google Meet joining info
Video call link: https://meet.google.com/qvg-tcfp-dty */}

            <Label className="flex flex-col gap-2">
              <span>Heure de la rencontre</span>
              <Input type="time" />
              <p className="text-xs font-normal">
                Le patient recevra un message lui informant de la validation du
                rendez-vous.
              </p>
            </Label>

            <Button>Confirmer</Button>
          </div>
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
            <AlertDialogAction>Je Suis Sur</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        onOpenChange={(value) => setDeleteModalOpen(value)}
        open={deleteModalOpen}
        defaultOpen={false}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Etes vous absolument sur?</AlertDialogTitle>
            <AlertDialogDescription>
              Etes vous sur de vouloir effacer ce rendez-vous? Cette action ne
              peut pas etre effectuee si le rendez-vous est en attente ou
              confirme. Vous devez d&apos;abord annuler ou finir le rendez-vous.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Retour</AlertDialogCancel>
            <AlertDialogAction>Je Suis Sur</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};

export default AppointmentCardActionButton;
