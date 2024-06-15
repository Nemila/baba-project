import DiseaseCard from "~/components/disease-card";
import SpecialistCard from "~/components/specialist-card";

export default async function HomePage() {
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
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
            <SpecialistCard />
          </div>
        </section>
      </div>
    </main>
  );
}
