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
          placeholder="Annees de publication"
          className="flex-1"
        />

        <Select>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Niveau de danger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Button className="flex-1">Chercher</Button>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Liste des maladies
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
      </div>
    </div>
  );
};

export default DiseasesPage;
