import DiseaseCard from "~/components/disease-card";
import SpecialistCard from "~/components/specialist-card";
import { db } from "~/server/db";

export default async function HomePage() {
  const specialists = await db.specialist.findMany({
    take: 4,
  });

  return (
    <main className="flex flex-col gap-4">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-primary sm:block">
                Increase Conversion.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="btn btn-primary btn-wide" href="#">
                Get Started
              </a>

              <a className="btn btn-outline btn-wide" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container flex flex-col gap-14 px-4 py-16">
        <section className="flex flex-col gap-4">
          <header className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Latest Diseases</h4>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              iste, maxime incidunt.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <DiseaseCard />
            <DiseaseCard />
            <DiseaseCard />
            <DiseaseCard />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <header className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Specialists</h4>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              iste, maxime incidunt.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ...specialists,
              ...specialists,
              ...specialists,
              ...specialists,
            ].map((item, index) => (
              <SpecialistCard data={item} key={item.id + index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
