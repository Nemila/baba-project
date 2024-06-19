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

const MedicalDetailsPage = async () => {
  return (
    <div className="flex-1 py-6">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 overflow-hidden rounded-md border bg-white p-6">
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

        <div className="grid grid-cols-2 gap-6">
          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span>Nom Complet</span>
            <Input placeholder="Ecrivez ici..." />
          </Label>

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span>Date de naissance</span>
            <DatePicker limit={false} />
          </Label>

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
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

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span>Numero de telephone</span>
            <Input placeholder="Ecrivez ici..." />
          </Label>

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
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

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
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

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
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

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
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

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span>Avez vous des allergies?</span>
            <Textarea placeholder="Decrivez vos allergies si vous en avez..."></Textarea>
          </Label>

          <Label className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span>Avez vous des conditions chroniques ?</span>
            <Textarea placeholder="Exemple: Diabetes, hypertension etc..."></Textarea>
          </Label>

          <div className="col-span-2 space-y-3">
            <p className="text-sm">
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
