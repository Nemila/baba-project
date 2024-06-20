"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const SpecialistEditPage = () => {
  const navigate = useRouter();
  return (
    <div className="flex-1 py-6">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 overflow-hidden rounded-md border bg-white p-6">
        <Button className="self-start" onClick={() => navigate.back()}>
          <ChevronLeft className="mr-2 h-5 w-5" />
          Retour
        </Button>

        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Modifier Votre Profile
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            Les utilisateurs et autres docteurs pourrons voir les informations
            se trouvant sur votre profile. Veuillez ne pas entrer
            d&apos;informations confidentielles ou fausses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Label className="col-span-2 flex flex-col gap-3">
            <span>Specialite</span>
            <Input placeholder="Ecrivez ici..." />
          </Label>

          <div className="col-span-2 grid grid-cols-3 gap-4 rounded-md border p-4">
            <Label className="col-span-3 flex flex-col gap-3 md:col-span-1">
              <span>Address de travail</span>
              <Input placeholder="Ecrivez ici..." />
            </Label>

            <Label className="col-span-3 flex flex-col gap-3 md:col-span-1">
              <span>Longitude</span>
              <Input type="number" placeholder="Ecrivez ici..." />
            </Label>

            <Label className="col-span-3 flex flex-col gap-3 md:col-span-1">
              <span>Latitude</span>
              <Input type="number" placeholder="Ecrivez ici..." />
            </Label>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-4 rounded-md border p-4">
            <Label className="col-span-3 flex flex-col gap-3 md:col-span-1">
              <span>Facebook</span>
              <Input placeholder="Lien du profile" />
            </Label>

            <Label className="col-span-3 flex flex-col gap-3 md:col-span-1">
              <span>Twitter</span>
              <Input placeholder="Lien du profile" />
            </Label>

            <Label className="col-span-3 flex flex-col gap-3 md:col-span-1">
              <span>Instagram</span>
              <Input placeholder="Lien du profile" />
            </Label>
          </div>

          <Label className="col-span-2 flex flex-col gap-3">
            <span>Description</span>
            <Textarea placeholder="Ecrivez ici..."></Textarea>
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

export default SpecialistEditPage;
