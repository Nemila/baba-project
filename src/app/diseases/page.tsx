import { Search } from "lucide-react";
import DiseaseCard from "~/components/disease-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const DiseasesPage = async () => {
  return (
    <div className="container flex flex-1 flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 shrink-0 -translate-y-1/2" />
          <Input type="text" placeholder="Recherche" className="pl-9" />
        </div>
        <Input
          type="number"
          min={1}
          placeholder="Année de publication"
          className="flex-1"
        />

        <Select>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Niveau de danger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">Elévée</SelectItem>
            <SelectItem value="medium">Moyen</SelectItem>
            <SelectItem value="low">Bas</SelectItem>
          </SelectContent>
        </Select>

        <Button className="flex-1">Chercher</Button>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Liste des maladies
        </h3>
        <p>
          Retrouvez ici des maladies, ainsi que plusieurs informations utiles.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DiseaseCard
          href="meningite"
          description="La méningite est une infection des méninges, les membranes entourant le cerveau et la moelle épinière. Elle peut être causée par des virus, des bactéries ou des champignons."
          danger="Très Dangereux"
        />
        <DiseaseCard
          href="corona"
          description="La COVID-19 est une infection respiratoire provoquée par le coronavirus SARS-CoV-2, apparu en Chine à partir de chauve-souris infectées. Les symptômes incluent fatigue, fièvre, toux, difficultés respiratoires, ainsi que des symptômes non spécifiques comme courbatures, mal de gorge, et parfois des troubles gastro-intestinaux. Les formes sévères peuvent entraîner des complications respiratoires graves nécessitant une hospitalisation, voire une assistance respiratoire."
          danger="Très Dangereux"
        />
      </div>
    </div>
  );
};

export default DiseasesPage;
