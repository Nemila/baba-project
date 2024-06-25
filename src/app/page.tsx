import DiseaseCard from "~/components/disease-card";
import SpecialistCard from "~/components/specialist-card";
import { db } from "~/server/db";

export default async function HomePage() {
  const specialists = await db.specialist.findMany();

  return (
    <main className="flex-1 py-4">
      <div className="container flex flex-col gap-6">
        <section className="space-y-2">
          <h4 className="text-xl font-semibold">Latest Diseases</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <DiseaseCard />
            <DiseaseCard />
            <DiseaseCard />
            <DiseaseCard />
          </div>
        </section>

        <section className="space-y-2">
          <h4 className="text-xl font-semibold">Specialists</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {specialists.length > 0
              ? specialists.map((item) => (
                  <SpecialistCard key={item.id} item={item} />
                ))
              : "Aucun specialiste pour le moment"}
          </div>
        </section>
      </div>
    </main>
  );
}
