import { Search } from "lucide-react";
import SpecialistCard from "~/components/specialist-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { db } from "~/server/db";

const SpecialistsPage = async () => {
  const specialist = await db.specialist.findMany();

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
          placeholder="Annees d'experience min"
          className="flex-1"
        />
        <Input type="number" min={1} placeholder="Note" className="flex-1" />
        <Button className="flex-1">Chercher</Button>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Liste des specialists
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {specialist.map((item) => (
          <SpecialistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsPage;
