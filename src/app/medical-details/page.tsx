import React from "react";
import { DatePicker } from "~/components/date-picker";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>;

const MedicalDetailsPage = () => {
  return (
    <div className="flex-1 py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 overflow-hidden rounded-md bg-white p-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Fiche Medical
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            Les docteurs utiliseront les informations que vous aurez renseigne
            ici pour mieux comprendre votre sante avant de vous rencontrer.
            Assurez vous de rensignez des informations valides.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Label className="flex flex-col gap-2">
            <span>Nom Complet</span>
            <Input placeholder="Ecrivez ici..." />
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Date de naissance</span>
            <DatePicker />
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Genre</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selectionez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Homme</SelectItem>
                <SelectItem value="female">Femme</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Numero de telephone</span>
            <Input placeholder="Ecrivez ici..." />
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Est ce que vous fumez?</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selectionez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="non">Non</SelectItem>
                <SelectItem value="oui">Oui</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Est ce que vous buvez?</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selectionez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="non">Non</SelectItem>
                <SelectItem value="oui">Oui</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Pratiquez vous du sport?</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selectionez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="non">Non</SelectItem>
                <SelectItem value="oui">Oui</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Avez vous deja ete hospitalise?</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selectionez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="non">Non</SelectItem>
                <SelectItem value="oui">Oui</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Avez vous des allergies?</span>
            <Textarea placeholder="Decrivez vos allergies si vous en avez..."></Textarea>
          </Label>

          <Label className="flex flex-col gap-2">
            <span>Avez vous des conditions chroniques ?</span>
            <Textarea placeholder="Exemple: Diabetes, hypertension etc..."></Textarea>
          </Label>

          <div className="col-span-2 space-y-4">
            <p>
              Vous pourrez modifier les informations sur cette page a
              n&apos;importe quel moment.
            </p>

            <Button>Enregister Informations</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDetailsPage;