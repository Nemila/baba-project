import DiseaseCard from "~/components/disease-card";
import SpecialistCard from "~/components/specialist-card";
import { db } from "~/server/db";

export default async function HomePage() {
  const specialists = await db.specialist.findMany();

  return (
    <main className="flex-1 py-4">
      <div className="container flex flex-col gap-6">
        <section className="space-y-2">
          <h4 className="text-xl font-semibold">Maladies recentes</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <DiseaseCard
              href="meningite"
              description="La méningite est une infection des méninges, les membranes entourant le cerveau et la moelle épinière. Elle peut être causée par des virus, des bactéries ou des champignons."
              danger="Tres Dangereux"
            />
            <DiseaseCard
              href="corona"
              description="La COVID-19 est une infection respiratoire provoquée par le coronavirus SARS-CoV-2, apparu en Chine à partir de chauve-souris infectées. Les symptômes incluent fatigue, fièvre, toux, difficultés respiratoires, ainsi que des symptômes non spécifiques comme courbatures, mal de gorge, et parfois des troubles gastro-intestinaux. Les formes sévères peuvent entraîner des complications respiratoires graves nécessitant une hospitalisation, voire une assistance respiratoire."
              danger="Tres Dangereux"
            />
          </div>
        </section>

        <section className="space-y-2">
          <h4 className="text-xl font-semibold">Spécialistes</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {specialists.length > 0
              ? specialists.map((item) => (
                  <SpecialistCard key={item.id} item={item} />
                ))
              : "Aucun spécialiste pour le moment."}
          </div>
        </section>
      </div>
    </main>
  );
}
